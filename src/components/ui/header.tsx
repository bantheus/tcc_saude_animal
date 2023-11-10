"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { LogOutIcon, MenuIcon, UserCogIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Card } from "./card";
import { Separator } from "./separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Card className="flex justify-between items-center border-none rounded-none shadow-none">
      <h1 className="text-lg">
        {" "}
        <span className="text-[#64CCC5]">Saúde</span> Animal
      </h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="lg" variant="ghost" className="p-0">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="top">
          <SheetHeader className="">
            <SheetClose asChild>
              <Link
                href="/"
                className="text-lg flex flex-row justify-center items-center gap-1"
              >
                <span className="text-[#64CCC5]">Saúde</span> Animal
              </Link>
            </SheetClose>
          </SheetHeader>

          {user && (
            <div className="flex flex-col mt-2">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>{user.firstName}</AvatarFallback>

                  {user.hasImage && <AvatarImage src={user.imageUrl} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="text-[#64ccc5] text-xs opacity-75">Bem vindo</p>
                  <p className="text-sm">{user.firstName}</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <Link href="/user-profile">
            <SheetClose asChild>
              <Button
                className="w-full justify-start gap-2 mt-4"
                variant="outline"
              >
                <UserCogIcon size={16} />
                Editar Perfil
              </Button>
            </SheetClose>
          </Link>

          <SignOutButton>
            <Button
              className="w-full justify-start gap-2 mt-4 border-[#bb2f30] text-[#bb2f30]"
              variant="outline"
            >
              <LogOutIcon size={16} />
              Sair
            </Button>
          </SignOutButton>
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export { Header };
