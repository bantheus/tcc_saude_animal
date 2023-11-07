const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const especieCachorro = await prisma.especie.create({
      data: {
        nome: "Cachorro",
        slug: "cachorros",
      },
    });

    const cachorros = [
      {
        nome: "Balão",
        slug: "balao",
        sexo: "MACHO",
        peso: 34,
        foto: "https://unsplash.com/pt-br/fotografias/cao-marrom-de-pelagem-curta-no-campo-de-grama-verde-durante-o-dia-ihHcWBnLPtE",
        especieId: especieCachorro.id,
      },
      {
        nome: "Pipa",
        slug: "pipa",
        sexo: "FEMEA",
        peso: 26,
        foto: "https://unsplash.com/pt-br/fotografias/cao-marrom-de-pelagem-curta-no-campo-verde-da-grama-N4k-aRrcH90",
        especieId: especieCachorro.id,
      },
      {
        nome: "Pompidou",
        slug: "pompidou",
        sexo: "MACHO",
        peso: 30,
        foto: "https://unsplash.com/pt-br/fotografias/filhote-de-cachorro-golden-retriever-com-colarinho-azul-HTpmedSyZag",
        especieId: especieCachorro.id,
      },
    ];

    await prisma.animal.createMany({
      data: cachorros,
    });

    const especieGato = await prisma.especie.create({
      data: {
        nome: "Gato",
        slug: "gatos",
      },
    });

    const gatos = [
      {
        nome: "Snowbell",
        slug: "snowbell",
        sexo: "MACHO",
        peso: 6,
        foto: "https://unsplash.com/pt-br/fotografias/fotografia-de-foco-seletivo-de-gato-branco-FRpJVO1AjlA",
        especieId: especieGato.id,
      },
      {
        nome: "Docinho",
        slug: "docinho",
        sexo: "FEMEA",
        peso: 7,
        foto: "https://unsplash.com/pt-br/fotografias/gato-de-smoking-no-chao-de-madeira-marrom-vvY5w49SQpM",
        especieId: especieGato.id,
      },
      {
        nome: "Pepeto",
        slug: "pepeto",
        sexo: "MACHO",
        peso: 8,
        foto: "https://unsplash.com/pt-br/fotografias/gato-preto-no-chao-branco-j7uVTlpwI0o",
        especieId: especieGato.id,
      },
    ];

    await prisma.animal.createMany({
      data: gatos,
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
