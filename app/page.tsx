import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const tours = [
  {
    slug: "adrasan",
    title: "Adrasan Tekne Turu",
    subtitle: "Sazak · Akseki · Ceneviz · Korsan Koyları",
    description:
      "El değmemiş koyları keşfedin. Öğle yemeği, çay ve meyve servisi dahil.",
    duration: "09:30 – 17:00",
    image:
      "/images/sazak-2.jpg",
    tag: "En Popüler",
    tagColor: "bg-ocean-500",
  },
  {
    slug: "suluada",
    title: "Suluada Tekne Turu",
    subtitle: "Türkiye'nin Maldiveleri",
    description:
      "Kristal berraklığındaki sulara sahip Suluada'yı keşfedin. Benzersiz bir deneyim.",
    duration: "09:30 – 17:00",
    image:
      "/images/sazak-9.jpg",
    tag: "Öne Çıkan",
    tagColor: "bg-teal-500",
  },
  {
    slug: "mehtap",
    title: "Mehtap Turu",
    subtitle: "Romantik Gece Turu",
    description:
      "Ayın ışığında denizde romantik bir gece. Doğum günü ve özel organizasyonlar.",
    duration: "Akşam",
    image:
      "/images/sazak-18.jpg",
    tag: "Özel Gece",
    tagColor: "bg-navy-700",
  },
  {
    slug: "ozel",
    title: "Özel Tekne Turu",
    subtitle: "Sadece Siz ve Sevdikleriniz",
    description:
      "Rotayı siz belirleyin. Tamamen özel, kişiselleştirilmiş bir deniz deneyimi.",
    duration: "İsteğe Bağlı",
    image:
      "/images/sazak-25.jpg",
    tag: "VIP",
    tagColor: "bg-sand-500",
  },
];

const stats = [
  { value: "500+", label: "Mutlu Misafir" },
  { value: "4", label: "Farklı Tur" },
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "7/7", label: "Her Gün Açık" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Güvenli & Lisanslı",
    desc: "Tüm güvenlik sertifikaları tam, deneyimli kaptan eşliğinde.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Dakik & Düzenli",
    desc: "Her gün 09:30'da hareket, 17:00'da iskele dönüşü garantili.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Yemek Dahil",
    desc: "Öğle yemeği, çay ve taze meyveler tur ücretine dahildir.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Kişisel İlgi",
    desc: "Küçük gruplar, her misafire özel ilgi ve güler yüzlü hizmet.",
  },
];

const galleryImages = [
  "/images/sazak-1.jpg",
  "/images/sazak-4.jpg",
  "/images/sazak-7.jpg",
  "/images/sazak-11.jpg",
  "/images/sazak-15.jpg",
  "/images/sazak-20.jpg",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/sazak-5.jpg"
            alt="Adrasan tekne turu - muhteşem koylar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="inline-block bg-ocean-500/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Adrasan · Antalya
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
              Muhteşem Koyları
              <span className="block text-teal-400">Bizimle Keşfedin</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sazak, Suluada, Ceneviz ve Korsan Koyları… Adrasan&apos;ın en
              güzel noktalarına İsmet Kaptan eşliğinde yolculuk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tekne-turlari" className="btn-primary text-base px-8 py-4">
                Turları İncele
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/905383423380?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
                </svg>
                Hemen Rezervasyon
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-float">
            <span className="text-xs font-medium uppercase tracking-widest">Keşfet</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-navy-950 text-white py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="text-center px-6">
                  <p className="text-3xl md:text-4xl font-bold text-teal-400">{s.value}</p>
                  <p className="text-sm text-white/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Turlar ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="tag bg-ocean-50 text-ocean-600 mb-3">Tekne Turlarımız</span>
              <h2 className="section-title">Her Zevke Uygun Bir Tur</h2>
              <p className="section-subtitle mx-auto">
                Günlük koy turlarından romantik mehtap turlarına, özel tekne
                kiralama seçeneklerine kadar her isteğe yanıt veriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tours.map((tour) => (
                <Link
                  key={tour.slug}
                  href={`/tekne-turlari/${tour.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-navy-900 card-hover"
                >
                  <div className="relative h-64">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-card-gradient" />
                    <span className={`absolute top-4 left-4 ${tour.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {tour.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-ocean-400 font-medium mb-1">{tour.subtitle}</p>
                    <h3 className="text-white font-bold text-lg mb-2">{tour.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{tour.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-white/50">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {tour.duration}
                      </span>
                      <span className="text-xs text-ocean-400 font-semibold group-hover:underline">
                        Detaylar →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/tekne-turlari" className="btn-outline">
                Tüm Turları Görüntüle
              </Link>
            </div>
          </div>
        </section>

        {/* ── Neden Biz ── */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="tag bg-ocean-100 text-ocean-700 mb-4">Neden Sazak Teknesi?</span>
                <h2 className="section-title mb-6">
                  Adrasan&apos;ın En Güvenilir
                  <span className="text-ocean-600"> Tekne Turu</span> Firması
                </h2>
                <p className="text-navy-600 leading-relaxed mb-8">
                  15 yılı aşkın deneyimimizle binlerce misafirimize unutulmaz
                  anılar yaşattık. Güvenlik, konfor ve samimi hizmet anlayışımızla
                  her turda en iyisini sunmayı hedefliyoruz.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {features.map((f) => (
                    <div key={f.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0">
                        {f.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 mb-1">{f.title}</p>
                        <p className="text-sm text-navy-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[480px] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/sazak-6.jpg"
                    alt="Sazak Teknesi - Adrasan koyları"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 text-sm">İsmet Kaptan</p>
                      <p className="text-xs text-navy-400">15+ Yıl Deneyim</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-sand-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-navy-500 mt-2">
                    &ldquo;Harika bir gün geçirdik, çok teşekkürler!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Galeri Önizleme ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="tag bg-teal-50 text-teal-700 mb-3">Galeri</span>
                <h2 className="section-title">Koylardan Kareler</h2>
              </div>
              <Link href="/galeri" className="hidden md:flex items-center gap-2 text-sm font-semibold text-ocean-600 hover:text-ocean-700">
                Tümünü Gör
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl group ${
                    i === 0 ? "md:row-span-2" : ""
                  }`}
                  style={{ height: i === 0 ? undefined : "180px" }}
                >
                  <div
                    className={`relative w-full ${i === 0 ? "h-[376px]" : "h-[180px]"}`}
                  >
                    <Image
                      src={src}
                      alt={`Adrasan koy fotoğrafı ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link href="/galeri" className="btn-outline">
                Tüm Fotoğraflar
              </Link>
            </div>
          </div>
        </section>

        {/* ── Rezervasyon CTA ── */}
        <section className="relative py-24 overflow-hidden">
          <Image
            src="/images/sazak-12.jpg"
            alt="Suluada - Adrasan tekne turu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/75" />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Unutulmaz Bir Gün İçin
              <span className="block text-teal-400 mt-1">Hemen Rezervasyon Yapın</span>
            </h2>
            <p className="text-white/75 text-lg mb-10">
              Her gün sınırlı kontenjan. Yerinizi şimdiden ayırtın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905383423380?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 bg-[#25D366] hover:bg-[#20b857]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
                </svg>
                WhatsApp ile Rezervasyon
              </a>
              <a href="tel:05383423380" className="btn-secondary text-base px-8 py-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0538 342 33 80
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