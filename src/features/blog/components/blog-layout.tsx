import { FC, ReactNode } from 'react';
import { Post } from '../blog-service';
import { SayHello } from './say-hello';
import { ViewCounter } from './view-counter';

type BlogLayoutProps = {
  post: Post;
  children: ReactNode;
};

export const BlogLayout: FC<BlogLayoutProps> = ({ post, children }) => {
  return (
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
          <span>
            7 min read • <ViewCounter slug={post.slug} />
          </span>
        </div>
      </div>
      {children}
      <div className="w-full">
        <SayHello />
      </div>
    </div>
  );
};
