


import Image from "next/image";
import friends from "@/../public/images/friends.svg";

export default function Hero() {
  return (
    <div className="flex px-16 py-32 bg-white lg:flex-row flex-col-reverse gap-32  lg:gap-16 animate-fadeInRight font-poppins font-bold text-lg">
      {/* hero text */}
      <div className="flex-1 flex flex-col gap-8 justify-center items-center ">
        <h1 className="text-6xl font-bold text-center font-poppins animate-bounce"> TunzaMalkia</h1>
        <p className="text-center text-md max-w-[60ch]">
        Welcome to our platform, a safe and empowering space for Kenyan women to access accurate, culturally sensitive information about their sexual and reproductive health. We are here to break the silence around topics that matter, from contraception to STIs, providing you with the knowledge and support to make informed decisions about your body. 
        Explore our resources, engage with our community, and take charge of your sexual health with confidence, all in one place
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

