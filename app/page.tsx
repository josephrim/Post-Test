import PostListClient from '../components/PostListClient';
import { fetchPosts } from '../lib/api';

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">All Posts</h1>
      <PostListClient posts={posts} />
    </div>
  );
}