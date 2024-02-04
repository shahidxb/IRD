"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cat_route_1 = require("../modules/categories/cat.route");
const subcat_route_1 = require("../modules/subcategories/subcat.route");
const dua_route_1 = require("../modules/dua/dua.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/categories',
        route: cat_route_1.CategoryRoutes,
    },
    {
        path: '/sub-categories',
        route: subcat_route_1.SubCategoryRoutes,
    },
    {
        path: '/dua',
        route: dua_route_1.DuaRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
