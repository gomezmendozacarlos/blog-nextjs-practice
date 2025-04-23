
import { createClient } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { sql} from '@vercel/postgres';

export async function connectToDb() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log('Client is connected:', client);
      return client;
    } 
  }
  catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to the database');
  }
}

export async function getPosts() {
  try {
    noStore();
    const { rows } = await sql`SELECT * FROM posts`;
    return rows
  }
  catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
}