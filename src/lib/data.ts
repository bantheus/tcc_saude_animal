import { unstable_noStore as noStore } from "next/cache";
import { prismaClient } from "./prisma";

export async function fetchLatestAnimals() {
  noStore();

  try {

    const data = await prismaClient.animal.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        especie: true,
      }
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching latest animals");
  }
}
