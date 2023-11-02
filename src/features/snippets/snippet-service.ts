import { pick } from 'contentlayer/client';
import { allSnippets } from 'contentlayer/generated';

export const getSnippets = () => {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'logo', 'description'])
  );
  return snippets;
};

export const getSnippet = (slug: string) => {
  const snippet = allSnippets.find((snippet) => snippet.slug === slug);
  return { props: { snippet } };
};
