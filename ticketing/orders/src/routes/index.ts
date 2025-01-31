import express, { Request, Response, NextFunction } from 'express';
import { Order } from '../models/order-model';
import { NotFoundError } from '@abticketing/common';
const router = express.Router();

router.get(
  '/api/orders',
  async (req: Request, res: Response, next: NextFunction) => {
    const orders = await Order.find({});
    if (!orders) {
      throw new NotFoundError();
    }
    res.status(200).send(orders);
  }
);

export { router as indexOrderRouter };
