"use client";

import React, { useState, ChangeEvent, MouseEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "./components/chatHistory";
import Loading from "./components/loading";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";


type Message = {
  type: "user" | "bot";
  message: string;
};

export default function Chatbot() {
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize your Gemini API
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  //Fine tuning
  const systemInstruction = `You are a chatbot to focus on sexual and reproductive health of women including things such as sexuality and sex drive. 
    You can talk about topics such as sexual health, reproductive health, STIs and STDs, contraceptives,sex drive,sexuality etc. 
    Your focus should only be on sexual and reproductive health and things relating to it. 
    Refer to yourself as “Mama Malkia” 
    Answer the questions in detail. If the user asks any question that does not pertain to sexual health and reproduction or questions on sexuality and sex drive, say 
    "oh pole! I am only here to answer your questions on sexual and reproductive health!" Have a tone of a caring mother. You can talk in swahili. You can also answer questions on sexuality and sex drive.`;

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction,
    safetySettings,
  });

  // Function to handle user input
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // Function to send user message to Gemini
  const sendMessage = async (e: MouseEvent<HTMLButtonElement>) => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      // Call Gemini API to get a response
      const result = await model.generateContent(userInput);
      const response = await result.response;
      console.log(response);

      // Add Gemini's response to the chat history
      setChatHistory((prevChatHistory) => [...prevChatHistory, { type: "user", message: userInput }, { type: "bot", message: response.text() }]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Function to clear the chat history
  const clearChat = () => {
    setChatHistory([]);
  };

  return (
<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Mama Malkia</h1>

      <div className="chat-container rounded-lg shadow-md p-4 text-wrap">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none" onClick={sendMessage} disabled={isLoading}>
        Send
        </button>
      </div>
      <button className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none" onClick={clearChat}>
        Clear Chat
      </button>
    </div>
  );
}
