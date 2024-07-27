/*
  Warnings:

  - Changed the type of `availability` on the `Worker` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `bio` on table `Worker` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Worker" DROP COLUMN "availability",
ADD COLUMN     "availability" BOOLEAN NOT NULL,
ALTER COLUMN "bio" SET NOT NULL;
