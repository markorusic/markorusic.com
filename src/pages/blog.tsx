import { GetStaticProps } from 'next';
import { blogConfig } from '@/config';
import { BlogListView } from '@/features/blog/components/blog-list-view';
import { getPosts } from '@/features/blog/blog-service';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts }, revalidate: blogConfig.ISR_TTL };
};

export default BlogListView;
