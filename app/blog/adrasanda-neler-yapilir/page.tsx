import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan'da Neler Yapılır?",
  description:
    "Adrasan'da yapılacak şeyler: tekne turu, yüzme, kamp, doğa yürüyüşü ve daha fazlası. Kapsamlı Adrasan aktivite rehberi.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasanda-neler-yapilir" },
};

export default function AdrasandaNelerYapilir() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-5.jpg"
            alt="Adrasan'da neler yapılır"
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
            <span className="inline-block bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Rehber</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan&apos;da Neler Yapılır?</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>15 Nisan 2024</span>
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
                  Yıllarını Adrasan&apos;da geçirmiş biri olarak söyleyebilirim ki Adrasan&apos;da
                  yapılacak çok şey var. Doğanın bu eşsiz köşesinde her gün yeni bir keşif sizi bekliyor.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">1. Tekne Turu</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan&apos;da yapılacak en muhteşem aktivite hiç şüphesiz tekne turudur.
                  Sazak, Akseki, Ceneviz ve Korsan koylarını kapsayan günlük turlarla
                  Adrasan&apos;ın el değmemiş sahil şeridini keşfedebilirsiniz. Her koyun
                  kendine özgü rengi ve karakteri var; bazıları turkuaz, bazıları zümrüt yeşili.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Suluada turu ise ayrı bir deneyim. Türkiye&apos;nin Maldiveleri olarak anılan
                  bu ada, kristal berraklığındaki suları ve beyaz kumlu sahiliyle tam anlamıyla
                  cennet köşesi. Şnorkel yaparak rengarenk balıkları izleyebilirsiniz.
                </p>

                <div className="bg-ocean-50 rounded-2xl p-6 not-prose mb-8">
                  <p className="font-bold text-navy-900 mb-2">Tekne Turu Rezervasyonu</p>
                  <p className="text-sm text-navy-600 mb-4">Her gün 09:30&apos;da hareket, 17:00&apos;da dönüş. Öğle yemeği dahil.</p>
                  <Link href="/tekne-turlari" className="btn-primary text-sm">
                    Tur Detaylarını Gör
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">2. Yüzme ve Şnorkel</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan&apos;ın en büyük zenginliği su sporlarına elverişli kristal
                  denizi. Sahil boyunca uzanan taşlı ve kumlu koylar yüzme için ideal.
                  Suluada çevresinde şnorkel yaparsanız deniz yıldızları, ahtapotlar ve
                  türlü renkli balıklara tanık olabilirsiniz.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">3. Olympos&apos;a Trekking</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan&apos;dan Olympos&apos;a yürüyerek gidebilirsiniz. Sahil boyunca
                  uzanan bu patika, 10 km uzunluğuyla deneyimli yürüyüşçüler için
                  mükemmel bir güzergah. Yol boyunca sizi antik kalıntılar, sarp
                  kayalıklar ve el değmemiş koylar karşılıyor.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">4. Kamp Yapma</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan, kamp tutkunları için de cazip bir destinasyon. Çeşitli kamp
                  alanları ve bungalovlarla donatılmış tesisler bulunuyor. Yıldızlı
                  gökyüzünün altında uyumak ve sabah deniz sesiyle uyanmak için
                  eşsiz bir deneyim sizi bekliyor.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">5. Gün Batımı Seyretme</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan sahilinden izlenen gün batımları nefes kesici. Özellikle
                  Suluada yönünde batan güneş, gökyüzünü turuncu ve kırmızıya
                  boyarken fotoğraf tutkunlarının favori anlarından birini yaratıyor.
                  Mehtap turumuzla bu anı denizin ortasından yaşayabilirsiniz.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">6. Yerel Yemeklerin Tadını Çıkarma</h2>
                <p className="text-navy-600 leading-relaxed">
                  Adrasan&apos;ın sahil restoranlarında taze deniz ürünleri yemek
                  unutulmaz bir deneyim. Günlük yakalanan levrek, çipura ve
                  kalamar ile köy usulü piyazlar öne çıkan lezzetler arasında.
                  Tekne turlarımızda sunduğumuz ev yapımı öğle yemekleri de
                  misafirlerimizin büyük beğenisini kazanıyor.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Tekne Turu Rezervasyonu</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Adrasan&apos;daki en iyi aktivite: tekne turu! Yerini hemen ayırt.
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
                        { slug: "adrasan-tarihcesi", title: "Adrasan Tarihçesi" },
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