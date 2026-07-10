import { Request, Response } from 'express';
import { prisma } from '../prisma';

export const getRestaurants = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurants = await prisma.restaurant.findMany({
      include: {
        menuItems: true
      }
    });
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching restaurants' });
  }
};

export const createRestaurant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, ownerId } = req.body;
    
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        description,
        ownerId
      }
    });

    res.status(201).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error creating restaurant' });
  }
};

export const getRestaurantMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const menuItems = await prisma.menuItem.findMany({
      where: { restaurantId: id }
    });

    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching menu' });
  }
};
