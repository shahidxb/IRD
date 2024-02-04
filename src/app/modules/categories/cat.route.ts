import express from 'express';
import { CategoriesControllers } from './cat.controller';
const router = express.Router();

router.get('/list', CategoriesControllers.getCategories);

export const CategoryRoutes = router;
