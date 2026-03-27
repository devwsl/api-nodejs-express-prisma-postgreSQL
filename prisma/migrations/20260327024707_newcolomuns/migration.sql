/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[documento]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apartamento` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloco` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documento` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "apartamento" TEXT NOT NULL,
ADD COLUMN     "autorizado" TEXT,
ADD COLUMN     "bloco" TEXT NOT NULL,
ADD COLUMN     "carro" TEXT,
ADD COLUMN     "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataSaida" TIMESTAMP(3),
ADD COLUMN     "documento" TEXT NOT NULL,
ADD COLUMN     "empresa" TEXT,
ADD COLUMN     "foto" TEXT,
ADD COLUMN     "modelo" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "obs" TEXT,
ADD COLUMN     "placa" TEXT,
ADD COLUMN     "prisma" TEXT,
ADD COLUMN     "tipo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_documento_key" ON "User"("documento");
