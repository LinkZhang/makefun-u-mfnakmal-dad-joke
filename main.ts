// Dad Joke Showdown entry: one dad joke, written to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: the same
// bytes on every run, so the grader's two runs agree.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "I asked Dad why he never takes the elevator. He said he likes taking steps to improve himself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE + '\n', 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${JOKE.length} chars)`);
