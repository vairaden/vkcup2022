import useThemeStore from "../../hooks/useThemeStore";
import useTranslation from "../../hooks/useTranslation";

export default function ThemeMenu() {
  const colorThemes = useThemeStore((state) => state.colorThemes);
  const currentTheme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const { text, alt } = useTranslation();

  return (
    <div className="flex flex-col px-8 py-[26px]">
      <h2 className="mb-5 text-primaryText">{text.themeMenu}</h2>
      <div className="flex flex-wrap max-w-[700px]">
        {colorThemes.map((theme) => (
          <label key={theme.name}>
            <div
              className="w-[67.5px] h-[40px] mx-[10px] my-[6px] cursor-pointer"
              style={{ background: theme.previewColor }}
            >
              {currentTheme.name === theme.name && (
                <div className="bg-[#00000020] flex justify-center items-center">
                  <img
                    src="/icons/checkmark_outline_40.svg"
                    alt={alt.themeSelected}
                  ></img>
                </div>
              )}
            </div>
            <input
              className="hidden"
              type="radio"
              name="theme"
              value={theme.name}
              checked={currentTheme.name === theme.name}
              onChange={() => setTheme(theme.name)}
            />
          </label>
        ))}
      </div>
      <div className="flex flex-wrap">
        <label>
          <div className="w-[120px] h-[88px] cursor-pointer m-[10px] bg-[url(/dark-theme-image.svg)]">
            {currentTheme.name === "dark" && (
              <div className="bg-[#005ff97e] h-[88px] flex justify-center items-center">
                <img
                  src="/icons/checkmark_outline_40.svg"
                  alt={alt.themeSelected}
                ></img>
              </div>
            )}
          </div>
          <input
            className="hidden"
            type="radio"
            name="theme"
            value="0"
            checked={currentTheme.name === "dark"}
            onChange={() => setTheme("dark")}
          />
        </label>
        <label>
          <div className="w-[120px] h-[88px] cursor-pointer m-[10px] bg-[url(/light-theme-image.svg)]">
            {currentTheme.name === "light" && (
              <div className="bg-[#005ff97e] h-[88px] flex justify-center items-center">
                <img
                  src="/icons/checkmark_outline_40.svg"
                  alt={alt.themeSelected}
                ></img>
              </div>
            )}
          </div>
          <input
            className="hidden"
            type="radio"
            name="theme"
            value="1"
            checked={currentTheme.name === "light"}
            onChange={() => setTheme("light")}
          />
        </label>
        <label>
          <div className="w-[120px] h-[88px] cursor-pointer m-[10px] bg-[url(/image-theme.svg)]">
            {currentTheme.name === "image" && (
              <div className="bg-[#005ff97e] h-[88px] flex justify-center items-center">
                <img
                  src="/icons/checkmark_outline_40.svg"
                  alt={alt.themeSelected}
                ></img>
              </div>
            )}
          </div>
          <input
            className="hidden"
            type="radio"
            name="theme"
            value="2"
            checked={currentTheme.name === "image"}
            onChange={() => setTheme("image")}
          />
        </label>
      </div>
    </div>
  );
}
