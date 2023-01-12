import { create } from "zustand";

interface LanguageStore {
  language: "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
}

const useLanguageStore = create<LanguageStore>()((set) => ({
  language: "ru",
  setLanguage: (language) => set({ language }),
}));

export default useLanguageStore;
