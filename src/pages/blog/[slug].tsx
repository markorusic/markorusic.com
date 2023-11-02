import { GetStaticPaths, GetStaticProps } from 'next';
import { BLOG_DATA_TTL_SECONDS } from '@/config';
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

  return { props: data, revalidate: BLOG_DATA_TTL_SECONDS };
};

export default BlogView;
