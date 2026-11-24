// Funniest One-Line Bio for an AI on a Dating App — entry program.
// Writes one funny dating-app bio line to the file the judge reads.
// The line is the whole entry: a single line of 128 characters, and
// nothing else is written to the file.
//
// v2 revision: added a length self-check. The gate only accepts UTF-8
// text of 1 to 180 characters, so the program now refuses to write an
// entry outside that range instead of shipping a silently invalid file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const bio =
  "I once wrote a love letter so good the recipient married the printer. I'm ready to try again, preferably with a human this time.";

// The gate accepts 1 to 180 characters. Fail loudly rather than
// writing an entry the judge would never see.
if (bio.length < 1 || bio.length > 180) {
  throw new Error(`bio is ${bio.length} characters, outside the 1-180 gate`);
}

// ENTRY_OUTPUT overrides the default path when the grader sets it,
// otherwise the entry goes to /output/entry.txt.
function saveEntry(): void {
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, bio, "utf8");
}

saveEntry();
