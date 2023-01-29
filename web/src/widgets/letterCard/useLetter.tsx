import useSWR from "swr";
import Letter from "../../shared/dtos";

async function fetchLetterById(queryKey: string) {
  const url =
    (import.meta.env.DEV ? "http://localhost:3000/api" : "api") + queryKey;

  const res = await fetch(url, {
    method: "GET",
  });

  const letter = (await res.json()) as Letter;
  return letter;
}

export default function useLetter(
  folderName: string,
  letterId: string,
  unread: boolean,
  bookmarked: boolean,
  withAttachments: boolean
) {
  const res = useSWR(
    `/${folderName}/${letterId}?unread=${unread}&bookmarked=${bookmarked}&withAttachments=${withAttachments}`,
    fetchLetterById
  );

  return res;
}
