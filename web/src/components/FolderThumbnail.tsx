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
          className={`flex items-center w-[200px] h-9 px-4 rounded-lg ${
            selected && "bg-[#00103D14]"
          }`}
        >
          <img src={imgSrc} alt={imgAlt}></img>
          <p className="ml-2">{children}</p>
        </div>
      </Link>
    </li>
  );
}
