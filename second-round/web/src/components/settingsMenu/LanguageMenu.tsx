import { useAtom } from "jotai";
import { useState } from "react";
import { languageAtom } from "../../store";
import Button from "../Button";

export default function LanguageMenu() {
  const [language, setLanguage] = useAtom(languageAtom);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  return (
    <div className="flex flex-col">
      <h2>Изменить язык</h2>
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
        Выбрать язык
      </Button>
    </div>
  );
}
