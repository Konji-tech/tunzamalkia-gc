import { useState } from 'react';

interface Story {
  id: number;
  content: string;
}

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [story, setStory] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (story.trim()) {
      setStories([{ id: stories.length + 1, content: story }, ...stories]);
      setStory('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Share Your Story</h1>

        {/* Story Submission Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <textarea
            className="w-full h-28 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Write your story here..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 w-full font-semibold"
          >
            Submit Anonymously
          </button>
        </form>

        {/* Community Stories Feed */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Community Stories</h2>
          {stories.length > 0 ? (
            stories.map((s) => (
              <div key={s.id} className="bg-gray-50 p-4 mb-4 rounded-lg shadow-md">
                <p className="text-gray-800">{s.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No stories yet. Be the first to share yours!</p>
          )}
        </div>
      </div>
    </div>
  );
}
