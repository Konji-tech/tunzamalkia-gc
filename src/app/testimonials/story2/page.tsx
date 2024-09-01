import Link from "next/link";

const Page2 = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Testimonial: Experience with Birth Control Pills</h1>
      <p className="mb-4">"Using birth control pills has given me control over my body. I can plan my life around my cycle, and it has made my periods more manageable." - Sarah</p>
      <p className="mb-4">"I was nervous about side effects, but they have been minimal. I feel empowered knowing I can make informed choices about my health." - Lisa</p>
      
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

export default Page2;
