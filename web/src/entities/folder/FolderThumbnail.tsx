import clsx from "clsx";
import { useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import Letter from "../letter/letterDTO";

export default function FolderThumbnail({
  to,
  flag,
  selected,
  children,
  onClick,
}: {
  to: string;
  flag: string;
  selected: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  function moveLetter(item: any) {
    console.log(item);
  }

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "letter",
      canDrop: (item: Letter) => item.folder !== flag,
      drop: (item: Letter) => moveLetter(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <li onClick={onClick} ref={drop}>
      <Link to={to}>
        <div
          className={clsx(
            "flex items-center md:w-[200px] h-9 px-2 md:px-4 rounded-lg transition-colors",
            {
              "hover:bg-altHover": !selected,
              "bg-altSelected hover:bg-altSelected font-bold": selected,
            }
          )}
        >
          {children}
        </div>
      </Link>
    </li>
  );
}
