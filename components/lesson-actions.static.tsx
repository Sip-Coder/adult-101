"use client";

import Link from "next/link";
import { useBrowserDemo } from "@/components/use-browser-demo";
import { updateBrowserProgress } from "@/lib/browser-demo";

export function LessonActions({ slug }: { slug: string }) {
  const { demo, entries, ready, setEntries } = useBrowserDemo();

  if (!ready || !demo) {
    return (
      <div className="actions">
        <Link className="button" href={`/login?next=/lessons/${slug}`}>
          Sign in to save your place
        </Link>
        <p className="meta">Reading stays open without an account. Saving a lesson is private to you.</p>
      </div>
    );
  }

  const entry = entries[slug];
  const completed = entry?.completed ?? false;
  const bookmarked = entry?.bookmarked ?? false;

  function save(patch: { completed?: boolean; bookmarked?: boolean }) {
    setEntries(updateBrowserProgress(slug, patch));
  }

  return (
    <div className="actions">
      <button type="button" onClick={() => save({ completed: !completed })}>
        {completed ? "Mark as not done" : "Mark complete"}
      </button>
      <button className="secondary" type="button" onClick={() => save({ bookmarked: !bookmarked })}>
        {bookmarked ? "Remove bookmark" : "Bookmark"}
      </button>
      {completed ? <span className="saved">Saved as complete</span> : null}
      {bookmarked ? <span className="saved">Bookmarked</span> : null}
    </div>
  );
}
