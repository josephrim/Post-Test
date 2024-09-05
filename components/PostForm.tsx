'use client';

import { useState } from 'react';
import { createPost, updatePost } from '../lib/api';
import { Post } from '../lib/types';
import { useRouter } from 'next/navigation'; // Use next/navigation

interface PostFormProps {
  initialData?: Post;
}

const PostForm: React.FC<PostFormProps> = ({ initialData }) => {
  const [title, setTitle] = useState<string>(initialData?.title || '');
  const [body, setBody] = useState<string>(initialData?.body || '');
  const router = useRouter(); // Using next/navigation to handle client-side navigation
  const isEditing = !!initialData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && initialData) {
      await updatePost(initialData.id, { title, body });
    } else {
      await createPost({ title, body });
    }
    router.push('/'); // Redirect back to homepage after successful submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isEditing ? 'Edit Post' : 'Create a New Post'}
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter post title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter post body"
        />
      </div>
      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
        {isEditing ? 'Update Post' : 'Submit Post'}
      </button>
    </form>
  );
};

export default PostForm;