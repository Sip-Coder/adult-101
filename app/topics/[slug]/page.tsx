import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/disclaimer";
import { TopicLessonList } from "@/components/topic-lesson-list";
import { allTopics, getTopic, topicMinutes } from "@/lib/content/catalog";
import { pillarColor } from "@/lib/pillar-color";

type Params = { slug: string };

export function generateStaticParams() {
  return allTopics()
    .filter((entry) => entry.topic.status === "ready")
    .map((entry) => ({ slug: entry.topic.slug }));
}

export const dynamicParams = false;

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

  return (
    <article className="wrap page-hero" style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}>
      <p className="crumbs">
        <Link href="/">Home</Link> / <Link href={`/pillars/${pillar.slug}`}>{pillar.title}</Link> / {topic.title}
      </p>
      <p className="kicker">{pillar.title}</p>
      <h1>{topic.title}</h1>
      <p className="lede">{topic.summary}</p>
      <p className="meta">
        {topic.lessons.length} lessons · about {topicMinutes(topic)} minutes
      </p>
      <Disclaimer compact />
      <TopicLessonList
        lessons={topic.lessons.map((lesson) => ({
          slug: lesson.slug,
          title: lesson.title,
          minutes: lesson.minutes,
          summary: lesson.summary,
        }))}
      />
    </article>
  );
}
