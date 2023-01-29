import { create } from "zustand";
import { themes } from "../data/themes";

interface ThemeStore {
  theme: typeof themes[1];
  colorThemes: typeof themes;
  setTheme: (name: string) => void;
}

function initTheme() {
  const themeName = localStorage.getItem("theme");
  const theme = themes.find((theme) => theme.name === themeName) ?? themes[1];
  document.documentElement.setAttribute("data-theme", theme.name);
  if (theme.name === "image") {
    document.body.style.backgroundImage = "url(/image-background.png)";
  }
  return theme;
}

const useThemeStore = create<ThemeStore>()((set) => ({
  theme: initTheme(),
  colorThemes: themes.slice(3),
  setTheme: (name: string) => {
    localStorage.setItem("theme", name);
    document.documentElement.setAttribute("data-theme", name);
    if (name === "image") {
      document.body.style.backgroundImage = "url(/image-background.png)";
    } else {
      document.body.style.backgroundImage = "none";
    }

    set({ theme: themes.find((theme) => theme.name === name) });
  },
}));

export default useThemeStore;
