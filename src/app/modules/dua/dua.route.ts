import express from 'express';
import { DuaControllers } from './dua.controller';

const router = express.Router();

router.get('/list', DuaControllers.getSubCategories);

export const DuaRoutes = router;
