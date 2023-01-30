import path from "path";
import fs from "fs";
import http from "http";

import {
  getLetterById,
  getLettersByFolderName,
  moveLetter,
  sendLetter,
} from "./letterService";

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

http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000); // 30 days

    if (!req.url) throw new Error("No url");

    // Serving letter by id (.../api/:folderName/:letterId?...)
    if (
      req.url.includes("/api/") &&
      req.url.split("/")[3] &&
      req.method === "GET"
    ) {
      return getLetterById(req, res);
    }

    // Move letter to folder (.../api/:folderName/:letterId?...)
    if (
      req.url.includes("/api/") &&
      req.url.split("/")[3] &&
      req.method === "UPDATE"
    ) {
      return moveLetter(req, res);
    }

    // Post letter (.../api/:folderName/:letterId?...)
    if (
      req.url.includes("/api/") &&
      req.url.split("/")[3] &&
      req.method === "POST"
    ) {
      return sendLetter(req, res);
    }

    // Serving letters in folder (.../api/:folderName?...)
    if (
      req.url.includes("/api/") &&
      req.url.split("/")[2] &&
      req.method === "GET"
    ) {
      return getLettersByFolderName(req, res);
    }

    // Serving static files
    if (!req.url.split(".")[1]) {
      req.url = "index.html";
    }

    const filePath = path.join(__dirname, req.url);
    const exists = fs.existsSync(filePath);
    if (!exists) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
      return;
    }
    const ext = path.extname(filePath).substring(1).toLowerCase();
    const contentType = MIME_TYPES.get(ext) || MIME_TYPES.get("default");

    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
