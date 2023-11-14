import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import LatestAnimalsCard from "./ui/latest-animals-card";

export default function Home() {
  return (
    <main className="px-5">
      <LatestAnimalsCard />

      <Button
        variant="link"
        size="sm"
        className="bg-[#64ccc5] text-white flex items-center gap-2 w-full mt-6"
      >
        Ver todos
        <ArrowRightIcon size={16} />
      </Button>
    </main>
  );
}
