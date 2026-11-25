import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/disclaimer";
import { advisors, otherPros } from "@/lib/content/advisory";

export const metadata: Metadata = {
  title: "Your advisory team",
  description:
    "How to find and talk to an attorney, CPA, CFP, insurance agent, real estate agent, lender, and mechanic.",
};

export default function AdvisoryPage() {
  return (
    <article className="wrap page-hero">
      <p className="crumbs">
        <Link href="/">Home</Link> / Advisory team
      </p>
      <p className="kicker">People to call before the mistake</p>
      <h1>Build your personal advisory team.</h1>
      <p className="lede">
        You already know the shape of this: you have a doctor so you are not diagnosing yourself in a
        crisis. The same idea applies to contracts, taxes, insurance, a first home, and a car that
        makes a new noise. These are the pros, what to bring, and a way to start the conversation
        that does not require you to sound like you already hired them.
      </p>
      <Disclaimer />

      <div className="advisor-grid">
        {advisors.map((advisor) => (
          <section className="advisor" key={advisor.slug} id={advisor.slug}>
            <h2>{advisor.role}</h2>
            <p>{advisor.helpsWith}</p>
            <div className="split">
              <div>
                <h3>How to find one</h3>
                <ul>
                  {advisor.find.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>What to bring</h3>
                <ul>
                  {advisor.bring.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Questions worth asking</h3>
                <ul>
                  {advisor.ask.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>How the money works</h3>
                <p>{advisor.fees}</p>
              </div>
            </div>
            <div className="callout">
              <strong>A way in. </strong>
              {advisor.approach}
            </div>
            <h3>Read this first</h3>
            <ul className="sources">
              {advisor.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} rel="noopener noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="section">
        <h2>Others worth having</h2>
        <div className="others">
          {otherPros.map((pro) => (
            <article className="card" key={pro.role}>
              <h3>{pro.role}</h3>
              <p>{pro.note}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
