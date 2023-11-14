import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fetchLatestAnimals } from "@/lib/data";
import { ArrowRightIcon, CatIcon, DogIcon } from "lucide-react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default async function LatestAnimalsCard() {
  const animals = await fetchLatestAnimals();
  console.log(animals);
  return (
    <>
      <h1 className="mt-10 text-xl opacity-75">Últimos animais adicionados</h1>

      <div className="flex flex-col gap-2 mt-6">
        {animals.map((animal) => {
          return (
            <Card key={animal.id} className="p-4 shadow-md border-none">
              <CardContent className="flex gap-6 items-center p-0">
                <Avatar className="w-16 h-16 shadow-md">
                  <AvatarFallback>{animal.nome}</AvatarFallback>

                  {animal.foto && (
                    <AvatarImage
                      src={animal.foto}
                      className="object-cover object-center"
                    />
                  )}
                </Avatar>

                <div className="flex flex-col gap-1 w-full">
                  <h2 className="text-xl">{animal.nome}</h2>
                  <Separator className="w-full" />
                  <p className="text-sm opacity-75 flex items-center gap-2">
                    {animal.especie.nome}
                    {animal.especie.nome === "Cachorro" ? (
                      <DogIcon size={16} />
                    ) : (
                      <CatIcon size={16} />
                    )}
                  </p>

                  <p className="text-sm opacity-75 capitalize flex items-center gap-2">
                    {animal.sexo === "MACHO" ? "Macho" : "Fêmea"}
                    {animal.sexo === "MACHO" ? (
                      <span className="w-4 h-4 text-blue-600">
                        <BsGenderMale />
                      </span>
                    ) : (
                      <span className="w-4 h-4 text-pink-600">
                        <BsGenderFemale />
                      </span>
                    )}
                  </p>

                  <Button
                    variant="link"
                    size="sm"
                    className="bg-[#64ccc5] text-white mt-4 flex items-center gap-2"
                  >
                    Gerenciar
                    <ArrowRightIcon size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
