import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { getDatabase } from '../notion-integration/notion-service';

export type Post = {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: 'Published' | 'Draft' | 'Todo';
  publishDate: string;
};

export const getPosts = () =>
  getDatabase<Post>(process.env.NOTION_BLOG_DATABASE_ID).then((posts) =>
    posts.filter((post) => post.status === 'Published')
  );
