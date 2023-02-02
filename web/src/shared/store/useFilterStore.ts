import { create } from "zustand";

interface FilterStore {
  filtersApplied: boolean;
  filterUnread: boolean;
  filterBookmarked: boolean;
  filterWithAttachments: boolean;
  sortOption: "date" | "author" | "title" | "none";
  sortDirection: "asc" | "desc";
  toggleFilterUnread: () => void;
  toggleFilterBookmarked: () => void;
  toggleFilterWithAttachments: () => void;
  setSortOption: (option: "date" | "author" | "title" | "none") => void;
  setSortDirection: (direction: "asc" | "desc") => void;
  resetFilters: () => void;
  resetAll: () => void;
}

const useFilterStore = create<FilterStore>()((set) => ({
  filtersApplied: false,
  filterUnread: false,
  filterBookmarked: false,
  filterWithAttachments: false,
  sortOption: "none",
  sortDirection: "asc",
  toggleFilterUnread: () =>
    set((state) => {
      if (
        !state.filterUnread &&
        !state.filterBookmarked &&
        !state.filterWithAttachments &&
        state.sortOption === "none"
      ) {
        return { filtersApplied: true, filterUnread: true };
      } else if (
        state.filterUnread &&
        !state.filterBookmarked &&
        !state.filterWithAttachments &&
        state.sortOption === "none"
      ) {
        return { filtersApplied: false, filterUnread: false };
      }
      return { filterUnread: !state.filterUnread };
    }),
  toggleFilterBookmarked: () =>
    set((state) => {
      if (
        !state.filterUnread &&
        !state.filterBookmarked &&
        !state.filterWithAttachments &&
        state.sortOption === "none"
      ) {
        return { filtersApplied: true, filterBookmarked: true };
      } else if (
        !state.filterUnread &&
        state.filterBookmarked &&
        !state.filterWithAttachments &&
        state.sortOption === "none"
      ) {
        return { filtersApplied: false, filterBookmarked: false };
      }
      return { filterBookmarked: !state.filterBookmarked };
    }),
  toggleFilterWithAttachments: () =>
    set((state) => {
      if (
        !state.filterUnread &&
        !state.filterBookmarked &&
        !state.filterWithAttachments &&
        state.sortOption === "none"
      ) {
        return { filtersApplied: true, filterWithAttachments: true };
      } else if (
        !state.filterUnread &&
        !state.filterBookmarked &&
        state.filterWithAttachments &&
        state.sortOption === "none"
      ) {
        return { filtersApplied: false, filterWithAttachments: false };
      }
      return { filterWithAttachments: !state.filterWithAttachments };
    }),
  setSortOption: (option) =>
    set(() => {
      return option === "none"
        ? { filtersApplied: false, sortOption: option }
        : { filtersApplied: true, sortOption: option };
    }),
  setSortDirection: (direction) => set(() => ({ sortDirection: direction })),
  resetFilters: () =>
    set(() => ({
      filtersApplied: false,
      filterUnread: false,
      filterBookmarked: false,
      filterWithAttachments: false,
    })),
  resetAll: () =>
    set(() => ({
      filtersApplied: false,
      filterUnread: false,
      filterBookmarked: false,
      filterWithAttachments: false,
      sortOption: "none",
      sortDirection: "asc",
    })),
}));

export default useFilterStore;
