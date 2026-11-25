import Link from "next/link";

export default function NotFound() {
  return (
    <article className="wrap page-hero">
      <p className="kicker">404</p>
      <h1>That page is not on the map.</h1>
      <p className="lede">The lesson may still be marked coming soon, or the link may be old.</p>
      <Link className="button" href="/">
        Back to the hub
      </Link>
    </article>
  );
}
