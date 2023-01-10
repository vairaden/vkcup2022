import { Link, useParams } from "react-router-dom";

export default function LetterCardHeader() {
  const folderName = useParams().folderName || "inbox";
  return (
    <header className="fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] bg-white dark:bg-darkGray shadow-sm">
      <Link className="flex items-center w-9 ml-2 mt-1" to={"/" + folderName}>
        <img
          className="block dark:hidden"
          src="/chevron_left_outline_20.svg"
          alt="Вернуться"
        ></img>
        <img
          className="hidden dark:block"
          src="/chevron_left_outline_dark_20.svg"
          alt="Вернуться"
        ></img>
        <h1 className="dark:text-textPrimaryWhite hidden md:block">
          Вернуться
        </h1>
      </Link>
    </header>
  );
}
