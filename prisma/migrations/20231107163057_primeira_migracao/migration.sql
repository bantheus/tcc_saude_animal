-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MACHO', 'FEMEA');

-- CreateTable
CREATE TABLE "Especie" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Especie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "especieId" INTEGER NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "peso" DECIMAL(3,2) NOT NULL,
    "foto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroMedico" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistroMedico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitaVeterinario" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "veterinario" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitaVeterinario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendarioVacinacao" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "vacina" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalendarioVacinacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_especieId_fkey" FOREIGN KEY ("especieId") REFERENCES "Especie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroMedico" ADD CONSTRAINT "RegistroMedico_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitaVeterinario" ADD CONSTRAINT "VisitaVeterinario_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendarioVacinacao" ADD CONSTRAINT "CalendarioVacinacao_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
