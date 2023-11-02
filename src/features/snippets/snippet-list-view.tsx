import { FC, useState } from 'react';
import { Snippet } from 'contentlayer/generated';
import { Container } from '@/shared/components/container';
import { owner } from '@/config';
import { FunctionCard } from './function-card';

export const SnippetListView: FC<{ snippets: Snippet[] }> = ({ snippets }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredSnippets = snippets.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title={`Code Snippets – ${owner.name}`}
      description="A collection of code snippets"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          A collection of code snippets and utilities that I frequently use.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search snippets..."
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search snippets..."
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {!filteredSnippets.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No snippets found.
            </p>
          )}
          {filteredSnippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
