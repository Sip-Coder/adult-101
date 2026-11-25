"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getLesson } from "./content/catalog";
import {
  DEMO_PROGRESS_COOKIE,
  demoCookieOptions,
  mergeProgress,
  parseProgress,
  serializeProgress,
} from "./demo-progress";
import { friendlyProgressError } from "./progress";
import { createClient } from "./supabase/server";
import { getViewer } from "./viewer";

export type ProgressActionResult = { ok: true } | { ok: false; error: string };

function revalidateLesson(slug: string) {
  const location = getLesson(slug);
  revalidatePath("/progress");
  revalidatePath(`/lessons/${slug}`);
  if (location) revalidatePath(`/topics/${location.topic.slug}`);
}

export async function updateLessonProgress(formData: FormData): Promise<void> {
  const slug = String(formData.get("slug") ?? "");
  const patch: { completed?: boolean; bookmarked?: boolean } = {};
  if (formData.has("completed")) patch.completed = formData.get("completed") === "1";
  if (formData.has("bookmarked")) patch.bookmarked = formData.get("bookmarked") === "1";

  const result = await saveProgress(slug, patch);
  revalidateLesson(slug);
  if (!result.ok) {
    redirect(`/lessons/${slug}?progress=${encodeURIComponent(result.error)}`);
  }
  redirect(`/lessons/${slug}`);
}

async function saveProgress(
  slug: string,
  patch: { completed?: boolean; bookmarked?: boolean },
): Promise<ProgressActionResult> {
  if (!getLesson(slug)) return { ok: false, error: "That lesson is not on this site." };

  const viewer = await getViewer();
  if (viewer.kind === "guest") {
    return { ok: false, error: "Sign in to save progress." };
  }

  if (viewer.kind === "demo") {
    try {
      const jar = await cookies();
      const current = parseProgress(jar.get(DEMO_PROGRESS_COOKIE)?.value);
      const next = mergeProgress(current, slug, patch);
      jar.set(DEMO_PROGRESS_COOKIE, serializeProgress(next), demoCookieOptions());
      return { ok: true };
    } catch (error) {
      console.error("Demo progress update failed.", error);
      return { ok: false, error: "This browser could not store that update." };
    }
  }

  try {
    const supabase = await createClient();
    const { data: existing, error: readError } = await supabase
      .from("lesson_progress")
      .select("completed, bookmarked, completed_at")
      .eq("user_id", viewer.id)
      .eq("lesson_slug", slug)
      .maybeSingle();

    if (readError) {
      console.error("Progress read before save failed.", readError);
      return { ok: false, error: friendlyProgressError(readError.message) };
    }

    const completed = patch.completed ?? existing?.completed ?? false;
    const bookmarked = patch.bookmarked ?? existing?.bookmarked ?? false;
    let completedAt: string | null = existing?.completed_at ?? null;
    if (!completed) completedAt = null;
    else if (!existing?.completed || !completedAt) completedAt = new Date().toISOString();

    const { error } = await supabase.from("lesson_progress").upsert(
      {
        user_id: viewer.id,
        lesson_slug: slug,
        completed,
        bookmarked,
        completed_at: completedAt,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_slug" },
    );

    if (error) {
      console.error("Progress save failed.", error);
      return { ok: false, error: friendlyProgressError(error.message) };
    }
    return { ok: true };
  } catch (error) {
    console.error("Progress save failed.", error);
    return {
      ok: false,
      error: friendlyProgressError(error instanceof Error ? error.message : ""),
    };
  }
}

export async function resetDemoProgress(): Promise<void> {
  const viewer = await getViewer();
  if (viewer.kind !== "demo") redirect("/progress");
  const jar = await cookies();
  jar.set(DEMO_PROGRESS_COOKIE, "{}", demoCookieOptions());
  revalidatePath("/progress");
  redirect("/progress");
}
