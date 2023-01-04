import LetterThumbnail from "./LetterThumbnail";
import { fetchData } from "../api";
import Letter from "../dtos";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";

export default function LetterList() {
  const folderName = useParams().folderName || "inbox";

  const { isLoading, data, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery(["letters", folderName], fetchData, {
      getNextPageParam: (lastPage) =>
        lastPage.nextCursor
          ? {
              limit,
              cursor: lastPage.nextCursor,
              authorId,
            }
          : undefined,
    });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          queryClient.setQueryData(["posts", authorId], (data: any) =>
            data.pages.length === pagesToKeep
              ? {
                  pages: data.pages.slice(1),
                  pageParams: data.pageParams.slice(1),
                }
              : data
          );
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isLoading, pagesToKeep, authorId, queryClient]
  );

  const posts = useMemo(() => {
    let postList: IPost[] = [];
    if (data) {
      for (let page of data.pages) {
        postList = [...postList, ...page.posts];
      }
    }
    return postList;
  }, [data]);

  return data ? (
    <>
      <header className="fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
        <img
          className="block sm:hidden"
          src="/mailru_logo_no_letters.svg"
          alt="Mail ru logo"
        ></img>
        <img
          className="hidden sm:block dark:hidden"
          src="/mailru_logo.svg"
          alt="Mail ru logo"
        ></img>
        <img
          className="hidden sm:dark:block"
          src="/mailru_logo_dark.svg"
          alt="Mail ru logo"
        ></img>
      </header>
      <section className="mb-3 bg-white dark:bg-darkGray rounded-xl">
        <ul>
          {data.map((letterData, index) => (
            <>
              <LetterThumbnail
                to={`/${folderName}/${index}`}
                key={letterData.text}
                data={letterData}
              />
              {index === data.length - 1 ? (
                <div
                  ref={lastPostRef}
                  className="h-[1px] mx-auto w-[85%] bg-separatorGray dark:bg-black last:hidden"
                ></div>
              ) : (
                <div className="h-[1px] mx-auto w-[85%] bg-separatorGray dark:bg-black"></div>
              )}
            </>
          ))}
        </ul>
      </section>
    </>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
