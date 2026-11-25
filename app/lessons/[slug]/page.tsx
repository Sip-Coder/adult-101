import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/disclaimer";
import { LessonActions } from "@/components/lesson-actions";
import { SelfCheck } from "@/components/self-check";
import { getLesson, neighborLessons } from "@/lib/content/catalog";
import { getProgress } from "@/lib/progress";
import { pillarColor } from "@/lib/pillar-color";
import { getViewer } from "@/lib/viewer";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = getLesson(slug);
  if (!found) return { title: "Lesson" };
  return { title: found.lesson.title, description: found.lesson.summary };
}

export default async function LessonPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<{ progress?: string }>;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const found = getLesson(slug);
  if (!found) notFound();
  const { pillar, topic, lesson, index } = found;
  const [viewer, progress, neighbors] = await Promise.all([
    getViewer(),
    getProgress(),
    Promise.resolve(neighborLessons(slug)),
  ]);
  const entry = progress.entries[slug];
  const queryNotice =
    query.progress && query.progress.length <= 240 && !/https?:/i.test(query.progress)
      ? query.progress
      : undefined;

  return (
    <article className="wrap-narrow page-hero" style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}>
      <p className="crumbs">
        <Link href="/">Home</Link> / <a href={`/pillars/${pillar.slug}`}>{pillar.title}</a> /{" "}
        <a href={`/topics/${topic.slug}`}>{topic.title}</a>
      </p>
      <p className="kicker">
        Lesson {index + 1} of {topic.lessons.length} · {lesson.minutes} min
      </p>
      <h1>{lesson.title}</h1>
      <p className="lede">{lesson.summary}</p>
      <Disclaimer />
      <LessonActions
        slug={lesson.slug}
        completed={entry?.completed ?? false}
        bookmarked={entry?.bookmarked ?? false}
        viewer={viewer}
        notice={queryNotice || progress.error || undefined}
      />

      <div className="prose">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section>
          <h2>Take this with you</h2>
          <ul className="checklist">
            {lesson.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <SelfCheck items={lesson.selfCheck} />

        <section>
          <h2>Primary sources</h2>
          <p>These are the public pages behind this lesson. Read them. They outrank this page if they disagree.</p>
          <ul className="sources">
            {lesson.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} rel="noopener noreferrer" target="_blank">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <LessonActions
        slug={lesson.slug}
        completed={entry?.completed ?? false}
        bookmarked={entry?.bookmarked ?? false}
        viewer={viewer}
      />

      <nav className="actions" aria-label="More lessons">
        {neighbors.previous ? (
          <a className="button secondary" href={`/lessons/${neighbors.previous.lesson.slug}`}>
            Previous
          </a>
        ) : null}
        {neighbors.next ? (
          <a className="button" href={`/lessons/${neighbors.next.lesson.slug}`}>
            Next lesson
          </a>
        ) : (
          <a className="button secondary" href={`/topics/${topic.slug}`}>
            Back to the course
          </a>
        )}
      </nav>
    </article>
  );
}
