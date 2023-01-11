import { atom } from "jotai";

// filters
export const filterUnreadAtom = atom(false);
export const filterBookmarkedAtom = atom(false);
export const filterWithAttachmentsAtom = atom(false);

export const languageAtom = atom<"ru" | "en">("en");
