/*
  Warnings:

  - The primary key for the `Animal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `peso` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `DoublePrecision`.
  - The primary key for the `CalendarioVacinacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RegistroMedico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `VisitaVeterinario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CalendarioVacinacao" DROP CONSTRAINT "CalendarioVacinacao_animalId_fkey";

-- DropForeignKey
ALTER TABLE "RegistroMedico" DROP CONSTRAINT "RegistroMedico_animalId_fkey";

-- DropForeignKey
ALTER TABLE "VisitaVeterinario" DROP CONSTRAINT "VisitaVeterinario_animalId_fkey";

-- AlterTable
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "peso" SET DATA TYPE DOUBLE PRECISION,
ADD CONSTRAINT "Animal_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Animal_id_seq";

-- AlterTable
ALTER TABLE "CalendarioVacinacao" DROP CONSTRAINT "CalendarioVacinacao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "animalId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CalendarioVacinacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CalendarioVacinacao_id_seq";

-- AlterTable
ALTER TABLE "RegistroMedico" DROP CONSTRAINT "RegistroMedico_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "animalId" SET DATA TYPE TEXT,
ADD CONSTRAINT "RegistroMedico_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RegistroMedico_id_seq";

-- AlterTable
ALTER TABLE "VisitaVeterinario" DROP CONSTRAINT "VisitaVeterinario_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "animalId" SET DATA TYPE TEXT,
ADD CONSTRAINT "VisitaVeterinario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "VisitaVeterinario_id_seq";

-- AddForeignKey
ALTER TABLE "RegistroMedico" ADD CONSTRAINT "RegistroMedico_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitaVeterinario" ADD CONSTRAINT "VisitaVeterinario_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendarioVacinacao" ADD CONSTRAINT "CalendarioVacinacao_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
