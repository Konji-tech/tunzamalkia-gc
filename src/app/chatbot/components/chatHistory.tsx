import React from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  type: "user" | "bot";
  message: string;
};

type ChatHistoryProps = {
  chatHistory: Message[];
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 rounded-lg my-6 ${
            message.type === "user"
              ? "bg-gray-100 text-gray-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {message.type === "user" ? (
            <span className="mr-2 font-bold text-gray-600">You:</span>
          ) : (
            <span className="mr-2 font-bold text-blue-600">Mama Malkia:</span>
          )}
          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
