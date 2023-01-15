import { create } from "zustand";
import { themes } from "../data/themes";

interface ThemeStore {
  themeNumber: number;
  allThemes: typeof themes;
  theme: typeof themes[0];
  setThemeNumber: (themeNumber: number) => void;
}

const useThemeStore = create<ThemeStore>()((set) => ({
  themeNumber: 1,
  allThemes: themes.slice(3),
  theme: themes[1],
  setThemeNumber: (themeNumber: number) => {
    const theme = themes[themeNumber];

    document.documentElement.setAttribute("data-theme", theme.name);

    set({ themeNumber, theme: themes[themeNumber] });
  },
}));

export default useThemeStore;
