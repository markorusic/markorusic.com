import { getCacheKey } from 'lib/cache-factory';
import { inMemoryCacheClient } from 'lib/in-memory-cache';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    const key = getCacheKey(['post-views', slug]);
    const currentViews = await inMemoryCacheClient.get<number>(key);

    if (req.method === 'POST') {
      const updatedViews = currentViews + 1;
      await inMemoryCacheClient.set(key, updatedViews);
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
