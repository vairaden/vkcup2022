import clsx from "clsx";
import { useState } from "react";
import useLanguageStore from "../../shared/store/useLanguageStore";
import useTranslation from "../../shared/translation/useTranslation";
import LanguageMenu from "./LanguageMenu";
import ThemeMenu from "./ThemeMenu";
import useMenuStore from "../../shared/store/useMenuStore";

export default function Settings() {
  const toggleSettingsOpen = useMenuStore((state) => state.toggleSettingsOpen);

  const [selectedMenu, setSelectedMenu] = useState<"theme" | "language">(
    "theme"
  );

  const language = useLanguageStore((state) => state.language);
  const { text, alt } = useTranslation();

  return (
    // Modal background
    <div
      onClick={toggleSettingsOpen}
      className="z-10 fixed top-0 left-0 h-full w-full"
    >
      {/* Setting panel */}
      <div
        className="fixed bottom-0 w-[100vw] shadow-[0px_-3px_48px_0px_rgba(0,16,61,0.28)] flex bg-elementBg h-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center min-w-[260px] py-5 border-r-[1px] border-separator">
          {/* Theme menu */}
          <button
            onClick={() => setSelectedMenu("theme")}
            className={clsx(
              "flex items-center w-[200px] h-9 px-4 rounded-lg transition-colors",
              {
                "hover:bg-hover": selectedMenu !== "theme",
                "bg-selected hover:bg-selected font-bold":
                  selectedMenu === "theme",
              }
            )}
          >
            <p className="text-primaryText">{text.theme}</p>
          </button>
          {/* Language menu */}
          <button
            onClick={() => setSelectedMenu("language")}
            className={clsx(
              "flex items-center w-[200px] h-9 px-4 rounded-lg transition-colors",
              {
                "hover:bg-hover": selectedMenu !== "language",
                "bg-selected hover:bg-selected font-bold":
                  selectedMenu === "language",
              }
            )}
          >
            <p className="mr-2 text-primaryText">
              {text.language}: {language == "ru" ? "??????????????" : "English"}
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
