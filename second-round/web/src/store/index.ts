import { atom } from "jotai";

export const filterUnreadAtom = atom(false);
export const filterBookmarkedAtom = atom(false);
export const filterWithAttachmentsAtom = atom(false);

export const languageAtom = atom<"ru" | "en">("ru");
