import { useEffect, useRef, useState } from "react";
import { Letter } from "../../entities/letter/letterDTO";

interface IParams {
  folderName: string;
  pageSize: number;
  unread: boolean;
  bookmarked: boolean;
  withAttachments: boolean;
  sortOption: string;
  sortDirection: string;
}

interface IPageData {
  pageData: Letter[];
  hasMore: boolean;
}

export async function fetchData(queryKey: string) {
  const url =
    (import.meta.env.DEV ? "http://localhost:3000/api" : "api") + queryKey;

  const res = await fetch(url, {
    method: "GET",
  });

  const data = (await res.json()) as IPageData;
  return data;
}

const getKey = (index: number, params: IParams) => {
  return (
    `/${params.folderName}?` +
    new URLSearchParams({
      page: index.toString(),
      pageSize: params.pageSize.toString(),
      unread: params.unread.toString(),
      bookmarked: params.bookmarked.toString(),
      withAttachments: params.withAttachments.toString(),
      sortOption: params.sortOption,
      sortDirection: params.sortDirection,
    })
  );
};

export default function useLetterList(params: IParams) {
  const [letters, setLetters] = useState<Letter[]>([]);
  const pageToLoad = useRef(0);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  async function loadItems() {
    const queryKey = getKey(pageToLoad.current, params);
    const data = await fetchData(queryKey);
    setHasMore(data.hasMore);
    pageToLoad.current++;
    setLetters((prevLetters) => [...prevLetters, ...data.pageData]);
  }

  useEffect(() => {
    initialPageLoaded.current = false;
    pageToLoad.current = 0;
    setLetters([]);
    loadItems().then(() => {
      initialPageLoaded.current = true;
    });
  }, [
    params.folderName,
    params.pageSize,
    params.unread,
    params.bookmarked,
    params.withAttachments,
    params.sortOption,
    params.sortDirection,
  ]);

  return {
    isLoading: !initialPageLoaded.current,
    letters,
    hasMore,
    loadItems,
  };
}
