const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const especieCaninos = await prisma.especie.create({
      data: {
        nome: "Canino",
        slug: "caninos",
      },
    });

    const caninos = [
      {
        nome: "Balão",
        slug: "balao",
        sexo: "MACHO",
        peso: 34,
        foto: "https://i.imgur.com/UTpGjN2.jpg",
        especieId: especieCaninos.id,
      },
      {
        nome: "Pipa",
        slug: "pipa",
        sexo: "FEMEA",
        peso: 26,
        foto: "https://i.imgur.com/Gj6PVVA.jpg",
        especieId: especieCaninos.id,
      },
      {
        nome: "Pompidou",
        slug: "pompidou",
        sexo: "MACHO",
        peso: 30,
        foto: "https://i.imgur.com/8tmKg49.jpg",
        especieId: especieCaninos.id,
      },
    ];

    await prisma.animal.createMany({
      data: caninos,
    });

    const especieFelinos = await prisma.especie.create({
      data: {
        nome: "Felino",
        slug: "felinos",
      },
    });

    const felinos = [
      {
        nome: "Snowbell",
        slug: "snowbell",
        sexo: "MACHO",
        peso: 6,
        foto: "https://i.imgur.com/Q34iC22.jpg",
        especieId: especieFelinos.id,
      },
      {
        nome: "Docinho",
        slug: "docinho",
        sexo: "FEMEA",
        peso: 7,
        foto: "https://i.imgur.com/FEIKpA1.jpg",
        especieId: especieFelinos.id,
      },
      {
        nome: "Pepeto",
        slug: "pepeto",
        sexo: "MACHO",
        peso: 8,
        foto: "https://i.imgur.com/vMWReo3.jpg",
        especieId: especieFelinos.id,
      },
    ];

    await prisma.animal.createMany({
      data: felinos,
    });

    console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
