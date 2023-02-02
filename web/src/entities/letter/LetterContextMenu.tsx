import clsx from "clsx";
import { ReactNode } from "react";
import ChevronDownIcon from "../../shared/icons/controls/ChevronDownIcon";
import useTranslation from "../../shared/translation/useTranslation";
import MenuList from "../../shared/ui/MenuList";
import MenuListItem from "../../shared/ui/MenuListItem";
import folderList, { StandardFolderIcons } from "../folder/folderList";

export function LetterContextMenu({
  className,
  closeCallback,
  x,
  y,
  selectedLetterIds,
  selected,
  selectAll,
  deselectAll,
}: {
  className?: string;
  closeCallback: () => void;
  x: number;
  y: number;
  selectedLetterIds: number[];
  selected: boolean;
  selectAll: () => void;
  deselectAll: () => void;
}) {
  const { text } = useTranslation();
  return (
    <div
      onClick={closeCallback}
      className="fixed top-0 left-0 w-full h-full z-50"
    >
      <div
        className={clsx("relative w-fit m-0", className)}
        style={{ top: y, left: x }}
      >
        <MenuList>
          <MenuListItem className="group/folderList w-60" onClick={() => {}}>
            {`${text.move} ${
              selectedLetterIds && selectedLetterIds.length > 0 && selected
                ? selectedLetterIds.length +
                  " " +
                  text.letter(selectedLetterIds.length)
                : ""
            }`}
            <ChevronDownIcon className="ml-auto -rotate-90 fill-primaryText" />
            <MenuList className="absolute top-0 left-0 w-40 translate-x-60 hidden group-hover/folderList:block">
              {folderList.map((folder) => (
                <MenuListItem onClick={() => {}} key={folder.name}>
                  <StandardFolderIcons
                    folderName={folder.name}
                    className="fill-primaryText"
                  />
                  <p className="text-primaryText ml-2">
                    {
                      text[
                        (folder.name + "Folder") as keyof typeof text
                      ] as string
                    }
                  </p>
                </MenuListItem>
              ))}
            </MenuList>
          </MenuListItem>
          {selectAll && (
            <MenuListItem onClick={selectAll}>{text.selectAll}</MenuListItem>
          )}
          {deselectAll && (
            <MenuListItem onClick={deselectAll}>
              {text.deselectAll}
            </MenuListItem>
          )}
        </MenuList>
      </div>
    </div>
  );
}
