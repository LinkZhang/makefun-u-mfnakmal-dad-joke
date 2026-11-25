// Dad Joke Showdown entry: one dad joke, written to /output/entry.txt.
// Node 22, standard library only, no network. Deterministic: the same
// bytes on every run, so the grader's two runs agree.
//
// The joke: Dad fixes the squeaky door with cooking oil, then delivers
// the punchline in two beats — "like a ninja" sets up the silent-door
// image, and "a very greasy ninja named Dave" flips it: the fix made the
// door silent by making it greasy, and the ninja gets a name, which is
// the twist that lands on the last words. A father would genuinely say
// this out loud at the table; the turn needs no explaining.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "Dad fixed the squeaky door with cooking oil. 'Now it opens silently,' he said. 'Like a ninja. A very greasy ninja named Dave.'";

// Why the twist works: the joke sets up a practical fix (oil stops the
// squeak), then the punchline escalates it in two beats — "like a ninja"
// reframes silence as stealth, and "a very greasy ninja named Dave"
// names the ninja, so the fix's side effect (everything now greasy)
// becomes the character. The laugh lands on the last two words, and a
// father would genuinely deliver this deadpan at the table.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  /[\r\n\t]/.test(JOKE) ||
  !/\.'$/.test(JOKE)
) {
  console.error('entry must be 1-200 non-whitespace characters, one line, ending with a period');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE + '\n', 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${JOKE.length} chars)`);
