"use client"; // Marking this component as a Client Component

import { useState, useEffect } from "react";

const Story3 = () => {
  const [testimonials, setTestimonials] = useState<string[]>([]);

  useEffect(() => {
    // Load testimonials from local storage
    const storedTestimonials = localStorage.getItem("story3Testimonials");
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>

      {/* Displaying testimonials */}
      <div className="mb-6">
        {testimonials.length === 0 ? (
          <p>No testimonials yet. Be the first to share your story!</p>
        ) : (
          testimonials.map((testimonial, index) => (
            <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
              <p>{testimonial}</p>
            </div>
          ))
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2">Share Your Story</h2>
      {/* Link to Google Form */}
      <a
        href="YOUR_GOOGLE_FORM_LINK" // Replace with your Google Form link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Submit Your Story
      </a>
    </div>
  );
};

export default Story3;
