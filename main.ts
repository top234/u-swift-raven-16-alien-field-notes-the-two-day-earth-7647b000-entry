import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Alien Field Notes: The Two Day Earth Review
// One line: an alien tourist's review of planet Earth.
// Tightened: "charged rent" lands the punch harder than "started charging rent".
const review =
  "Four stars: they named their planet 'dirt' in every language, then charged rent just to stand on it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
