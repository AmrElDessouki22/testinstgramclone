'use client';

// Importing the PostType from the types directory
import { Post as PostType } from '@/types/index';

interface PostProps {
  post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="border rounded-md mb-4">
      <div className="p-4">
        <h3 className="font-bold">{post.user}</h3>
        <img src={post.imageUrl} alt={post.caption} className="w-full" />
        <p>{post.caption}</p>
        <div>
          <span>{post.likes} likes</span>
        </div>
        <button className="text-blue-500">Like</button>
        <div className="mt-2">
          {post.comments && post.comments.map((comment, index) => (
            <div key={index} className="border-t pt-2">
              <strong>{comment.user}:</strong> {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dummy posts
export const dummyPosts: PostType[] = [
  {
    id: 1,
    user: 'John Doe',
    imageUrl: 'https://via.placeholder.com/150',
    caption: 'This is a dummy post',
    likes: 10,
    comments: [
      { user: 'Jane Doe', text: 'Nice post!' },
      { user: 'Bob Smith', text: 'I agree!' },
    ],
  },
  {
    id: 2,
    user: 'Jane Doe',
    imageUrl: 'https://via.placeholder.com/150',
    caption: 'Another dummy post',
    likes: 20,
    comments: [
      { user: 'John Doe', text: 'Great post!' },
      { user: 'Bob Smith', text: 'Well said!' },
    ],
  },
];