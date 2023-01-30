import ThemeCheckmark from "../../shared/icons/ThemeCheckmark";
import useThemeStore from "../../shared/store/useThemeStore";
import useTranslation from "../../shared/translation/useTranslation";

export default function ThemeMenu() {
  const colorThemes = useThemeStore((state) => state.colorThemes);
  const currentTheme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const { text } = useTranslation();

  return (
    <div className="flex flex-col px-8 py-[26px]">
      <h2 className="mb-5 text-primaryText">{text.themeMenu}</h2>
      {/* Color themes */}
      <div className="flex flex-wrap max-w-[700px]">
        {colorThemes.map((theme) => (
          <label key={theme.name}>
            <div
              className="w-[67.5px] h-[40px] mx-[10px] my-[6px] cursor-pointer"
              style={{ background: theme.previewColor }}
            >
              {currentTheme.name === theme.name && (
                <div className="bg-[#00000020] flex justify-center items-center">
                  <ThemeCheckmark />
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
        {/* Dark theme */}
        <label>
          <div className="w-[120px] h-[88px] cursor-pointer m-[10px] bg-[url(/dark-theme-image.svg)]">
            {currentTheme.name === "dark" && (
              <div className="bg-[#005ff97e] h-[88px] flex justify-center items-center">
                <ThemeCheckmark />
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
        {/* Light theme */}
        <label>
          <div className="w-[120px] h-[88px] cursor-pointer m-[10px] bg-[url(/light-theme-image.svg)]">
            {currentTheme.name === "light" && (
              <div className="bg-[#005ff97e] h-[88px] flex justify-center items-center">
                <ThemeCheckmark />
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
        {/* Image theme */}
        <label>
          <div className="w-[120px] h-[88px] cursor-pointer m-[10px] bg-[url(/image-theme.svg)]">
            {currentTheme.name === "image" && (
              <div className="bg-[#005ff97e] h-[88px] flex justify-center items-center">
                <ThemeCheckmark />
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
