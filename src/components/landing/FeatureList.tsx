import Image from "next/image";
import chat from "@/../public/images/chat.svg";
import avab from "@/../public/images/avab.svg";
import Link from "next/link";

const featuresList = [
  {
    image: chat,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga vitae eos, eius magni aspernatur consequatur minus, id distinctio deleniti tenetur odit rerum ullam ipsam quos commodi ut vel alias in.",
    button: {
      text: "Chat with us",
      link: "",
    },
  },

  {
    image: avab,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga vitae eos, eius magni aspernatur consequatur minus, id distinctio deleniti tenetur odit rerum ullam ipsam quos commodi ut vel alias in.",
    button: {
      text: "Chat with us",
      link: "",
    },
  },

  {
    image: chat,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga vitae eos, eius magni aspernatur consequatur minus, id distinctio deleniti tenetur odit rerum ullam ipsam quos commodi ut vel alias in.",
    button: {
      text: "Chat with us",
      link: "",
    },
  },
];


function FeatureList() {
  return (
    <div className="my-4 gap-8-6 py-32 flex flex-wrap justify-center items-center">
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
