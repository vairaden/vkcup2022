import { IncomingMessage, ServerResponse } from "http";
import { Letter } from "./interfaces";

const data: Letter[] = require("./db.json");

const folders = new Map([
  ["sent", "Отправленные"],
  ["drafts", "Черновики"],
  ["archive", "Архив"],
  ["junk", "Спам"],
  ["trash", "Корзина"],
]);

export function getLettersByFolderName(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (!req.url) throw new Error("No url");

  const pageNumber = parseInt(req.url.split("page=")[1].split("&")[0] ?? "0");
  const lettersOnPage = 5;

  const folderName = req.url.split("/")[2].split("?")[0];
  let filteredData: Letter[] = [];
  switch (folderName) {
    case "inbox":
      filteredData = data.filter((letter) => letter.folder !== "Отправленные");
      break;
    case "important":
      filteredData = data.filter((letter) => letter.important);
      break;
    default:
      filteredData = data.filter(
        (letter) => letter.folder === folders.get(folderName)
      );
      break;
  }

  const unread = req.url.split("unread=")[1].split("&")[0] ?? "false";
  const bookmarked = req.url.split("bookmarked=")[1].split("&")[0] ?? "false";
  const withAttachments =
    req.url.split("withAttachments=")[1].split("&")[0] ?? "false";

  if (unread === "true") {
    filteredData = filteredData.filter((letter) => !letter.read);
  }
  if (bookmarked === "true") {
    filteredData = filteredData.filter((letter) => letter.bookmark);
  }
  if (withAttachments === "true") {
    filteredData = filteredData.filter((letter) => letter.doc !== undefined);
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  const pageData = filteredData.slice(
    pageNumber * lettersOnPage,
    (pageNumber + 1) * lettersOnPage
  );
  const hasMore = filteredData.length > (pageNumber + 1) * lettersOnPage;
  res.end(JSON.stringify({ pageData, hasMore }));
}

export function getLetterById(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) throw new Error("No url");

  const folderName = req.url.split("/")[2].split("?")[0];
  const letterId = req.url.split("/")[3];

  let filteredData: Letter[] = [];

  switch (folderName) {
    case "inbox":
      filteredData = data.filter((letter) => letter.folder !== "Отправленные");
      break;
    case "important":
      filteredData = data.filter((letter) => letter.important);
      break;
    default:
      filteredData = data.filter(
        (letter) => letter.folder === folders.get(folderName)
      );
      break;
  }

  const unread = req.url.split("unread=")[1].split("&")[0] ?? "false";
  const bookmarked = req.url.split("bookmarked=")[1].split("&")[0] ?? "false";
  const withAttachments =
    req.url.split("withAttachments=")[1].split("&")[0] ?? "false";

  if (unread === "true") {
    filteredData = filteredData.filter((letter) => !letter.read);
  }
  if (bookmarked === "true") {
    filteredData = filteredData.filter((letter) => letter.bookmark);
  }
  if (withAttachments === "true") {
    filteredData = filteredData.filter((letter) => letter.doc !== undefined);
  }

  const letter = filteredData[parseInt(letterId)];
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(letter));
}
