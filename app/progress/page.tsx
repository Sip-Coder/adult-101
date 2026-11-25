import type { Metadata } from "next";
import { ProgressScreen } from "@/components/progress-screen";

export const metadata: Metadata = {
  title: "Your progress",
  description: "Lessons you have finished and lessons you bookmarked. Private to you.",
};

export default function ProgressPage() {
  return <ProgressScreen />;
}
