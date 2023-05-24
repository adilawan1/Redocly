import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/update:
 *   patch:
 *     description: Updates an order
 *     responses:
 *       200:
 *         description: Updates an order
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'hello world',
  });
};

export default handler;