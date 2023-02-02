import clsx from "clsx";
import CheckmarkIcon from "../../shared/icons/CheckmarkIcon";
import useFilterStore from "../../shared/store/useFilterStore";
import useTranslation from "../../shared/translation/useTranslation";
import MenuList from "../../shared/ui/MenuList";
import MenuListItem from "../../shared/ui/MenuListItem";

export default function SortingMenu({
  className,
  onClick,
}: {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
}) {
  const { text } = useTranslation();
  const sortOption = useFilterStore((state) => state.sortOption);
  const sortDirection = useFilterStore((state) => state.sortDirection);
  const setSortOption = useFilterStore((state) => state.setSortOption);
  const setSortDirection = useFilterStore((state) => state.setSortDirection);

  const sortOptions = [
    { text: "sortDateAsc", name: "date", direction: "asc" },
    { text: "sortDateDesc", name: "date", direction: "desc" },
    { text: "sortAuthorAsc", name: "author", direction: "asc" },
    { text: "sortAuthorDesc", name: "author", direction: "desc" },
    { text: "sortTitleAsc", name: "title", direction: "asc" },
    { text: "sortTitleDesc", name: "title", direction: "desc" },
  ];

  return (
    <MenuList onClick={onClick} className={clsx("w-48", className)}>
      {sortOptions.map((option) => (
        <MenuListItem
          key={option.name + option.direction}
          onClick={() => {
            setSortOption(option.name as any);
            setSortDirection(option.direction as any);
          }}
        >
          <>
            <CheckmarkIcon
              className={clsx("w-6", {
                "fill-primaryText":
                  sortOption === option.name &&
                  sortDirection === option.direction,
                "fill-none":
                  sortOption !== option.name ||
                  sortDirection !== option.direction,
              })}
            />
            {text[option.text as keyof typeof text]}
          </>
        </MenuListItem>
      ))}
    </MenuList>
  );
}
