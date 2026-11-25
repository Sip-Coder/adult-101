const FALLBACK = "/progress";

/** Encoded C0 controls and DEL. Browsers strip these while parsing a Location. */
const ENCODED_CONTROL = /%(?:0[0-9a-f]|1[0-9a-f]|7f)/i;

export function safeNext(value: string | null): string {
  if (!value) return FALLBACK;
  if (/[\u0000-\u001F\u007F]/.test(value) || ENCODED_CONTROL.test(value)) return FALLBACK;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return FALLBACK;

  try {
    const resolved = new URL(value, "http://adult101.local");
    if (resolved.origin !== "http://adult101.local") return FALLBACK;
    if (!resolved.pathname.startsWith("/") || resolved.pathname.startsWith("//")) return FALLBACK;
  } catch {
    return FALLBACK;
  }

  return value;
}
