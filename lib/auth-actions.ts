"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  DEMO_PROGRESS_COOKIE,
  DEMO_SESSION_COOKIE,
  demoCookieOptions,
} from "./demo-progress";
import { isDemoOffered, isSupabaseConfigured, siteOriginFromEnv } from "./env";
import { safeNext } from "./safe-next";
import { createClient } from "./supabase/server";
import { getViewer } from "./viewer";

async function requestOrigin(): Promise<string> {
  const headerList = await headers();
  const origin = headerList.get("origin");
  if (origin) return origin;
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const proto = headerList.get("x-forwarded-proto") ?? "http";
  if (host) return `${proto}://${host}`;
  return siteOriginFromEnv();
}

async function beginOAuth(provider: "google" | "apple", nextPath: string) {
  if (!isSupabaseConfigured()) {
    redirect("/login?error=not-configured");
  }

  const origin = await requestOrigin();
  const redirectTo = new URL("/auth/callback", origin);
  redirectTo.searchParams.set("next", safeNext(nextPath));

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: redirectTo.toString() },
  });

  if (error || !data.url) {
    console.error("OAuth start failed.", error);
    redirect("/login?error=provider");
  }

  redirect(data.url);
}

export async function signInWithGoogle(formData: FormData) {
  await beginOAuth("google", String(formData.get("next") ?? ""));
}

export async function signInWithApple(formData: FormData) {
  await beginOAuth("apple", String(formData.get("next") ?? ""));
}

export async function signInDemo(formData: FormData) {
  if (!isDemoOffered()) {
    redirect("/login?error=demo-off");
  }
  const viewer = await getViewer();
  const nextPath = safeNext(String(formData.get("next") ?? ""));
  if (viewer.kind === "account") {
    redirect(nextPath);
  }
  const jar = await cookies();
  jar.set(DEMO_SESSION_COOKIE, "1", demoCookieOptions());
  redirect(nextPath);
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Sign-out failed.", error);
    }
  }
  const jar = await cookies();
  const cleared = { ...demoCookieOptions(), maxAge: 0 };
  jar.set(DEMO_SESSION_COOKIE, "", cleared);
  jar.set(DEMO_PROGRESS_COOKIE, "", cleared);
  redirect("/");
}
