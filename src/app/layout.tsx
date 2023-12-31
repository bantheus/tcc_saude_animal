import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import HomePageSkeleton from "./ui/skeletons/skeletons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="ptBR">
        <body className={`${inter.className} `}>
          <Suspense fallback={<HomePageSkeleton />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
