import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan'da Nerede Kalınır? | Sazak Teknesi",
  description:
    "Adrasan konaklama rehberi: pansiyon, butik otel, kamp alanı ve bungalov seçenekleri. Bütçenize ve tarzınıza uygun en iyi Adrasan konaklama önerileri.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasanda-nerede-kalinir" },
};

export default function AdrasandaNeredeKalinir() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-20.jpg"
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
            <span className="inline-block bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Seyahat Rehberi</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan&apos;da Nerede Kalınır?</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>25 Nisan 2024</span>
              <span>·</span>
              <span>5 dk okuma</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2 prose prose-lg max-w-none text-navy-700">
                <p className="text-xl text-navy-600 leading-relaxed font-medium not-prose mb-8">
                  Adrasan, büyük tatil köylerinden uzak, küçük ve samimi konaklama
                  seçenekleriyle öne çıkıyor. İşte her bütçeye ve tarza uygun
                  konaklama alternatifleri.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Pansiyon ve Butik Oteller</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan&apos;ın en yaygın konaklama seçeneği aile işletmesi pansiyonlar.
                  Genellikle sahile 5–10 dakika yürüme mesafesinde, bahçeli ve
                  kahvaltı dahil seçenekler sunan bu pansiyonlar, samimi Türk
                  misafirperverliğini yaşatıyor.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Butik oteller ise son yıllarda çoğalmaya başladı. Daha modern
                  imkânlar arayan ziyaretçiler için uygun fiyatlı ve kaliteli
                  seçenekler mevcut. Pek çoğu deniz manzaralı teraslar ve
                  havuz sunuyor.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Kamp Alanları ve Bungalovlar</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Doğayla iç içe olmak isteyenler için Adrasan çevresinde çok
                  sayıda kamp alanı ve bungalov tesis bulunuyor. Çam ormanları
                  içinde kurulan bu tesisler, doğaseverler için eşsiz bir deneyim
                  sunuyor. Çoğu tesisin sahil erişimi ve temel olanakları mevcut.
                </p>

                <div className="bg-ocean-50 rounded-2xl p-6 not-prose mb-8">
                  <p className="font-bold text-navy-900 mb-2">Konaklama + Tekne Turu Paketi</p>
                  <p className="text-sm text-navy-600 mb-4">
                    Konaklama ararken bize danışın, tekne turunuzu da birlikte planlayalım.
                  </p>
                  <a
                    href="https://wa.me/905383423380?text=Merhaba%2C%20konaklama%20ve%20tekne%20turu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Bilgi Al
                  </a>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Kiralık Villalar</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Aile veya grup tatilleri için özel villa kiralama giderek
                  yaygınlaşıyor. Genellikle 4–8 kişilik, özel havuzlu ve
                  tam donanımlı mutfaklı bu villalar, uzun süreli konaklamalar
                  için ekonomik ve konforlu bir seçenek.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Konaklama İçin İpuçları</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Temmuz–Ağustos aylarında yoğunluk zirveye ulaşıyor; bu dönemde
                  en az 1–2 ay öncesinden rezervasyon yaptırmanız şiddetle öneriliyor.
                  Haziran başı ve Eylül ayları hem daha sakin hem de fiyat açısından
                  avantajlı dönemler. Suyun sıcaklığı yüzme için hâlâ mükemmel.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  Sahile yakın konaklamak için köy merkezini tercih edin; orman
                  içinde sessizlik arıyorsanız biraz daha uzak konumdaki bungalov
                  ve kamp alanları daha uygun olacaktır.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Tekne Turu Rezervasyonu</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Adrasan&apos;dasınız, tekne turunu kaçırmayın! Günlük turlar her gün 09:30&apos;da.
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