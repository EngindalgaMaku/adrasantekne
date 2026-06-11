import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan'a Nasıl Gidilir?",
  description:
    "Adrasan'a ulaşım rehberi. Antalya, İstanbul ve Ankara'dan otobüs, uçak ve araçla nasıl gidilir. Olympos üzerinden güzergah.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasana-nasil-gidilir" },
};

export default function AdrasanaNasilGidilir() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-3.jpg"
            alt="Adrasan'a nasıl gidilir"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Blog
            </Link>
            <span className="inline-block bg-sand-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Ulaşım</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan&apos;a Nasıl Gidilir?</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>1 Nisan 2024</span>
              <span>·</span>
              <span>4 dk okuma</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">
                <p className="text-xl text-navy-600 leading-relaxed font-medium mb-8">
                  Antalya&apos;nın Kumluca ilçesine bağlı Çavuşköy kasabasının
                  sahiline verilen isimdir Adrasan. Antalya-Kumluca karayolunun
                  80. kilometresinden güneye dönülür.
                </p>

                {/* Araçla */}
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h3l3-3V9l-2-3H14v10z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Kendi Aracınızla</h2>
                    <p className="text-navy-600 leading-relaxed mb-3">
                      En rahat ulaşım seçeneği özel araç. Antalya merkeze 80 km,
                      yaklaşık 1,5 saatlik bir yolculuk. Güzergah:
                    </p>
                    <div className="bg-navy-50 rounded-xl p-4 space-y-2">
                      {[
                        "Antalya merkez → Kumluca yolu (D400)",
                        "Kumluca'ya 15 km kala Adrasan kavşağı",
                        "Kavşaktan güneye 10 km",
                        "Adrasan sahili",
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-navy-700">
                          <span className="w-6 h-6 rounded-full bg-ocean-500 text-white text-xs flex items-center justify-center shrink-0 font-bold">
                            {i + 1}
                          </span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Otobüs */}
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v4m-7-4h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Otobüs ile</h2>
                    <p className="text-navy-600 leading-relaxed mb-3">
                      Antalya Otogarından her gün Adrasan&apos;a giden otobüsler
                      mevcuttur. Saat ve sefer sayısı sezona göre değişir.
                    </p>
                    <ul className="space-y-2 text-sm text-navy-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Antalya Otogarı → Adrasan (direkt veya aktarmalı)
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Aktarmalı gidişte: Antalya → Kumluca, Kumluca&apos;dan minibüs
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Yüksek sezonda günlük direkt seferler düzenlenir
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Uçak */}
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Uçakla</h2>
                    <p className="text-navy-600 leading-relaxed">
                      En yakın havalimanı Antalya Havalimanı (AYT). Havalimanından
                      Adrasan&apos;a yaklaşık 100 km. Transfer seçenekleri: havalimanından
                      araç kiralama veya Antalya Otogarına transfer sonrası otobüs.
                      Yaz sezonunda bazı turizm firmalarının Adrasan&apos;a özel
                      transfer araçları da bulunmaktadır.
                    </p>
                  </div>
                </div>

                {/* Olympos Üzerinden */}
                <div className="bg-ocean-50 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-navy-900 mb-3">
                    Olympos Üzerinden Gidiş
                  </h2>
                  <p className="text-navy-600 leading-relaxed mb-3">
                    Olympos veya Çıralı&apos;da konaklayanlar için Adrasan&apos;a
                    ulaşmak çok kolay. Olympos-Adrasan arası yaklaşık 10 km.
                    Sahil boyunca yürüyerek de gidilebilir (deneyimli yürüyüşçüler için).
                  </p>
                  <p className="text-navy-600 leading-relaxed">
                    Olympos&apos;tan araçla: Olympos çıkışından kuzey yönünde
                    karayoluna çıkıp birkaç km sonra Adrasan kavşağından güneye
                    dönmeniz yeterli.
                  </p>
                </div>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Geldikten Sonra</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Adrasan&apos;a vardığınızda ilk işiniz tekne turu rezervasyonu yapmak!
                    </p>
                    <a
                      href="https://wa.me/905383423380?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-xl text-sm"
                    >
                      WhatsApp ile Rezervasyon
                    </a>
                  </div>
                  <div className="bg-white rounded-2xl border border-navy-100 p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Diğer Yazılar</h3>
                    <div className="space-y-3">
                      {[
                        { slug: "adrasanda-neler-yapilir", title: "Adrasan'da Neler Yapılır?" },
                        { slug: "adrasan-tarihcesi", title: "Adrasan Tarihçesi" },
                        { slug: "adrasanda-nerede-kalinir", title: "Adrasan'da Nerede Kalınır?" },
                      ].map((p) => (
                        <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-sm text-navy-700 hover:text-ocean-600 transition-colors py-1 border-b border-navy-50 last:border-0">
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}