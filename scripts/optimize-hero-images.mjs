// Optimize hero images: PNG -> WebP + JPG fallback, max 2400px wide
// Run: node scripts/optimize-hero-images.mjs

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

// Optimize hero/, sections/, team/ and backgrounds/ folders
const DIRS = [
  './public/images/hero',
  './public/images/sections',
  './public/images/team',
  './public/images/backgrounds',
];
const MAX_WIDTH = 2400;
const WEBP_QUALITY = 82;
const JPG_QUALITY = 85;

async function optimizeImage(inputPath) {
  const name = basename(inputPath, extname(inputPath));
  const dir = join(inputPath, '..');
  const webpPath = join(dir, `${name}.webp`);
  const jpgPath = join(dir, `${name}.jpg`);

  const inputStat = await stat(inputPath);
  const inputKB = (inputStat.size / 1024).toFixed(0);

  // Get metadata
  const meta = await sharp(inputPath).metadata();
  const targetWidth = Math.min(meta.width, MAX_WIDTH);

  // WebP version (primary)
  await sharp(inputPath)
    .resize(targetWidth, null, { withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toFile(webpPath);

  // JPG version (fallback for older browsers)
  await sharp(inputPath)
    .resize(targetWidth, null, { withoutEnlargement: true })
    .jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true })
    .toFile(jpgPath);

  const webpStat = await stat(webpPath);
  const jpgStat = await stat(jpgPath);
  const webpKB = (webpStat.size / 1024).toFixed(0);
  const jpgKB = (jpgStat.size / 1024).toFixed(0);
  const savings = (100 - (webpStat.size / inputStat.size) * 100).toFixed(0);

  console.log(`${basename(inputPath).padEnd(35)} ${inputKB}KB -> webp ${webpKB}KB (-${savings}%) | jpg ${jpgKB}KB`);
}

async function main() {
  console.log(`\nOptimizing images (max ${MAX_WIDTH}px, WebP q${WEBP_QUALITY}, JPG q${JPG_QUALITY})\n`);

  for (const dir of DIRS) {
    let files;
    try { files = await readdir(dir); } catch { continue; }
    const pngs = files.filter((f) => f.toLowerCase().endsWith('.png'));
    if (!pngs.length) continue;
    console.log(`\n--- ${dir} (${pngs.length} PNG) ---`);
    console.log('FILE'.padEnd(40) + 'BEFORE   AFTER');
    console.log('-'.repeat(80));
    for (const png of pngs) {
      await optimizeImage(join(dir, png));
    }
  }

  console.log('\nDone. WebP + JPG generated alongside PNG originals.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
