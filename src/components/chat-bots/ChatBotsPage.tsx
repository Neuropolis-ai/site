"use client";

import ChatBotsHero from "./ChatBotsHero";
import ChatBotsProblems from "./ChatBotsProblems";
import ChatBotsSolution from "./ChatBotsSolution";
import ChatBotsUseCases from "./ChatBotsUseCases";
import ChatBotsProcess from "./ChatBotsProcess";
import ChatBotsWhyUs from "./ChatBotsWhyUs";

export default function ChatBotsPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white">
      <ChatBotsHero />
      <ChatBotsProblems />
      <ChatBotsSolution />
      <ChatBotsUseCases />
      <ChatBotsProcess />
      <ChatBotsWhyUs />
    </div>
  );
}
