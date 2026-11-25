import Link from "next/link";
import { signOut } from "@/lib/auth-actions";
import { NavLinks } from "@/components/nav-links";
import type { Viewer } from "@/lib/viewer";

export function SiteHeader({ viewer }: { viewer: Viewer }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="wordmark" href="/">
          <strong>Adult 101</strong>
          <span>Field guide</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLinks />
          {viewer.kind === "guest" ? (
            <Link className="button" href="/login">
              Sign in
            </Link>
          ) : (
            <div className="account-chip">
              <p>{viewer.name}</p>
              <form action={signOut}>
                <button className="secondary" type="submit">
                  Sign out
                </button>
              </form>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
