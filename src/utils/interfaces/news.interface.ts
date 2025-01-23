export interface INews {
  _id: string;
  title: string;
  content: string;
  image: string;
  postedAt: Date | string;
  readTime: number;
  views: number;
  socialLinks: Record<string, string>;
  author: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
