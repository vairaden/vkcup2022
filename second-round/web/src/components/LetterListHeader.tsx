import { useAtom } from "jotai";
import { useState } from "react";
import {
  filterBookmarkedAtom,
  filterUnreadAtom,
  filterWithAttachmentsAtom,
} from "../store";
import FilterButton from "./FilterButton";

export default function LetterListHeader() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterUnread, setFilterUnread] = useAtom(filterUnreadAtom);
  const [filterBookmarked, setFilterBookmarked] = useAtom(filterBookmarkedAtom);
  const [filterWithAttachments, setFilterWithAttachments] = useAtom(
    filterWithAttachmentsAtom
  );

  return (
    <header className="flex justify-between fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
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
      <div>
        <button
          className="flex items-center"
          onClick={() => setFiltersOpen((prev) => !prev)}
        >
          Фильтр
          <img src="/chevron_down_outline_20.svg" alt="Filter dropdown"></img>
        </button>
        {filtersOpen && (
          <div className="flex flex-col fixed translate-x-[-160px] w-60 h-60 bg-white shadow-md rounded-xl">
            <FilterButton
              active={
                !filterUnread && !filterBookmarked && !filterWithAttachments
              }
              onClick={() => {
                setFilterUnread(false);
                setFilterBookmarked(false);
                setFilterWithAttachments(false);
              }}
            >
              Все письма
            </FilterButton>
            <FilterButton
              active={filterUnread}
              onClick={() => setFilterUnread((prev) => !prev)}
            >
              <div
                className={`mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue`}
              ></div>
              Непрочитанные
            </FilterButton>
            <FilterButton
              active={filterBookmarked}
              onClick={() => setFilterBookmarked((prev) => !prev)}
            >
              <img src="/bookmark_20.svg" alt="Закладка"></img>С флажком
            </FilterButton>
            <FilterButton
              active={filterWithAttachments}
              onClick={() => setFilterWithAttachments((prev) => !prev)}
            >
              <img
                className="ml-1 block dark:hidden"
                src="/attach_outline_20.svg"
                alt="Файлы"
              ></img>
              <img
                className="ml-1 hidden dark:block"
                src="/attach_outline_dark_20.svg"
                alt="Файлы"
              ></img>
              С вложениями
            </FilterButton>
          </div>
        )}
      </div>
    </header>
  );
}