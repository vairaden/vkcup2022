import clsx from "clsx";
import useFilterStore from "../../shared/store/useFilterStore";
import useTranslation from "../../shared/translation/useTranslation";
import FilterButton from "./FilterButton";

export default function SortingMenu({ className }: { className?: string }) {
  const { text } = useTranslation();
  const sortOption = useFilterStore((state) => state.sortOption);
  const sortDirection = useFilterStore((state) => state.sortDirection);
  const setSortOption = useFilterStore((state) => state.setSortOption);
  const setSortDirection = useFilterStore((state) => state.setSortDirection);

  return (
    <div
      className={clsx(
        "flex flex-col fixed w-60 py-2 bg-elementBg text-primaryText shadow-lg rounded-xl",
        className
      )}
    >
      <FilterButton
        active={sortOption === "date" && sortDirection === "desc"}
        onClick={() => {
          setSortOption("date");
          setSortDirection("desc");
        }}
      >
        {text.sortDateAsc}
      </FilterButton>
      <FilterButton
        active={sortOption === "date" && sortDirection === "asc"}
        onClick={() => {
          setSortOption("date");
          setSortDirection("asc");
        }}
      >
        {text.sortDateDesc}
      </FilterButton>
      <FilterButton
        active={sortOption === "author" && sortDirection === "desc"}
        onClick={() => {
          setSortOption("author");
          setSortDirection("desc");
        }}
      >
        {text.sortAuthorAsc}
      </FilterButton>
      <FilterButton
        active={sortOption === "author" && sortDirection === "asc"}
        onClick={() => {
          setSortOption("author");
          setSortDirection("asc");
        }}
      >
        {text.sortAuthorDesc}
      </FilterButton>
      <FilterButton
        active={sortOption === "title" && sortDirection === "desc"}
        onClick={() => {
          setSortOption("title");
          setSortDirection("desc");
        }}
      >
        {text.sortTitleAsc}
      </FilterButton>
      <FilterButton
        active={sortOption === "title" && sortDirection === "asc"}
        onClick={() => {
          setSortOption("title");
          setSortDirection("asc");
        }}
      >
        {text.sortTitleDesc}
      </FilterButton>
    </div>
  );
}
