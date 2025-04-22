import Post from '@/app/ui/components/posts/Post';
import  { connectToDb, getPosts } from '@/app/lib/data'

export default async function Page() {
  const client = await connectToDb()
  const posts = await getPosts()
 
  return (
    <>
      {client && <p className='text-green-500'>Connected to the database</p>}
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} content={post.content} date={post.date} />)}
    </>)
}