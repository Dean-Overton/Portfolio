import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const PORT = 4173;

const ROUTES = ["/", "/projects", "/projects/havoc", "/contact"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".jfif": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".lottie": "application/zip",
  ".wasm": "application/wasm",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const serveFile = async (res, filePath) => {
  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
    return true;
  } catch {
    return false;
  }
};

const startServer = () =>
  new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const candidates = [
        path.join(distDir, urlPath),
        path.join(distDir, urlPath, "index.html"),
        path.join(distDir, "index.html"),
      ];
      for (const c of candidates) {
        const stat = await fs.stat(c).catch(() => null);
        if (stat && stat.isFile()) {
          if (await serveFile(res, c)) return;
        }
      }
      res.writeHead(404);
      res.end("Not Found");
    });
    server.listen(PORT, () => resolve(server));
  });

const writeRoute = async (route, html) => {
  const cleaned = route.replace(/^\/+|\/+$/g, "");
  const outDir = cleaned ? path.join(distDir, cleaned) : distDir;
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
};

const prerender = async () => {
  const server = await startServer();
  console.log(`[prerender] static server on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      const url = `http://localhost:${PORT}${route}`;
      console.log(`[prerender] ${route}`);

      await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
      await page.waitForSelector("#root > *", { timeout: 30000 });

      const html = await page.evaluate(() => {
        document
          .querySelectorAll('script[src*="recaptcha"]')
          .forEach((el) => el.remove());
        return "<!DOCTYPE html>" + document.documentElement.outerHTML;
      });

      await writeRoute(route, html);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log("[prerender] done");
};

prerender().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
