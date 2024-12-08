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
          <h1 className="text-6xl font-bold text-center "> Intrauterine device (IUDs)</h1>
        </div>
        {/* hero image */}
        <div className="flex justify-center px-1">
          <Image src={Testicles} alt="Animated Testicles" className=" w-60" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center p-8 bg-white rounded-lg shadow-md  mx-auto mt-10">
        <Image src={Testicles} alt="Animated Testicles" className="object-cover w-full h-full" />
        <div className="md:ml-8 text-left">
          <h2 className="text-xl font-bold mb-4">A long-acting, reversible method of contraception</h2>
          <h3 className="font-bold mb-4">
            The IUD is a small, T-shaped device that is placed in a woman's womb and provides contraceptive protection for up to ten years.
          </h3>
          <p className="mb-4">
            The IUD is a long-acting, reversible method of contraception (LARC). Long-acting methods of contraception all have the advantage that, once in
            place, you don’t need to think about them until they need replacing and none of them interrupt sex. A woman can use an IUD whether or not she’s had
            children. IUDs are also straightforward for a trained provider to insert and remove, which can generally be done at any time.
          </p>
          <p className="mb-4">
            How an IUD works The IUD works by stopping a man s sperm meeting an egg or it may also stop an egg implanting in the uterus. Copper changes the
            make-up of the fluids in the womb and fallopian tubes, stopping sperm surviving there. IUDs may also stop fertilised eggs from implanting in the
            womb. Fitting an IUD Inserting an IUD is a simple procedure that takes a few minutes. A trained person inserts the IUD. The IUD sits in your womb
            and does not move from there. There are threads attached to the IUD which hang down into the vagina that assist with removal or if you or your
            provider want to check on the IUD. Do not pull on the threads as this is how the device is removed.
          </p>

          <h3 className="text-xl font-bold mb-4">How an IUD works</h3>
          <div className=" aspect-video ">
            <iframe
              className=" h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/SIcjaR69Yks?si=NaCEccWFcGP_P5Ne"
              width="100%"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
