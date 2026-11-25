"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { NavLinks } from "@/components/nav-links";
import { useBrowserDemo } from "@/components/use-browser-demo";
import { clearBrowserDemo } from "@/lib/browser-demo";

export function StaticHeader() {
  const router = useRouter();
  const { demo, setDemo } = useBrowserDemo();

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="wordmark" href="/">
          <strong>Adult 101</strong>
          <span>Field guide</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLinks />
          {demo ? (
            <div className="account-chip">
              <p>Demo learner</p>
              <button
                className="secondary"
                type="button"
                onClick={() => {
                  clearBrowserDemo();
                  setDemo(false);
                  router.push("/");
                }}
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link className="button" href="/login">
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
