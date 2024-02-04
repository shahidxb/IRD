"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cat_controller_1 = require("./cat.controller");
const router = express_1.default.Router();
router.get('/list', cat_controller_1.CategoriesControllers.getCategories);
exports.CategoryRoutes = router;
