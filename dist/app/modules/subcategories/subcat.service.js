"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoriesService = void 0;
const server_1 = __importDefault(require("../../../server"));
const fetchSubCategories = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, all } = options;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 10;
    const result = all
        ? yield server_1.default.sub_category.findMany({
            include: {
                dua: true,
            },
        })
        : yield server_1.default.sub_category.findMany({
            skip,
            take,
            include: {
                dua: true,
            },
        });
    const total = yield server_1.default.sub_category.count();
    return { total, result };
});
exports.SubCategoriesService = {
    fetchSubCategories,
};
