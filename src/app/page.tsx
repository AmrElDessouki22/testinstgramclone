'use client'
import { Feed } from '@/components/features/Feed';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const dummyPosts: Post[] = [
      { id: 1, title: 'Post 1', content: 'This is the content for post 1' },
      { id: 2, title: 'Post 2', content: 'This is the content for post 2' },
      { id: 3, title: 'Post 3', content: 'This is the content for post 3' },
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Feed posts={posts} />
    </div>
  );
}