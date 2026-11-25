"use client";

import { useEffect, useState } from "react";
import { readBrowserDemo, readBrowserProgress, type ProgressMap } from "@/lib/browser-demo";

export function useBrowserDemo() {
  const [demo, setDemo] = useState(false);
  const [entries, setEntries] = useState<ProgressMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDemo(readBrowserDemo());
      setEntries(readBrowserProgress());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return { demo, entries, ready, setDemo, setEntries };
}
