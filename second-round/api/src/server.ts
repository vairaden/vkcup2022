import path from "path";
import fs from "fs";
import http from "http";

import { getLetterById, getLettersByFolderName } from "./letterService";

const PORT = 3000;

const MIME_TYPES = new Map([
  ["default", "application/octet-stream"],
  ["html", "text/html; charset=UTF-8"],
  ["js", "application/javascript; charset=UTF-8"],
  ["css", "text/css"],
  ["png", "image/png"],
  ["jpg", "image/jpg"],
  ["gif", "image/gif"],
  ["ico", "image/x-icon"],
  ["svg", "image/svg+xml"],
]);

const prepareFile = async (url: string) => {
  const filePath = path.join(__dirname, url === "/" ? "index.html" : url);
  const exists = fs.existsSync(filePath);
  if (!exists) return { exists };
  const streamPath = filePath;
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { exists, ext, stream };
};

http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000); // 30 days

    if (!req.url) throw new Error("No url");

    // Serving letter by id (/api/:folderName/:letterId)
    if (
      req.url.startsWith("/api") &&
      req.url.split("/")[3] &&
      req.method === "GET"
    ) {
      return getLetterById(req, res);
    }

    // Serving letters in folder (/api/:folderName)
    if (
      req.url.startsWith("/api") &&
      req.url.split("/")[2] &&
      req.method === "GET"
    ) {
      return getLettersByFolderName(req, res);
    }

    // Serving html
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      fs.createReadStream(path.resolve(__dirname, "index.html")).pipe(res);
      return;
    }

    // Serving static files
    const file = await prepareFile(req.url);
    if (!file.exists) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
      return;
    }
    const mimeType = MIME_TYPES.get(file.ext) || MIME_TYPES.get("default");
    res.writeHead(200, { "Content-Type": mimeType });
    file.stream.pipe(res);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
