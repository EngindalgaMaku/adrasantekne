import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tekne Turları",
  description:
    "Adrasan tekne turu seçenekleri: Adrasan koy turu, Suluada turu, mehtap turu ve özel tekne kiralama. Her gün 09:30 hareket.",
  alternates: { canonical: "https://adrasantekneturlari.org/tekne-turlari" },
};

const tours = [
  {
    slug: "adrasan",
    title: "Adrasan Tekne Turu",
    subtitle: "Sazak · Akseki · Ceneviz · Korsan Koyları",
    description:
      "Adrasan'ın en güzel ve el değmemiş koylarını keşfedin. Sazak, Akseki, Ceneviz ve Korsan koylarında nefes kesen manzaralar sizi bekliyor. Öğle yemeği, çay ve meyve servisi tur ücretine dahildir.",
    duration: "09:30 – 17:00",
    days: "Her Gün",
    includes: ["Öğle yemeği", "Çay & kahve", "Taze meyve", "Can yeleği"],
    image: "/images/sazak-5.jpg",
    tag: "En Popüler",
    tagColor: "bg-ocean-500",
    color: "ocean",
  },
  {
    slug: "suluada",
    title: "Suluada Tekne Turu",
    subtitle: "Türkiye'nin Maldiveleri",
    description:
      "Suluada, berrak turkuaz suları ve beyaz kumlu sahiliyle Türkiye'nin en güzel adalarından biridir. İsmini bünyesindeki tatlı su kaynağından alır. Bu eşsiz güzelliği bizimle keşfedin.",
    duration: "09:30 – 17:00",
    days: "Her Gün",
    includes: ["Öğle yemeği", "Çay & kahve", "Taze meyve", "Şnorkel ekipmanı"],
    image: "/images/sazak-12.jpg",
    tag: "Öne Çıkan",
    tagColor: "bg-teal-500",
    color: "teal",
  },
  {
    slug: "mehtap",
    title: "Mehtap Turu",
    subtitle: "Romantik Gece Deniz Yolculuğu",
    description:
      "Ayın ışığında denizin üzerinde romantik bir akşam. Doğum günü, yıldönümü ve evlilik teklifi organizasyonları için mükemmel. İçecekler ve müzik eşliğinde unutulmaz bir gece.",
    duration: "Akşam (Güneş batımı)",
    days: "Her Gün",
    includes: ["İçecekler", "Müzik", "Organizasyon desteği", "Özel dekorasyon"],
    image: "/images/sazak-18.jpg",
    tag: "Özel Gece",
    tagColor: "bg-navy-700",
    color: "navy",
  },
  {
    slug: "ozel",
    title: "Özel Tekne Turu",
    subtitle: "Sadece Siz ve Sevdikleriniz",
    description:
      "Rotayı, süreyi ve güzergahı siz belirleyin. Aile, arkadaş grubu ya da kurumsal etkinlikler için tamamen özel bir tekne deneyimi. Kalabalıktan uzak, huzurlu bir gün.",
    duration: "İsteğe Bağlı",
    days: "Her Gün",
    includes: ["Özel rota", "Kişisel servis", "İçecekler", "Yemek seçeneği"],
    image: "/images/sazak-25.jpg",
    tag: "VIP",
    tagColor: "bg-sand-500",
    color: "sand",
  },
];

export default function TurlarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
          <Image
            src="/images/sazak-3.jpg"
            alt="Adrasan koyları"
            fill
            className="object-cover opacity-30"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <span className="tag bg-ocean-500/20 text-ocean-300 mb-4">Turlarımız</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Tekne Turları
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Günlük koy turlarından romantik mehtap turlarına kadar her
              ihtiyaca uygun seçeneklerimizle Adrasan&apos;ı keşfetmeye hazır mısınız?
            </p>
          </div>
        </section>

        {/* Turlar Listesi */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {tours.map((tour, i) => (
                <div
                  key={tour.slug}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden group">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className={`absolute top-4 left-4 ${tour.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {tour.tag}
                      </span>
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-sm font-medium text-ocean-600">{tour.subtitle}</span>
                    <h2 className="text-3xl font-bold text-navy-900 mt-2 mb-4">{tour.title}</h2>
                    <p className="text-navy-600 leading-relaxed mb-6">{tour.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-navy-50 rounded-xl p-3">
                        <p className="text-xs text-navy-400 mb-1">Süre</p>
                        <p className="font-semibold text-navy-900 text-sm">{tour.duration}</p>
                      </div>
                      <div className="bg-navy-50 rounded-xl p-3">
                        <p className="text-xs text-navy-400 mb-1">Günler</p>
                        <p className="font-semibold text-navy-900 text-sm">{tour.days}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-3">Dahil Olanlar</p>
                      <div className="flex flex-wrap gap-2">
                        {tour.includes.map((item) => (
                          <span key={item} className="flex items-center gap-1.5 text-sm text-navy-700 bg-ocean-50 px-3 py-1.5 rounded-lg">
                            <svg className="w-3.5 h-3.5 text-ocean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href={`/tekne-turlari/${tour.slug}`} className="btn-primary">
                        Detayları İncele
                      </Link>
                      <a
                        href="https://wa.me/905383423380?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        Fiyat Öğren
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ocean-600 py-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Hangi Turu Seçeceğinize Karar Veremediniz mi?</h2>
            <p className="text-white/80 mb-8">
              Bizi arayın, size en uygun turu birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:05383423380" className="btn-secondary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0538 342 33 80
              </a>
              <a
                href="https://wa.me/905383423380"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}