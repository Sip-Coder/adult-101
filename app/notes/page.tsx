import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Topic map notes",
  description: "Open questions about where Adult 101 topics belong.",
};

export default function NotesPage() {
  return (
    <article className="wrap-narrow page-hero prose">
      <p className="crumbs">
        <Link href="/">Home</Link> / Topic map notes
      </p>
      <p className="kicker">Still being decided</p>
      <h1>Open questions on the topic map.</h1>
      <p>
        The five pillars are the draft. A few topics do not have a settled home. They stay listed
        where the draft put them, with a note, until the owner chooses. Lessons are not invented to
        fill a thin pillar.
      </p>

      <section id="contracts">
        <h2>Contracts, leases, and small claims</h2>
        <p>
          These might be Social Health, because they are about other people, or Personal Health,
          because they are legal basics you handle for yourself. Housing leases already have a
          starter course under Renting. The broader contracts topic is still coming soon.
        </p>
      </section>

      <section id="insurance-claims">
        <h2>Insurance claims</h2>
        <p>
          Claims touch car, home, and renters policies. They could live inside Personal Health next
          to each policy, or become their own “when stuff breaks” module. The car crash lesson is a
          first hour, not that whole module.
        </p>
      </section>

      <section id="financial-emergencies">
        <h2>Financial emergencies</h2>
        <p>
          A lost job or a surprise medical bill is both a money problem and a stress problem. The
          draft lists it under Mental Health. It may move to Personal Health, or the course may
          split the coping steps from the money steps.
        </p>
      </section>

      <section id="identity-theft">
        <h2>Identity theft and scams</h2>
        <p>
          Not on the map as a course yet. It could sit with money and credit, or with safety and
          stress. It stays an open question instead of a placeholder card.
        </p>
      </section>

      <section id="taxes">
        <h2>Taxes</h2>
        <p>
          Personal taxes, side-hustle taxes, and business bookkeeping overlap. They might be one
          course, two courses, or a Personal Health course plus a Professional Health course. Both
          cards exist as coming soon so the overlap stays visible.
        </p>
      </section>

      <section id="thin-pillars">
        <h2>Thin pillars</h2>
        <p>
          Mental Health and Social Health do not have enough topics yet. New topics belong there.
          This version does not invent them ahead of the owner.
        </p>
      </section>
    </article>
  );
}
