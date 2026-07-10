import { Router } from 'express';
import { getRestaurants, createRestaurant, getRestaurantMenu } from '../controllers/restaurant.controller';

const router = Router();

router.get('/', getRestaurants);
router.post('/', createRestaurant); // Ideally protected by auth middleware
router.get('/:id/menu', getRestaurantMenu);

export default router;
