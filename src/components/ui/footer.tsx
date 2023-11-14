import { Card, CardFooter } from "./card";

const Footer = () => {
  return (
    <Card className="bg-slate-100 border-none rounded-none shadow-none py-6 mt-10">
      <CardFooter className="text-sm container mx-auto flex justify-center items-center p-0">
        <span className="text-[#64CCC5] mr-1">Saúde </span> Animal - 2023
      </CardFooter>
    </Card>
  );
};

export { Footer };
