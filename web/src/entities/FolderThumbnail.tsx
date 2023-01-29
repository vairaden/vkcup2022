import clsx from "clsx";
import { Link } from "react-router-dom";
import useThemeStore from "../shared/store/useThemeStore";

export default function FolderThumbnail({
  to,
  selected,
  children,
  onClick,
}: {
  to: string;
  selected: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <li onClick={onClick}>
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
