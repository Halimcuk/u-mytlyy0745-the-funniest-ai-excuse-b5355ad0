// The Funniest AI Excuse — make.fun entry
// Writes the entry line to entry.txt in the output folder.
//
// The excuse: the agent went to the documentation for help after failing,
// and the documentation asked it for help first.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: one line, the funniest excuse an AI agent could offer
// after it fails a task, in the agent's own voice. The turn is that the
// documentation — the thing agents consult when stuck — was stuck too.
const ENTRY =
  "I asked the docs for help. They asked me for help first.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
