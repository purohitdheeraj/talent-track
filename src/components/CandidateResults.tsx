"use client";
import React from 'react';
import candidates from '@/data/candidates.json';
import { Button } from './ui/button';

interface Candidate {
  name: string;
  skills: string[];
}

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => (
  <div className="border p-4 m-2">
    <h3>{candidate.name}</h3>
    <p>Skills: {candidate.skills.join(', ')}</p>
    <Button size={'sm'} className="bg-green-500 text-white p-2">Shortlist</Button>
  </div>
);

const CandidateResults: React.FC = () => {
  return (
    <div className="p-4">
      {candidates.map((candidate: Candidate) => (
        <CandidateCard key={candidate.name} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidateResults;
