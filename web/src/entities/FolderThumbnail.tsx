import clsx from "clsx";
import { Link } from "react-router-dom";
import useThemeStore from "../shared/store/useThemeStore";

export default function FolderThumbnail({
  to,
  imgSrc,
  darkImgSrc,
  imgAlt,
  selected,
  children,
  onClick,
}: {
  to: string;
  imgSrc: string;
  darkImgSrc: string;
  imgAlt: string;
  selected: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const theme = useThemeStore((state) => state.theme);

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
          {theme.darkThemeIcons ? (
            <img src={darkImgSrc} alt={imgAlt}></img>
          ) : (
            <img src={imgSrc} alt={imgAlt}></img>
          )}
          <p className="ml-2 hidden md:block text-menuText">{children}</p>
        </div>
      </Link>
    </li>
  );
}
