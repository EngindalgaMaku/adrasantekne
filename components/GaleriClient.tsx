"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/images/sazak-1.jpg", alt: "Sazak Teknesi - Adrasan koy turu", category: "Tekne" },
  { src: "/images/sazak-2.jpg", alt: "Adrasan tekne turu - mavi koylar", category: "Koylar" },
  { src: "/images/sazak-3.jpg", alt: "Sazak koyu - el değmemiş doğa", category: "Koylar" },
  { src: "/images/sazak-4.jpg", alt: "Adrasan tekne turu - denizde keyif", category: "Tur" },
  { src: "/images/sazak-5.jpg", alt: "Adrasan koyları - turkuaz sular", category: "Koylar" },
  { src: "/images/sazak-6.jpg", alt: "Sazak Teknesi güvertesi", category: "Tekne" },
  { src: "/images/sazak-7.jpg", alt: "Adrasan doğası - orman ve deniz", category: "Manzara" },
  { src: "/images/sazak-8.jpg", alt: "Tekne turu katılımcıları", category: "Tur" },
  { src: "/images/sazak-9.jpg", alt: "Adrasan koy manzarası", category: "Manzara" },
  { src: "/images/sazak-10.jpg", alt: "Sazak koyu berrak su", category: "Koylar" },
  { src: "/images/sazak-11.jpg", alt: "Tekne güvertesinde deniz keyfi", category: "Tekne" },
  { src: "/images/sazak-12.jpg", alt: "Adrasan sahil manzarası", category: "Manzara" },
  { src: "/images/sazak-13.jpg", alt: "Koyda yüzme molası", category: "Tur" },
  { src: "/images/sazak-14.jpg", alt: "Adrasan tekne turu - kalabalık keyif", category: "Tur" },
  { src: "/images/sazak-15.jpg", alt: "Ceneviz koyu manzarası", category: "Koylar" },
  { src: "/images/sazak-16.jpg", alt: "Denizde yüzme - berrak su", category: "Tur" },
  { src: "/images/sazak-17.jpg", alt: "Sazak Teknesi - Adrasan", category: "Tekne" },
  { src: "/images/sazak-18.jpg", alt: "Adrasan koy turu - güzel manzara", category: "Manzara" },
  { src: "/images/sazak-19.jpg", alt: "Tekne turu - öğle molası", category: "Tur" },
  { src: "/images/sazak-20.jpg", alt: "Korsan koyu - Adrasan", category: "Koylar" },
  { src: "/images/sazak-21.jpg", alt: "Adrasan tekne turu manzara", category: "Manzara" },
  { src: "/images/sazak-22.jpg", alt: "Sazak koyu - doğa harikası", category: "Koylar" },
  { src: "/images/sazak-23.jpg", alt: "Tekne güvertesinde eğlence", category: "Tur" },
  { src: "/images/sazak-24.jpg", alt: "Adrasan koyları havadan", category: "Manzara" },
  { src: "/images/sazak-25.jpg", alt: "Akseki koyu - Adrasan", category: "Koylar" },
  { src: "/images/sazak-26.jpg", alt: "Sazak Teknesi iskelede", category: "Tekne" },
  { src: "/images/sazak-27.jpg", alt: "Adrasan deniz keyfi", category: "Tur" },
  { src: "/images/sazak-28.jpg", alt: "Adrasan koy turu fotoğraf", category: "Koylar" },
  { src: "/images/sazak-29.jpg", alt: "Tekne turu hatırası", category: "Tur" },
  { src: "/images/sazak-30.jpg", alt: "Adrasan - Sazak Teknesi", category: "Tekne" },
];

const CATEGORIES = ["Tümü", "Koylar", "Tekne", "Tur", "Manzara"];
const PER_PAGE = 12;

export default function GaleriClient() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "Tümü"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Kategori değişince 1. sayfaya dön
  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  // Lightbox klavye navigasyonu
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightbox === null) return;
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") setLightbox((i) => i !== null ? Math.min(i + 1, filtered.length - 1) : null);
    if (e.key === "ArrowLeft") setLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lightbox açıkken scroll engelle
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* Filtre + Sayfa Bilgisi */}
      <section className="py-8 bg-white border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Kategori filtreleri */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    activeCategory === cat
                      ? "bg-ocean-500 text-white"
                      : "bg-navy-50 text-navy-600 hover:bg-navy-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-sm text-navy-400">
              {filtered.length} fotoğraf
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((photo, i) => {
              const globalIndex = (page - 1) * PER_PAGE + i;
              return (
                <div
                  key={`${activeCategory}-${globalIndex}`}
                  className="relative overflow-hidden rounded-2xl cursor-zoom-in group h-64"
                  onClick={() => setLightbox(globalIndex)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>

          {/* Sayfalama */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="w-10 h-10 rounded-xl border border-navy-200 flex items-center justify-center text-navy-600 hover:bg-navy-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    page === p
                      ? "bg-ocean-500 text-white"
                      : "border border-navy-200 text-navy-600 hover:bg-navy-50"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="w-10 h-10 rounded-xl border border-navy-200 flex items-center justify-center text-navy-600 hover:bg-navy-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Siz de Bu Güzellikleri Yaşayın
          </h2>
          <p className="text-navy-600 mb-8">
            Fotoğraflarda gördüğünüz muhteşem koyları bizzat keşfetmek için
            hemen rezervasyon yapın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tekne-turlari" className="btn-primary">
              Turları İncele
            </Link>
            <a
              href="https://wa.me/905383423380?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp ile Rezervasyon
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Kapat */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Sol ok */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Sağ ok */}
          {lightbox < filtered.length - 1 && (
            <button
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Resim */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              priority
            />
            {/* Alt bilgi */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm rounded-b-xl px-4 py-3 flex items-center justify-between">
              <p className="text-white text-sm font-medium">{filtered[lightbox].alt}</p>
              <p className="text-white/60 text-xs">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Klavye ipucu */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs">
            ← → ile gezin · ESC ile kapat
          </p>
        </div>
      )}
    </>
  );
}