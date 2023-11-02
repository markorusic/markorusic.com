import { FC, useEffect } from 'react';
import { useBlogViews } from '@/lib/fetcher';

type ViewCounterProps = {
  slug: string;
};

export const ViewCounter: FC<ViewCounterProps> = ({ slug }) => {
  const views = useBlogViews(slug);

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: 'POST' });
    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
};
