import { Letter } from "./interfaces";

let data: Letter[] = require("./db.json");
data = data.map((letter, index) => ({ ...letter, id: index }));

export const folders = new Map([
  ["sent", "Отправленные"],
  ["drafts", "Черновики"],
  ["archive", "Архив"],
  ["junk", "Спам"],
  ["trash", "Корзина"],
]);

export function filterLetters(url: string) {
  const folderName = url.split("/")[2].split("?")[0];
  const unread = url.split("unread=")[1].split("&")[0] ?? "false";
  const bookmarked = url.split("bookmarked=")[1].split("&")[0] ?? "false";
  const withAttachments =
    url.split("withAttachments=")[1].split("&")[0] ?? "false";

  const sortOption = (url.split("sortOption=")[1].split("&")[0] ?? "date") as
    | "none"
    | "date"
    | "title";
  const sortDirection = (url.split("sortDirection=")[1].split("&")[0] ??
    "desc") as "asc" | "desc";

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

  if (unread === "true") {
    filteredData = filteredData.filter((letter) => !letter.read);
  }
  if (bookmarked === "true") {
    filteredData = filteredData.filter((letter) => letter.bookmark);
  }
  if (withAttachments === "true") {
    filteredData = filteredData.filter((letter) => letter.doc !== undefined);
  }
  if (sortOption !== "none") {
    filteredData = filteredData.sort((a, b) => {
      if (a[sortOption] > b[sortOption])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortOption] < b[sortOption])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  return filteredData;
}

export function moveLetterToFolder(letterId: number, newFolderName: string) {
  data[letterId].folder = folders.get(newFolderName);
}
