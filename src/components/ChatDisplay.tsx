"use client";
import React, { useEffect, useRef } from "react";

type Message = {
  role:  "user" | "system" | "assistant";
  content: string;
};

type ChatDisplayProps = {
  messages: Message[];
};

const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages }) => {
  
  


  return (
    <div className="flex flex-col gap-4 p-4 text-gray-1k">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${msg.role === 'user' ? 'justify-end' : 'justify-start'} flex`}          
        >
          <p
            className={`inline-block ${
              msg.role === "user"
                ? "bg-gray-300 text-gray-1k"
                : "bg-gray-100"
            } rounded-lg p-3 max-w-[70%]`}
          >
            {msg.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatDisplay;