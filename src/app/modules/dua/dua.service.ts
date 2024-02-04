import prisma from '../../../server';

const fetchDua = async (options: any) => {
  const { page, limit, all } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;
  const result = all
    ? await prisma.dua.findMany()
    : await prisma.dua.findMany({ skip, take });
  const total = await prisma.dua.count();
  return { total, result };
};

export const DuaService = {
  fetchDua,
};
