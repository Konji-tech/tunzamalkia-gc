import Image from "next/image";
import chat from "@/../public/images/chat.svg";
import questions from "@/../public/images/questions.svg";
import Link from "next/link";
import mainlanding from "@/../public/images/mainlanding.png";

const featuresList = [
  {
    image: chat,
    description:
      "Meet Mama Malkia, ask her any question you have about your sexual health and reproduction. No question is embarrassing. Usiogope!",
    button: {
      text: "Chat with her",
      link: "/chatbot",
    },
  },
  {
    image: questions,
    description:
      "How much do you know about your sexual health? Test your knowledge here.",
    button: {
      text: "Test Yourself",
      link: "/quiz",
    },
  },
  {
    image: mainlanding,
    description: "Know more about contraception.",
    button: {
      text: "Resources",
      link: "/contraception",
    },
  },
];

export default function FeatureList() {
  return (
    <div>
      {/* Divider between sections */}
      <div className="w-full h-8  bg-gradient-to-r from-indigo-600  to-fuchsia-400">
      </div>

      {/* Feature List Section */}
      <div className="bg-white py-32 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center animate-fadeInRight">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full max-w-[350px] bg-white rounded-3xl shadow-lg p-6 transition duration-500 hover:scale-105"
          >
            <div className="rounded-3xl w-full aspect-square flex items-center justify-center bg-purple-600">
              <Image
                src={feature.image}
                alt="feature image"
                className="object-cover rounded-3xl"
              />
            </div>
            <h3 className="text-center text-xl w-full px-4">
              {feature.description}
            </h3>
            <div className="w-full flex justify-center mt-4">
              <Link href={feature.button.link}>
                <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  {feature.button.text}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


