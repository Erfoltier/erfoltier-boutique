// Usage: node render.mjs <outDir> [fps] [t1,t2,...]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
import { pathToFileURL } from 'url';
import path from 'path';
import fs from 'fs';

const outDir = process.argv[2] || 'frames';
const fps = Number(process.argv[3] || 30);
const only = process.argv[4] ? process.argv[4].split(',').map(Number) : null;
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(pathToFileURL(path.resolve('scene.html')).href + '?capture', { waitUntil: 'networkidle' });
// Touch every scene so all font subsets load before capture.
for (let t = 0; t < 30; t += 0.5) await page.evaluate(x => window.render(x), t);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);

const times = only || Array.from({ length: fps * 30 }, (_, i) => i / fps);
for (let i = 0; i < times.length; i++) {
  await page.evaluate(x => window.render(x), times[i]);
  const name = only ? `t${times[i].toFixed(2)}.png` : `f${String(i).padStart(4, '0')}.jpg`;
  await page.screenshot({ path: path.join(outDir, name), ...(only ? { type: 'png' } : { type: 'jpeg', quality: 93 }) });
}
await browser.close();
