import CandidateResults from "@/components/CandidateResults";
import ChatSidebar from "@/components/ChatSidebar";
import FilterInput from "@/components/FilterInput";
import ShortlistSidebar from "@/components/ShortlistSidebar";

export default function Home() {
  return (
    <>
       <div className="flex h-screen flex-wrap">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <CandidateResults />
        <div className="mt-auto mb-10">
        <FilterInput />
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
