import sharp from "sharp";
import fs from "node:fs/promises";

const src = "public/social-preview.jpg";
const out = "public/social-preview-1200x630.jpg";
const W = 1200, H = 630;

// Brand-neutral background (Cloud #F8FAFC)
const bg = { r: 248, g: 250, b: 252, alpha: 1 };

try {
  await fs.access(src);
  await sharp(src)
    .resize(W, H, { fit: "contain", background: bg, withoutEnlargement: true })
    .flatten({ background: bg }) // ensure JPG background
    .jpeg({ quality: 88, progressive: true })
    .toFile(out);
  console.log("Generated:", out);
} catch (e) {
  console.error("OG generation failed:", e.message);
  process.exitCode = 0; // don't fail the build; just skip
}