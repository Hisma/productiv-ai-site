// scripts/fix-svg.js
//-----------------------------------------------------------------
// Mermaid SVG cleaner — now with optional icon-stylesheet keep
//
//   node scripts/fix-svg.js [folder]          # keeps Font-Awesome
//   node scripts/fix-svg.js [folder] --strip  # strips xml-stylesheet
//
// Add to package.json:
//   "build": "astro build",
//   "postbuild": "node scripts/fix-svg.js dist"
//
// Node ≥18, no external deps.
//-----------------------------------------------------------------
import { promises as fs } from "node:fs";
import { join, extname } from "node:path";

const ENT_MAP = {
  nbsp: "&#160;",
  ndash: "&#8211;",
  mdash: "&#8212;",
  lsquo: "&#8216;",
  rsquo: "&#8217;",
  ldquo: "&#8220;",
  rdquo: "&#8221;",
  hellip: "&#8230;",
};

const ROOT = process.argv[2] ?? "dist";
const STRIP = process.argv.includes("--strip"); // pass --strip to drop css

/* ------------------------------------------------------------------------ */
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (extname(p) === ".svg") await patch(p);
  }
}

async function patch(file) {
  let txt = await fs.readFile(file, "utf8");

  // 1. replace Mermaid’s HTML entities
  txt = txt.replace(
    /&(nbsp|ndash|mdash|lsquo|rsquo|ldquo|rdquo|hellip);/g,
    (_, n) => ENT_MAP[n] ?? _,
  );

  // 2. convert bare <br> → <br/>
  txt = txt.replace(/<br\s*>/g, "<br/>");

  // 3. optionally strip external stylesheet PI
  if (STRIP) txt = txt.replace(/<\?xml-stylesheet[\s\S]*?\?>/g, "");

  await fs.writeFile(file, txt);
  console.log(`✓ cleaned ${file}`);
}

/* Kick it off */
await walk(ROOT);
