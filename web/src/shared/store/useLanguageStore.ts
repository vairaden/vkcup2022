import { persist } from "zustand/middleware";
import { create } from "zustand";

interface LanguageStore {
  language: "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
}

const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "ru",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "language",
    }
  )
);

export default useLanguageStore;
