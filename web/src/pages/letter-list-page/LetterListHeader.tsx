import { useState } from "react";
import useFilterStore from "../../shared/store/useFilterStore";
import useThemeStore from "../../shared/store/useThemeStore";
import useTranslation from "../../shared/translation/useTranslation";
import LetterFilters from "../../features/letter-filters/LetterFilters";
import AttachmentIcon from "../../shared/icons/AttachmentIcon";
import ChevronDownIcon from "../../shared/icons/controls/ChevronDownIcon";
import MailIcon from "../../shared/icons/MailIcon";
import clsx from "clsx";
import BookmarkIcon from "../../shared/icons/letter-indicators/BookmarkIcon";

export default function LetterListHeader() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );

  const theme = useThemeStore((state) => state.theme);
  const { text } = useTranslation();

  return (
    <header className="fixed z-10 flex justify-between left-0 top-0 h-14 px-4 py-3 w-[100vw] shadow-sm bg-headerBg">
      <MailIcon whiteLetters={theme.name !== "light"} />
      {/* Filters */}
      <div className="flex items-center">
        {filterBookmarked && <BookmarkIcon />}
        {filterUnread && (
          <div className="mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue"></div>
        )}
        {filterWithAttachments && <AttachmentIcon className="fill-menuText" />}
        <button
          className="flex items-center hover:bg-altHover transition-colors rounded-xl p-2"
          onClick={() => setFiltersOpen((prev) => !prev)}
        >
          <p
            className={clsx("ml-1", {
              "text-[rgb(231_232_234)]": theme.name !== "light",
              "text-primaryText": theme.name === "light",
            })}
          >
            {text.filter}
          </p>
          <ChevronDownIcon
            className={clsx({
              "fill-[rgb(231_232_234)]": theme.name !== "light",
              "fill-primaryText": theme.name === "light",
            })}
          />
        </button>
      </div>
      {filtersOpen && <LetterFilters />}
    </header>
  );
}
