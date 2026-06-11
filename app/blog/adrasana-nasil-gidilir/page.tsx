import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan'a Nasıl Gidilir? | Sazak Teknesi",
  description:
    "Adrasan ulaşım rehberi: İstanbul, Ankara ve Antalya'dan Adrasan'a nasıl gidilir? Otobüs, uçak ve özel araç seçenekleri, güzergah ve mesafe bilgileri.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasana-nasil-gidilir" },
};

export default function AdrasanaNasilGidilir() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-25.jpg"
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
            <span className="inline-block bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Ulaşım Rehberi</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan&apos;a Nasıl Gidilir?</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>1 Mayıs 2024</span>
              <span>·</span>
              <span>4 dk okuma</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2 prose prose-lg max-w-none text-navy-700">
                <p className="text-xl text-navy-600 leading-relaxed font-medium not-prose mb-8">
                  Adrasan, Antalya&apos;ya bağlı Kumluca ilçesinin güneyinde, deniz kıyısında
                  küçük bir köy. Ulaşmak kolay — doğru yolu bilmek yeterli.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Uçakla Geliş — Antalya Havalimanı</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  En pratik seçenek Antalya Havalimanı&apos;na uçmak. Havalimanı,
                  Adrasan&apos;a yaklaşık 120 km uzaklıkta. Yurt içi ve yurt dışı
                  pek çok noktadan direkt uçuş mevcut; özellikle yaz sezonunda
                  sefer sıklığı artar.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Havalimanından Adrasan&apos;a ulaşmak için: Havalimanı → Antalya
                  otogarı (servis/taksi) → Kumluca otobüsü → Kumluca&apos;dan
                  Adrasan minibüsü (dolmuş). Toplam süre yaklaşık 2,5–3 saat.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Otobüsle Geliş</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Türkiye&apos;nin pek çok şehrinden Kumluca&apos;ya direkt otobüs seferleri
                  bulunmaktadır. İstanbul&apos;dan yaklaşık 10–11 saat, Ankara&apos;dan
                  8–9 saat, İzmir&apos;den 5–6 saatlik yolculukla Kumluca&apos;ya
                  ulaşılabilir.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Kumluca otogarından Adrasan&apos;a minibüs (dolmuş) seferleri her
                  gün sabah erken saatlerden akşama kadar devam eder. Yolculuk
                  süresi yaklaşık 30–40 dakikadır. Sefer saatleri için Kumluca
                  otogarını önceden aramanızı öneririz.
                </p>

                <div className="bg-ocean-50 rounded-2xl p-6 not-prose mb-8">
                  <p className="font-bold text-navy-900 mb-2">Transfer Desteği</p>
                  <p className="text-sm text-navy-600 mb-4">
                    Kumluca veya Antalya&apos;dan transfer organizasyonu için bize yazın,
                    yardımcı olalım.
                  </p>
                  <a
                    href="https://wa.me/905383423380?text=Merhaba%2C%20Adrasan%20transfer%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    WhatsApp ile Sor
                  </a>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Özel Araçla Geliş</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Özel araçla gelenler için en kolay güzergah: Antalya üzerinden
                  D400 karayolunu takip ederek Kumluca&apos;ya, ardından güneye dönerek
                  Adrasan yoluna girmek. Kumluca çıkışından Adrasan&apos;a yaklaşık
                  25 km&apos;lik, kısmen dağlık ve virajlı bir yol var. Yol dar ama
                  asfalt; dikkatli sürüş yeterli.
                </p>
                <p className="text-navy-600 leading-relaxed mb-4">
                  İzmir yönünden gelenler: D400 üzerinden Finike ve Kumluca
                  üzerinden Adrasan&apos;a ulaşabilir. Antalya merkezinden yaklaşık
                  2 saat, İzmir&apos;den yaklaşık 4,5–5 saat.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Önemli Notlar</h2>
                <p className="text-navy-600 leading-relaxed">
                  Adrasan&apos;da banka ATM&apos;si sınırlı; büyük alışverişler ve nakit
                  ihtiyacı için Kumluca&apos;ya gitmek gerekebilir. Benzin istasyonu
                  da yok — yakıt doldurarak gelin. Mobil internet sinyali köy
                  merkezinde iyi, koy içlerinde zayıflayabilir.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Tekne Turu Rezervasyonu</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Adrasan&apos;a geldikten sonra tekne turunu kaçırmayın! Hemen yer ayırtın.
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
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="block text-sm text-navy-700 hover:text-ocean-600 transition-colors py-1 border-b border-navy-50 last:border-0"
                        >
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