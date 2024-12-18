"use client";
import React from "react";
import candidates from "@/data/candidates.json";
import { Button } from "./ui/button";
import useCandidateStore from "@/store/useCandidateStore";

interface Candidate {
  name: string;
  skills: string[];
  experience: number;
  location: string;
}

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => (
  <div className="border p-4 m-2 rounded shadow-sm hover:shadow-lg">
    <h3>{candidate.name}</h3>
    <p>Skills: {candidate.skills.join(", ")}</p>
    <p>Experience: {candidate.experience} years</p>
    <p>Location: {candidate.location}</p>
    <Button size="sm" className="bg-green-500 text-white p-2">
      Shortlist
    </Button>
  </div>
);

const CandidateResults: React.FC = () => {
  const { filters } = useCandidateStore();

  const filteredCandidates = candidates.filter((candidate) => {
    return filters.every((filter) =>
      Object.values(candidate).some((value) =>
        String(value).toLowerCase().includes(filter.toLowerCase())
      )
    );
  });

  return (
    <div className="p-4">
      {filteredCandidates.length > 0 ? (
        filteredCandidates.map((candidate) => (
          <CandidateCard key={candidate.name} candidate={candidate} />
        ))
      ) : (
        <p className="text-gray-500">No candidates match your filters.</p>
      )}
    </div>
  );
};

export default CandidateResults;
