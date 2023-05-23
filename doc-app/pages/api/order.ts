import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/order:
 *   get:
 *     description: Returns an order
 *     responses:
 *       200:
 *         description: Returns an order
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'hello world',
  });
};

export default handler;