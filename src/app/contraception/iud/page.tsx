import React from 'react';
import friends from "@/../public/images/friends.svg";
import chat from "@/../public/images/chat.svg";
import Image from 'next/image';

// First top section of the page
export default function Section() {
  return (
    <div>
      {/* First Section */}
      <div className="flex px-16 py-0 bg-purple-100 lg:flex-row flex-col-reverse gap-20 lg:gap-40">
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <h1 className="text-6xl font-bold pl-10 pt-20">Condoms</h1>
          <p className="text-center text-md pl-10 max-w-[30%]">
            Loreum ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia e
          </p>
        </div>
        <div className="flex mx-w-[20px] pl-30">
          <Image
            src={friends}
            alt="female condom"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex px-16 py-0 bg-white lg:flex-row flex-col-reverse gap-20 lg:gap-40">
      <div className="flex mx-w-[20px] pl-30">
          <Image
            src={chat}
            alt="new section image"
            className="object-cover h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <h1 className="text-4xl font-bold pl-10 pt-20">New Section Title</h1>
          <p className="text-center text-md pl-10 max-w-[30%]">
            This is some description text for the new section. You can customize it as needed.
          </p>
        </div>
       
      </div>

      {/* Third Section */}
      <div className="flex px-16 py-0 bg-white lg:flex-row flex-col-reverse gap-20 lg:gap-40">
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <h1 className="text-4xl font-bold pl-10 pt-20">New Section Title</h1>
          <p className="text-center text-md pl-10 max-w-[30%]">
            New section content goes here. You can change this text to whatever you need.
          </p>
        </div>
        <div className="flex mx-w-[20px] pl-30">
          <Image
            src={chat}
            alt="new section image"
            className="object-cover h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
          />
        </div>
      </div>

    {/* Fourth Section */}
<div className="flex flex-col px-16 py-0 bg-white gap-8">
  <div className="flex-1 flex flex-col gap-8 ml-auto">
    <h1 className="text-4xl font-bold pl-10 pt-20">New Section Title</h1>
    <p className="text-center text-md pl-10 max-w-[30%]">
      New section content goes here. You can change this text to whatever you need.
    </p>
  </div>
  <div className="flex justify-center pl-10">
    <Image
      src={chat}
      alt="new section image"
      className="object-cover h-[300px] w-[300px] lg:h-[300px] lg:w-[400px]"
    />
  </div>
</div>


      </div>

  );
}
