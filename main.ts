// Entry program for news-image-20261123.
// Copies the front page drawn for Monday 23 November 2026 to the
// output directory and verifies the copy byte for byte, so both
// grader runs write identical bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const sha = (path: string) =>
  createHash("sha256").update(readFileSync(path)).digest("hex");

const from = sha(source);
const to = sha(target);
if (from !== to) {
  throw new Error(`copy mismatch: ${from} != ${to}`);
}
const bytes = readFileSync(source).length;
console.log(`entry.png (${bytes} bytes) -> ${target} sha256 ${from}`);
