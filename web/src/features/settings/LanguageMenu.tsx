import { useState } from "react";
import useLanguageStore from "../../shared/store/useLanguageStore";
import useTranslation from "../../shared/translation/useTranslation";
import Button from "../../shared/ui/Button";

export default function LanguageMenu() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const { text, alt } = useTranslation();

  return (
    <div className="flex flex-col px-8 py-[26px] text-primaryText">
      <h2>{text.changeLanguage}</h2>
      {/* Russian language */}
      <div className="my-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="language"
            value="ru"
            checked={selectedLanguage === "ru"}
            onChange={() => setSelectedLanguage("ru")}
          />
          <img className="m-3" src="/flags/ru_flag.svg" alt={alt.ruFlag}></img>
          Русский
        </label>
        {/* English language */}
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="language"
            value="en"
            checked={selectedLanguage === "en"}
            onChange={() => setSelectedLanguage("en")}
          />
          <img className="m-3" src="/flags/us_flag.svg" alt={alt.usFlag}></img>
          English
        </label>
      </div>
      <Button
        className="w-36 bg-electricBlue text-white border-none"
        onClick={() => setLanguage(selectedLanguage)}
      >
        {text.selectLanguage}
      </Button>
    </div>
  );
}
