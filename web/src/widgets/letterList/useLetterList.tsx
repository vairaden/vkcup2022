import useSWRInfinite from "swr/infinite";
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

const getKey = (
  index: number,
  previousPageData: IPageData,
  params: IParams
) => {
  if (previousPageData && !previousPageData.hasMore) return null;
  if (index === 0)
    return `/${params.folderName}?page=0&pageSize=${params.pageSize}&unread=${params.unread}&bookmarked=${params.bookmarked}&withAttachments=${params.withAttachments}`;

  return `/${params.folderName}?page=${index}&pageSize=${params.pageSize}&unread=${params.unread}&bookmarked=${params.bookmarked}&withAttachments=${params.withAttachments}`;
};

export default function useLetterList(params: IParams) {
  const res = useSWRInfinite(
    (index, previousPageData) => getKey(index, previousPageData, params),
    fetchData
  );

  return res;
}
