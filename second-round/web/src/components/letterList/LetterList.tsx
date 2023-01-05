import LetterThumbnail from "./LetterThumbnail";
import { fetchData } from "../../api";
import Letter from "../../dtos";
import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";
import { useAtom } from "jotai";
import {
  filterBookmarkedAtom,
  filterUnreadAtom,
  filterWithAttachmentsAtom,
} from "../../store";

export default function LetterList() {
  const folderName = useParams().folderName || "inbox";

  const [filterUnread] = useAtom(filterUnreadAtom);
  const [filterBookmarked] = useAtom(filterBookmarkedAtom);
  const [filterWithAttachments] = useAtom(filterWithAttachmentsAtom);
  const queryClient = useQueryClient();

  const { isLoading, data, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      [
        "letters",
        folderName,
        filterUnread,
        filterBookmarked,
        filterWithAttachments,
      ],
      ({
        pageParam = {
          folderName,
          pageNumber: 0,
          unread: filterUnread,
          bookmarked: filterBookmarked,
          withAttachments: filterWithAttachments,
        },
      }) => fetchData(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          return lastPage.hasMore
            ? {
                folderName,
                pageNumber: pages.length,
                unread: filterUnread,
                bookmarked: filterBookmarked,
                withAttachments: filterWithAttachments,
              }
            : undefined;
        },
      }
    );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isLoading, folderName, queryClient]
  );

  const letters = useMemo(() => {
    let letterList: Letter[] = [];
    if (data) {
      for (let page of data.pages) {
        letterList = [...letterList, ...page.pageData];
      }
    }
    return letterList;
  }, [data]);

  return data ? (
    <section className="mb-3 bg-white dark:bg-darkGray rounded-xl">
      <ul>
        {letters.map((letterData, index) => (
          <>
            <LetterThumbnail
              to={`/${folderName}/${index}`}
              key={index}
              data={letterData}
            />
            {index === letters.length - 1 ? (
              <div ref={lastPostRef}></div>
            ) : (
              <div className="h-[1px] mx-auto w-[85%] bg-separatorGray dark:bg-black"></div>
            )}
          </>
        ))}
      </ul>
    </section>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
