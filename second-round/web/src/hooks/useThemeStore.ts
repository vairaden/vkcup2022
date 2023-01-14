import { create } from "zustand";
import { themes } from "../data/themes";

interface ThemeStore {
  themeNumber: number;
  theme: typeof themes[0];
  setThemeNumber: (themeNumber: number) => void;
}

const useThemeStore = create<ThemeStore>()((set) => ({
  themeNumber: 1,
  theme: themes[1],
  setThemeNumber: (themeNumber: number) => {
    const theme = themes[themeNumber];
    const body = document.querySelector("body");
    if (!body) return;

    body.style.background = theme.bgColor;

    if (theme.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    set({ themeNumber, theme: themes[themeNumber] });
  },
}));

export default useThemeStore;
