import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Font optimization for Next.js - loads efficiently
const outfit = Outfit({ subsets: ["latin"] });

// SEO Optimization: Configured according to best practices
export const metadata: Metadata = {
  metadataBase: new URL("https://laespada-aranjuez.com"),
  title: "Bar La Espada | Auténticas Smash Burgers en Aranjuez",
  description: "Las mejores smash burgers de Aranjuez. Carne madurada, pan brioche y mucho fuego. Visítanos y descubre nuestra carta.",
  openGraph: {
    title: "Bar La Espada | Culto a la Burger en Aranjuez",
    description: "Cocinamos técnica, pasión y muchísimo fuego. Prueba la auténtica Smash Burger en Aranjuez.",
    url: "https://laespada-aranjuez.com",
    siteName: "Bar La Espada",
    images: [
      {
        url: "/imagenes/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        {/* Schema Markup para LocalBusiness (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Bar La Espada",
              "image": "https://laespada-aranjuez.com/imagenes/logo.png",
              "servesCuisine": "Hamburguesas, Smash Burger",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aranjuez",
                "addressRegion": "Madrid",
                "addressCountry": "ES"
              },
              "priceRange": "€€",
              "url": "https://laespada-aranjuez.com",
              "sameAs": ["https://www.instagram.com/barlaespada/"]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

