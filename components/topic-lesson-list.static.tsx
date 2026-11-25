"use client";

import Link from "next/link";
import { useBrowserDemo } from "@/components/use-browser-demo";

export function TopicLessonList({
  lessons,
}: {
  lessons: { slug: string; title: string; minutes: number; summary: string }[];
}) {
  const { entries } = useBrowserDemo();

  return (
    <ol className="lesson-list">
      {lessons.map((lesson, index) => {
        const entry = entries[lesson.slug];
        return (
          <li key={lesson.slug}>
            <span className="meta">0{index + 1}</span>
            <span>
              <Link href={`/lessons/${lesson.slug}`}>{lesson.title}</Link>
              <span className="meta"> · {lesson.minutes} min</span>
              <br />
              <span className="meta">{lesson.summary}</span>
            </span>
            <span className="done-mark">{entry?.completed ? "Done" : entry?.bookmarked ? "Saved" : ""}</span>
          </li>
        );
      })}
    </ol>
  );
}
