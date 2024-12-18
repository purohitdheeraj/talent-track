"use client";
import React, { useEffect, useRef } from "react";
import ChatDisplay from "./ChatDisplay";
import useChatStore from "@/store/useChatStore";

const Chat: React.FC = () => {
  
  const {messages} = useChatStore();

  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [messages]);


  return (
    <div ref={chatContainerRef} className="flex scroll-smooth flex-col h-full flex-1 overflow-y-auto border-b">
      <ChatDisplay messages={messages} />
    </div>
  );
};

export default Chat;
