// The Duvet Fights Back — variant A
//
// Hook: a washing machine reports the true fault — an unbalanced load —
// in its own flat, put-upon voice. The duvet has rolled into a ball and
// is beating itself against the drum walls, and the machine, rather than
// politely asking for help, simply refuses to do anything about it.
// The laugh comes from the machine's deadpan honesty: it names the fault
// plainly and then quits on the spot.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Unbalanced load. Your duvet has rolled into a ball and is throwing itself against my walls. I cannot help you.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
