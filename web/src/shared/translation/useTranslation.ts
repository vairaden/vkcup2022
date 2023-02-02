import enAlt from "./alt/en";
import ruAlt from "./alt/ru";
import textEn from "./text/en";
import textRu from "./text/ru";
import useLanguageStore from "../store/useLanguageStore";

export default function useTranslation() {
  const text = {
    ru: textRu,
    en: textEn,
  };

  const alt = {
    ru: ruAlt,
    en: enAlt,
  };

  const language = useLanguageStore((state) => state.language);
  document.documentElement.lang = language;

  return {
    text: text[language] || text.ru,
    alt: alt[language] || alt.ru,
  };
}
