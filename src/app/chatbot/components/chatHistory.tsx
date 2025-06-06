"use client";

import React from 'react';

type Message = {
  type: "user" | "bot";
  message: string;
  isTriggerWarning?: boolean;
};

type ChatHistoryProps = {
  chatHistory: Message[];
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  return (
    <div className="space-y-4">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.type === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.isTriggerWarning
                ? "bg-red-50 border border-red-200 text-red-800"
                : message.type === "user"
                ? "bg-purple-600 text-white"
                : "bg-blue-50 text-blue-800 border border-blue-200"
            }`}
          >
            {message.isTriggerWarning && (
              <div className="flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <p className="text-sm md:text-base whitespace-pre-wrap">{message.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
