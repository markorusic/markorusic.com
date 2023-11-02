import { FC } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionView } from '@/features/notion-integration/notion-view';
import { Post } from '../blog-service';
import { BlogLayout } from './blog-layout';

type BlogViewProps = {
  post: Post;
  blocks: BlockObjectResponse[];
};

export const BlogView: FC<BlogViewProps> = ({ post, blocks }) => {
  return (
    <BlogLayout post={post}>
      <NotionView blocks={blocks} />
    </BlogLayout>
  );
};
