export type Post = {
    id: string;
    title: string;
    content: string;
    date: string;
  };

  export type User = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string| null | undefined;
  };