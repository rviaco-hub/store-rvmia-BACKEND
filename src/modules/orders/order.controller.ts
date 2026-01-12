import { Request, Response } from 'express';
import Order from './order.model';

export const createOrder = async (req: any, res: Response) => {
  const order = await Order.create({
    user: req.user.id,
    items: req.body.items,
    total: req.body.total
  });
  res.json(order);
};

export const getOrders = async (_: Request, res: Response) => {
  const orders = await Order.find()
    .populate('user')
    .populate('items.product');
  res.json(orders);
};
