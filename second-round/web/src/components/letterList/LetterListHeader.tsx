import { useState } from "react";
import useFilterStore from "../../hooks/useFilterStore";
import useTranslation from "../../hooks/useTranslation";
import FilterButton from "../FilterButton";

export default function LetterListHeader() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );
  const toggleFilterBookmarked = useFilterStore(
    (state) => state.toggleFilterBookmarked
  );
  const toggleFilterUnread = useFilterStore(
    (state) => state.toggleFilterUnread
  );
  const toggleFilterWithAttachments = useFilterStore(
    (state) => state.toggleFilterWithAttachments
  );
  const resetFilters = useFilterStore((state) => state.resetFilters);

  const { text } = useTranslation();

  return (
    <header className="fixed z-10 flex justify-between left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
      <img
        className="block md:hidden"
        src="/mailru_logo/mailru_logo_no_letters.svg"
        alt="Mail ru logo"
      ></img>
      <img
        className="hidden md:block dark:hidden"
        src="/mailru_logo/mailru_logo.svg"
        alt="Mail ru logo"
      ></img>
      <img
        className="hidden md:dark:block"
        src="/mailru_logo/mailru_logo_dark.svg"
        alt="Mail ru logo"
      ></img>
      <button
        className="flex items-center"
        onClick={() => setFiltersOpen((prev) => !prev)}
      >
        {filterBookmarked && <img src="/bookmark_20.svg" alt="Закладка"></img>}
        {filterUnread && (
          <div
            className={`mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue`}
          ></div>
        )}
        {filterWithAttachments && (
          <>
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
          </>
        )}
        {text.filter}
        <img
          src="/icons/light/chevron_down_outline_20.svg"
          alt="Filter dropdown"
        ></img>
      </button>
      {filtersOpen && (
        <div className="flex flex-col fixed top-12 right-6 w-60 bg-white shadow-md rounded-xl">
          <FilterButton
            active={
              !filterUnread && !filterBookmarked && !filterWithAttachments
            }
            onClick={resetFilters}
          >
            {text.filterAll}
          </FilterButton>
          <FilterButton active={filterUnread} onClick={toggleFilterUnread}>
            <div
              className={`mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue`}
            ></div>
            {text.filterUnread}
          </FilterButton>
          <FilterButton
            active={filterBookmarked}
            onClick={toggleFilterBookmarked}
          >
            <img src="/letter_indicators/bookmark_20.svg" alt="Закладка"></img>
            {text.filterBookmarked}
          </FilterButton>
          <FilterButton
            active={filterWithAttachments}
            onClick={toggleFilterWithAttachments}
          >
            <img
              className="ml-1 block dark:hidden"
              src="/icons/light/attach_outline_20.svg"
              alt="Файлы"
            ></img>
            <img
              className="ml-1 hidden dark:block"
              src="/icons/dark/attach_outline_dark_20.svg"
              alt="Файлы"
            ></img>
            {text.filterWithAttachments}
          </FilterButton>
        </div>
      )}
    </header>
  );
}
