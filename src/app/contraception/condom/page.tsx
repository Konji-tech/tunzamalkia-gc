import React from "react";
import friends from "@/../public/images/friends.svg";
import Image from "next/image";
import Testicles from "@/../public/images/Testicles.svg";

// First top section of the page
export default function CondomPage() {
  return (
    <div>
      <div className="flex px-8 py-16  lg:flex-row flex-col-reverse gap-16  lg:gap-8 ">
        {/* hero text */}
        <div className="flex-1 flex flex-col gap-8 justify-center items-center ">
          <h1 className="text-6xl font-bold text-center "> Male Condoms</h1>
        </div>
        {/* hero image */}
        <div className="flex justify-center px-1">
          <Image src={Testicles} alt="Animated Testicles" className=" w-60" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center p-8 bg-white rounded-lg shadow-md  mx-auto mt-10">
        <Image src={Testicles} alt="Animated Testicles" className="object-cover w-full h-full" />
        <div className="md:ml-8 text-left">
          <h2 className="text-xl font-bold mb-4">A short Acting Method of Contraception</h2>
          <h3 className="font-bold mb-4">The male condom is a barrier contraception method for preventing pregnancy and STIs</h3>
          <p className="mb-4">
            When used correctly, condoms are highly effective. Condoms are also the only contraceptive method that protect against both pregnancy and sexually
            transmitted infections (STIs), including HIV and syphilis.
          </p>
          <p className="mb-4">
            The condom is a barrier that stops a man s semen from entering into the woman, preventing pregnancy and sexually transmitted infections. To be
            effective it is very important that condoms are used correctly. They need to be used properly every time a couple has sex. This means wearing it
            throughout the entire sex act, and using a new one every time. Tips for good condom use: Use a new condom each time you have sex. Check the use
            by date on the packet. Be careful how you take the condom out of the packet sharp fingernails and jewellery can tear the condom Find the teat
            or closed end and squeeze it to get rid of air. This will also help you roll the condom on the right way around Put the condom on when the penis
            is fully erect and before it touches the vagina or genital area- Still holding the end, roll the condom all the way down the penis  If it won't
            roll down, then it s probably on inside out. If so, start again with a new condom as sperm could now be on the first one  If you have foreskin, you
            may find it easier and more comfortable to put the condom on if the foreskin is pulled back. This lets the foreskin move freely and reduces the risk
            of the condom tearing or slipping off
          </p>

          <h3 className="text-xl font-bold mb-4">How to Use a Male Condom</h3>
          <div className=' aspect-video ' >
    <iframe 
        className=' h-full w-full rounded-lg'
        src="https://www.youtube.com/embed/hNcDm37yj5Q?si=T_rLLrF5ahAj7YGY"  

        width="100%" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
     </iframe>
</div> 
        </div>
      </div>
    </div>
  );
}
