export const dynamic = 'force-dynamic';

import Post from '@/app/ui/components/posts/Post';
import { Button } from "@/app/ui/components/button"
import Link from 'next/link'
import  { connectToDb, getPosts } from '@/app/lib/data'
import { auth } from "../../../../auth.config"

export default async function Page() {
  await connectToDb()
  const posts = await getPosts()
  const session = await auth()
 
  return (
    <>
      { session && <Link href="/blog/post/insert"><Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button></Link>}
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} content={post.content} date={post.date} />)}
    </>)
}