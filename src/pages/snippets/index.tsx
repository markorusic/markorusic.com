import type { GetStaticProps } from 'next';
import { getSnippets } from '@/features/snippets/snippet-service';
import { SnippetListView } from '@/features/snippets/snippet-list-view';

export const getStaticProps: GetStaticProps = () => {
  const snippets = getSnippets();
  return { props: { snippets } };
};

export default SnippetListView;
