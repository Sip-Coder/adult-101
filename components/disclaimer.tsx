import { DISCLAIMER } from "@/lib/content/disclaimer";

export function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="disclaimer">
      <strong>Education, not legal or financial advice.</strong>
      {compact ? (
        <span> Laws and products differ by state. A professional who knows your situation is the person to decide.</span>
      ) : (
        <span> {DISCLAIMER}</span>
      )}
    </aside>
  );
}
