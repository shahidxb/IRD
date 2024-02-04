import prisma from '../../../server';

const fetchCategories = async (options: any) => {
  const { page, limit, all, cat_id, sub_cat, dua } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;

  const queryOptions = {
    where: {},
    skip,
    take,
    include: {},
  };

  if (cat_id) {
    queryOptions.where = {
      cat_id,
    };
  }

  if (sub_cat) {
    queryOptions.include = {
      ...queryOptions.include,
      sub_category: {
        include: {
          dua: {
            select: {
              dua_name_en: true,
            },
          },
        },
      },
    };
  }

  if (dua) {
    queryOptions.include = {
      ...queryOptions.include,
      dua: true,
    };
  }

  const result = all
    ? await prisma.category.findMany(queryOptions)
    : await prisma.category.findMany({ ...queryOptions, skip, take });

  const total = await prisma.category.count();
  return { total, result };
};

export const categoriesService = {
  fetchCategories,
};