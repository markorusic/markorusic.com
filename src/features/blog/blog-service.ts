import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { getBlocks, getDatabase } from '../notion-integration/notion-service';
import { cache, cacheClient } from '@/lib/redis-cache';

export type Post = {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: 'Published' | 'Draft' | 'Todo';
  publishDate: string;
};

export const getPosts = () =>
  cache.get({
    key: ['posts'],
    maxAge: 60 * 1000,
    enabled: false,
    fetchFn: () =>
      getDatabase<Post>(process.env.NOTION_BLOG_DATABASE_ID).then((posts) =>
        posts.filter((post) => post.status === 'Published')
      )
  });

export const getPostDetails = (slug: string) =>
  cache.get({
    key: ['post', slug],
    maxAge: 60 * 1000,
    fetchFn: async () => {
      const posts = await getPosts();
      const post = posts.find((post) => post.slug === slug);
      if (!post) {
        return null;
      }
      const blocks = await getBlocks(post.id);
      return { post, blocks };
    }
  });
