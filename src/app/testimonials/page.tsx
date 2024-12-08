"use client";

import Image from "next/image";
import Link from "next/link";

import stories from "./stories";

export default function FeatureList() {
  return (
    <div className="bg-red-600 h-full flex flex-col bg-gradient-to-r from-indigo-600 to-fuchsia-400">
      {/* Stories Heading */}
      <div className="flex flex-col gap-4 items-center py-24">
        <h1 className="text-3xl font-bold text-center">Stories</h1>
        <h2 className="text-xl font-medium text-center">
          Anonymous stories of Kenyan women
        </h2>
      </div>

      {/* Feature List Section */}
      <div className="bg-white py-32 flex items-center justify-center flex-col md:flex-row gap-8  h-full">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full max-w-[350px] bg-white rounded-3xl shadow-lg p-6 transition duration-500 hover:scale-105 animate-fadeInRight"
          >
            <div className="rounded-3xl w-full aspect-square flex items-center justify-center bg-purple-600">
              <Image
                src={story.image}
                alt="feature image"
                className="object-cover rounded-3xl"
              />
            </div>
            <h3 className="text-center text-xl w-full px-4">{story.title}</h3>
            <div className="w-full flex justify-center mt-4">
              <Link href={"/testimonials/" + story.slug}>
                <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
