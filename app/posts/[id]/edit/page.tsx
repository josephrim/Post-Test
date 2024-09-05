import { fetchPostById } from '../../../../lib/api';
import PostForm from '../../../../components/PostForm';
import { Post } from '../../../../lib/types';

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post: Post = await fetchPostById(Number(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Post</h1>
      <PostForm initialData={post} />
    </div>
  );
}