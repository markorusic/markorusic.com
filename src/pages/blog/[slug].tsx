import { GetStaticPaths, GetStaticProps } from 'next';
import { BLOG_DATA_TTL } from '@/config';
import { BlogView } from '@/features/blog/components/blog-view';
import { getPosts } from '@/features/blog/blog-service';
import { getBlocks } from '@/features/notion-integration/notion-service';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  const blocks = await getBlocks(post.id);

  return { props: { post, blocks }, revalidate: BLOG_DATA_TTL };
};

export default BlogView;
