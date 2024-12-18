// store/useCandidateStore.ts
import { create } from "zustand";

interface Message {
  sender: "Recruiter" | "User" | "System";
  text: string;
}

interface CandidateStore {
  filters: string[];
  messages: Message[];
  addMessage: (message: Message) => void;
  addFilter: (filter: string) => void;
  resetFilters: () => void;
}

const useCandidateStore = create<CandidateStore>((set) => ({
  filters: [],
  messages: [{ sender: "Recruiter", text: "What experience are you looking for?" }],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  addFilter: (filter) =>
    set((state) => ({
      filters: [...state.filters, filter],
      messages: [...state.messages, { sender: "System", text: `Filter added: ${filter}` }],
    })),
  resetFilters: () => set(() => ({ filters: [] })),
}));

export default useCandidateStore;
