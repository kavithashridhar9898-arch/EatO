import { Request, Response } from 'express';
import { prisma } from '../prisma';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, restaurantId, items, totalAmount } = req.body;
    
    const order = await prisma.order.create({
      data: {
        userId,
        restaurantId,
        totalAmount,
        items: {
          create: items.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            priceAtTime: item.price
          }))
        }
      },
      include: {
        items: true
      }
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error creating order' });
  }
};

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.query; // Usually from JWT payload
    if (!userId) {
      res.status(400).json({ error: 'UserId required' });
      return;
    }

    const orders = await prisma.order.findMany({
      where: { userId: String(userId) },
      include: { items: true, restaurant: true }
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching orders' });
  }
};
