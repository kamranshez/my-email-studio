// PreToolUse hook: blocks Resend sends to anyone except @resend.dev test
// addresses and my own email (from the MY_EMAIL environment variable).
// Exit 0 = allow. Exit 2 = block (the reason on stderr is shown to Claude).
// MY_EMAIL can also come from the project's .env file.

// If the loader is missing or broken, carry on without it: MY_EMAIL then
// stays unset and only @resend.dev addresses are allowed, which is safe.
try {
  const { loadEnv } = await import("../load-env.mjs");
  loadEnv();
} catch {}

const ALWAYS_BLOCK = new Set([
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
]);

const CHECK_RECIPIENTS = new Set(["send-email", "send-batch-emails"]);

function block(reason) {
  process.stderr.write(`Send guard: ${reason}\n`);
  process.exit(2);
}

// Read the whole tool call from standard input.
let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  // If we can't read the call, we can't check it. Play it safe.
  block("could not read the tool call, so it was blocked to be safe.");
}

// "mcp__resend__send-email" -> "send-email"
const fullName = String(call.tool_name ?? "");
const tool = fullName.split("__").pop();
const input = call.tool_input ?? {};

if (ALWAYS_BLOCK.has(tool)) {
  block(`${tool} is blocked. It can reach whole lists of people.`);
}

if (!CHECK_RECIPIENTS.has(tool)) {
  process.exit(0);
}

const myEmail = (process.env.MY_EMAIL ?? "").trim().toLowerCase();

// Turn a field (string, array, or missing) into a list of plain addresses.
// Handles "Name <someone@example.com>" as well as "someone@example.com".
function addresses(field) {
  if (field == null) return [];
  const list = Array.isArray(field) ? field : [field];
  return list.map((item) => {
    const text = String(item).trim();
    const match = text.match(/<([^>]+)>/);
    return (match ? match[1] : text).trim();
  });
}

function isAllowed(address) {
  const a = address.toLowerCase();
  if (a.endsWith("@resend.dev")) return true;
  if (myEmail && a === myEmail) return true;
  return false;
}

const emails = tool === "send-batch-emails" ? input.emails ?? [] : [input];

for (const email of emails) {
  for (const field of ["to", "cc", "bcc"]) {
    for (const address of addresses(email?.[field])) {
      if (!isAllowed(address)) {
        block(
          `${tool} blocked. "${address}" (in ${field}) is not a @resend.dev ` +
            `test address or your own email.`
        );
      }
    }
  }
}

process.exit(0);
