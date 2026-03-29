const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

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
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`OK: ${file} -> optimized/${outputName}`);
    } catch (err) {
      console.error(`ERR: ${file}`, err.message);
    }
  }
})();
