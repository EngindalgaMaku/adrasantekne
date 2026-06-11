import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan Tarihçesi",
  description:
    "Adrasan'ın tarihi: antik çağlardan günümüze Atrasas, Piri Reis haritaları ve Çavuşköy. Adrasan'ın tarihsel geçmişi.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog/adrasan-tarihcesi" },
};

export default function AdrasanTarihcesi() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[55vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-8.jpg"
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
            <span className="inline-block bg-navy-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Tarih</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Adrasan Tarihçesi</h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>10 Nisan 2024</span>
              <span>·</span>
              <span>6 dk okuma</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">
                <p className="text-xl text-navy-600 leading-relaxed font-medium mb-8">
                  Adrasan kelimesinin tarihi ilk çağlara kadar uzansa da ilk defa
                  M.S. 1400&apos;lerde &quot;Atrasas&quot; olarak belgelenmiştir.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Antik Dönem</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Adrasan ve çevresi, antik dönemde Likya bölgesinin önemli bir
                  parçasıydı. Bölgede gerçekleştirilen arkeolojik çalışmalar, bu
                  kıyıların binlerce yıl önce de iskân edildiğini ortaya koymaktadır.
                  Yakın çevredeki Olympos antik kenti, bölgenin tarihsel önemini
                  gözler önüne sermektedir.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Körfezin korunaklı yapısı, antik çağlardan bu yana ticaret
                  gemileri ve balıkçı tekneleri için doğal bir liman işlevi
                  görmüştür. Ceneviz Koyu&apos;nun adı, Orta Çağ&apos;da bu
                  koyları kullanan Cenevizli denizcilere referans verir.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Piri Reis ve Kitab-ı Bahriye</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Büyük Türk denizcisi Piri Reis, meşhur eseri Kitab-ı Bahriye&apos;de
                  Adrasan&apos;dan söz eder. Piri Reis bu körfezi, güvenli demirlenme
                  imkanı sunan önemli bir sığınak olarak tanımlamıştır. Bu kayıt,
                  bölgenin 16. yüzyılda bile stratejik denizcilik önemi taşıdığını
                  kanıtlamaktadır.
                </p>

                <div className="bg-navy-50 rounded-2xl p-6 my-8 border-l-4 border-ocean-500">
                  <p className="italic text-navy-700 leading-relaxed">
                    &quot;...bu koy gemilerin sığınacağı güzel bir yerdir, içinde tatlı su
                    kaynakları mevcuttur...&quot;
                  </p>
                  <p className="text-sm text-navy-400 mt-2">— Piri Reis, Kitab-ı Bahriye (1521)</p>
                </div>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Çavuşköy ve Adrasan Adının Yerleşmesi</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  İdari açıdan bakıldığında Adrasan, Antalya&apos;nın Kumluca ilçesine
                  bağlı Çavuşköy kasabasının sahil bölgesine verilen isimdir. Zamanla
                  sahilin ünü Çavuşköy ismini geride bırakmış ve bu güzel beldenin
                  adı yerine Adrasan kullanılmaya başlanmıştır.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  20. yüzyılın ortalarından itibaren Adrasan, yavaş yavaş turizm
                  haritasına girmeye başlamıştır. Doğal güzelliği, sakin atmosferi
                  ve bozulmamış ekosistemiyle önce yerli turistlerin, ardından
                  yabancı ziyaretçilerin ilgisini çekmiştir.
                </p>

                <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Günümüzde Adrasan</h2>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Bugün Adrasan, kitlesel turizmin dışında kalmayı başarmış,
                  doğasını büyük ölçüde korumuş nadir destinasyonlardan biridir.
                  Olympos-Beydağları Sahil Milli Parkı sınırları içinde yer alması,
                  bölgenin doğal dokusunun korunmasına büyük katkı sağlamaktadır.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  Kalabalık tatil beldelerinin aksine Adrasan, sakin ve huzurlu
                  bir atmosfer arayanların gözdesi olmaya devam etmektedir. İşte
                  bu özgünlük, her yıl binlerce ziyaretçiyi bu büyülü köşeye
                  çeken en önemli etkendir.
                </p>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-ocean-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy-900 mb-4">Tekne Turu Rezervasyonu</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      Tarihi koyları bizzat keşfetmek ister misiniz?
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