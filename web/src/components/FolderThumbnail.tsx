import { Link } from "react-router-dom";

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
  return (
    <li onClick={onClick}>
      <Link to={to}>
        <div
          className={`flex items-center sm:w-[200px] h-9 sm:px-4 px-2 rounded-lg hover:bg-grayHover dark:hover:bg-darkHover ${
            selected && "bg-[#00103D14] dark:bg-[#FFFFFF14] font-bold"
          }`}
        >
          <img className="block dark:hidden" src={imgSrc} alt={imgAlt}></img>
          <img
            className="hidden dark:block"
            src={darkImgSrc}
            alt={imgAlt}
          ></img>
          <p className="ml-2 dark:text-textPrimaryWhite hidden sm:block">
            {children}
          </p>
        </div>
      </Link>
    </li>
  );
}
