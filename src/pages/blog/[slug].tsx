import { GetStaticPaths, GetStaticProps } from 'next';
import { blogConfig } from '@/config';
import { BlogView } from '@/features/blog/components/blog-view';
import { getPostDetails, getPosts } from '@/features/blog/blog-service';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug as string);

  if (!data) {
    return { notFound: true };
  }

  return { props: data, revalidate: blogConfig.ISR_TTL };
};

export default BlogView;
