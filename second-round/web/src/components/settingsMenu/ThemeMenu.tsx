import { themeColors } from "../../data/themes";
import useThemeStore from "../../hooks/useThemeStore";
import useTranslation from "../../hooks/useTranslation";

export default function ThemeMenu() {
  const themeNumber = useThemeStore((state) => state.themeNumber);
  const setThemeNumber = useThemeStore((state) => state.setThemeNumber);

  const { text, alt } = useTranslation();

  return (
    <div className="flex flex-col px-8 py-[26px]">
      <h2>{text.themeMenu}</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-x-3 gap-y-2">
        {themeColors.slice(3).map((color, index) => (
          <label key={index}>
            <div className="w-16 h-10" style={{ background: color }} />
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
      <div className="flex">
        <label>
          <img
            className="w-20 h-12"
            src="/dark-theme-image.svg"
            alt={alt.darkTheme}
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
            alt={alt.lightTheme}
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
            alt={alt.imageTheme}
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
    </div>
  );
}