import Image from "next/image";
import friends from "@/../public/images/img1.png";

export default function Hero() {
  return (
    <div className="flex px-16 py-32 bg-white lg:flex-row flex-col-reverse gap-32  lg:gap-16 animate-fadeInRight font-poppins font-bold text-lg">
      {/* hero text */}
      <div className="flex-1 flex flex-col gap-8 justify-center items-center ">
        
        <h1 className="text-6xl font-bold text-center font-poppins animate-bounce text-pink-600">  Welcome to AliDada</h1>
        <p className="text-center text-md max-w-[60ch]">
        Welcome to our platform, a safe and empowering space for Kenyan women with endocrine disorders(PCOS) which affects 90 million African women. Alidada aims not only to empower women living with PCOS to take control of their health but also bridge the gap of endocrine health care and general health care.
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

