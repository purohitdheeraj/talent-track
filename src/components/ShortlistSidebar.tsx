"use client";
import { create } from "zustand";

interface Candidate {
  name: string;
}

interface ShortlistState {
  shortlist: Candidate[];
  addToShortlist: (candidate: Candidate) => void;
}

const useShortlistStore = create<ShortlistState>((set) => ({
  shortlist: [],
  addToShortlist: (candidate) =>
    set((state) => ({ shortlist: [...state.shortlist, candidate] })),
}));

const ShortlistSidebar: React.FC = () => {
  const shortlist = useShortlistStore((state) => state.shortlist);

  return (
    <aside className="w-1/5 bg-gray-00 p-4">
      <h3 className="">Shortlisted</h3>
      <ul>
        {shortlist.map((candidate, idx) => (
          <li key={idx}>{candidate.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default ShortlistSidebar;
