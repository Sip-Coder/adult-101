import Link from "next/link";
import { getProgress } from "@/lib/progress";

export async function TopicLessonList({
  lessons,
}: {
  lessons: { slug: string; title: string; minutes: number; summary: string }[];
}) {
  const progress = await getProgress();

  return (
    <>
      {progress.error ? <p className="note">{progress.error}</p> : null}
      <ol className="lesson-list">
        {lessons.map((lesson, index) => {
          const entry = progress.entries[lesson.slug];
          return (
            <li key={lesson.slug}>
              <span className="meta">0{index + 1}</span>
              <span>
                <Link href={`/lessons/${lesson.slug}`}>{lesson.title}</Link>
                <span className="meta"> · {lesson.minutes} min</span>
                <br />
                <span className="meta">{lesson.summary}</span>
              </span>
              <span className="done-mark">
                {entry?.completed ? "Done" : entry?.bookmarked ? "Saved" : ""}
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
