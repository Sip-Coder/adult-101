import Link from "next/link";
import { updateLessonProgress } from "@/lib/progress-actions";
import { getProgress } from "@/lib/progress";
import { getViewer } from "@/lib/viewer";

export async function LessonActions({ slug }: { slug: string }) {
  const viewer = await getViewer();
  const progress = await getProgress();
  const entry = progress.entries[slug];
  const completed = entry?.completed ?? false;
  const bookmarked = entry?.bookmarked ?? false;

  if (viewer.kind === "guest") {
    return (
      <div className="actions">
        <Link className="button" href={`/login?next=/lessons/${slug}`}>
          Sign in to save your place
        </Link>
        <p className="meta">Reading stays open without an account. Saving a lesson is private to you.</p>
      </div>
    );
  }

  return (
    <div className="actions">
      <form action={updateLessonProgress}>
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="completed" value={completed ? "0" : "1"} />
        <button type="submit">{completed ? "Mark as not done" : "Mark complete"}</button>
      </form>
      <form action={updateLessonProgress}>
        <input type="hidden" name="slug" value={slug} />
        <input type="hidden" name="bookmarked" value={bookmarked ? "0" : "1"} />
        <button className="secondary" type="submit">
          {bookmarked ? "Remove bookmark" : "Bookmark"}
        </button>
      </form>
      {completed ? <span className="saved">Saved as complete</span> : null}
      {bookmarked ? <span className="saved">Bookmarked</span> : null}
      {progress.error ? <p className="note">{progress.error}</p> : null}
    </div>
  );
}
