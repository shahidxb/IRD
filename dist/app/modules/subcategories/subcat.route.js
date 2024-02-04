"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const subcat_controller_1 = require("./subcat.controller");
const router = express_1.default.Router();
router.get('/list', subcat_controller_1.SubCategoriesControllers.getSubCategories);
exports.SubCategoryRoutes = router;
