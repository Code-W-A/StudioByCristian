const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

/** Same pixel dimensions as source; only re-encode for smaller files. Tune 85–92: higher = closer to original, larger files. */
const WEBP_QUALITY = 88;

const inputDir = process.cwd();
const outputDir = path.join(inputDir, "optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir).filter((file) =>
  /\.(jpg|jpeg)$/i.test(file)
);

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpe?g)$/i, ".webp");
    const outputPath = path.join(outputDir, outputName);

    try {
      await sharp(inputPath)
        .webp({
          quality: WEBP_QUALITY,
          effort: 6,
        })
        .toFile(outputPath);

      console.log(`OK: ${file} -> optimized/${outputName}`);
    } catch (err) {
      console.error(`ERR: ${file}`, err.message);
    }
  }
})();
