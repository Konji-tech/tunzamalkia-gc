import Image from "next/image";
import chat from "@/../public/images/chat.svg";
import avab from "@/../public/images/avab.svg";
import Link from "next/link";

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
    image: avab,
    description:
      "How much do you know about your sexual health? Test your knowledge here.",
    button: {
      text: "Test Yourself",
      link: "/quiz",
    },
  },
  {
    image: chat,
    description: "Know more about contraception.",
    button: {
      text: "Resources",
      link: "/contraception",
    },
  },
];

function FeatureList() {
  return (
    <div className="my-4 gap-8 py-32 flex flex-wrap justify-center items-center">
      {featuresList.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 max-w-[400px] w-full"
        >
          <div className="bg-pink-900 rounded-lg p-8 w-full h-[300px] flex items-center justify-center mb-[5%]">
            <Image
              src={feature.image}
              alt="feature image"
              className="object-cover"
            />
          </div>
          <h3 className="text-center font-bold w-full px-4">{feature.description}</h3> {/* Added padding for better alignment */}
          <div className="w-full flex justify-center mt-4"> {/* Reduced margin for better spacing */}
            <Link href={feature.button.link}>
              <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                {feature.button.text}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
