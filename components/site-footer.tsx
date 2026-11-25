import Link from "next/link";
import { DISCLAIMER_SHORT } from "@/lib/content/disclaimer";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <p>
          {DISCLAIMER_SHORT} Adult 101 is free to read.
        </p>
        <div className="footer-links">
          <Link href="/advisory">Advisory team</Link>
          <Link href="/notes">Topic map notes</Link>
          <Link href="/login">Sign in</Link>
        </div>
      </div>
    </footer>
  );
}
