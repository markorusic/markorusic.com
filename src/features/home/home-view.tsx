import { FC } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useBlogViews } from '@/shared/fetcher';
import { Container } from '@/shared/components/container';
import { owner, featuredBlogPosts } from '@/config';
import { SayHello } from '@/features/blog/components/say-hello';

export const HomeView: FC = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              {owner.name}
            </h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Doing software development of all kinds, mostly web/mobile apps.
              Writing about boring tech stuff. React, React Native, TypeScript,
              Next.js, etc...
            </p>
          </div>
          {/* <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt={owner.name}
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div> */}
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row w-full">
          {featuredBlogPosts.map((post, index) => (
            <BlogPostCard
              key={post.slug}
              gradient={featuredPostGradients[index]}
              {...post}
            />
          ))}
        </div>
        <Link href="/blog">
          <a className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

        <SayHello />
      </div>
    </Container>
  );
};

const featuredPostGradients = [
  'from-[#8A2387] via-[#E94057] to-[#F27121]',
  'from-[#F27121] to-[#FDC830]',
  'from-[#FDC830] via-[#E94057] to-[#8A2387]'
];

type BlogPostCardProps = {
  title: string;
  slug: string;
  gradient: string;
};

const BlogPostCard: FC<BlogPostCardProps> = ({ title, slug, gradient }) => {
  const views = useBlogViews(slug);
  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={clsx(
          'transform hover:scale-[1.01] transition-all',
          'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="ml-2 align-baseline capsize">
              {views ? views.toLocaleString() : '–––'}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
