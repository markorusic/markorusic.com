import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const totalViews = 5;
    return res.status(200).json({ total: totalViews });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
