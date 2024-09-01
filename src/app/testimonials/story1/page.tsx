import { useState, useEffect } from "react";

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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
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
      <form onSubmit={handleSubmit}>
        <textarea
          value={newTestimonial}
          onChange={(e) => setNewTestimonial(e.target.value)}
          rows={4}
          placeholder="Share your story..."
          className="w-full border p-2 rounded-lg mb-4"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Story1;
