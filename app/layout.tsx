import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import meta from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = meta;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`flex flex-col ${inter.className} min-h-screen`}
        onTouchStart={undefined}
      >
        <Navbar />
        <main className="flex flex-1">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
