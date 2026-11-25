import { cpSync, existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";

const stash = ".pages-stash";
const swaps = [
  ["components/app-shell.tsx", "components/app-shell.static.tsx"],
  ["components/login-screen.tsx", "components/login-screen.static.tsx"],
  ["components/progress-screen.tsx", "components/progress-screen.static.tsx"],
  ["components/lesson-actions.tsx", "components/lesson-actions.static.tsx"],
  ["components/topic-lesson-list.tsx", "components/topic-lesson-list.static.tsx"],
];

mkdirSync(stash, { recursive: true });
rmSync(".next", { recursive: true, force: true });

function move(from, to) {
  if (existsSync(from)) renameSync(from, to);
}

try {
  for (const [serverFile] of swaps) {
    move(serverFile, `${stash}/${serverFile.split("/").pop()}`);
  }
  move("proxy.ts", `${stash}/proxy.ts`);
  move("app/auth/callback/route.ts", `${stash}/callback-route.ts`);

  for (const [serverFile, staticFile] of swaps) {
    cpSync(staticFile, serverFile);
  }

  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
      NEXT_PUBLIC_STATIC_EXPORT: "true",
      NEXT_PUBLIC_DEMO_MODE: "true",
      NEXT_PUBLIC_BASE_PATH: "/adult-101",
      NEXT_PUBLIC_SUPABASE_URL: "",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "",
    },
  });
  process.exitCode = result.status ?? 1;
} finally {
  for (const [serverFile] of swaps) {
    const stashed = `${stash}/${serverFile.split("/").pop()}`;
    if (existsSync(stashed)) {
      rmSync(serverFile, { force: true });
      renameSync(stashed, serverFile);
    }
  }
  if (existsSync(`${stash}/proxy.ts`)) renameSync(`${stash}/proxy.ts`, "proxy.ts");
  if (existsSync(`${stash}/callback-route.ts`)) {
    mkdirSync("app/auth/callback", { recursive: true });
    renameSync(`${stash}/callback-route.ts`, "app/auth/callback/route.ts");
  }
  rmSync(stash, { recursive: true, force: true });
}
