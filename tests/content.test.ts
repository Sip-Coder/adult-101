import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { advisors } from "../lib/content/advisory";
import { DISCLAIMER } from "../lib/content/disclaimer";
import {
  allTopics,
  getLesson,
  pillars,
  readyLessons,
  starterPath,
} from "../lib/content/catalog";
import { mergeProgress, parseProgress, serializeProgress } from "../lib/demo-progress";
import { getSupabasePublicConfig, isDemoOffered } from "../lib/env";
import { safeNext } from "../lib/safe-next";

test("five pillars and the seeded courses are present", () => {
  assert.equal(pillars.length, 5);
  assert.deepEqual(
    pillars.map((pillar) => pillar.slug),
    ["personal-health", "mental-health", "family-health", "social-health", "professional-health"],
  );
  for (const slug of ["budgeting", "renting", "car-insurance", "wills-and-trusts", "starting-a-business"]) {
    const topic = allTopics().find((entry) => entry.topic.slug === slug);
    assert.ok(topic, slug);
    assert.equal(topic.topic.status, "ready");
    assert.ok(topic.topic.lessons.length >= 2);
  }
});

test("every ready lesson is original-shaped and sourced", () => {
  const slugs = new Set<string>();
  for (const { lesson } of readyLessons()) {
    assert.equal(slugs.has(lesson.slug), false);
    slugs.add(lesson.slug);
    assert.ok(lesson.summary.length > 40);
    assert.ok(lesson.sections.length >= 3);
    assert.ok(lesson.checklist.length >= 4);
    assert.ok(lesson.selfCheck.length >= 2);
    assert.ok(lesson.sources.length >= 1);
    for (const source of lesson.sources) {
      assert.ok(source.href.startsWith("https://"));
      assert.equal(source.label.includes("http"), false);
    }
    const text = JSON.stringify(lesson);
    assert.equal(text.includes("lorem ipsum"), false);
  }
  assert.ok(slugs.size >= 12);
});

test("coming soon topics do not pretend to have lessons", () => {
  const soon = allTopics().filter((entry) => entry.topic.status === "coming-soon");
  assert.ok(soon.length > 10);
  for (const entry of soon) {
    assert.equal(entry.topic.lessons.length, 0);
  }
});

test("starter path lessons exist", () => {
  for (const slug of starterPath) {
    assert.ok(getLesson(slug));
  }
});

test("disclaimer is explicit", () => {
  assert.match(DISCLAIMER, /not legal/i);
  assert.match(DISCLAIMER, /financial advice/i);
});

test("advisory team covers the requested professions", () => {
  const roles = advisors.map((advisor) => advisor.role.toLowerCase());
  for (const word of ["attorney", "cpa", "cfp", "insurance", "real estate", "lender", "mechanic"]) {
    assert.ok(
      roles.some((role) => role.includes(word)),
      word,
    );
  }
  for (const advisor of advisors) {
    assert.ok(advisor.ask.length >= 3);
    assert.ok(advisor.sources.length >= 1);
  }
});

test("demo progress round-trips and drops unknown lessons", () => {
  const slug = "what-a-budget-is";
  const saved = mergeProgress({}, slug, { completed: true, bookmarked: true });
  const raw = serializeProgress(saved);
  const parsed = parseProgress(raw);
  assert.equal(parsed[slug]?.completed, true);
  assert.equal(parsed[slug]?.bookmarked, true);
  assert.ok(parsed[slug]?.completedAt);

  const cleared = mergeProgress(parsed, slug, { completed: false, bookmarked: false });
  assert.equal(cleared[slug], undefined);

  const tampered = parseProgress(JSON.stringify({ "not-a-lesson": { completed: true, bookmarked: true } }));
  assert.deepEqual(tampered, {});
});

test("redirect targets stay on this site", () => {
  assert.equal(safeNext("/lessons/what-a-budget-is"), "/lessons/what-a-budget-is");
  assert.equal(safeNext("/lessons/what-a-budget-is?from=login"), "/lessons/what-a-budget-is?from=login");
  assert.equal(safeNext("https://evil.example"), "/progress");
  assert.equal(safeNext("//evil.example"), "/progress");
  assert.equal(safeNext(null), "/progress");
  assert.equal(safeNext("/\t/evil.example"), "/progress");
  assert.equal(safeNext("/\n/evil.example"), "/progress");
  assert.equal(safeNext("/%09/evil.example"), "/progress");
  assert.equal(safeNext("/%0a/evil.example"), "/progress");
  assert.equal(safeNext("/%7F/evil.example"), "/progress");
});

test("supabase config treats blanks and placeholders as off", () => {
  const previous = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    demo: process.env.NEXT_PUBLIC_DEMO_MODE,
  };
  process.env.NEXT_PUBLIC_SUPABASE_URL = "";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "";
  delete process.env.NEXT_PUBLIC_DEMO_MODE;
  assert.equal(getSupabasePublicConfig(), null);
  assert.equal(isDemoOffered(), true);

  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "YOUR_KEY";
  assert.equal(getSupabasePublicConfig(), null);

  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://abcdefghijklmnop.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_example";
  assert.ok(getSupabasePublicConfig());
  assert.equal(isDemoOffered(), false);

  process.env.NEXT_PUBLIC_DEMO_MODE = "true";
  assert.equal(isDemoOffered(), true);

  process.env.NEXT_PUBLIC_SUPABASE_URL = previous.url;
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = previous.key;
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = previous.anon;
  if (previous.demo === undefined) delete process.env.NEXT_PUBLIC_DEMO_MODE;
  else process.env.NEXT_PUBLIC_DEMO_MODE = previous.demo;
});

test("progress migration locks rows to the signed-in user", () => {
  const sql = readFileSync(
    new URL("../supabase/migrations/20261125000000_create_lesson_progress.sql", import.meta.url),
    "utf8",
  );
  assert.match(sql, /enable row level security/i);
  assert.match(sql, /force row level security/i);
  assert.match(sql, /to authenticated/i);
  assert.match(sql, /\(select auth\.uid\(\)\) = user_id/);
  assert.match(sql, /with check \(\(select auth\.uid\(\)\) = user_id\)/i);
  assert.match(sql, /grant select, insert, update on table public\.lesson_progress to authenticated/i);
  assert.equal(/grant [^;]* to anon/i.test(sql), false);
  assert.match(sql, /revoke all on table public\.lesson_progress from public, anon/i);
  assert.equal(/user_metadata/i.test(sql.replace(/Do not use user_metadata[\s\S]*?\./, "")), false);
});
