import { FC } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '@/shared/components/mdx-components';
import { Snippet } from 'contentlayer/generated';
import { SnippetLayout } from './snippet-layout';

type SnippetViewProps = { snippet: Snippet };

export const SnippetView: FC<SnippetViewProps> = ({ snippet }) => {
  const Component = useMDXComponent(snippet.body.code);
  return (
    <SnippetLayout snippet={snippet}>
      <Component components={components as any} />
    </SnippetLayout>
  );
};
