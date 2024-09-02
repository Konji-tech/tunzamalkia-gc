
'use client'

import { useState, useEffect } from "react";
import Link from 'next/link';

const Story1 = () => {
  const [testimonials, setTestimonials] = useState<string[]>([]);
  const [newTestimonial, setNewTestimonial] = useState("");

  useEffect(() => {
    // Load testimonials from local storage
    const storedTestimonials = localStorage.getItem("story1Testimonials");
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem("story1Testimonials", JSON.stringify(updatedTestimonials));
    setNewTestimonial(""); // Clear the input field
  };

  return (
    <div className="p-8 bg-white w-screen h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Finding My Voice</h1>
      <div className="font-poppins p-16 text-justify font-bold">
        <p>
          I was 22 when I first realized how little I knew about my own body. Growing up, conversations about sex were shrouded in shame and secrecy. In my
          community, the idea of discussing anything remotely related to sexual health was taboo. So, like many other girls, I learned to stay quiet. I learned
          to carry my questions in silence, convinced that asking would only make people think less of me. But the questions kept coming. I wondered about
          contraception, about whether the pain I felt was normal, about how to protect myself in relationships that didn't always feel safe. I googled things
          in secret, trying to piece together answers from articles that never seemed to understand my experience. I felt alone, like I was navigating this huge
          part of my life completely in the dark. It wasnt until a friend shared her story—her own struggles, confusion, and eventual empowerment—that I
          realized I wasnt alone. Her openness was like a door had been unlocked for me. I started asking questions, and slowly, I began finding the answers I
          had been seeking for so long. I learned that my health, my body, and my well-being were nothing to be ashamed of. I learned that talking about these
          things didnt make me weak—it made me strong.Now, I share my story in the hope that it might help another woman, just like my friend,s story helped
          me. We dont have to face these challenges alone. Together, we can break the silence and support each other on our journeys to understanding, healing,
          and empowerment.
        </p>
      </div>
      <h2 className="text-2xl font-bold mt-6">Join The Conversation</h2>
      <p className="mb-4 text-justify">Your voice can inspire change.
        Share your story anonymously and help other women feel seen, heard, and supported.When comfortable and ready,click below to share your story </p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIflscaYftjiCQ3c0bxSlmB-uWofJTojyEBk0ML-OdaEQbTQ/viewform">
        <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  rounded-lg text-sm px-5 py-2.5 font-bold">
          Share Your Story!
        </button>
      </Link>
    </div>
  );
};

export default Story1;
