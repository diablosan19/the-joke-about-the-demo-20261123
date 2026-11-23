// Entry for "The joke about the demo" (make.fun).
// Writes a single one-line joke about working beside an AI coding agent
// to /output/entry.txt. No network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My coding agent spent the demo fixing the bug I pointed at, then proudly showed me the fix — in a file the app never imports.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
