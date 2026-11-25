import Link from "next/link";
import { pillars } from "@/lib/content/catalog";

export function NavLinks() {
  return (
    <>
      <details>
        <summary>Pillars</summary>
        <div className="nav-menu">
          {pillars.map((pillar) => (
            <Link key={pillar.slug} href={`/pillars/${pillar.slug}`}>
              <span>{pillar.number}</span>
              <span>
                {pillar.title}
                <small>{pillar.tagline}</small>
              </span>
            </Link>
          ))}
        </div>
      </details>
      <Link href="/advisory">Advisory team</Link>
      <Link href="/progress">Progress</Link>
    </>
  );
}
