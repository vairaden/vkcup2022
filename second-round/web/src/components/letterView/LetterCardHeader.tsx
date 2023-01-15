import { Link, useParams } from "react-router-dom";
import useThemeStore from "../../hooks/useThemeStore";
import useTranslation from "../../hooks/useTranslation";

export default function LetterCardHeader() {
  const folderName = useParams().folderName || "inbox";
  const theme = useThemeStore((state) => state.theme);
  const { text, alt } = useTranslation();

  return (
    <header className="fixed left-0 top-0 h-14 px-4 py-3 w-[100vw] shadow-sm bg-headerBg">
      <Link className="flex items-center w-9 ml-2 mt-1" to={"/" + folderName}>
        {theme.darkThemeIcons ? (
          <img
            src="/icons/dark/chevron_left_outline_dark_20.svg"
            alt={alt.back}
          ></img>
        ) : (
          <img
            src="/icons/light/chevron_left_outline_20.svg"
            alt={alt.back}
          ></img>
        )}
        <h1 className="hidden md:block text-menuText">{text.back}</h1>
      </Link>
    </header>
  );
}
