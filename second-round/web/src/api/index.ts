import Letter from "../dtos";

export async function fetchData(
  folderName: string,
  pageNumber: number,
  unread: boolean,
  bookmarked: boolean,
  withAttachments: boolean
) {
  const res = await fetch(
    `http://localhost:3000/api/${folderName}?page=${pageNumber}&unread=${unread}&bookmarked=${bookmarked}&withAttachments=${withAttachments}`,
    {
      method: "GET",
    }
  );
  const letters = (await res.json()) as Letter[];
  return letters;
}

export async function fetchLetterById(folderName: string, letterId: string) {
  const res = await fetch(
    `http://localhost:3000/api/${folderName}/${letterId}`,
    {
      method: "GET",
    }
  );
  const letter = (await res.json()) as Letter;
  return letter;
}
