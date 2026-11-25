"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBrowserDemo } from "@/components/use-browser-demo";
import { writeBrowserDemo } from "@/lib/browser-demo";
import { safeNext } from "@/lib/safe-next";

export function LoginScreen() {
  const router = useRouter();
  const { demo } = useBrowserDemo();

  return (
    <article className="wrap page-hero">
      <div className="login-card" style={{ maxWidth: 640, margin: "0 auto" }}>
        <p className="kicker">Free account</p>
        <h1>Sign in without a password.</h1>
        <p className="lede">
          Google or Apple is the whole login. Your lessons completed and bookmarks stay private to
          that account. You can read everything on the site without signing in.
        </p>
        <p className="status">
          <strong>Not configured yet. </strong>
          The buttons below stay visible so you can see where sign-in will live. They turn on after a
          Supabase project, a Google OAuth client, and an Apple Services ID are added. The README lists
          each step. Nothing here asks you for a password.
        </p>
        {demo ? (
          <p>
            You are using the demo learner in this browser.{" "}
            <Link className="ghost-link" href="/progress">
              See demo progress.
            </Link>
          </p>
        ) : null}
        <div className="provider-list">
          <button className="provider" type="button" disabled>
            <span>Continue with Google</span>
            <span className="btn-note">Not configured yet</span>
          </button>
          <button className="provider" type="button" disabled>
            <span>Continue with Apple</span>
            <span className="btn-note">Not configured yet</span>
          </button>
        </div>
        <div className="demo-box">
          <h2>Try progress on this browser</h2>
          <p>
            The demo learner is not an account. On this preview, completed lessons and bookmarks stay
            in this browser only. They are not synced, and they are not a public profile.
          </p>
          <button
            type="button"
            onClick={() => {
              const nextPath = safeNext(new URLSearchParams(window.location.search).get("next"));
              writeBrowserDemo(true);
              router.push(nextPath);
            }}
          >
            Continue as a demo learner
          </button>
        </div>
      </div>
    </article>
  );
}
