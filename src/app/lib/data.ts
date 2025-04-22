import { createClient } from '@vercel/postgres';

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