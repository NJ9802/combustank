import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CombusTank",
  description: `Optimiza el cálculo del combustible en 
  tanques cilíndricos horizontales de cabezas planas
  con nuestra herramienta especializada. 
  Ahorra tiempo en tus operaciones diarias con cálculos precisos y eficientes. 
  Descubre cómo nuestra herramienta puede beneficiar tu labor hoy mismo.`,
  icons: {
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
