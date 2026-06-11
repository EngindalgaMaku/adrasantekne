import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adrasantekneturlari.org"),
  title: {
    default: "Adrasan Tekne Turu | Sazak Teknesi",
    template: "%s | Adrasan Tekne Turları",
  },
  description:
    "Adrasan'ın muhteşem koylarını Sazak Teknesi ile keşfedin. Suluada, Sazak, Ceneviz koyları ve mehtap turları. İsmet Kaptan ile unutulmaz bir tekne turu deneyimi.",
  keywords: [
    "adrasan tekne turu",
    "suluada tekne turu",
    "sazak teknesi",
    "adrasan koy turu",
    "antalya tekne turu",
    "mehtap turu adrasan",
    "özel tekne adrasan",
  ],
  openGraph: {
    title: "Adrasan Tekne Turu | Sazak Teknesi",
    description:
      "Adrasan'ın bakir koylarını bizimle keşfedin. Her gün 09:30–17:00 arası turlar.",
    url: "https://adrasantekneturlari.org",
    siteName: "Adrasan Tekne Turları",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/sazak-5.jpg",
        width: 1200,
        height: 630,
        alt: "Adrasan Tekne Turu - Sazak Teknesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrasan Tekne Turu | Sazak Teknesi",
    description: "Adrasan'ın muhteşem koylarını Sazak Teknesi ile keşfedin.",
    images: ["/images/sazak-5.jpg"],
  },
  alternates: {
    canonical: "https://adrasantekneturlari.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://adrasantekneturlari.org",
              name: "Sazak Teknesi - Adrasan Tekne Turları",
              description: "Adrasan'ın muhteşem koylarını Sazak Teknesi ile keşfedin. Suluada, Sazak, Ceneviz koyları ve mehtap turları.",
              url: "https://adrasantekneturlari.org",
              telephone: "+905383423380",
              priceRange: "₺₺",
              image: "https://adrasantekneturlari.org/images/sazak-5.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adrasan Sahili",
                addressLocality: "Adrasan",
                addressRegion: "Antalya",
                postalCode: "07350",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.3275,
                longitude: 30.4714,
              },
              hasMap: "https://maps.google.com/?q=Adrasan,Kumluca,Antalya",
              sameAs: [
                "https://wa.me/905383423380",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:30",
                closes: "17:00",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}