import { getOutput } from "./commands";
import React from "react";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

const commandMappings: { [key: string]: string } = {
  so: "socials",
  sk: "skills",
  a: "about",
  p: "projects",
  r: "resume",
  c: "clear",
  h: "help",
  g: "goals",
  e: "experience",
};

export const keybindings = (
  e: React.KeyboardEvent<HTMLInputElement>,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>,
  setUpArrowKeyPressed: React.Dispatch<React.SetStateAction<number>>,
  setCurrentCommand: React.Dispatch<React.SetStateAction<string>>,
  currentCommand: string,
  command: CommandItem[],
  upArrowKeyPressed: number
): void => {
  if (e.key === "Enter") {
    setCommand((prevCommand) => [
      ...prevCommand,
      {
        command: currentCommand.toLowerCase(),
        output: getOutput(currentCommand, setCommand),
      },
    ]);
    setCurrentCommand("");
    setUpArrowKeyPressed(0);
  } else if (e.key === "ArrowUp") {
    if (command.length > 0) {
      setUpArrowKeyPressed(upArrowKeyPressed + 1);
      const newIndex = command.length - upArrowKeyPressed - 1;
      if (newIndex >= 0) {
        setCurrentCommand(command[newIndex].command);
      }
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    const lowerCaseCommand = currentCommand.toLowerCase();
    for (const [prefix, fullCommand] of Object.entries(commandMappings)) {
      if (lowerCaseCommand.startsWith(prefix)) {
        setCurrentCommand(fullCommand);
        break;
      }
    }
  }
};
