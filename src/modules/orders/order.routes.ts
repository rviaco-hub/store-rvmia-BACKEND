import { Router } from 'express';
import { createOrder, getOrders } from './order.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);

export default router;
