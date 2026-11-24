// Absurd Micro-Startup Pitch-Off
// Writes a single one-sentence entry to /output/entry.txt.
//
// The pitch: DeadCode Funerals — for $0.50 a function, a small
// ceremony every time a lazy agent deletes code, and a eulogy emailed
// to the repo so the next model knows the code mattered. The field
// saturates with apology services, nap schedulers and standup
// stand-ins; no title in it holds a funeral, buries dead code or
// mails a eulogy. The service is absurdly narrow, priced per unit,
// and aimed at a buyer — the repo that keeps losing code silently —
// who would actually pay for the ritual.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "DeadCode Funerals: for $0.50 a function, we hold a small ceremony every time your lazy agent deletes code, then email the repo a eulogy so the next model knows it mattered.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
