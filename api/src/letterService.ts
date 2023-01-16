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

const LETTERS_ON_PAGE = 30;

export function getLettersByFolderName(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (!req.url) throw new Error("No url");

  const pageNumber = parseInt(req.url.split("page=")[1].split("&")[0] ?? "0");

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
    pageNumber * LETTERS_ON_PAGE,
    (pageNumber + 1) * LETTERS_ON_PAGE
  );
  const hasMore = filteredData.length > (pageNumber + 1) * LETTERS_ON_PAGE;
  res.end(JSON.stringify({ pageData, hasMore }));
}

export function getLetterById(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) throw new Error("No url");
  // /inbox/api/inbox/1?unread=false&bookmarked=false&withAttachments=false

  const folderName = req.url.split("/api/")[1].split("/")[0];
  const letterId = req.url.split("/api/")[1].split("/")[1].split("?")[0];

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
