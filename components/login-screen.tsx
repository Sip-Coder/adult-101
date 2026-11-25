import { LoginPanel } from "@/components/login-panel";
import { isDemoOffered, isSupabaseConfigured } from "@/lib/env";
import { getViewer } from "@/lib/viewer";

export async function LoginScreen() {
  const viewer = await getViewer();

  return (
    <article className="wrap page-hero">
      <div className="login-card" style={{ maxWidth: 640, margin: "0 auto" }}>
        <p className="kicker">Free account</p>
        <h1>Sign in without a password.</h1>
        <p className="lede">
          Google or Apple is the whole login. Your lessons completed and bookmarks stay private to
          that account. You can read everything on the site without signing in.
        </p>
        <LoginPanel configured={isSupabaseConfigured()} demo={isDemoOffered()} viewer={viewer} />
      </div>
    </article>
  );
}
