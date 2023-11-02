import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { owner } from '@/config';
import { Container } from '@/components/container';
import { Post } from '../blog-service';
import { SayHello } from './say-hello';
import { ViewCounter } from './view-counter';
import dayjs from 'dayjs';

type BlogLayoutProps = {
  post: Post;
  children: ReactNode;
};

export const BlogLayout: FC<BlogLayoutProps> = ({ post, children }) => {
  const publishDate = dayjs(post.publish_date);
  return (
    <Container
      title={`${post.title} – ${owner.name}`}
      description={post.description}
      // TODO
      // image={`${process.env.SITE_BASE_URL}${post.image}`}
      date={publishDate.toISOString()}
      type="article"
    >
      <div className="flex gap-4 flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-black dark:text-white font-bold text-4xl">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Image
                alt={owner.name}
                height={24}
                width={24}
                src="/avatar.jpeg"
                className="rounded-full"
              />
              <p>
                {owner.name} / {publishDate.format('MMMM DD, YYYY')}
              </p>
            </div>
            <span>
              {/* TODO */}
              {/* 7 min read •  */}
              <ViewCounter slug={post.slug} />
            </span>
          </div>
        </div>
        {children}
        <div className="w-full">
          <SayHello />
        </div>
      </div>
    </Container>
  );
};
