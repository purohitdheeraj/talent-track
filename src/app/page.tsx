"use client";
import Chat from "@/components/Chat";
import ChatSidebar from "@/components/ChatSidebar";
import FilterInput from "@/components/FilterInput";
import ShortlistSidebar from "@/components/ShortlistSidebar";
import useChatStore from "@/store/useChatStore";

export default function Home() {
  const {addMessage, messages} = useChatStore()

  const handleSend = async (message: string) => {
    addMessage({ role: "user", content: message });

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [...messages, { role: "user", content: message }],
        }),
      });

      const data = await res.json();
      addMessage({
        role: "assistant",
        content: data.choices?.[0]?.message?.content || "No response",
      });
    } catch (error) {
      addMessage({
        role: "assistant",
        content: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <Chat />
        {/* <CandidateResults filters={filters} /> */}
        <div className="mb-6">
          <FilterInput onSubmit={handleSend} />
          <small className="text-gray-500 block mx-auto text-center mt-2">
            {Math.random() > 0.5
              ? "Type your filter prompt above to refine results."
              : "Dream big, work hard. Success will follow!"}
          </small>
        </div>
      </div>
      <ShortlistSidebar />
    </div>
  );
}
