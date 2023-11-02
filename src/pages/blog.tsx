import { GetStaticProps } from 'next';
import { BLOG_DATA_TTL } from '@/config';
import { BlogListView } from '@/features/blog/components/blog-list-view';
import { getPosts } from '@/features/blog/blog-service';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts }, revalidate: BLOG_DATA_TTL };
};

export default BlogListView;
