import { useEffect } from 'react';
import { useBlogViews } from '@/lib/fetcher';

export default function ViewCounter({ slug }) {
  const views = useBlogViews(slug);

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: 'POST' });
    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
