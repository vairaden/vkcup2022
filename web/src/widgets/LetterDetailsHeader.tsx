import clsx from "clsx";
import { Link, useParams } from "react-router-dom";
import ChevronLeftIcon from "../shared/icons/controls/ChevronLeftIcon";
import useThemeStore from "../shared/store/useThemeStore";
import useTranslation from "../shared/translation/useTranslation";

export default function LetterDetailsHeader() {
  const folderName = useParams().folderName || "inbox";

  const theme = useThemeStore((state) => state.theme);
  const { text } = useTranslation();

  return (
    <header className="fixed left-0 top-0 h-14 px-3 py-2 w-[100vw] shadow-sm bg-headerBg">
      <Link
        className="flex items-center hover:bg-altHover transition-colors rounded-xl p-2 ml-1 md:ml-4 w-fit"
        to={"/" + folderName}
      >
        <ChevronLeftIcon
          className={clsx({
            "fill-[rgb(231_232_234)]": theme.name !== "light",
            "fill-primaryText": theme.name === "light",
          })}
        />
        <h2
          className={clsx("hidden md:block ml-2", {
            "text-[rgb(231_232_234)]": theme.name !== "light",
            "text-primaryText": theme.name === "light",
          })}
        >
          {text.back}
        </h2>
      </Link>
    </header>
  );
}
