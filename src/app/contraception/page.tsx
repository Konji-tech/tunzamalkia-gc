import React from 'react';
import Image from 'next/image';
import ccs from '@/../public/images/Ovaries.svg';
import chat from "@/../public/images/chat.svg";
import avab from "@/../public/images/avab.svg";
import Link from "next/link";
import Testicle from "@/../public/images/Testicles.svg";
import Redcross from "@/../public/images/RedCross.svg";

interface CampProps {
  title: string;
}
const contraceptionList = [
  {
    title: "IUD",
    image: chat,
    button: {
      text: "Chat with us",
      link: "/iud",
    },
  },
  {
    title: "Condom",
    image: Testicle,
    button: {
      text: "Chat with us",
      link: "/contraception/condom",
    },
  },
  {
    title: "Injection",
    image: chat,
    button: {
      text: "Chat with us",
      link: "/injection",
    },
  },
  {
    title: "Pill",
    image: chat,
    button: {
      text: "Chat with us",
      link: "/pill",
    },
  },
  {
    title: "Vasectomy",
    image: Testicle,
    button: {
      text: "Chat with us",
      link: "/vasectomy",
    },
  },
  {
    title: "Implant",
    image: Redcross,
    button: {
      text: "Chat with Us",
      link: "/implant",
    },
  },
];


function ContraceptionsList() {
  return (
    <div className="py-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      {contraceptionList.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 w-full max-w-[350px] bg-white rounded-3xl shadow-lg p-6 transition duration-1000 hover:scale-125"
        >
          {/* Title */}
          <h3 className="text-xl font-semibold">{feature.title}</h3>

          {/* Image */}
          <div className="rounded-3xl w-full aspect-square flex items-center justify-center ">
            <Image
              src={feature.image}
              alt={feature.title} // Use title for alt text
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


export default function Contraceptions() {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between px-10 py-5  gap-16 lg:gap-32">
        <div className="flex-1 flex flex-col gap-8 justify-center items-center">
          <h1 className="text-6xl font-bold text-center lg:text-left">Contraceptions</h1>
        </div>
        <div className="flex-1 flex justify-end px-5">
          <Image
            src={ccs}
            alt="contraception"
            className="object-cover "
          />
        </div>
      </div>

      <div className="flex flex-col px-16 py-16 bg-white text-center">
        <h2 className="text-4xl text-black font-bold">Welcome to Contraception education here at Malkia</h2>
        <p className="mt-4 text-lg">
        Navigate your contraceptive options with confidence using our comprehensive Contraception Guide.
         Whether you're exploring birth control for the first time or looking to switch methods, our guide provides clear, compassionate, and culturally sensitive information tailored to your needs. 
        </p>
      </div>
      <div className="flex flex-col px-16 py-16 bg-white text-center">
        <h1 className="text-4xl text-black font-bold ">Resources</h1>
      </div>
      <ContraceptionsList />
    </div>
  );
}


