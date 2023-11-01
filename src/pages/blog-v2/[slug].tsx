import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionView } from '@/components/NotionView';
import Container from '@/components/Container';
import SayHello from '@/components/SayHello';
import { Post, getBlocks, getPosts } from '@/lib/notion';

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

  return { props: { post, blocks }, revalidate: 5 * 60 };
};

type BlogV2Props = {
  post: Post;
  blocks: BlockObjectResponse[];
};

const BlogV2: FC<BlogV2Props> = ({ post, blocks }) => {
  return (
    <Container>
      <div className="flex gap-4 flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-black dark:text-white font-bold text-4xl">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Marko Rusić / August 19, 2019</span>
            <span>7 min read • 262 views</span>
          </div>
        </div>
        <NotionView blocks={blocks} />
        <div className="w-full">
          <SayHello />
        </div>
      </div>
    </Container>
  );
};

export default BlogV2;
