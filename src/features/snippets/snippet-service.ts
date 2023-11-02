import { pick } from 'contentlayer/client';
import { Snippet, allSnippets } from 'contentlayer/generated';

export const getSnippets = () => {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'logo', 'description'])
  );
  console.log('hello', snippets.length);
  return snippets;
};

export const getSnippet = (slug: string) => {
  const snippet = allSnippets.find((snippet) => snippet.slug === slug);
  return snippet;
};
