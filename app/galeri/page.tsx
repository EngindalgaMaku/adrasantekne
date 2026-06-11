import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GaleriClient from "@/components/GaleriClient";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Adrasan tekne turu fotoğrafları. Sazak, Suluada, Ceneviz ve Korsan koylarından kareler. Sazak Teknesi galeri.",
  alternates: { canonical: "https://adrasantekneturlari.org/galeri" },
};

export default function GaleriPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
          <Image
            src="/images/sazak-13.jpg"
            alt="Adrasan galeri"
            fill
            className="object-cover opacity-25"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <span className="tag bg-teal-500/20 text-teal-300 mb-4">Galeri</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Koylardan Kareler</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Adrasan&apos;ın eşsiz koylarından ve tekne turlarımızdan
              gerçek fotoğraflar. Büyütmek için tıklayın.
            </p>
          </div>
        </section>

        {/* İnteraktif Galeri */}
        <GaleriClient />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}