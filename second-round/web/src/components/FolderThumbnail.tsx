import { Link } from "react-router-dom";
import useThemeStore from "../hooks/useThemeStore";

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
  onClick: () => void;
}) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <li onClick={onClick}>
      <Link to={to}>
        <div
          className={`flex items-center md:w-[200px] h-9 md:px-4 px-2 rounded-lg hover:bg-hover ${
            selected && "bg-selected font-bold"
          }`}
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
