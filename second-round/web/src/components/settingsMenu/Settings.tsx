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
  const language = useLanguageStore((state) => state.language);
  const { text } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState<"theme" | "language">(
    "theme"
  );

  return (
    <>
      <div onClick={closeCallback} className="fixed top-0 left-0 h-full w-full">
        <div
          className="fixed bottom-0 w-[100vw] h-[400px] shadow-[0px_-3px_48px_0px_rgba(0,16,61,0.28)] flex bg-grayBg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center w-[260px] py-5 border-r-[1px] border-black">
            <button
              onClick={() => setSelectedMenu("theme")}
              className={`flex items-center md:w-[200px] h-9 md:px-4 px-2 rounded-lg hover:bg-grayHover dark:hover:bg-darkHover ${
                selectedMenu == "theme" &&
                "bg-[#00103D14] dark:bg-[#FFFFFF14] font-bold"
              }`}
            >
              <p className="ml-2 dark:text-textPrimaryWhite hidden md:block">
                {text.theme}
              </p>
            </button>
            <button
              onClick={() => setSelectedMenu("language")}
              className={`flex items-center md:w-[200px] h-9 md:px-4 px-2 rounded-lg hover:bg-grayHover dark:hover:bg-darkHover ${
                selectedMenu === "language" &&
                "bg-[#00103D14] dark:bg-[#FFFFFF14] font-bold"
              }`}
            >
              <p className="ml-2 dark:text-textPrimaryWhite hidden md:block">
                {text.language}: {language == "ru" ? "Русский" : "English"}
              </p>
            </button>
          </div>
          {selectedMenu === "theme" && <ThemeMenu />}
          {selectedMenu === "language" && <LanguageMenu />}
        </div>
      </div>
    </>
  );
}
