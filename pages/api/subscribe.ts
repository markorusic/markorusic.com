import { subscribe } from 'lib/newsletter';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await subscribe(email);
    res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error });
  }

  return;
}
