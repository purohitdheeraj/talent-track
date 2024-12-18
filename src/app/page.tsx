"use client";
import CandidateResults from "@/components/CandidateResults";
import ChatSidebar from "@/components/ChatSidebar";
import FilterInput from "@/components/FilterInput";
import ShortlistSidebar from "@/components/ShortlistSidebar";
import useCandidateStore from "@/store/useCandidateStore";

export default function Home() {
  const { filters, addFilter } = useCandidateStore();
  return (
    <>
       <div className="flex h-screen flex-wrap">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <CandidateResults filters={filters} />
        <div className="mt-auto mb-10">
        <FilterInput onSubmit={addFilter} />
          <small className="text-gray-400 text-center mt-4 mx-auto block">

        {Math.random() > 0.5 ? "Type your search prompt above to filter candidates." : "The only way to do great work is to love what you do. – Steve Jobs"}
          </small>
        </div>
      </div>
      <ShortlistSidebar />
    </div>
    </>
  );
}
