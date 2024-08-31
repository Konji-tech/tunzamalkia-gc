import Image from "next/image";
import friends from "@/../public/images/friends.svg";

function Hero() {
  return (
    <div className="flex px-16 py-32 bg-white lg:flex-row flex-col-reverse gap-32  lg:gap-16">
      {/* hero text */}
      <div className="flex-1 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-6xl font-bold text-center "> TunzaMalkia</h1>
        <p className="text-center text-md max-w-[60ch]">
          Loreum ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia enim eligendi veniam libero ab aliquid quaerat delectus
          aliquam facilis consequatur tempora molestias ut, maiores ullam ex,
          aut repellat, adipisci deleniti?
        </p>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Hello World
        </button>
      </div>

      {/* hero image */}
      <div className="flex-1 px-16">
        <Image
          src={friends}
          alt="women playing"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Hero;

