/*
  Warnings:

  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "UserRole" (
    "UserRole" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_UserRole_key" ON "UserRole"("UserRole");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_fkey" FOREIGN KEY ("role") REFERENCES "UserRole"("UserRole") ON DELETE RESTRICT ON UPDATE CASCADE;
