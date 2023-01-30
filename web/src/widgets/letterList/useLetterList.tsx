import { useEffect, useRef, useState } from "react";
import Letter from "../../shared/dtos";

interface IParams {
  folderName: string;
  pageSize: number;
  unread: boolean;
  bookmarked: boolean;
  withAttachments: boolean;
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
  return `/${params.folderName}?page=${index}&pageSize=${params.pageSize}&unread=${params.unread}&bookmarked=${params.bookmarked}&withAttachments=${params.withAttachments}`;
};

export default function useLetterList(params: IParams) {
  const [letters, setLetters] = useState<Letter[]>([]);
  const pageToLoad = useRef(0);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const queryKey = getKey(pageToLoad.current, params);

  const loadItems = async () => {
    const data = await fetchData(queryKey);
    setHasMore(data.hasMore);
    pageToLoad.current++;
    setLetters((prevLetters) => [...prevLetters, ...data.pageData]);
  };

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }
    loadItems();
    initialPageLoaded.current = true;
  }, [loadItems]);

  useEffect(() => {
    setLetters([]);
    pageToLoad.current = 0;
    initialPageLoaded.current = false;
  }, [
    params.folderName,
    params.unread,
    params.bookmarked,
    params.withAttachments,
  ]);

  return {
    isLoading: !initialPageLoaded.current,
    letters,
    hasMore,
    loadItems,
  };
}
