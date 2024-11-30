import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const router = Router();

async function main() {
  await prisma.todo.create({
    data: {
      description: "Morning run",
      completed: false,
    },
  });

  const users = await prisma.todo.findMany()

  console.table(users)
}

main();

/* router.get("/", async (req: Request, res: Response) => {
  res.json({
    status: 'ok', 
    message:'Your app is ready'
  });
}); */


