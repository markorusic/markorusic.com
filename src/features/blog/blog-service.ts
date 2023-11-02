import { blogConfig } from '@/config';
import { getBlocks, getDatabase } from '../notion-integration/notion-service';
import { cache } from '@/shared/redis-cache';

export type Post = {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: 'Published' | 'Draft' | 'Todo';
  publish_date: string;
};

export const getPosts = () =>
  cache.get({
    key: ['posts'],
    ttl: blogConfig.CACHE_TTL,
    enabled: blogConfig.ENABLE_CACHE,
    fetchFn: () =>
      getDatabase<Post>(process.env.NOTION_BLOG_DATABASE_ID).then((posts) =>
        posts.filter((post) => post.status === 'Published')
      )
  });

export const getPostDetails = (slug: string) =>
  cache.get({
    key: ['post', slug],
    ttl: blogConfig.CACHE_TTL,
    enabled: blogConfig.ENABLE_CACHE,
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
