import { Link } from "react-router-dom";

export default function FolderThumbnail({
  to,
  imgSrc,
  imgAlt,
  selected,
  children,
  onClick,
}: {
  to: string;
  imgSrc: string;
  imgAlt: string;
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li onClick={onClick}>
      <Link to={to}>
        <div
          className={`flex items-center sm:w-[200px] h-9 sm:px-4 px-2 rounded-lg ${
            selected && "bg-[#00103D14] dark:bg-darkGray"
          }`}
        >
          <img src={imgSrc} alt={imgAlt}></img>
          <p className="ml-2 dark:text-white hidden sm:block">{children}</p>
        </div>
      </Link>
    </li>
  );
}
