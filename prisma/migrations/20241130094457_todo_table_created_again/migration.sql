-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "completed" BOOLEAN DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
