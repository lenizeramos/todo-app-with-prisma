import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { getTodo, addTodo, editTodo, deleteTodo } from "../../controllers/todoController";

export const prisma = new PrismaClient();

export const router = Router();

/* async function main() {
  await prisma.todo.create({
    data: {
      description: "Morning run",
      completed: false,
    },
  });
  const users = await prisma.todo.findMany()
  console.table(users)
}
main(); */

router.get("/", getTodo);
router.post("/", addTodo);
router.put("/:id", editTodo);
router.delete("/:id", deleteTodo);