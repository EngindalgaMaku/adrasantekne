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
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrasan Tekne Turu | Sazak Teknesi",
    description: "Adrasan'ın muhteşem koylarını Sazak Teknesi ile keşfedin.",
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
              "@type": "TouristAttraction",
              name: "Sazak Teknesi - Adrasan Tekne Turları",
              description:
                "Adrasan'ın muhteşem koylarını Sazak Teknesi ile keşfedin.",
              url: "https://adrasantekneturlari.org",
              telephone: "+905383423380",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adrasan Sahili",
                addressLocality: "Adrasan",
                addressRegion: "Antalya",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.3275,
                longitude: 30.4714,
              },
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