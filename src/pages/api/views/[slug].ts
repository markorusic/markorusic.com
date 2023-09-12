import { getCacheKey } from '@/lib/cache-factory';
import { cacheClient } from '@/lib/redis-cache';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    const key = getCacheKey(['post-views', slug]);
    const currentViews = await cacheClient.get<number>(key);

    if (req.method === 'POST') {
      const updatedViews = currentViews + 1;
      await cacheClient.set(key, updatedViews);
      return res.status(200).json({
        total: updatedViews.toString()
      });
    }

    if (req.method === 'GET') {
      return res.status(200).json({ total: currentViews });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
