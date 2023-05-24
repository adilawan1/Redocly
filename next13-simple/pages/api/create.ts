import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/create:
 *   post:
 *     description: Creates an order
 *     responses:
 *       200:
 *         description: Creates an order
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'Order has been created',
  });
};

export default handler;