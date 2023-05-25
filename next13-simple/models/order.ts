/**
 * @swagger
 * components:
 *  schemas:
 *    Order:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *        name:
 *          type: string
 *        createdAt:
 *          type: string
 *          format: date-time
 */

export interface Order {
  id: string;
  name: string;
  createdAt: string;
}
