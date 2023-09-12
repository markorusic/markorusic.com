import useSWR from 'swr';
import { Views } from './types';

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export const useBlogViews = (slug: string) => {
  const swr = useSWR<Views>(`/api/views/${slug}`, fetcher);
  return swr.data ? swr.data.total : undefined;
};
