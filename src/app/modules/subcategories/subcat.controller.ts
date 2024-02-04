import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SubCategoriesService } from './subcat.service';

export const SubCategoriesControllers = {
  getSubCategories: catchAsync(async (req: Request, res: Response) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const all = req.query.all ? true : false;
    const result = await SubCategoriesService.fetchSubCategories({
      page,
      limit,
      all,
    });
    const { total, ...sub_categories } = result;
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'SubCategories fetched successfully',
      meta: {
        limit,
        page,
        total,
      },
      data: sub_categories,
    });
  }),
};
