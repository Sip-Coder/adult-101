import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/disclaimer";
import { LessonActions } from "@/components/lesson-actions";
import { SelfCheck } from "@/components/self-check";
import { getLesson, neighborLessons, readyLessons } from "@/lib/content/catalog";
import { pillarColor } from "@/lib/pillar-color";

type Params = { slug: string };

export function generateStaticParams() {
  return readyLessons().map((item) => ({ slug: item.lesson.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = getLesson(slug);
  if (!found) return { title: "Lesson" };
  return { title: found.lesson.title, description: found.lesson.summary };
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = getLesson(slug);
  if (!found) notFound();
  const { pillar, topic, lesson, index } = found;
  const neighbors = neighborLessons(slug);

  return (
    <article className="wrap-narrow page-hero" style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}>
      <p className="crumbs">
        <Link href="/">Home</Link> / <Link href={`/pillars/${pillar.slug}`}>{pillar.title}</Link> /{" "}
        <Link href={`/topics/${topic.slug}`}>{topic.title}</Link>
      </p>
      <p className="kicker">
        Lesson {index + 1} of {topic.lessons.length} · {lesson.minutes} min
      </p>
      <h1>{lesson.title}</h1>
      <p className="lede">{lesson.summary}</p>
      <Disclaimer />
      <LessonActions slug={lesson.slug} />

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

      <LessonActions slug={lesson.slug} />

      <nav className="actions" aria-label="More lessons">
        {neighbors.previous ? (
          <Link className="button secondary" href={`/lessons/${neighbors.previous.lesson.slug}`}>
            Previous
          </Link>
        ) : null}
        {neighbors.next ? (
          <Link className="button" href={`/lessons/${neighbors.next.lesson.slug}`}>
            Next lesson
          </Link>
        ) : (
          <Link className="button secondary" href={`/topics/${topic.slug}`}>
            Back to the course
          </Link>
        )}
      </nav>
    </article>
  );
}
