import path from "path";
import fs from "fs";
import http from "http";

const PORT = 3000;

interface Letter {
  author: {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
  };
  to: {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
  }[];
  title: string;
  text: string;
  bookmark: boolean;
  important: boolean;
  read: boolean;
  folder?: string;
  date: string;
  doc?: {
    img: string;
  };
}
const data: Letter[] = require("./db.json");

const folders: { [key: string]: string } = {
  sent: "Отправленные",
  drafts: "Черновики",
  archive: "Архив",
  junk: "Спам",
  trash: "Корзина",
};

const MIME_TYPES: { [key: string]: string } = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript; charset=UTF-8",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.resolve(__dirname);

const toBool = [() => true, () => false];

const prepareFile = async (url: string) => {
  const paths = [STATIC_PATH, url];
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + "/404.html";
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000); // 30 days

    if (!req.url) throw new Error("No url");

    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      fs.createReadStream(path.resolve(__dirname, "index.html")).pipe(res);
      return;
    }

    if (req.url === "/api/inbox" && req.method === "GET") {
      const filteredData = data.filter(
        (letter) => letter.folder !== "Отправленные"
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filteredData));
      return;
    }

    if (req.url === "/api/important" && req.method === "GET") {
      const filteredData = data.filter((letter) => letter.important);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filteredData));
      return;
    }

    if (req.url.startsWith("/api") && req.method === "GET") {
      const folderName = req.url.split("/")[2];
      const letterId = req.url.split("/")[3];

      if (letterId !== undefined) {
        let filteredData: Letter[] = [];
        switch (folderName) {
          case "inbox":
            filteredData = data.filter(
              (letter) => letter.folder !== "Отправленные"
            );
            break;
          case "important":
            filteredData = data.filter((letter) => letter.important);
            break;
          default:
            filteredData = data.filter(
              (letter) => letter.folder === folders[folderName]
            );
        }

        const letter = filteredData[parseInt(letterId)];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(letter));
        return;
      }
    }

    if (req.url.startsWith("/api") && req.method === "GET") {
      const folderName = req.url.split("/")[2];
      const filteredData = data.filter(
        (letter) => letter.folder === folders[folderName]
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filteredData));
      return;
    }

    const file = await prepareFile(req.url);
    if (!file.found) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
      return;
    }

    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(200, { "Content-Type": mimeType });
    file.stream.pipe(res);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
/inbox/9;
