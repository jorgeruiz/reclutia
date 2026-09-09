import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { professionalServiceSchema, webSiteSchema } from "@/lib/schemas";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reclutamiento y Seleccion de Personal | Reclutia",
  description:
    "Agencia de reclutamiento y seleccion de personal con enfoque en cultura organizacional. Headhunting ejecutivo, psicometrias y servicios de talento para empresas en Mexico y EUA.",
  alternates: {
    canonical: "https://www.reclutia.com/",
  },
  openGraph: {
    siteName: "Reclutia",
    type: "website",
    locale: "es_MX",
    title: "Reclutamiento y Seleccion de Personal | Reclutia",
    description:
      "Tu socio estrategico en talento. Reclutamiento, headhunting ejecutivo y servicios de seleccion con enfoque en cultura organizacional.",
    url: "https://www.reclutia.com",
    images: [
      {
        url: "https://www.reclutia.com/og-default.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd data={professionalServiceSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-[100dvh] bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
