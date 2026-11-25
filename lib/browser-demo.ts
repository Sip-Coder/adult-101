import { mergeProgress, parseProgress, serializeProgress, type ProgressMap } from "./demo-progress";

export type { ProgressMap };

export const BROWSER_DEMO_KEY = "adult101.browserDemo";
export const BROWSER_PROGRESS_KEY = "adult101.browserProgress";

export function readBrowserDemo(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(BROWSER_DEMO_KEY) === "1";
}

export function writeBrowserDemo(on: boolean) {
  if (on) window.localStorage.setItem(BROWSER_DEMO_KEY, "1");
  else window.localStorage.removeItem(BROWSER_DEMO_KEY);
}

export function readBrowserProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  return parseProgress(window.localStorage.getItem(BROWSER_PROGRESS_KEY));
}

export function writeBrowserProgress(entries: ProgressMap) {
  if (Object.keys(entries).length === 0) {
    window.localStorage.removeItem(BROWSER_PROGRESS_KEY);
    return;
  }
  window.localStorage.setItem(BROWSER_PROGRESS_KEY, serializeProgress(entries));
}

export function updateBrowserProgress(
  slug: string,
  patch: { completed?: boolean; bookmarked?: boolean },
): ProgressMap {
  const next = mergeProgress(readBrowserProgress(), slug, patch);
  writeBrowserProgress(next);
  return next;
}

export function clearBrowserProgress() {
  window.localStorage.removeItem(BROWSER_PROGRESS_KEY);
}

export function clearBrowserDemo() {
  window.localStorage.removeItem(BROWSER_DEMO_KEY);
  window.localStorage.removeItem(BROWSER_PROGRESS_KEY);
}
