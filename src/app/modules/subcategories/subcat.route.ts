import express from 'express';
import { SubCategoriesControllers } from './subcat.controller';

const router = express.Router();

router.get('/list', SubCategoriesControllers.getSubCategories);

export const SubCategoryRoutes = router;
