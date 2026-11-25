"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <article className="wrap page-hero">
      <p className="kicker">Something broke</p>
      <h1>This page did not load.</h1>
      <p className="lede">The lessons are still on the site. Try the page again.</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </article>
  );
}
