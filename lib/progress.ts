import { cookies } from "next/headers";
import { cache } from "react";
import { DEMO_PROGRESS_COOKIE, parseProgress, type ProgressMap } from "./demo-progress";
import { isSupabaseConfigured } from "./env";
import { createClient } from "./supabase/server";
import { getViewer } from "./viewer";

export type ProgressState = {
  entries: ProgressMap;
  error: string | null;
};

export function friendlyProgressError(message: string): string {
  if (
    /lesson_progress/i.test(message) &&
    (/does not exist/i.test(message) ||
      /schema cache/i.test(message) ||
      /could not find/i.test(message) ||
      /PGRST205/i.test(message))
  ) {
    return "Your account works, and the progress table is not in this Supabase project yet. Run the lesson_progress migration from the README, then try again.";
  }
  if (/permission denied/i.test(message) || /row-level security/i.test(message) || /42501/.test(message)) {
    return "The database rejected that progress update. Apply the lesson_progress grants and row-level security policies from the migration, then try again.";
  }
  return "Progress could not be saved just now. The lesson is still here. Try again in a moment.";
}

export const getProgress = cache(async (): Promise<ProgressState> => {
  const viewer = await getViewer();
  if (viewer.kind === "guest") return { entries: {}, error: null };

  if (viewer.kind === "demo") {
    const jar = await cookies();
    return { entries: parseProgress(jar.get(DEMO_PROGRESS_COOKIE)?.value), error: null };
  }

  if (!isSupabaseConfigured()) return { entries: {}, error: null };

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("lesson_progress")
      .select("lesson_slug, completed, bookmarked, completed_at");

    if (error) {
      console.error("Progress read failed.", error);
      return { entries: {}, error: friendlyProgressError(error.message) };
    }

    const entries: ProgressMap = {};
    for (const row of data ?? []) {
      const slug = String(row.lesson_slug);
      entries[slug] = {
        completed: row.completed === true,
        bookmarked: row.bookmarked === true,
        completedAt: typeof row.completed_at === "string" ? row.completed_at : null,
      };
    }
    return { entries, error: null };
  } catch (error) {
    console.error("Progress read failed.", error);
    return { entries: {}, error: friendlyProgressError(error instanceof Error ? error.message : "") };
  }
});
