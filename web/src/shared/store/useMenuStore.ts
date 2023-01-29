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
    set((state) => ({ settingsOpen: !state.settingsOpen })),
  letterCreatorOpen: false,
  toggleLetterCreatorOpen: () =>
    set((state) => ({ letterCreatorOpen: !state.letterCreatorOpen })),
}));

export default useMenuStore;
