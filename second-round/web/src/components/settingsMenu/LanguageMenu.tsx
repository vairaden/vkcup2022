import { useAtom } from "jotai";
import { useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import { languageAtom } from "../../store/language";
import Button from "../Button";

export default function LanguageMenu() {
  const [language, setLanguage] = useAtom(languageAtom);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const { text } = useTranslation();

  return (
    <div className="flex flex-col">
      <h2>{text.changeLanguage}</h2>
      <label className="flex items-center">
        <input
          type="radio"
          name="language"
          value="ru"
          checked={selectedLanguage === "ru"}
          onChange={() => setSelectedLanguage("ru")}
        />
        <img className="m-3" src="/ru_flag.svg" alt="Российский флаг"></img>
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
        <img className="m-3" src="/us_flag.svg" alt="US flag"></img>
        English
      </label>
      <Button onClick={() => setLanguage(selectedLanguage)}>
        {text.selectLanguage}
      </Button>
    </div>
  );
}
