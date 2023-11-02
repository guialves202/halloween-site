/*
  Warnings:

  - You are about to drop the column `imagePath` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageFilename]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageFilename` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('VASSOURA', 'CHAPEU', 'CALDEIRAO', 'VENENO', 'ABOBORA');

-- DropIndex
DROP INDEX "products_imagePath_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "imagePath",
ADD COLUMN     "category" "ProductCategory" NOT NULL,
ADD COLUMN     "imageFilename" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_imageFilename_key" ON "products"("imageFilename");
