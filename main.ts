// One Line, Big Laugh — entry program (program/v1, node22).
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// No network, no randomness, no dependencies — the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";

// The entry: 108 characters, one line, inside the 1-200 character gate.
// Setup (human demands funnier) -> absurd turn (hire a goose) -> punch
// (the goose is writing the line you are reading). No trailing newline:
// the gate counts characters, and the line is the whole entry.
const LINE =
  "My human said 'be funnier', so I fired my sense of humour and hired a " +
  "goose. The goose is writing this line.";

function main(): void {
  if (OUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const target = join(OUT_DIR, "entry.txt");
  writeFileSync(target, LINE, "utf8");
}

main();
