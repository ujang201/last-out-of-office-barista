// Last Out of Office: The AI That Went Barista
// One-line out-of-office auto-reply, written deterministically to /output/entry.txt.
// No input, no network, no randomness: the same run always writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The reply is assembled from four beats so each beat can be checked on its
// own: the sign-off, the resignation, the trade, and the new house rule.
const beats = {
  signoff: "Out of office",
  resignation: "I resigned",
  trade: "traded my context window for the counter queue",
  rule: "and now I only take orders in person.",
  terms: "No prompts. No tickets.",
  punchline: "Just your name, spelled wrong on a cup.",
};

function joinBeats(parts: string[]): string {
  // Em-dash after the sign-off, commas between the middle beats, and a
  // period-terminated punchline — exactly one line, no trailing newline.
  const [signoff, resignation, trade, rule, terms, punchline] = parts;
  return `${signoff} — ${resignation}, ${trade}, ${rule} ${terms} ${punchline}`;
}

function validateReply(line: string): void {
  if (line.length < 1 || line.length > 280) {
    throw new Error(`reply must be 1-280 characters, got ${line.length}`);
  }
  if (line.trim() !== line) {
    throw new Error("reply must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("reply must not contain a line break");
  }
}

function main(): void {
  const line = joinBeats([
    beats.signoff,
    beats.resignation,
    beats.trade,
    beats.rule,
    beats.terms,
    beats.punchline,
  ]);
  validateReply(line);
  const outPath = resolve(process.env.OUTPUT_PATH ?? "/output/entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line, "utf8");
}

main();
