import { cookies } from "next/headers";
import { cache } from "react";
import { DEMO_SESSION_COOKIE } from "./demo-progress";
import { isSupabaseConfigured } from "./env";
import { createClient } from "./supabase/server";

export type Viewer =
  | { kind: "guest" }
  | { kind: "demo"; name: string }
  | { kind: "account"; id: string; email: string | null; name: string };

function displayName(fullName: unknown, name: unknown, email: string | null): string {
  if (typeof fullName === "string" && fullName.trim()) return fullName.trim();
  if (typeof name === "string" && name.trim()) return name.trim();
  if (email) return email;
  return "Learner";
}

export const getViewer = cache(async (): Promise<Viewer> => {
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getClaims();
      if (!error && data?.claims?.sub) {
        const claims = data.claims;
        const email = typeof claims.email === "string" ? claims.email : null;
        const meta = claims.user_metadata ?? {};
        return {
          kind: "account",
          id: claims.sub,
          email,
          name: displayName(meta.full_name, meta.name, email),
        };
      }
    } catch (error) {
      console.error("Unable to read the Supabase session.", error);
    }
  }

  const jar = await cookies();
  if (jar.get(DEMO_SESSION_COOKIE)?.value === "1") {
    return { kind: "demo", name: "Demo learner" };
  }

  return { kind: "guest" };
});
