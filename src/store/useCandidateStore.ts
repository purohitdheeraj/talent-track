// store/useCandidateStore.ts
import { create } from "zustand";

interface CandidateStore {
  filters: string[]; // List of filters (keywords)
  addFilter: (filter: string) => void;
  resetFilters: () => void; // Optionally, for clearing filters
}

const useCandidateStore = create<CandidateStore>((set) => ({
  filters: [],
  addFilter: (filter) => set((state) => ({ filters: [...state.filters, filter] })),
  resetFilters: () => set(() => ({ filters: [] })), // Clear filters
}));

export default useCandidateStore;
