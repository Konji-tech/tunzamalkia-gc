import React from 'react';
import Image from 'next/image';
import ccs from '@/../public/images/Ovaries.svg';
import chat from "@/../public/images/chat.svg";
import avab from "@/../public/images/avab.svg";
import Link from "next/link";
import Testicle from "@/../public/images/Testicles.svg";
import Redcross from "@/../public/images/RedCross.svg";
import pills from "@/../public/images/pills.svg";
import vaccine from "@/../public/images/vaccine.svg";
import ovaries from "@/../public/images/Ovaries.svg";

interface CampProps {
  title: string;
}
const contraceptionList = [
  {
    title: "IUD",
    image: ovaries,
    button: {
      text: "Know More",
      link: "/contraception/iud",
    },
  },
  {
    title: "Condom",
    image: Testicle,
    button: {
      text: "Know More",
      link: "/contraception/condom",
    },
  },
  {
    title: "Injection",
    image: vaccine,
    button: {
      text: "Know More",
      link: "/injection",
    },
  },
  {
    title: "Pill",
    image: pills,
    button: {
      text: "Know More",
      link: "/pill",
    },
  },
  {
    title: "Vasectomy",
    image: Testicle,
    button: {
      text: "Know More",
      link: "/vasectomy",
    },
  },
  {
    title: "Implant",
    image: Redcross,
    button: {
      text: "Know More",
      link: "/implant",
    },
  },
];


function ContraceptionsList() {
  return (
    <div className="py-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center font-poppins">
      {contraceptionList.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 w-full max-w-[350px] bg-[#f8d7da] rounded-3xl shadow-2xl p-6 transition duration-1000 hover:scale-125"
        >
          {/* Title */}
          <h3 className="text-xl font-semibold">{feature.title}</h3>

          {/* Image */}
          <div className="rounded-3xl w-full aspect-square flex items-center justify-center ">
            <Image
              src={feature.image}
              alt={feature.title} 
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
    <div className="px-4 md:px-8 lg:px-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between py-8 md:py-12 gap-8 md:gap-16 lg:gap-32">
        <div className="flex-1 flex flex-col gap-6 md:gap-8 justify-center items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">Contraceptions</h1>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end px-4 md:px-5">
          <Image
            src={ccs}
            alt="contraception"
            className="object-contain w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          />
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-8 lg:px-16 py-8 md:py-12 bg-purple-300 text-center rounded-md">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">Welcome to Contraception Education</h2>
      </div>
      
      <div className="flex flex-col px-4 md:px-8 lg:px-16 py-8 md:py-12 bg-white text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">Resources</h1>
      </div>
      
      <ContraceptionsList />
    </div>
  );
}


