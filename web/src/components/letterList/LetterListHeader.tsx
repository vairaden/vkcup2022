import { useState } from "react";
import useFilterStore from "../../hooks/useFilterStore";
import useThemeStore from "../../hooks/useThemeStore";
import useTranslation from "../../hooks/useTranslation";
import FilterMenu from "./FilterMenu";

export default function LetterListHeader() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );

  const theme = useThemeStore((state) => state.theme);
  const { text, alt } = useTranslation();

  return (
    <header className="fixed z-10 flex justify-between left-0 top-0 h-14 px-4 py-3 w-[100vw] shadow-sm bg-headerBg">
      {/* Logo */}
      <img
        className="block md:hidden"
        src="/mailru_logo/mailru_logo_no_letters.svg"
        alt={alt.mailRuLogo}
      ></img>
      {theme.name !== "light" ? (
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
      {/* Filters */}
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
          (theme.name !== "light" ? (
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
        <p
          className={`ml-1 ${
            theme.name === "light" ? "text-black" : "text-white"
          }`}
        >
          {text.filter}
        </p>
        {theme.name !== "light" ? (
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
      {filtersOpen && <FilterMenu />}
    </header>
  );
}
