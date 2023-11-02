import { FC } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '@/components/mdx-components';
import { Snippet } from 'contentlayer/generated';
import { SnippetLayout } from './snippet-layout';

export const SnippetView: FC<{ snippet: Snippet }> = ({ snippet }) => {
  const Component = useMDXComponent(snippet.body.code);
  return (
    <SnippetLayout snippet={snippet}>
      <Component components={components as any} />
    </SnippetLayout>
  );
};
