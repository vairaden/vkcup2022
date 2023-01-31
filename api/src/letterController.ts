import { IncomingMessage, ServerResponse } from "http";
import { Letter } from "./interfaces";
import { filterLetters, moveLetterToFolder } from "./letterService";

export function getLettersByFolderName(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (!req.url) throw new Error("No url");

  const pageNumber = parseInt(req.url.split("page=")[1].split("&")[0] ?? "0");
  const pageSize = parseInt(
    req.url.split("pageSize=")[1].split("&")[0] ?? "30"
  );

  const filteredData: Letter[] = filterLetters(req.url);

  res.writeHead(200, { "Content-Type": "application/json" });
  const pageData = filteredData.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );
  const hasMore = filteredData.length > (pageNumber + 1) * pageSize;
  res.end(JSON.stringify({ pageData, hasMore }));
}

export function getLetterById(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) throw new Error("No url");
  // /inbox/api/inbox/1?unread=false&bookmarked=false&withAttachments=false

  const letterId = req.url.split("/api/")[1].split("/")[1].split("?")[0];

  const filteredData: Letter[] = filterLetters(req.url);

  const letter = filteredData.find((l) => l.id === parseInt(letterId));
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(letter));
}

export function moveLetter(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) throw new Error("No url");

  const letterId = req.url.split("/api/")[1].split("/")[1].split("?")[0];
  const newFolderName = req.url.split("newFolderName=")[1].split("&")[0];

  moveLetterToFolder(parseInt(letterId), newFolderName);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Letter moved" }));
}

export function sendLetter(req: IncomingMessage, res: ServerResponse) {
  if (!req.url) throw new Error("No url");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Letter sent" }));
}
