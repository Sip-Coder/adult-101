import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPillar, topicMinutes } from "@/lib/content/catalog";
import { pillars } from "@/lib/content/catalog";
import { pillarColor } from "@/lib/pillar-color";

type Params = { slug: string };

export function generateStaticParams() {
  return pillars.map((pillar) => ({ slug: pillar.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return { title: "Pillar" };
  return { title: pillar.title, description: pillar.summary };
}

export default async function PillarPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  return (
    <article className="wrap page-hero" style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}>
      <p className="crumbs">
        <Link href="/">Home</Link> / {pillar.title}
      </p>
      <p className="kicker">Pillar {pillar.number}</p>
      <h1>{pillar.title}</h1>
      <p className="lede">{pillar.summary}</p>
      <p className="meta">{pillar.tagline}</p>

      {pillar.groups.map((group) => (
        <section className="group" key={group.title}>
          <h2>{group.title}</h2>
          <div className="topic-list">
            {group.topics.map((topic) => (
              <article className="topic" key={topic.slug}>
                <div>
                  <h3>
                    {topic.status === "ready" ? (
                      <Link href={`/topics/${topic.slug}`}>{topic.title}</Link>
                    ) : (
                      topic.title
                    )}
                  </h3>
                  <p>{topic.summary}</p>
                  {topic.placementNote ? (
                    <p className="note">
                      {topic.placementNote}{" "}
                      <Link href="/notes">See the open questions.</Link>
                    </p>
                  ) : null}
                </div>
                {topic.status === "ready" ? (
                  <Link className="badge" href={`/topics/${topic.slug}`}>
                    {topic.lessons.length} lessons · {topicMinutes(topic)} min
                  </Link>
                ) : (
                  <span className="badge soon">Coming soon</span>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
