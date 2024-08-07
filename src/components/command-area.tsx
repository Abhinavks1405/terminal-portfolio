import React, { useState, useRef, useEffect } from "react";
import { keybindings } from "../utils/keybindings";

interface CommandItem {
  command: string;
  output: string | JSX.Element;
}

const Command: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<CommandItem[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [upArrowKeyPressed, setUpArrowKeyPressed] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCommandInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    keybindings(
      e,
      setCommandHistory,
      setUpArrowKeyPressed,
      setCurrentCommand,
      currentCommand,
      commandHistory,
      upArrowKeyPressed
    );
  };

  return (
    <div>
      {commandHistory.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row mb-0.5">
            <div className="text-blue-300 font-bold ml-10 selection:bg-yellow-900">
              visitor@mylo~$
            </div>
            <div className="ml-2 font-mono selection:bg-yellow-900">
              {item.command}
            </div>
          </div>
          <div
            className="font-mono text-left ml-16 mb-3 selection:bg-yellow-900 mr-10"
            id="output-content"
          >
            {item.output}
          </div>
        </div>
      ))}
      <div className="flex flex-row">
        <div className="text-blue-300 font-bold ml-10 selection:bg-yellow-900">
          visitor@mylo~$
        </div>
        <input
          className="bg-transparent outline-none border-none font-mono ml-2 text-amber-500 w-2/3"
          type="text"
          ref={inputRef}
          value={currentCommand}
          autoFocus
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleCommandInput}
        />
      </div>
    </div>
  );
};

export default Command;
