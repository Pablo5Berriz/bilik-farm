#!/usr/bin/env node
/**
 * Script to optimize images in the public/images directory
 * Usage: node scripts/optimize-images.js
 * Requires: npm install -D sharp
 */

const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '../frontend/public/images');
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.error('sharp is not installed. Run: npm install -D sharp');
    process.exit(1);
  }

  if (!fs.existsSync(INPUT_DIR)) {
    console.log('No images directory found. Creating:', INPUT_DIR);
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    return;
  }

  const files = fs.readdirSync(INPUT_DIR).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

  if (files.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Optimizing ${files.length} image(s)...`);

  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);
    const outputPath = path.join(INPUT_DIR, `${path.parse(file).name}.webp`);

    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    console.log(`✓ ${file} → ${path.basename(outputPath)}`);
  }

  console.log('Done!');
}

optimizeImages().catch(console.error);
