import { cache } from './redis-cache';

export const subscribe = async (email: string) => {
  const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
  const data = await result.json();

  if (!result.ok) {
    throw new Error('An error occured.');
  }

  return data;
};

export const getSubscriberCount = () =>
  cache.get({
    key: ['subscriber-count'],
    maxAge: 1000 * 60 * 30,
    fetchFn: async () => {
      const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
        method: 'GET',
        headers: {
          Authorization: `Token ${process.env.REVUE_API_KEY}`
        }
      });

      const data = await result.json();

      if (!result.ok) {
        throw new Error('An error occured.');
      }

      return data?.length;
    }
  });
