import express from 'express';

import { CategoryRoutes} from '../modules/categories/cat.route';
import { SubCategoryRoutes } from '../modules/subcategories/subcat.route';
import { DuaRoutes } from '../modules/dua/dua.route';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/sub-categories',
    route: SubCategoryRoutes,
  },
  {
    path: '/dua',
    route: DuaRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
