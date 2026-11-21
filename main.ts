import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Evening light comes through the window the way it always has, slow across the floor. " +
  "Nothing in the room is asking anything of you. " +
  "Stay here a while. " +
  "When you stand up, you'll know which way to walk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
