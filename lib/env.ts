export type SupabasePublicConfig = {
  url: string;
  key: string;
};

function nonempty(value: string | undefined): string | null {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) return null;
  if (/your[-_ ]?(project|key|supabase)/i.test(trimmed)) return null;
  if (trimmed.includes("YOUR_")) return null;
  return trimmed;
}

export function getSupabasePublicConfig(): SupabasePublicConfig | null {
  const url = nonempty(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const key =
    nonempty(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) ??
    nonempty(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  if (!url || !key) return null;

  try {
    const parsed = new URL(url);
    const local = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    if (parsed.protocol !== "https:" && !local) return null;
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
  } catch {
    return null;
  }

  return { url: url.replace(/\/$/, ""), key };
}

export function isSupabaseConfigured(): boolean {
  return getSupabasePublicConfig() !== null;
}

/**
 * Demo sign-in is on when NEXT_PUBLIC_DEMO_MODE is true, off when it is false,
 * and on by default only while Supabase itself is not configured.
 */
export function isDemoOffered(): boolean {
  const flag = process.env.NEXT_PUBLIC_DEMO_MODE?.trim().toLowerCase();
  if (flag === "false" || flag === "0" || flag === "off") return false;
  if (flag === "true" || flag === "1" || flag === "on") return true;
  return !isSupabaseConfigured();
}

export function siteOriginFromEnv(): string {
  const configured = nonempty(process.env.NEXT_PUBLIC_SITE_URL);
  return configured ?? "http://localhost:3000";
}
