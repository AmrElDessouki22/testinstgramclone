'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '@/components/features/Post';

export const Feed = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Dummy Post 1', content: 'This is a dummy post for testing.' },
    { id: 2, title: 'Dummy Post 2', content: 'This is another dummy post for testing.' },
    { id: 3, title: 'Dummy Post 3', content: 'Yet another dummy post for testing.' },
  ]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl) {
      axios.get(`${apiUrl}/posts`)
        .then(response => {
          if (response.data.length > 0) {
            setPosts(response.data);
          }
        })
        .catch(error => console.error('Error fetching posts:', error));
    } else {
      console.error('API URL is not defined in the environment variables.');
    }
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};