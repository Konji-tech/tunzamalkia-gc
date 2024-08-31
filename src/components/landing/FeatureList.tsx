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
      "How much do you know about your sexual health, Test your knowledge here",
    button: {
      text: "Test Yourself",
      link: "/quiz",
    },
  },

  {
    image: chat,
    description:
      "Know more about contraception",
    button: {
      text: "Resources",
      link: "/contraception",
    },
  },
];


function FeatureList() {
  return (
    <div className="my-4 gap-10 py-32 flex flex-wrap justify-center items-center ">
      {featuresList.map((feature) => (
        <div className="flex flex-col items-center gap-8 max-w-[400px]">
          <div className="bg-pink-900 rounded-full p-12  h-[240px] aspect-square flex items-center justify-center">
            <Image
              src={feature.image}
              alt="chatting"
              className="object-cover"
            />
          </div>
          <h3 className="text-center text-wrap font-bold">
            {feature.description}
          </h3>
          <Link href={feature.button.link}>
            <button className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              {feature.button.text}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
