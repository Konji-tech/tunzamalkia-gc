import React from 'react';
import Image from 'next/image';
import ccs from '@/../public/images/ccs.png';
import chat from "@/../public/images/chat.svg";
import avab from "@/../public/images/avab.svg";
import Link from "next/link";

interface CampProps {
  title: string;
}
const contraceptionList = [
  {
    image: chat,
    button: {
      text: "Chat with us",
      link: "",
    },
  },
  {
    image: avab,
    button: {
      text: "Chat with us",
      link: "",
    },
  },
  {
    image: chat,
    button: {
      text: "Chat with us",
      link: "",
    },
  },

  {
    image: chat,
    button: {
      text: "Chat with us",
      link: "",
    },
  },

  {
    image: chat,
    button: {
      text: "Chat with us",
      link: "",
    },
  },
];

function ContraceptionsList() {
  return (
    <div className="py-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      {contraceptionList.map((feature, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center gap-4 w-full max-w-[350px] bg-white rounded-3xl shadow-lg p-6"
        >
        
          
          {/* Image */}
          <div className="rounded-3xl w-full aspect-square flex items-center justify-center">
            <Image
              src={feature.image}
              alt="image"
              className="object-cover"
            />
          </div>

          {/* Button */}
          <Link href={feature.button.link}>
            <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              {feature.button.text}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}


const Option = ({ title }: CampProps) => {
  return (
    <div className={`flex-none h-[500px] w-[400px] bg-cover bg-center rounded-full shadow-lg p-10 relative`}>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-center">
        <h2 className="text-white text-lg font-bold">{title}</h2>
      </div>
    </div>
  );
};

function Contraceptions() {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between px-10 py-5 bg-gradient-to-r from-purple-300 to-pink-400 gap-16 lg:gap-32">
        <div className="flex-1 flex flex-col gap-8 justify-center items-center">
          <h1 className="text-6xl font-bold text-center lg:text-left">Contraceptions</h1>
        </div>
        <div className="flex-1 flex justify-end px-5">
          <Image
            src={ccs}
            alt="contraception"
            className="object-cover h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
          />
        </div>
      </div>

      <div className="flex flex-col px-16 py-16 bg-white text-center">
        <h2 className="text-4xl text-black font-bold">Welcome to Contraception education here at Malkia</h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum, nisl in lacinia egestas, sapien est tempus nisi, at efficitur mi lectus at dui.
        </p>
      </div>
      <div className="flex flex-col px-16 py-16 bg-white text-center">
        <h1 className="text-4xl text-black font-bold ">Services Offered</h1>
      </div>
      <ContraceptionsList />
    </div>
  );
}

export default Contraceptions;
