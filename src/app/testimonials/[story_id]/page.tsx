"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import stories from "../stories";
import Image from "next/image";

const Story1 = () => {
  const params = useParams();
  const story = stories.find((story) => story.slug === params?.story_id);

  return (
    <div className="bg-white h-full overflow-auto">
      <div className="max-w-screen-lg mx-auto py-32 px-8 flex flex-col gap-16">
        <h1 className="text-4xl font-black mb-4 text-pink-900">
          {story?.title}
        </h1>

        <Image src={story?.image} alt="story" />

        <p className="font-poppins text-justify">{story?.content}</p>
      </div>

      <div className="bg-black text-pink-200 ">
        <div className="px-8 py-16 flex flex-col gap-4 mx-auto max-w-screen-lg">
          <h2 className="text-2xl font-bold mt-6">Join The Conversation</h2>
          <p className="mb-4 text-justify max-w-[65ch]">
            Your voice can inspire change. Share your story anonymously and help
            other women feel seen, heard, and supported.When comfortable and
            ready,click below to share your story{" "}
          </p>

          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIflscaYftjiCQ3c0bxSlmB-uWofJTojyEBk0ML-OdaEQbTQ/viewform"
          >
            <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  rounded-lg text-sm px-5 py-2.5 font-bold">
              Share Your Story!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story1;
