import useFilterStore from "../../hooks/useFilterStore";
import useThemeStore from "../../hooks/useThemeStore";
import useTranslation from "../../hooks/useTranslation";
import FilterButton from "../FilterButton";

export default function FilterMenu() {
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

  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );

  const theme = useThemeStore((state) => state.theme);
  const { text, alt } = useTranslation();

  return (
    <div className="flex flex-col fixed top-12 right-6 w-60 py-2 bg-elementBg text-primaryText shadow-md rounded-xl">
      <FilterButton
        active={!filterUnread && !filterBookmarked && !filterWithAttachments}
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
      <FilterButton active={filterBookmarked} onClick={toggleFilterBookmarked}>
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
          {theme.isDark ? (
            <img
              src="/icons/dark/attach_outline_dark_20.svg"
              alt={alt.attachment}
            ></img>
          ) : (
            <img
              src="/icons/light/attach_outline_20.svg"
              alt={alt.attachment}
            ></img>
          )}
        </div>
        {text.filterWithAttachments}
      </FilterButton>
      {(filterBookmarked || filterUnread || filterWithAttachments) && (
        <button
          className="text-primaryText hover:bg-hover text-left pl-8 border-t border-separator h-10"
          onClick={resetFilters}
        >
          {text.resetAll}
        </button>
      )}
    </div>
  );
}
