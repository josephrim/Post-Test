import PostForm from '../../../components/PostForm';

export default function CreatePostPage() {
  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Create New Post</h1>
      <PostForm />
    </div>
  );
}