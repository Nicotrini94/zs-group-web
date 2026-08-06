import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  verification: {
    google: "AXAHl6i2x4Fw272X5-zDu-WklrDcpKmhsMNKh8xTsa8",
  },

  title: {
    default: "ZS GROUP SRL | Industrial, Comercial y Retail",
    template: "%s | ZS GROUP SRL",
  },

  description:
    "Somos una Empresa especializada en el rubro Industrial, Comercial y Retail.",

  keywords: [
    "ZS GROUP SRL",
    "constructora Buenos Aires",
    "obras industriales",
    "obras comerciales",
    "retail",
    "gerenciamiento de obra",
    "dirección de obra",
  ],

  openGraph: {
    title: "ZS GROUP SRL",
    description:
      "Somos una Empresa especializada en el rubro Industrial, Comercial y Retail.",
    type: "website",
    locale: "es_AR",
    siteName: "ZS GROUP SRL",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}