'use client';

interface PostProps {
  post: {
    id: number;
    user: string;
    imageUrl: string;
    caption: string;
    likes: number;
    comments: Array<{ user: string; text: string }>;
  };
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
