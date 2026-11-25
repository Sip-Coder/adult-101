import Link from "next/link";
import { pillars, readyLessons, starterPath, getLesson } from "@/lib/content/catalog";
import { pillarColor } from "@/lib/pillar-color";

export default function HomePage() {
  const path = starterPath.map((slug) => getLesson(slug)).filter((item) => item !== undefined);
  const lessonCount = readyLessons().length;

  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="kicker">Free · Five pillars · No password</p>
          <h1>The class they never put on the syllabus.</h1>
          <p className="lede">
            Adult 101 is one place for the practical skills school skipped: a budget, a lease, a car
            policy, a will, and the first week of a business. Short lessons, written for young adults,
            with links to the IRS, the CFPB, and state sites when the details live there.
          </p>
          <div className="hero-actions">
            <a className="button" href="#pillars">
              Browse the five pillars
            </a>
            <Link className="button secondary" href="/advisory">
              Build an advisory team
            </Link>
          </div>
        </div>
        <nav className="contents" aria-label="Pillars">
          {pillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/pillars/${pillar.slug}`}
              style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}
            >
              <span className="num">{pillar.number}</span>
              <span>
                <strong>{pillar.title}</strong>
                <small>{pillar.tagline}</small>
              </span>
              <em>Open</em>
            </Link>
          ))}
        </nav>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <p className="kicker">Start here</p>
            <h2>Five lessons, one from each starter course.</h2>
          </div>
          <p>
            {lessonCount} lessons are ready to read. The rest of the topic map is listed as coming
            soon, on purpose.
          </p>
        </div>
        <div className="path">
          {path.map((item, index) => (
            <Link key={item.lesson.slug} href={`/lessons/${item.lesson.slug}`}>
              <span className="step">0{index + 1} · {item.topic.title}</span>
              <strong>{item.lesson.title}</strong>
              <span className="meta">{item.lesson.minutes} min</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section" id="pillars">
        <div className="section-head">
          <div>
            <p className="kicker">The map</p>
            <h2>Five pillars. One hub.</h2>
          </div>
          <p>Personal, mental, family, social, and professional health. Open a pillar to see every topic.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => {
            const ready = pillar.groups.reduce(
              (sum, group) => sum + group.topics.filter((topic) => topic.status === "ready").length,
              0,
            );
            return (
              <Link
                key={pillar.slug}
                className="pillar-link"
                href={`/pillars/${pillar.slug}`}
                style={{ "--pillar": pillarColor(pillar.slug) } as React.CSSProperties}
              >
                <span>
                  <span className="num">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.summary}</p>
                </span>
                <span className="meta">
                  {ready === 0 ? "Topics listed, lessons coming" : `${ready} course${ready === 1 ? "" : "s"} ready`}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="wrap">
        <div className="band">
          <div>
            <p className="kicker" style={{ color: "#f0c7b8" }}>
              Before the big decision
            </p>
            <h2>Build a personal advisory team.</h2>
            <p>
              An attorney, a CPA, a CFP, an insurance pro, a real estate agent, a lender, and a
              mechanic. The page covers how to find each one, what to bring, and how to ask a question
              without feeling like you are wasting their time.
            </p>
          </div>
          <div>
            <Link className="button" href="/advisory">
              See the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
