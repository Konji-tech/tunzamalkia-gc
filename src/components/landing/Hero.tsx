import Image from "next/image";
import friends from "@/../public/images/friends.svg";

export default function Hero() {
  return (
    <div className="flex px-16 py-32 bg-white lg:flex-row flex-col-reverse gap-32  lg:gap-16 animate-fade-left">
      {/* hero text */}
      <div className="flex-1 flex flex-col gap-8 justify-center items-center ">
        <h1 className="text-6xl font-bold text-center "> TunzaMalkia</h1>
        <p className="text-center text-md max-w-[60ch]">
        At TunzaMalkia, our heartfelt mission is to create a warm and welcoming space where African women of all ages can feel supported and valued. We are dedicated to breaking down barriers and providing you with the gentle guidance and reliable information you need to make empowered decisions about your sexul or reproductive health. Whether you're seeking advice on contraception, or any information that relates to your sexual health, TunzaMalkia is here to walk alongside you every step of the way. 
        We are committed to being your trusted companion in this journey, offering compassion, care, and comprehensive support tailored to your unique needs.
        </p>
      </div>

      {/* hero image */}
      <div className="flex-1 px-16">
        <Image
          src={friends}
          alt="women playing"
          className="object-cover w-full h-full "
        />
      </div>
    </div>
  );
}

