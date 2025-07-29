export interface Post {
  id: number;
  user: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Array<{ user: string; text: string }>;
}
