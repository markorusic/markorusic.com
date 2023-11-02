import { FC } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Container } from '@/components/container';
import { NotionView } from '@/features/notion-integration/notion-view';
import { Post } from '../blog-service';
import { BlogLayout } from './blog-layout';

type BlogViewProps = {
  post: Post;
  blocks: BlockObjectResponse[];
};

export const BlogView: FC<BlogViewProps> = ({ post, blocks }) => {
  return (
    <Container>
      <BlogLayout post={post}>
        <NotionView blocks={blocks} />
      </BlogLayout>
    </Container>
  );
};
