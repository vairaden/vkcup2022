import enAlt from "../translation/alt/en";
import ruAlt from "../translation/alt/ru";
import textEn from "../translation/text/en";
import textRu from "../translation/text/ru";
import useLanguageStore from "./useLanguageStore";

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

  return {
    text: (text[language] || text.ru) as typeof text.ru,
    alt: (alt[language] || alt.ru) as typeof alt.ru,
  };
}
