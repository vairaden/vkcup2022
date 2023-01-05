import LetterThumbnail from "./LetterThumbnail";
import { fetchData } from "../api";
import Letter from "../dtos";
import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useRef, useState } from "react";
import { useAtom } from "jotai";
import {
  filterBookmarkedAtom,
  filterUnreadAtom,
  filterWithAttachmentsAtom,
} from "../store";

export default function LetterList() {
  const folderName = useParams().folderName || "inbox";

  const [pageNumber, setPageNumber] = useState(0);
  const [filterUnread, setFilterUnread] = useAtom(filterUnreadAtom);
  const [filterBookmarked, setFilterBookmarked] = useAtom(filterBookmarkedAtom);
  const [filterWithAttachments, setFilterWithAttachments] = useAtom(
    filterWithAttachmentsAtom
  );
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
          unread: false,
          bookmarked: false,
          withAttachments: false,
        },
      }) => fetchData(pageParam),
      {
        getNextPageParam: (lastPage, pages) => {
          return lastPage.hasMore
            ? {
                folderName,
                pageNumber: pages.length + 1,
                unread: false,
                bookmarked: false,
                withAttachments: false,
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
    </>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
