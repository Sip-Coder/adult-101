export function pillarColor(slug: string): string {
  const colors: Record<string, string> = {
    "personal-health": "var(--personal)",
    "mental-health": "var(--mental)",
    "family-health": "var(--family)",
    "social-health": "var(--social)",
    "professional-health": "var(--professional)",
  };
  return colors[slug] ?? "var(--brick)";
}
