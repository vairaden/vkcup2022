import { create } from "zustand";

interface FilterStore {
  filterUnread: boolean;
  filterBookmarked: boolean;
  filterWithAttachments: boolean;
  toggleFilterUnread: () => void;
  toggleFilterBookmarked: () => void;
  toggleFilterWithAttachments: () => void;
  resetFilters: () => void;
}

const useFilterStore = create<FilterStore>()((set) => ({
  filterUnread: false,
  filterBookmarked: false,
  filterWithAttachments: false,
  toggleFilterUnread: () =>
    set((state) => ({ filterUnread: !state.filterUnread })),
  toggleFilterBookmarked: () =>
    set((state) => ({ filterBookmarked: !state.filterBookmarked })),
  toggleFilterWithAttachments: () =>
    set((state) => ({ filterWithAttachments: !state.filterWithAttachments })),
  resetFilters: () =>
    set((state) => ({
      filterUnread: false,
      filterBookmarked: false,
      filterWithAttachments: false,
    })),
}));

export default useFilterStore;
