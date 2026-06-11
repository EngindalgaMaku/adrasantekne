import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan Tarihçesi | Sazak Teknesi",
  description:
    "Adrasan'ın zengin tarihi: antik Olympos uygarlığından günümüze uzanan tarihi yolculuk. Likya, Roma ve Bizans dönemlerinden izler taşıyan bu eşsiz koyun hikayesi.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasan-tarihcesi" },
};

export default function AdrasanTarihcesi() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-15.jpg"
            alt="Adrasan tarihçesi"
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
            <span className="inline-block bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Tarih &amp; Kültür</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan Tarihçesi</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>20 Nisan 2024</span>
              <span>·</span>
              <span>6 dk okuma</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2 prose prose-lg max-w-none text-navy-700">
                <p className="text-xl text-navy-600 leading-relaxed font-medium not-prose mb-8">
                  Adrasan, yalnızca doğal güzellikleriyle değil, binlerce yıllık
                  tarihi mirasyıyla da büyüleyen eşsiz bir koy. Bu topraklar
                  antik çağlardan bu yana uygarlıkların kesişim noktası olmuştur.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Likya Döneminden İzler</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan ve çevresinin tarihi, antik Likya dönemine, MÖ 1. binyıla kadar
                  uzanmaktadır. Likya Birliği&apos;ne bağlı kentlerin ticaret yolları bu
                  kıyılardan geçiyordu. Mevcut arkeolojik bulgular, koyun erken dönemlerde
                  küçük bir liman işlevi gördüğüne işaret etmektedir.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Yakınındaki Olympos antik kenti (günümüz Çıralı/Olympos), bölgenin en
                  önemli Likya şehirlerinden biriydi. Olympos, Roma döneminde de önemini
                  korumuş; MS 1. yüzyılda Romalılar tarafından yeniden imar edilmiştir.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Ceneviz ve Osmanlı Dönemi</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Orta Çağ&apos;da Akdeniz ticaretine hakim olan Cenevizliler, bölgedeki
                  stratejik koyları sıkça kullanmıştır. Adrasan yakınlarındaki
                  &quot;Ceneviz Koyu&quot; adı, bu Orta Çağ varlığının günümüze yansımasıdır.
                  Osmanlı döneminde ise bölge, Teke Sancağı bünyesinde denizcilik ve
                  küçük çaplı balıkçılıkla geçimini sağlamıştır.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Korsanlar Koyu Efsanesi</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Bölgedeki koylardan biri &quot;Korsan Koyu&quot; olarak adlandırılmaktadır.
                  Akdeniz&apos;de yaygın faaliyet gösteren korsanlar, bu sarp ve derin
                  koyları sığınak olarak kullanmıştır. Yerel halk arasında hâlâ
                  define ve hazine hikayeleri anlatılmaktadır.
                </p>

                <div className="bg-ocean-50 rounded-2xl p-6 not-prose mb-8">
                  <p className="font-bold text-navy-900 mb-2">Tarihi Koyları Keşfedin</p>
                  <p className="text-sm text-navy-600 mb-4">
                    Ceneviz ve Korsan koylarını tekne turumuzu yaparak denizden görün.
                  </p>
                  <Link href="/tekne-turlari/adrasan" className="btn-primary text-sm">
                    Adrasan Turu Detayları
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Günümüz Adrasanı</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Cumhuriyet döneminde küçük bir balıkçı köyü olan Adrasan, 1980&apos;lerden
                  itibaren doğa turizmiyle tanışmıştır. Asfaltsız yollar, elektrik
                  direkleri ve bozulmamış kıyı şeridi, Adrasan&apos;ı diğer turistik
                  yerlerden farklı kılmaktadır.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  Bugün Adrasan; kalkınma baskısına rağmen doğal dokusunu büyük
                  ölçüde koruyan, yoğun kitlesel turizmin dışında kalan nadir
                  Akdeniz koylarından biridir. Bu özgünlük, ziyaretçilerin tekrar
                  tekrar gelmesinin temel nedenidir.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Tekne Turu Rezervasyonu</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Tarihi koyları teknemizle keşfet. Günlük turlar her gün 09:30&apos;da!
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
                        { slug: "adrasanda-nerede-kalinir", title: "Adrasan'da Nerede Kalınır?" },
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