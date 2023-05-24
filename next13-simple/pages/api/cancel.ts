import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/cancel:
 *   patch:
 *     description: Cancels an order
 *     responses:
 *       200:
 *         description: Cancels an order
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'Order has been canceled',
  });
};

export default handler;