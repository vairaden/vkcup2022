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
          className={`w-[200px] h-9 rounded-lg ${selected && "bg-[#00103D14]"}`}
        >
          <img className="mx-4 inline-block" src={imgSrc} alt={imgAlt}></img>
          {children}
        </div>
      </Link>
    </li>
  );
}
