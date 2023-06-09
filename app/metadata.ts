import { Metadata } from "next";
const description =
  "Optimiza el cálculo del combustible en tanques cilíndricos horizontales de cabezas planas con nuestra herramienta especializada. Ahorra tiempo en tus operaciones diarias con cálculos precisos y eficientes. Descubre cómo nuestra herramienta puede beneficiar tu labor hoy mismo.";

const metadata: Metadata = {
  title: "CombusTank",
  description,
  icons: {
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  other: {
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/icons/browserconfig.xml",
    "msapplication-TileColor": "#ffffff",
    "msapplication-tap-highlight": "no",
  },
  openGraph: {
    title: "CombusTank",
    description,
    url: "https://combustank.vercel.app",
    siteName: "CombusTank",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CombusTank",
    description,
    creator: "@nj9802",
  },

  applicationName: "CombusTank",

  appleWebApp: {
    title: "CombusTank",
    statusBarStyle: "black",
    startupImage: [
      "/android-chrome-512x512.png",
      {
        url: "android-chrome-512x512.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};

export default metadata;
