import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  DEMO_PROGRESS_COOKIE,
  DEMO_SESSION_COOKIE,
  demoCookieOptions,
} from "@/lib/demo-progress";
import { safeNext } from "@/lib/safe-next";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = safeNext(searchParams.get("next"));

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const jar = await cookies();
      const cleared = { ...demoCookieOptions(), maxAge: 0 };
      jar.set(DEMO_SESSION_COOKIE, "", cleared);
      jar.set(DEMO_PROGRESS_COOKIE, "", cleared);
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocal = process.env.NODE_ENV === "development";
      if (isLocal) {
        return NextResponse.redirect(`${origin}${next}`);
      }
      if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
    console.error("OAuth callback failed.", error);
  }

  return NextResponse.redirect(`${origin}/login?error=callback`);
}
