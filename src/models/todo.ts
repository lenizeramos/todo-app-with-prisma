import { prisma } from "../routes/api/todoRouter";

export const getAll = async () => {
  let data = await prisma.todo.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return data;
};

export const create = async (description: string) => {
  await prisma.todo.create({ data: { description } });
};

export const edit = async (
  description: string,
  completed: boolean,
  id: number
) => {
  await prisma.todo.update({
    where: { id },
    data: { description, completed },
  });
};

export const remove = async (id: number) => {
  await prisma.todo.delete({ where: { id: id } });
};
