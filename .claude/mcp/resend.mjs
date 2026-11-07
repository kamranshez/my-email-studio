// Starts the Resend MCP server with settings from, in order:
//   1. the environment (including .claude/settings.local.json),
//   2. the project's .env file,
//   3. practice-mode defaults below.

import { spawn } from "node:child_process";
import { loadEnv, projectDir } from "../load-env.mjs";

loadEnv();

const defaults = {
  RESEND_API_KEY: "re_practice",
  RESEND_BASE_URL: "http://localhost:4000",
  SENDER_EMAIL_ADDRESS: "onboarding@resend.dev",
};
for (const [key, value] of Object.entries(defaults)) {
  if (!process.env[key]) process.env[key] = value;
}

const child = spawn("npx", ["-y", "resend-mcp@2.27.1"], {
  cwd: projectDir,
  env: process.env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});
