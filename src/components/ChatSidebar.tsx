"use client";

import { create } from "zustand";

interface ChatState {
  chats: string[];
  addChat: (chat: string) => void;
}

const useChatStore = create<ChatState>((set) => ({
  chats: [],
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}));

// Component
const ChatSidebar: React.FC = () => {
  const chats = useChatStore((state) => state.chats);

  return (
    <aside className="w-1/5 bg-blue-100 p-4">
      <h3 className="text-gray-1k">Chat History</h3>
      <ul>
        {chats.map((chat, idx) => (
          <li key={idx}>{chat}</li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatSidebar;
