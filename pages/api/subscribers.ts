import { getSubscriberCount } from 'lib/newsletter';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const count = await getSubscriberCount();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving subscribers' });
  }
}
