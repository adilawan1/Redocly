import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/orders:
 *   get:
 *     description: Returns all the orders
 *     responses:
 *       200:
 *         description: Returns all the orders
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'hello world',
  });
};

export default handler;