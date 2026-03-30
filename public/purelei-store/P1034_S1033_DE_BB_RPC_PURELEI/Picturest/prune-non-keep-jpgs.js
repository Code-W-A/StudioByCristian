const fs = require("fs");
const path = require("path");

/** Keep in sync with lib/purelei-picturest-keep.ts */
const KEEP_BASES = new Set([
  "_EWP7369",
  "_EWP7415",
  "_EWP7430",
  "_EWP7377",
  "_EWP7381",
]);

const dir = __dirname;

for (const file of fs.readdirSync(dir)) {
  if (!/\.(jpe?g)$/i.test(file)) continue;
  const base = path.parse(file).name;
  if (KEEP_BASES.has(base)) continue;
  fs.unlinkSync(path.join(dir, file));
  console.log("removed:", file);
}

console.log("Done. Kept JPEG basenames:", [...KEEP_BASES].join(", "));
