import { useState } from "react";
import useLanguageStore from "../../hooks/useLanguageStore";
import useTranslation from "../../hooks/useTranslation";
import LanguageMenu from "./LanguageMenu";
import ThemeMenu from "./ThemeMenu";

export default function Settings({
  closeCallback,
}: {
  closeCallback: () => void;
}) {
  const [selectedMenu, setSelectedMenu] = useState<"theme" | "language">(
    "theme"
  );

  const language = useLanguageStore((state) => state.language);
  const { text, alt } = useTranslation();

  return (
    // Modal background
    <div onClick={closeCallback} className="fixed top-0 left-0 h-full w-full">
      {/* Setting panel */}
      <div
        className="fixed bottom-0 w-[100vw] shadow-[0px_-3px_48px_0px_rgba(0,16,61,0.28)] flex bg-elementBg h-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center min-w-[260px] py-5 border-r-[1px] border-separator">
          {/* Theme menu */}
          <button
            onClick={() => setSelectedMenu("theme")}
            className={`flex items-center w-[200px] h-9 px-4 rounded-lg hover:bg-hover ${
              selectedMenu == "theme" &&
              "bg-[#00103D14] dark:bg-[#FFFFFF14] font-bold"
            }`}
          >
            <p className="text-primaryText">{text.theme}</p>
          </button>
          {/* Language menu */}
          <button
            onClick={() => setSelectedMenu("language")}
            className={`flex items-center w-[200px] h-9 px-4 rounded-lg hover:bg-hover ${
              selectedMenu === "language" &&
              "bg-[#00103D14] dark:bg-[#FFFFFF14] font-bold"
            }`}
          >
            <p className="mr-2 text-primaryText">
              {text.language}: {language == "ru" ? "Русский" : "English"}
            </p>
            {language == "ru" && (
              <img src="/flags/ru_flag.svg" alt={alt.ruFlag}></img>
            )}
            {language == "en" && (
              <img src="/flags/us_flag.svg" alt={alt.usFlag}></img>
            )}
          </button>
        </div>
        {selectedMenu === "theme" && <ThemeMenu />}
        {selectedMenu === "language" && <LanguageMenu />}
      </div>
    </div>
  );
}
