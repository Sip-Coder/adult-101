import { getLesson } from "./content/catalog";

export const DEMO_SESSION_COOKIE = "adult101_demo";
export const DEMO_PROGRESS_COOKIE = "adult101_demo_progress";

export type ProgressEntry = {
  completed: boolean;
  bookmarked: boolean;
  completedAt: string | null;
};

export type ProgressMap = Record<string, ProgressEntry>;

const MAX_COOKIE_LENGTH = 3500;

export function demoCookieOptions(): {
  httpOnly: boolean;
  sameSite: "lax";
  secure: boolean;
  path: string;
  maxAge: number;
} {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  };
}

export function parseProgress(raw: string | undefined | null): ProgressMap {
  if (!raw) return {};
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};

  const entries: ProgressMap = {};
  for (const [slug, value] of Object.entries(parsed)) {
    if (!getLesson(slug)) continue;
    if (!value || typeof value !== "object") continue;
    const row = value as Record<string, unknown>;
    const completed = row.completed === true;
    const bookmarked = row.bookmarked === true;
    if (!completed && !bookmarked) continue;
    const completedAt =
      completed && typeof row.completedAt === "string" ? row.completedAt : completed ? null : null;
    entries[slug] = {
      completed,
      bookmarked,
      completedAt: completed ? completedAt : null,
    };
  }
  return entries;
}

export function serializeProgress(entries: ProgressMap): string {
  const clean: ProgressMap = {};
  for (const [slug, entry] of Object.entries(entries)) {
    if (!getLesson(slug)) continue;
    if (!entry.completed && !entry.bookmarked) continue;
    clean[slug] = {
      completed: entry.completed,
      bookmarked: entry.bookmarked,
      completedAt: entry.completed ? entry.completedAt : null,
    };
  }
  const encoded = JSON.stringify(clean);
  if (encoded.length > MAX_COOKIE_LENGTH) {
    throw new Error("Demo progress is too large for a browser cookie.");
  }
  return encoded;
}

export function mergeProgress(
  current: ProgressMap,
  slug: string,
  patch: { completed?: boolean; bookmarked?: boolean },
): ProgressMap {
  if (!getLesson(slug)) {
    throw new Error("Unknown lesson.");
  }
  const existing = current[slug];
  const completed = patch.completed ?? existing?.completed ?? false;
  const bookmarked = patch.bookmarked ?? existing?.bookmarked ?? false;
  const next: ProgressMap = { ...current };

  if (!completed && !bookmarked) {
    delete next[slug];
    return next;
  }

  let completedAt = existing?.completedAt ?? null;
  if (!completed) completedAt = null;
  else if (!existing?.completed || !completedAt) completedAt = new Date().toISOString();

  next[slug] = { completed, bookmarked, completedAt };
  return next;
}
