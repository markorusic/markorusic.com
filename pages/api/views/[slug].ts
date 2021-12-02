import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = 6;
      return res.status(200).json({
        total: newOrUpdatedViews.toString()
      });
    }

    if (req.method === 'GET') {
      const views = 32323;
      return res.status(200).json({ total: views });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
