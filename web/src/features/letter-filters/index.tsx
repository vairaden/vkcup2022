import clsx from "clsx";
import { useState } from "react";
import AttachmentIcon from "../../shared/icons/AttachmentIcon";
import CheckmarkIcon from "../../shared/icons/CheckmarkIcon";
import ChevronLeftIcon from "../../shared/icons/controls/ChevronLeftIcon";
import BookmarkIcon from "../../shared/icons/letter-indicators/BookmarkIcon";
import useFilterStore from "../../shared/store/useFilterStore";
import useTranslation from "../../shared/translation/useTranslation";
import MenuList from "../../shared/ui/MenuList";
import MenuListItem from "../../shared/ui/MenuListItem";
import SortingMenu from "./SortingMenu";

export default function LetterFilters({
  closeCallback,
}: {
  closeCallback: () => void;
}) {
  const toggleFilterBookmarked = useFilterStore(
    (state) => state.toggleFilterBookmarked
  );
  const toggleFilterUnread = useFilterStore(
    (state) => state.toggleFilterUnread
  );
  const toggleFilterWithAttachments = useFilterStore(
    (state) => state.toggleFilterWithAttachments
  );
  const filtersApplied = useFilterStore((state) => state.filtersApplied);
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const resetAll = useFilterStore((state) => state.resetAll);

  const filterUnread = useFilterStore((state) => state.filterUnread);
  const filterBookmarked = useFilterStore((state) => state.filterBookmarked);
  const filterWithAttachments = useFilterStore(
    (state) => state.filterWithAttachments
  );

  const [sortingMenuOpen, setSortingMenuOpen] = useState(false);

  const { text } = useTranslation();

  return (
    <div
      onClick={closeCallback}
      className="fixed top-0 left-0 w-full h-full z-50"
    >
      <MenuList
        className="w-60 absolute top-12 right-6"
        onClick={(e) => e.stopPropagation()}
      >
        <MenuListItem onClick={resetFilters}>
          <CheckmarkIcon
            className={clsx("w-6", {
              "fill-primaryText":
                !filterUnread && !filterBookmarked && !filterWithAttachments,
              "fill-none":
                filterUnread || filterBookmarked || filterWithAttachments,
            })}
          />
          {text.filterAll}
        </MenuListItem>
        <MenuListItem onClick={toggleFilterUnread}>
          <CheckmarkIcon
            className={clsx("w-6", {
              "fill-primaryText": filterUnread,
              "fill-none": !filterUnread,
            })}
          />
          <div className="w-6 mr-1">
            <div
              className={`mx-2 h-[6px] w-[6px] rounded-md bg-electricBlue`}
            ></div>
          </div>
          {text.filterUnread}
        </MenuListItem>
        <MenuListItem onClick={toggleFilterBookmarked}>
          <CheckmarkIcon
            className={clsx("w-6", {
              "fill-primaryText": filterBookmarked,
              "fill-none": !filterBookmarked,
            })}
          />
          <BookmarkIcon className="mr-2" />
          {text.filterBookmarked}
        </MenuListItem>
        <MenuListItem onClick={toggleFilterWithAttachments}>
          <CheckmarkIcon
            className={clsx("w-6", {
              "fill-primaryText": filterWithAttachments,
              "fill-none": !filterWithAttachments,
            })}
          />
          <AttachmentIcon className="fill-primaryText mr-1" />
          {text.filterWithAttachments}
        </MenuListItem>
        <button
          className="relative flex items-center text-primaryText hover:bg-hover transition-colors text-left pl-8 border-t border-separator h-10"
          onClick={() => {
            setSortingMenuOpen(!sortingMenuOpen);
          }}
        >
          <ChevronLeftIcon className="fill-primaryText" />
          {text.sort}
          {sortingMenuOpen && (
            <SortingMenu
              className="absolute top-0 left-0 -translate-x-full"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </button>
        {filtersApplied && (
          <button
            className="text-primaryText hover:bg-hover transition-colors text-left pl-8 border-t border-separator h-10"
            onClick={resetAll}
          >
            {text.resetAll}
          </button>
        )}
      </MenuList>
    </div>
  );
}
