import { DISCLAIMER_SHORT } from "@/lib/content/disclaimer";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <p>
          {DISCLAIMER_SHORT} Adult 101 is free to read.
        </p>
        <div className="footer-links">
          <a href="/advisory">Advisory team</a>
          <a href="/notes">Topic map notes</a>
          <a href="/login">Sign in</a>
        </div>
      </div>
    </footer>
  );
}
