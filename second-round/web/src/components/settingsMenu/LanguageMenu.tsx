import { useState } from "react";
import useLanguageStore from "../../hooks/useLanguageStore";
import useTranslation from "../../hooks/useTranslation";
import Button from "../Button";

export default function LanguageMenu() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const { text } = useTranslation();

  return (
    <div className="flex flex-col px-8 py-[26px]">
      <h2>{text.changeLanguage}</h2>
      <div className="my-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="language"
            value="ru"
            checked={selectedLanguage === "ru"}
            onChange={() => setSelectedLanguage("ru")}
          />
          <img
            className="m-3"
            src="/flags/ru_flag.svg"
            alt="Российский флаг"
          ></img>
          Русский
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="language"
            value="en"
            checked={selectedLanguage === "en"}
            onChange={() => setSelectedLanguage("en")}
          />
          <img className="m-3" src="/flags/us_flag.svg" alt="US flag"></img>
          English
        </label>
      </div>
      <Button
        className="w-36 bg-electricBlue text-textPrimaryWhite"
        onClick={() => setLanguage(selectedLanguage)}
      >
        {text.selectLanguage}
      </Button>
    </div>
  );
}
