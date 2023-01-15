import LetterThumbnail from "./LetterThumbnail";
import { fetchData } from "../../api";
import Letter from "../../dtos";
import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";
import useTranslation from "../../hooks/useTranslation";
import useFilterStore from "../../hooks/useFilterStore";
import useThemeStore from "../../hooks/useThemeStore";

export default function LetterList() {
  const folderName = useParams().folderName || "inbox";
  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );

  const queryClient = useQueryClient();
  const currentTheme = useThemeStore((state) => state.theme);

  const { text, alt } = useTranslation();

  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
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

  return isLoading ? (
    <div className="flex justify-center items-center h-screen text-menuText">
      <h2>{text.loading}</h2>
    </div>
  ) : letters.length > 0 ? (
    <section className="mb-3 bg-elementBg rounded-xl">
      <ul>
        {letters.map((letterData, index) => (
          <li key={index}>
            <LetterThumbnail to={`/${folderName}/${index}`} data={letterData} />
            {index === letters.length - 2 ? (
              <div
                ref={lastPostRef}
                className="h-[1px] mx-auto w-[85%] bg-separator"
              ></div>
            ) : (
              index !== letters.length - 1 && (
                <div className="h-[1px] mx-auto w-[85%] bg-separator"></div>
              )
            )}
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <div className="flex items-center justify-center h-[calc(100vh-68px)]">
      {currentTheme.name === "image" ? (
        <img src="/icons/no_letters_other.svg" alt={alt.noLetters}></img>
      ) : !currentTheme.darkThemeIcons ? (
        <img src="/icons/light/no_letters.svg" alt={alt.noLetters}></img>
      ) : (
        <img src="/icons/dark/no_letters_dark.svg" alt={alt.noLetters}></img>
      )}
    </div>
  );
}
