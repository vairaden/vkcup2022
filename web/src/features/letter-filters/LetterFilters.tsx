import AttachmentIcon from "../../shared/icons/AttachmentIcon";
import BookmarkIcon from "../../shared/icons/letter-indicators/BookmarkIcon";
import useFilterStore from "../../shared/store/useFilterStore";
import useTranslation from "../../shared/translation/useTranslation";
import FilterButton from "./FilterButton";

export default function LetterFilters() {
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

  const { text } = useTranslation();

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
        <BookmarkIcon className="mr-1" />
        {text.filterBookmarked}
      </FilterButton>
      <FilterButton
        active={filterWithAttachments}
        onClick={toggleFilterWithAttachments}
      >
        <AttachmentIcon className="fill-primaryText" />
        {text.filterWithAttachments}
      </FilterButton>
      {(filterBookmarked || filterUnread || filterWithAttachments) && (
        <button
          className="text-primaryText hover:bg-hover transition-colors text-left pl-8 border-t border-separator h-10"
          onClick={resetFilters}
        >
          {text.resetAll}
        </button>
      )}
    </div>
  );
}
