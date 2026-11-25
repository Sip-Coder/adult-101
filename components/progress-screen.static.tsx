"use client";

import Link from "next/link";
import { useBrowserDemo } from "@/components/use-browser-demo";
import { clearBrowserProgress } from "@/lib/browser-demo";
import { readyLessons } from "@/lib/content/catalog";

const lessons = readyLessons();

export function ProgressScreen() {
  const { ready, demo, entries, setEntries } = useBrowserDemo();

  if (!ready) {
    return (
      <article className="wrap page-hero">
        <p className="kicker">Private to you</p>
        <h1>Your progress</h1>
        <p className="lede">Loading what this browser has saved.</p>
      </article>
    );
  }

  if (!demo) {
    return (
      <article className="wrap page-hero">
        <p className="kicker">Private to you</p>
        <h1>Your progress lives with your sign-in.</h1>
        <p className="lede">
          Lessons you mark complete and lessons you bookmark are stored for your account only.
          There is no public profile. Reading does not require an account.
        </p>
        <Link className="button" href="/login?next=/progress">
          Sign in
        </Link>
      </article>
    );
  }

  const completed = lessons.filter((item) => entries[item.lesson.slug]?.completed);
  const bookmarked = lessons.filter((item) => entries[item.lesson.slug]?.bookmarked);
  const nextLesson = lessons.find((item) => !entries[item.lesson.slug]?.completed);

  return (
    <article className="wrap page-hero">
      <p className="kicker">Private to you</p>
      <h1>Hello, Demo learner.</h1>
      <p className="lede">
        This is the demo learner on the public preview. Progress stays in this browser. It is not an
        account, and nobody else can open it from another device.
      </p>
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
          <Link className="button" href={`/lessons/${nextLesson.lesson.slug}`}>
            Continue with {nextLesson.lesson.title}
          </Link>
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
                <Link href={`/lessons/${item.lesson.slug}`}>{item.lesson.title}</Link>
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
                <Link href={`/lessons/${item.lesson.slug}`}>{item.lesson.title}</Link>
                <span className="meta">{item.topic.title}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <button
        className="secondary"
        type="button"
        onClick={() => {
          clearBrowserProgress();
          setEntries({});
        }}
      >
        Clear demo progress
      </button>
    </article>
  );
}
