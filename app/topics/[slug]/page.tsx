import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/disclaimer";
import { getTopic, topicMinutes } from "@/lib/content/catalog";
import { getProgress } from "@/lib/progress";
import { pillarColor } from "@/lib/pillar-color";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = getTopic(slug);
  if (!found) return { title: "Topic" };
  return { title: found.topic.title, description: found.topic.summary };
}

export default async function TopicPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = getTopic(slug);
  if (!found || found.topic.status !== "ready") notFound();
  const { pillar, topic } = found;
  const progress = await getProgress();

  return (
    <article className="wrap page-hero" style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}>
      <p className="crumbs">
        <Link href="/">Home</Link> / <a href={`/pillars/${pillar.slug}`}>{pillar.title}</a> / {topic.title}
      </p>
      <p className="kicker">{pillar.title}</p>
      <h1>{topic.title}</h1>
      <p className="lede">{topic.summary}</p>
      <p className="meta">
        {topic.lessons.length} lessons · about {topicMinutes(topic)} minutes
      </p>
      <Disclaimer compact />
      {progress.error ? <p className="note">{progress.error}</p> : null}
      <ol className="lesson-list">
        {topic.lessons.map((lesson, index) => {
          const entry = progress.entries[lesson.slug];
          return (
            <li key={lesson.slug}>
              <span className="meta">0{index + 1}</span>
              <span>
                <a href={`/lessons/${lesson.slug}`}>{lesson.title}</a>
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
    </article>
  );
}
