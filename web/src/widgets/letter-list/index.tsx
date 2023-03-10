import LetterThumbnail from "../../entities/letter/LetterThumbnail";
import { useLocation, useParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import useTranslation from "../../shared/translation/useTranslation";
import useFilterStore from "../../shared/store/useFilterStore";
import useThemeStore from "../../shared/store/useThemeStore";
import useLetterList from "./useLetterList";
import clsx from "clsx";

export default function LetterList() {
  const folderName = useParams().folderName || "inbox";
  const location = useLocation();
  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );
  const sortOption = useFilterStore((state) => state.sortOption);
  const sortDirection = useFilterStore((state) => state.sortDirection);

  const currentTheme = useThemeStore((state) => state.theme);

  const { text, alt } = useTranslation();

  const [selectedLetterIds, setSelectedLetterIds] = useState<number[]>([]);

  const { isLoading, letters, hasMore, loadItems } = useLetterList({
    folderName,
    pageSize: 20,
    unread: filterUnread,
    bookmarked: filterBookmarked,
    withAttachments: filterWithAttachments,
    sortOption,
    sortDirection,
  });

  useEffect(() => {
    setSelectedLetterIds([]);
  }, [
    folderName,
    filterUnread,
    filterBookmarked,
    filterWithAttachments,
    sortOption,
    sortDirection,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedLetterIds([]);
  }, [location]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadItems]
  );

  return isLoading ? (
    <div className="flex justify-center items-center h-screen text-menuText">
      <h2>{text.loading}</h2>
    </div>
  ) : letters.length > 0 ? (
    <section className="mb-3 bg-elementBg rounded-xl">
      <ul>
        {letters.map((letterData, index, array) => (
          <li key={letterData.id}>
            <LetterThumbnail
              to={`/${folderName}/${letterData.id}`}
              data={letterData}
              selected={selectedLetterIds.includes(letterData.id)}
              selectedLetterIds={selectedLetterIds}
              setSelected={(id: number, selected: boolean) => {
                if (selected) {
                  setSelectedLetterIds((prev) => [...prev, id]);
                } else {
                  setSelectedLetterIds((prev) =>
                    prev.filter((letterId) => letterId !== id)
                  );
                }
              }}
              selectAll={() => {
                setSelectedLetterIds(array.map((letter) => letter.id));
              }}
              deselectAll={() => {
                setSelectedLetterIds([]);
              }}
              className={clsx("rounded-xl", {
                "rounded-t-none":
                  selectedLetterIds.includes(array[index - 1]?.id) &&
                  selectedLetterIds.includes(letterData.id),
                "rounded-b-none":
                  selectedLetterIds.includes(array[index + 1]?.id) &&
                  selectedLetterIds.includes(letterData.id),
              })}
            />
            {/* Separators */}
            {index === letters.length - 11 ? (
              <div
                ref={lastPostRef}
                className={clsx("h-px mx-auto", {
                  "w-full bg-selected":
                    selectedLetterIds.includes(array[index + 1]?.id) &&
                    selectedLetterIds.includes(letterData.id),
                  "w-11/12 bg-separator":
                    !selectedLetterIds.includes(array[index + 1]?.id) &&
                    !selectedLetterIds.includes(letterData.id),
                })}
              ></div>
            ) : (
              index !== letters.length - 1 && (
                <div
                  className={clsx("h-px mx-auto", {
                    "w-full bg-selected":
                      selectedLetterIds.includes(array[index + 1]?.id) &&
                      selectedLetterIds.includes(letterData.id),
                    "w-11/12 bg-separator":
                      !selectedLetterIds.includes(array[index + 1]?.id) &&
                      !selectedLetterIds.includes(letterData.id),
                  })}
                ></div>
              )
            )}
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-68px)]">
      {currentTheme.name === "image" ? (
        <img src="/icons/no_letters_other.svg" alt={alt.noLetters}></img>
      ) : !currentTheme.darkThemeIcons ? (
        <img src="/icons/no_letters.svg" alt={alt.noLetters}></img>
      ) : (
        <img src="/icons/no_letters_dark.svg" alt={alt.noLetters}></img>
      )}
      <h2 className="mt-6 text-2xl font-semibold text-menuText">
        {alt.noLetters}
      </h2>
    </div>
  );
}
