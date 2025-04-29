import { notFound } from 'next/navigation';
import Post from '@/app/ui/components/posts/Post';
import { connectToDb, getPosts } from '@/app/lib/data';
//import { posts } from '@/app/lib/placeholder-data';

type Post =   {
  id: string;
  title: string;
  content: string;
  date: string; 
  user: string;
}

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  
  const post = posts.find((post) => post.id === params.id) as Post | undefined;
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>)
}