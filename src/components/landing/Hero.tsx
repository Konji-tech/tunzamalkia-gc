import Image from "next/image";
import friends from "@/../public/images/friends.svg";

export default function Hero() {
  return (
    <div className="flex px-4 sm:px-8 md:px-16 py-16 md:py-32 bg-white lg:flex-row flex-col-reverse gap-8 md:gap-16 lg:gap-32 animate-fadeInRight font-poppins">
      {/* hero text */}
      <div className="flex-1 flex flex-col gap-4 md:gap-8 justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-poppins animate-bounce text-purple-600">
          TunzaMalkia
        </h1>
        <p className="text-center text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-[80%] lg:max-w-[60ch]">
          Welcome to our platform, a safe and empowering space for Kenyan women and young girls to access accurate, culturally sensitive information about their sexual and reproductive health. We are here to break the silence around topics that matter, from contraception to STIs, providing you with the knowledge and support to make informed decisions about your body. 
          Explore our resources, engage with our community, and take charge of your sexual health with confidence, all in one place
        </p>
      </div>

      {/* hero image */}
      <div className="flex-1 px-4 md:px-8 lg:px-16">
        <Image
          src={friends}
          alt="women playing"
          className="object-contain w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          priority
        />
      </div>
    </div>
  );
}

