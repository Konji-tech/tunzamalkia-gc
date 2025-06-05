"use client";

import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "./components/chatHistory";
import Loading from "./components/loading"; // Assuming this is a spinner or loading component
import EmergencySupport from "./components/EmergencySupport";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

type Message = {
  type: "user" | "bot";
  message: string;
  isTriggerWarning?: boolean;
};

export default function Chatbot() {
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Add welcome message when component mounts
  useEffect(() => {
    setChatHistory([
      {
        type: "bot",
        message: "Habari Mrembo! I'm here to answer any questions you may have about your body, sex education, sexual and reproductive health, or anything you've been curious about without judgment."
      }
    ]);
  }, []);

  // Initialize your Gemini API
  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
  );
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

  // Fine-tuning instructions
  const systemInstruction = `You are a chatbot to focus on sexual and reproductive health of women including things such as sexuality and sex drive.
    You can talk about topics such as sexual health, reproductive health, STIs and STDs, contraceptives, sex drive, sexuality etc.
    Your focus should only be on sexual and reproductive health and things relating to it.
    Refer to yourself as "Mama Malkia".
    Answer the questions in detail. If the user asks any question that does not pertain to sexual health and reproduction or questions on sexuality and sex drive, say
    "oh pole! I am only here to answer your questions on sexual and reproductive health!" Have a tone of a caring mother. You can talk in Swahili moderately. You can also answer questions on sexuality and sex drive.`;

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction,
    safetySettings,
  });

  // Function to handle user input
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // Function to check if message might need a trigger warning
  const needsTriggerWarning = (message: string): boolean => {
    const triggerKeywords = [
      'abuse', 'violence', 'assault', 'rape', 'coercion', 'trauma',
      'harassment', 'molestation', 'exploitation', 'forced'
    ];
    return triggerKeywords.some(keyword => 
      message.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // Function to send user message to Gemini
  const sendMessage = async (e: MouseEvent<HTMLButtonElement>) => {
    if (userInput.trim() === "") return;

    const currentInput = userInput; // Store the current input
    setUserInput(""); // Clear input immediately

    // Add the user's message to the chat history first
    setChatHistory(prev => [...prev, { type: "user", message: currentInput }]);

    // Check if user's message needs a trigger warning
    if (needsTriggerWarning(currentInput)) {
      setChatHistory(prev => [
        ...prev,
        {
          type: "bot",
          message: "⚠️ This topic may be sensitive. Would you like to continue? Remember, you can click 'Need help?' at any time for support.",
          isTriggerWarning: true
        }
      ]);
    }

    setIsLoading(true);
    // Add typing indicator
    setChatHistory(prev => [...prev, { type: "bot", message: "Mama Malkia is typing..." }]);

    try {
      // Call Gemini API to get a response
      const result: any = await model.generateContent(currentInput);
      const response = await result.response;
      const responseText = response.text();

      // Remove typing indicator and add the actual response
      setChatHistory(prev => {
        const newHistory = prev.filter(msg => msg.message !== "Mama Malkia is typing...");
        if (needsTriggerWarning(responseText)) {
          return [
            ...newHistory,
            {
              type: "bot",
              message: "⚠️ The following response discusses sensitive content. Remember, you can click 'Need help?' at any time for support.",
              isTriggerWarning: true
            },
            { type: "bot", message: responseText }
          ];
        } else {
          return [...newHistory, { type: "bot", message: responseText }];
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Remove typing indicator and add error message
      setChatHistory(prev => {
        const newHistory = prev.filter(msg => msg.message !== "Mama Malkia is typing...");
        return [
          ...newHistory,
          { 
            type: "bot", 
            message: "Sorry, I encountered an error. Please try again." 
          }
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add keyboard support for sending messages
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e as any);
    }
  };

  // Function to clear the chat history
  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-6"> 
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Mama Malkia</h1>
          <EmergencySupport />
        </div>
        <h2 className="text-sm md:text-base font-bold text-center mb-4 md:mb-6">
          Ask any Question on sexual and reproductive health! Usiogope!
        </h2>

        <div className="chat-container overflow-y-auto h-[60vh] md:h-96 mb-4 p-3 md:p-4 bg-gray-50 rounded-lg shadow-inner">
          <ChatHistory chatHistory={chatHistory} />
          <Loading isLoading={isLoading} />
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-0 mt-4">
          <input
            type="text"
            className="flex-grow px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="px-4 py-2 md:py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-400 text-white hover:bg-blue-600 focus:outline-none text-sm md:text-base transition-colors"
            onClick={sendMessage}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
        <button
          className="mt-4 w-full px-4 py-2 rounded-lg bg-gray-300 text-white hover:bg-gray-700 focus:outline-none text-sm md:text-base transition-colors"
          onClick={clearChat}
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}
