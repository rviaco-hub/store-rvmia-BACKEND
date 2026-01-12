import { Request, Response } from 'express';
import Payment from './payment.model';

export const createPayment = async (req: Request, res: Response) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};
