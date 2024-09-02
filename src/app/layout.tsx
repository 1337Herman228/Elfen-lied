import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/style.scss";
import Navbar from '@/components/navbar/Navbar'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elfen lied",
  description: "Elfen lied",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


  return (
    <html lang="en">
      <head>
        <title>Elfen lied</title>
      </head>
        <body>
            <Navbar />
            <main className="main-body">
                {children}
            </main>
        </body>
    </html>
  );
}
