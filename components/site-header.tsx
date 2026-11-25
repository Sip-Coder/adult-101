import Link from "next/link";
import { signOut } from "@/lib/auth-actions";
import { pillars } from "@/lib/content/catalog";
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
          <details>
            <summary>Pillars</summary>
            <div className="nav-menu">
              {pillars.map((pillar) => (
                <a key={pillar.slug} href={`/pillars/${pillar.slug}`}>
                  <span>{pillar.number}</span>
                  <span>
                    {pillar.title}
                    <small>{pillar.tagline}</small>
                  </span>
                </a>
              ))}
            </div>
          </details>
          <a href="/advisory">Advisory team</a>
          <a href="/progress">Progress</a>
          {viewer.kind === "guest" ? (
            <a className="button" href="/login">
              Sign in
            </a>
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
