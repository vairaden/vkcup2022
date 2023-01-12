import Letter from "../dtos";

export async function fetchData({
  folderName = "inbox",
  pageNumber = 0,
  unread = false,
  bookmarked = false,
  withAttachments = false,
}: {
  pageParam?: number;
  folderName: string;
  pageNumber: number;
  unread: boolean;
  bookmarked: boolean;
  withAttachments: boolean;
}) {
  let url = "";
  if (import.meta.env.DEV) {
    url = `http://localhost:3000/api/${folderName}?page=${pageNumber}&unread=${unread}&bookmarked=${bookmarked}&withAttachments=${withAttachments}`;
  } else {
    url = `api/${folderName}?page=${pageNumber}&unread=${unread}&bookmarked=${bookmarked}&withAttachments=${withAttachments}`;
  }

  const res = await fetch(url, {
    method: "GET",
  });
  const data = (await res.json()) as { pageData: Letter[]; hasMore: boolean };
  return data;
}

export async function fetchLetterById(
  folderName: string,
  letterId: string,
  unread: boolean,
  bookmarked: boolean,
  withAttachments: boolean
) {
  let url = "";
  if (import.meta.env.DEV) {
    url = `http://localhost:3000/api/${folderName}/${letterId}?unread=${unread}&bookmarked=${bookmarked}&withAttachments=${withAttachments}`;
  } else {
    url = `api/${folderName}/${letterId}?unread=${unread}&bookmarked=${bookmarked}&withAttachments=${withAttachments}`;
  }
  const res = await fetch(url, {
    method: "GET",
  });
  const letter = (await res.json()) as Letter;
  return letter;
}
