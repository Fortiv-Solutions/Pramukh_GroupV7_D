/* Drives installed Chrome: loads the site, scrolls, captures navbar states. */
import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME_PATHS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];
const executablePath = CHROME_PATHS.find((p) => fs.existsSync(p));

const browser = await puppeteer.launch({
  executablePath,
  headless: "new",
  args: ["--window-size=1440,900", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();
await page.goto("http://localhost:3471/", { waitUntil: "networkidle0" });
// let preloader finish + hero settle
await new Promise((r) => setTimeout(r, 3500));
await page.screenshot({ path: "C:/Users/Admin/AppData/Local/Temp/pp_top.png" });

// scroll down — Lenis listens to wheel, but window.scrollTo also moves scrollY
await page.evaluate(() => window.scrollTo({ top: 1600, behavior: "instant" }));
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: "C:/Users/Admin/AppData/Local/Temp/pp_scrolled.png" });

console.log("captured pp_top.png + pp_scrolled.png");
await browser.close();
