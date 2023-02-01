import { create } from "zustand";

function setScrollLock(locked: boolean) {
  const html = document.querySelector("html");
  if (html) {
    html.style.overflow = locked ? "hidden" : "auto";
  }
}

interface MenuStore {
  settingsOpen: boolean;
  toggleSettingsOpen: () => void;
  letterCreatorOpen: boolean;
  toggleLetterCreatorOpen: () => void;
  folderCreatorOpen: boolean;
  toggleFolderCreatorOpen: () => void;
}

const useMenuStore = create<MenuStore>()((set) => ({
  settingsOpen: false,
  toggleSettingsOpen: () =>
    set((state) => {
      setScrollLock(!state.settingsOpen);
      return { settingsOpen: !state.settingsOpen };
    }),
  letterCreatorOpen: false,
  toggleLetterCreatorOpen: () =>
    set((state) => {
      setScrollLock(!state.letterCreatorOpen);
      return { letterCreatorOpen: !state.letterCreatorOpen };
    }),
  folderCreatorOpen: false,
  toggleFolderCreatorOpen: () =>
    set((state) => {
      setScrollLock(!state.folderCreatorOpen);
      return { folderCreatorOpen: !state.folderCreatorOpen };
    }),
}));

export default useMenuStore;
