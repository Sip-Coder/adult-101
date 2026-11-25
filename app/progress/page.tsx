import type { Metadata } from "next";
import { resetDemoProgress } from "@/lib/progress-actions";
import { readyLessons } from "@/lib/content/catalog";
import { getProgress } from "@/lib/progress";
import { getViewer } from "@/lib/viewer";

export const metadata: Metadata = {
  title: "Your progress",
  description: "Lessons you have finished and lessons you bookmarked. Private to you.",
};

export default async function ProgressPage() {
  const viewer = await getViewer();
  const progress = await getProgress();
  const lessons = readyLessons();
  const completed = lessons.filter((item) => progress.entries[item.lesson.slug]?.completed);
  const bookmarked = lessons.filter((item) => progress.entries[item.lesson.slug]?.bookmarked);
  const nextLesson = lessons.find((item) => !progress.entries[item.lesson.slug]?.completed);

  return (
    <article className="wrap page-hero">
      <p className="kicker">Private to you</p>
      <h1>{viewer.kind === "guest" ? "Your progress lives with your sign-in." : `Hello, ${viewer.name}.`}</h1>

      {viewer.kind === "guest" ? (
        <>
          <p className="lede">
            Lessons you mark complete and lessons you bookmark are stored for your account only.
            There is no public profile. Reading does not require an account.
          </p>
          <a className="button" href="/login?next=/progress">
            Sign in
          </a>
        </>
      ) : (
        <>
          <p className="lede">
            {viewer.kind === "demo"
              ? "This is the demo learner. Progress stays in a cookie on this browser. It is not an account, and nobody else can open it from another device."
              : "Completed lessons and bookmarks are tied to your sign-in. Row-level security in the database limits those rows to you. They are not a public profile."}
          </p>
          {progress.error ? <p className="status">{progress.error}</p> : null}
          <div className="stats">
            <div className="stat">
              <strong>{completed.length}</strong>
              <span className="meta">Completed</span>
            </div>
            <div className="stat">
              <strong>{bookmarked.length}</strong>
              <span className="meta">Bookmarked</span>
            </div>
            <div className="stat">
              <strong>{lessons.length}</strong>
              <span className="meta">Lessons ready</span>
            </div>
          </div>

          {nextLesson ? (
            <p>
              <a className="button" href={`/lessons/${nextLesson.lesson.slug}`}>
                Continue with {nextLesson.lesson.title}
              </a>
            </p>
          ) : (
            <p>You have marked every ready lesson complete. More courses are on the way.</p>
          )}

          <section className="section">
            <h2>Completed</h2>
            {completed.length === 0 ? (
              <p className="empty">Nothing completed yet. Open any lesson and mark it done.</p>
            ) : (
              <ul className="lesson-list">
                {completed.map((item) => (
                  <li key={item.lesson.slug}>
                    <span className="done-mark">Done</span>
                    <a href={`/lessons/${item.lesson.slug}`}>{item.lesson.title}</a>
                    <span className="meta">{item.topic.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="section">
            <h2>Bookmarks</h2>
            {bookmarked.length === 0 ? (
              <p className="empty">No bookmarks yet.</p>
            ) : (
              <ul className="lesson-list">
                {bookmarked.map((item) => (
                  <li key={item.lesson.slug}>
                    <span className="done-mark">Saved</span>
                    <a href={`/lessons/${item.lesson.slug}`}>{item.lesson.title}</a>
                    <span className="meta">{item.topic.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {viewer.kind === "demo" ? (
            <form action={resetDemoProgress}>
              <button className="secondary" type="submit">
                Clear demo progress
              </button>
            </form>
          ) : null}
        </>
      )}
    </article>
  );
}
