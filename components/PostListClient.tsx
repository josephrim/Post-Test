'use client';

import { Post } from '../lib/types';
import { deletePost } from '../lib/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // To handle navigation and refresh after deletion

interface PostListClientProps {
  posts: Post[];
}

const PostListClient: React.FC<PostListClientProps> = ({ posts }) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deletePost(id);
      router.refresh(); // Refresh the page after deletion
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">{post.title}</h2>
          <p className="text-gray-700 mb-6">{post.body.substring(0, 100)}...</p>
          <div className="flex justify-between">
            <Link href={`/posts/${post.id}/edit`} className="text-blue-600 hover:underline">Edit</Link>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostListClient;