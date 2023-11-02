import { GetStaticPaths, GetStaticProps } from 'next';
import { SnippetView } from '@/features/snippets/snippet-view';
import { allSnippets } from 'contentlayer/generated';
import { getSnippet } from '@/features/snippets/snippet-service';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allSnippets.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const snippet = getSnippet(params.slug as string);
  return { props: { snippet } };
};

export default SnippetView;
