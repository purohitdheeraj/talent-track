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
    <div className="flex flex-col gap-4 p-4 ">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${
            msg.role === "user"
              ? "text-right"
              : msg.role === "system"
              ? "text-center text-gray-500"
              : "text-left"
          }`}
        >
          <p
            className={`inline-block ${
              msg.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-900"
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