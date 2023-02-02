import useSWR from "swr";
import { letterSchema } from "../../entities/letter/schemas/letterSchema";

async function fetchLetterById(queryKey: string) {
  const url =
    (import.meta.env.DEV ? "http://localhost:3000/api" : "api") + queryKey;

  const res = await fetch(url, {
    method: "GET",
  });

  const letter = letterSchema.parse(await res.json());
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
    `/${folderName}/${letterId}?` +
      new URLSearchParams({
        unread: unread.toString(),
        bookmarked: bookmarked.toString(),
        withAttachments: withAttachments.toString(),
        sortOption: "none",
        sortDirection: "desc",
      }),
    fetchLetterById
  );

  return res;
}
