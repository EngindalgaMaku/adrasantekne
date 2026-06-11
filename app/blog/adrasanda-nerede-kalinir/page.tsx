import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan'da Nerede Kalınır?",
  description:
    "Adrasan konaklama seçenekleri: pansiyon, butik otel, kamp alanları. Bütçenize göre en iyi konaklama önerileri.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasanda-nerede-kalinir" },
};

export default function AdrasandaNeredeKalinir() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-6.jpg"
            alt="Adrasan'da nerede kalınır"
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
            <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Konaklama</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan&apos;da Nerede Kalınır?</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>5 Nisan 2024</span>
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
                  Adrasan, 5 yıldızlı konforu arayanlar için değil; doğayla iç içe,
                  sakin ve özgün bir tatil arayanlar için mükemmel bir destinasyon.
                </p>

                <div className="bg-teal-50 rounded-2xl p-6 mb-8">
                  <p className="font-semibold text-teal-900 mb-2">Bilmeniz Gereken</p>
                  <p className="text-sm text-teal-800">
                    Adrasan, Olympos-Beydağları Sahil Milli Parkı sınırları içinde yer alır.
                    Bu nedenle büyük otel zincirleri ve beton yapılaşma yoktur.
                    Tüm tesisler doğayla uyumlu, küçük ölçekli ve samimi.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Pansiyon ve Küçük Oteller</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan&apos;ın asıl konaklama seçeneği aile işletmesi pansiyonlar.
                  Ev sıcaklığında hizmet sunan bu küçük tesisler, genellikle sahile
                  yürüme mesafesinde konumlanmış. Sabah kahvaltısı çoğunlukla dahil.
                  Fiyatlar sezona göre değişse de uygun bütçeli seçenekler bulmak mümkün.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Bungalov ve Apart Seçenekleri</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Biraz daha mahremiyet isteyenler için bungalov tarzı konaklama
                  tesisleri de mevcut. Genellikle bahçeli ve mutfaklı olan bu
                  seçenekler, özellikle aileler ve uzun süreli konaklama
                  planlayanlar için ideal.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Kamp Alanları</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Doğa tutkunları için Adrasan, kamp açısından da zengin seçenekler
                  sunuyor. Hem sahil kampları hem de orman içi kamp alanları mevcut.
                  Yıldız altında uyumak ve sabahları deniz sesiyle uyanmak isteyenler
                  için kamp tartışmasız en keyifli seçenek.
                </p>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Kamp için gerekli ekipmanınızı yanınızda getirmeniz tavsiye edilir.
                  Bazı kamp alanları temel ekipman kiralama hizmeti sunsa da kendi
                  uyku tulumunuzu ve çadırınızı getirmek her zaman daha akıllıca.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Ne Zaman Gidilir?</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan&apos;ı ziyaret için en ideal dönem Mayıs-Ekim arası.
                  Haziran-Eylül aylarında hem deniz hem hava sıcaklıkları yüzme
                  için mükemmel. Yüksek sezon Temmuz-Ağustos olduğundan bu dönemde
                  konaklama rezervasyonunuzu önceden yapmanız şiddetle önerilir.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  Mayıs ve Ekim ayları ise daha sakin, daha uygun fiyatlı ve
                  kalabalıktan uzak Adrasan deneyimi için mükemmel.
                  Doğa yürüyüşleri için bu dönemler özellikle ideal.
                </p>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Tekne Turu Ayırtın</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Konaklarken mutlaka tekne turuna katılın!
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
                        { slug: "adrasana-nasil-gidilir", title: "Adrasan'a Nasıl Gidilir?" },
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