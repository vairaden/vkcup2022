import { create } from "zustand";

interface MenuStore {
  settingsOpen: boolean;
  toggleSettingsOpen: () => void;
  letterCreatorOpen: boolean;
  toggleLetterCreatorOpen: () => void;
}

const useMenuStore = create<MenuStore>()((set) => ({
  settingsOpen: false,
  toggleSettingsOpen: () =>
    set((state) => {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = !state.settingsOpen ? "hidden" : "auto";
      }
      return { settingsOpen: !state.settingsOpen };
    }),
  letterCreatorOpen: false,
  toggleLetterCreatorOpen: () =>
    set((state) => {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = !state.letterCreatorOpen ? "hidden" : "auto";
      }
      return { letterCreatorOpen: !state.letterCreatorOpen };
    }),
}));

export default useMenuStore;
