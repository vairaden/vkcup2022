import { useAtom } from "jotai";
import useTranslation from "../../hooks/useTranslation";
import { themeColors, themeNumberAtom } from "../../store/theme";

export default function ThemeMenu() {
  const [themeNumber, setThemeNumber] = useAtom(themeNumberAtom);
  const { text } = useTranslation();
  return (
    <div className="flex flex-col">
      <h2>{text.themeMenu}</h2>
      <div className="grid grid-cols-8">
        {themeColors.slice(3).map((color, index) => (
          <label key={index}>
            <div className="w-10 h-10" style={{ background: color }} />
            <input
              className="hidden"
              type="radio"
              name="theme"
              value={index + 3}
              checked={themeNumber === index + 3}
              onChange={() => setThemeNumber(index + 3)}
            />
          </label>
        ))}
      </div>
      <label>
        <img
          className="w-20 h-12"
          src="/dark-theme-image.svg"
          alt="Темная тема"
        ></img>
        <input
          className="hidden"
          type="radio"
          name="theme"
          value="0"
          checked={themeNumber === 0}
          onChange={() => setThemeNumber(0)}
        />
      </label>
      <label>
        <img
          className="w-20 h-12"
          src="/light-theme-image.svg"
          alt="Светлая тема"
        ></img>
        <input
          className="hidden"
          type="radio"
          name="theme"
          value="1"
          checked={themeNumber === 1}
          onChange={() => setThemeNumber(1)}
        />
      </label>
      <label>
        <img
          className="w-20 h-12"
          src="/image-theme.svg"
          alt="Тема с изображением"
        ></img>
        <input
          className="hidden"
          type="radio"
          name="theme"
          value="2"
          checked={themeNumber === 2}
          onChange={() => setThemeNumber(2)}
        />
      </label>
    </div>
  );
}
