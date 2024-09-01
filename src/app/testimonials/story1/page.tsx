import Link from "next/link";

const Page1 = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Testimonial: Experience with Implants</h1>
      <p className="mb-4">"I had the implant for three years, and it changed my life. I no longer had to worry about taking a pill every day. My periods were lighter, and I felt free!" - Aisha</p>
      <p className="mb-4">"At first, I was hesitant, but the convenience and effectiveness of the implant have been incredible. I would recommend it to anyone looking for a reliable contraceptive method." - Fatima</p>
      
      <h2 className="text-2xl font-bold mt-6">Share Your Experience</h2>
      <p className="mb-4">We would love to hear your story! Please share your experience under an alias.</p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIflscaYftjiCQ3c0bxSlmB-uWofJTojyEBk0ML-OdaEQbTQ/viewform">
        <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Share Your Testimonial
        </button>
      </Link>
    </div>
  );
};

export default Page1;
