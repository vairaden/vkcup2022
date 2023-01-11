import { atom } from "jotai";

const themes = [
  { bgColor: "#19191A", headerColor: "", isDark: true }, // dark
  { bgColor: "#F6F7F8", headerColor: "", isDark: false }, // light
  { bgColor: "#35385A", headerColor: "", isDark: true }, // image
  { bgColor: "#35385A", headerColor: "", isDark: true },
  { bgColor: "#388E3C", headerColor: "", isDark: false },
  { bgColor: "#424242", headerColor: "", isDark: true },
  { bgColor: "#4A352F", headerColor: "", isDark: true },
  { bgColor: "#5A355A", headerColor: "", isDark: true },
  { bgColor: "#646ECB", headerColor: "", isDark: false },
  { bgColor: "#81D8D0", headerColor: "", isDark: false },
  { bgColor: "#C9D0FB", headerColor: "", isDark: false },
  { bgColor: "#D0F0F7", headerColor: "", isDark: false },
  { bgColor: "#DDF3FF", headerColor: "", isDark: false },
  { bgColor: "#E2DCD2", headerColor: "", isDark: false },
  { bgColor: "#E73672", headerColor: "", isDark: false },
  { bgColor: "#E7EED2", headerColor: "", isDark: false },
  { bgColor: "#F0F0F0", headerColor: "", isDark: false },
  { bgColor: "#F44336", headerColor: "", isDark: false },
  { bgColor: "#FFEBCD", headerColor: "", isDark: false },
];

export const themeNumberAtom = atom(
  () => {
    if (localStorage.getItem("theme") === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "0");
        return 0;
      } else {
        localStorage.setItem("theme", "1");
        return 1;
      }
    }
    return parseInt(localStorage.getItem("theme") || "0");
  },
  (get, set, themeNumber: number) => {
    const theme = themes[themeNumber];
    const body = document.querySelector("body");
    if (!body) return;

    localStorage.setItem("theme", themeNumber.toString());
    body.style.background = theme.bgColor;
    if (theme.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");

      set(themeNumberAtom, themeNumber);
    }
  }
);

export const themeColors = themes.map((t) => t.bgColor);
export const themeAtom = atom((get) => themes[get(themeNumberAtom)]);
