import { GetStaticPaths, GetStaticProps } from 'next';
import { SnippetView } from '@/features/snippets/snippet-view';
import { getSnippet, getSnippets } from '@/features/snippets/snippet-service';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getSnippets().map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const snippet = getSnippet(params.slug as string);
  return { props: { snippet } };
};

export default SnippetView;
