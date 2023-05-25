import { NextApiRequest, NextApiResponse } from 'next';
import { Order } from '../../models/order';

/**
 * @swagger
 * /api/order:
 *   get:
 *     description: Returns an order
 *     responses:
 *       200:
 *         description: Returns an order
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 $ref: '#/components/schemas/order'
 */
const handler = (_req: NextApiRequest, res: NextApiResponse<Order[]>) => {
  res.status(200).json([
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'IT Man Channel',
      createdAt: new Date().toUTCString(),
    },
  ]);
};

export default handler;