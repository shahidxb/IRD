import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { DuaService } from './dua.service';

export const DuaControllers = {
  getSubCategories: catchAsync(async (req: Request, res: Response) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const all = req.query.all ? true : false;
    const result = await DuaService.fetchDua({
      page,
      limit,
      all,
    });
    const { total, ...dua } = result;
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Dua fetched successfully',
      meta: {
        limit,
        page,
        total,
      },
      data: dua,
    });
  }),
};
