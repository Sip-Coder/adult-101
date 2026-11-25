import type { Metadata } from "next";
import { signInDemo, signInWithApple, signInWithGoogle } from "@/lib/auth-actions";
import { isDemoOffered, isSupabaseConfigured } from "@/lib/env";
import { safeNext } from "@/lib/safe-next";
import { getViewer } from "@/lib/viewer";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Free Adult 101 accounts use Google or Apple. No password.",
};

const errors: Record<string, string> = {
  "not-configured":
    "Google and Apple sign-in are not configured yet. Add the Supabase project and OAuth clients from the README, then restart the app.",
  provider: "The sign-in provider did not return a link. Check the Google or Apple settings in Supabase and try again.",
  callback: "Sign-in did not finish. You can try again, or keep reading without an account.",
  "demo-off": "The local demo learner is turned off. Set NEXT_PUBLIC_DEMO_MODE=true or configure Supabase.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const query = await searchParams;
  const configured = isSupabaseConfigured();
  const demo = isDemoOffered();
  const viewer = await getViewer();
  const nextPath = safeNext(query.next ?? null);
  const error = query.error ? errors[query.error] : undefined;

  return (
    <article className="wrap page-hero">
      <div className="login-card" style={{ maxWidth: 640, margin: "0 auto" }}>
        <p className="kicker">Free account</p>
        <h1>Sign in without a password.</h1>
        <p className="lede">
          Google or Apple is the whole login. Your lessons completed and bookmarks stay private to
          that account. You can read everything on the site without signing in.
        </p>

        {error ? <p className="status">{error}</p> : null}

        {configured ? (
          <p className="status ok">Google and Apple sign-in are connected for this environment.</p>
        ) : (
          <p className="status">
            <strong>Not configured yet. </strong>
            The buttons below stay visible so you can see where sign-in will live. They turn on after
            a Supabase project, a Google OAuth client, and an Apple Services ID are added. The README
            lists each step. Nothing here asks you for a password.
          </p>
        )}

        {viewer.kind === "account" ? (
          <p>
            You are signed in as {viewer.name}.{" "}
            <a className="ghost-link" href="/progress">
              Go to your progress.
            </a>
          </p>
        ) : null}
        {viewer.kind === "demo" ? (
          <p>
            You are using the demo learner in this browser.{" "}
            <a className="ghost-link" href="/progress">
              See demo progress.
            </a>
          </p>
        ) : null}

        <div className="provider-list">
          <form action={signInWithGoogle}>
            <input type="hidden" name="next" value={nextPath} />
            <button className="provider" type="submit" disabled={!configured}>
              <span>Continue with Google</span>
              {configured ? null : <span className="btn-note">Not configured yet</span>}
            </button>
          </form>
          <form action={signInWithApple}>
            <input type="hidden" name="next" value={nextPath} />
            <button className="provider" type="submit" disabled={!configured}>
              <span>Continue with Apple</span>
              {configured ? null : <span className="btn-note">Not configured yet</span>}
            </button>
          </form>
        </div>

        <div className="demo-box">
          <h2>Try progress on this browser</h2>
          {demo ? (
            <>
              <p>
                The demo learner is not an account. Completed lessons and bookmarks stay in a cookie
                on this browser. They are not synced, and they are not a public profile.
              </p>
              <form action={signInDemo}>
                <input type="hidden" name="next" value={nextPath} />
                <button type="submit">Continue as a demo learner</button>
              </form>
            </>
          ) : (
            <p className="meta">
              Demo sign-in is hidden because Supabase is configured. Set NEXT_PUBLIC_DEMO_MODE=true
              if you still want the local cookie learner.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
