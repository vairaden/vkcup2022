import { create } from "zustand";
import { themes } from "../data/themes";

interface ThemeStore {
  theme: typeof themes[1];
  colorThemes: typeof themes;
  setTheme: (name: string) => void;
}

const useThemeStore = create<ThemeStore>()((set) => ({
  theme: themes[1],
  colorThemes: themes.slice(3),
  setTheme: (name: string) => {
    document.documentElement.setAttribute("data-theme", name);

    set({ theme: themes.find((theme) => theme.name === name) });
  },
}));

export default useThemeStore;
