// store/useCandidateStore.ts
import { create } from "zustand";

export interface Message {
  role: "assistant" | "user" | "system";
  content: string;
}

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
}


const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {role: 'assistant', content: `Hey there, great to meet you. I'm Pi, your personal AI.\n\nMy goal is to be useful, friendly, and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind.\n\nHow's your day going?`}
  ],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));

export default useChatStore;
