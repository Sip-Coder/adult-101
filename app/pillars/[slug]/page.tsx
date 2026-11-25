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
                      <a href={`/topics/${topic.slug}`}>{topic.title}</a>
                    ) : (
                      topic.title
                    )}
                  </h3>
                  <p>{topic.summary}</p>
                  {topic.placementNote ? (
                    <p className="note">
                      {topic.placementNote}{" "}
                      <a href="/notes">See the open questions.</a>
                    </p>
                  ) : null}
                </div>
                {topic.status === "ready" ? (
                  <a className="badge" href={`/topics/${topic.slug}`}>
                    {topic.lessons.length} lessons · {topicMinutes(topic)} min
                  </a>
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
