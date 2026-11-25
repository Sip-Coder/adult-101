import { updateLessonProgress } from "@/lib/progress-actions";
import type { Viewer } from "@/lib/viewer";

export function LessonActions({
  slug,
  completed,
  bookmarked,
  viewer,
  notice,
}: {
  slug: string;
  completed: boolean;
  bookmarked: boolean;
  viewer: Viewer;
  notice?: string;
}) {
  if (viewer.kind === "guest") {
    return (
      <div className="actions">
        <a className="button" href={`/login?next=/lessons/${slug}`}>
          Sign in to save your place
        </a>
        <p className="meta">Reading stays open without an account. Saving a lesson is private to you.</p>
      </div>
    );
  }

  return (
    <div className="actions">
      <form action={updateLessonProgress}>
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="completed" value={completed ? "0" : "1"} />
        <input type="hidden" name="returnTo" value={`/lessons/${slug}`} />
        <button type="submit">{completed ? "Mark as not done" : "Mark complete"}</button>
      </form>
      <form action={updateLessonProgress}>
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="bookmarked" value={bookmarked ? "0" : "1"} />
        <input type="hidden" name="returnTo" value={`/lessons/${slug}`} />
        <button className="secondary" type="submit">
          {bookmarked ? "Remove bookmark" : "Bookmark"}
        </button>
      </form>
      {completed ? <span className="saved">Saved as complete</span> : null}
      {bookmarked ? <span className="saved">Bookmarked</span> : null}
      {notice ? <p className="note">{notice}</p> : null}
    </div>
  );
}
