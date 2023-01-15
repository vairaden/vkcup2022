import { useState } from "react";
import useFilterStore from "../../hooks/useFilterStore";
import useThemeStore from "../../hooks/useThemeStore";
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

  const theme = useThemeStore((state) => state.theme);

  const { text, alt } = useTranslation();

  return (
    <header className="fixed z-10 flex justify-between left-0 top-0 h-14 px-4 py-3 w-[100vw] shadow-sm bg-headerBg">
      <img
        className="block md:hidden"
        src="/mailru_logo/mailru_logo_no_letters.svg"
        alt={alt.mailRuLogo}
      ></img>
      {theme.darkThemeIcons ? (
        <img
          className="hidden md:block"
          src="/mailru_logo/mailru_logo_dark.svg"
          alt={alt.mailRuLogo}
        ></img>
      ) : (
        <img
          className="hidden md:block"
          src="/mailru_logo/mailru_logo.svg"
          alt={alt.mailRuLogo}
        ></img>
      )}
      <button
        className="flex items-center"
        onClick={() => setFiltersOpen((prev) => !prev)}
      >
        {filterBookmarked && (
          <img
            src="/letter_indicators/bookmark_20.svg"
            alt={alt.bookmark}
          ></img>
        )}
        {filterUnread && (
          <div
            className={`mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue`}
          ></div>
        )}
        {filterWithAttachments &&
          (theme.darkThemeIcons ? (
            <img
              src="/icons/dark/attach_outline_dark_20.svg"
              alt={alt.attachment}
            ></img>
          ) : (
            <img
              src="/icons/light/attach_outline_20.svg"
              alt={alt.attachment}
            ></img>
          ))}
        <p className="ml-1 text-menuText">{text.filter}</p>
        {theme.darkThemeIcons ? (
          <img
            src="/icons/dark/chevron_down_outline_dark_20.svg"
            alt={alt.filterSelect}
          ></img>
        ) : (
          <img
            src="/icons/light/chevron_down_outline_20.svg"
            alt={alt.filterSelect}
          ></img>
        )}
      </button>
      {filtersOpen && (
        <div className="flex flex-col fixed top-12 right-6 w-60 py-2 bg-white shadow-md rounded-xl">
          <FilterButton
            active={
              !filterUnread && !filterBookmarked && !filterWithAttachments
            }
            onClick={resetFilters}
          >
            {text.filterAll}
          </FilterButton>
          <FilterButton active={filterUnread} onClick={toggleFilterUnread}>
            <div className="w-6">
              <div
                className={`mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue`}
              ></div>
            </div>
            {text.filterUnread}
          </FilterButton>
          <FilterButton
            active={filterBookmarked}
            onClick={toggleFilterBookmarked}
          >
            <div className="w-6">
              <img
                src="/letter_indicators/bookmark_20.svg"
                alt={alt.bookmark}
              ></img>
            </div>
            {text.filterBookmarked}
          </FilterButton>
          <FilterButton
            active={filterWithAttachments}
            onClick={toggleFilterWithAttachments}
          >
            <div className="w-6">
              {theme.darkThemeIcons ? (
                <img
                  src="/icons/light/attach_outline_20.svg"
                  alt={alt.attachment}
                ></img>
              ) : (
                <img
                  src="/icons/dark/attach_outline_dark_20.svg"
                  alt={alt.attachment}
                ></img>
              )}
            </div>
            {text.filterWithAttachments}
          </FilterButton>
        </div>
      )}
    </header>
  );
}
