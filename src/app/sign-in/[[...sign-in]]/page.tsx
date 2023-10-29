import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex items-center justify-center mx-auto md:py-8 py-0">
      <SignIn
        appearance={{
          elements: {
            card: "py-8",
            logoBox: "flex justify-center items-center mt-10",
            logoImage: "w-22 h-22",
            header: "mt-8",
            formButtonPrimary: "bg-[#8b85b2] hover:bg-[#8079aa]",
            footerActionLink: "text-[#8b85b2] hover:text-[#8079aa]",
          },
        }}
      />
    </div>
  );
}
