// Loads KEY=value lines from the project's .env file into process.env.
// A value that is already set (for example from .claude/settings.local.json)
// is never overwritten. A missing .env file is fine: nothing happens.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const projectDir = join(dirname(fileURLToPath(import.meta.url)), "..");

export function loadEnv(file = join(projectDir, ".env")) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    return;
  }
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;
    const [, key, rest] = match;
    let value = rest.trim();
    const quote = value[0];
    const end = quote === '"' || quote === "'" ? value.indexOf(quote, 1) : -1;
    if (end > 0) {
      value = value.slice(1, end);
    } else {
      value = value.replace(/\s+#.*$/, "");
    }
    if (!process.env[key]) process.env[key] = value;
  }
}
