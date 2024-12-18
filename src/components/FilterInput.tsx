'use client';
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import classNames from "classnames";

type FilterInputProps = {
  onSubmit: (message: string) => Promise<void>;
}

const FilterInput:React.FC<FilterInputProps> = ({onSubmit}) => {
  const [input, setInput] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; 
      textarea.style.height = `${textarea.scrollHeight}px`; 

      const maxHeight = 150; 
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "hidden";
      }
    }
  }, [input]);



  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      onSubmit(input);
      setInput("");
    }
  };
  
  const handleSend = () => {
    onSubmit(input);
    setInput("");
  }

  return (
    <div   className={classNames(
      "flex items-end  gap-2 w-full min-h-6 bg-white rounded-[30px] px-6 py-2 transition-shadow duration-200"
    )}>
      <Textarea
        ref={textareaRef}
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        rows={1}
        placeholder="Type your filter query..."
        className="flex-grow  min-h-10 text-2xl outline-none shadow-none h-auto resize-none bg-white overflow-hidden"
      />
        <Button
          size={"icon"}
          aria-label="Submit text"
          disabled={!input.trim()}
          onClick={handleSend}
        >
          <ArrowUp
            height={16}
            width={16}
            className="shrink-0"
            strokeWidth={3}
          />
        </Button>
    </div>
  );
};

export default FilterInput;
