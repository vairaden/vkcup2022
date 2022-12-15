import { Link } from "react-router-dom";
import Letter from "../dtos";

export default function LetterThumbnail({
  data,
  to,
}: {
  data: Letter;
  to: string;
}) {
  return (
    <li>
      <Link
        to={to}
        className="block h-12 border-b-[1px] rounded-xl border-gray-200 hover:bg-[#00103D0A]"
      >
        {data.author.name + " " + data.author.surname}
      </Link>
    </li>
  );
}
