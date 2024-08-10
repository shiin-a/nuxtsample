import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany();
  console.log(tasks[0].task)

  return tasks;
})
