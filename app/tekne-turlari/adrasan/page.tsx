import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adrasan Tekne Turu",
  description:
    "Sazak, Akseki, Ceneviz ve Korsan koylarını keşfedin. Her gün 09:30–17:00 arası öğle yemeği dahil Adrasan tekne turu.",
  alternates: { canonical: "https://adrasantekneturlari.org/tekne-turlari/adrasan" },
};

const itinerary = [
  { time: "09:30", title: "Adrasan İskelesi'nden Hareket", desc: "Güne erken başlayıp taze deniz havasını içinize çekin." },
  { time: "10:30", title: "Sazak Koyu", desc: "İlk durağımız. Kristal sularda yüzme ve snorkel zamanı." },
  { time: "12:00", title: "Akseki Koyu – Öğle Molası", desc: "Kaptanımızın favori koyunda öğle yemeği ve dinlenme." },
  { time: "13:30", title: "Ceneviz Koyu", desc: "Tarihi Ceneviz kalıntılarıyla çevrili eşsiz koy." },
  { time: "15:00", title: "Korsan Koyu", desc: "Masalsı atmosferiyle ünlü Korsan Koyu'nda son yüzme molası." },
  { time: "17:00", title: "Adrasan İskelesi'ne Dönüş", desc: "Güzel anılarla dolu bir günün sonu." },
];

export default function AdrasanTurPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-20 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-5.jpg"
            alt="Adrasan tekne turu koylar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
            <Link href="/tekne-turlari" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tüm Turlar
            </Link>
            <span className="inline-block bg-ocean-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">En Popüler</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Adrasan Tekne Turu</h1>
            <p className="text-white/75 text-lg max-w-2xl">Sazak · Akseki · Ceneviz · Korsan Koyları — Her gün 09:30 hareket</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Sol: İçerik */}
              <div className="lg:col-span-2 space-y-10">
                {/* Hızlı Bilgiler */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Hareket", value: "09:30" },
                    { label: "Dönüş", value: "17:00" },
                    { label: "Günler", value: "Her Gün" },
                    { label: "Kalkış", value: "Adrasan İskele" },
                  ].map((info) => (
                    <div key={info.label} className="bg-navy-50 rounded-2xl p-4 text-center">
                      <p className="text-xs text-navy-400 mb-1">{info.label}</p>
                      <p className="font-bold text-navy-900">{info.value}</p>
                    </div>
                  ))}
                </div>

                {/* Açıklama */}
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Tur Hakkında</h2>
                  <div className="prose prose-navy max-w-none text-navy-600 space-y-4">
                    <p>
                      Adrasan tekne turumuzda sizleri yeşilin ve mavinin kucaklaştığı, el değmemiş
                      koylara götürüyoruz. Sazak, Akseki, Ceneviz ve Korsan koylarında nefes kesen
                      manzaralar ve kristal berraklığında sularda yüzme fırsatı sizi bekliyor.
                    </p>
                    <p>
                      Teknemiz her sabah saat 09:30&apos;da Adrasan iskelesinden hareket eder.
                      Öğle saatlerinde kaptanımızın belirlediği güzel bir koyda öğle yemeği, çay
                      ve taze meyve servisi yapılır. Bu hizmetler tur ücretine dahildir.
                    </p>
                    <p>
                      Güneş batmadan saat 17:00&apos;da iskelemize dönersiniz. Deniz mavisi ve
                      koy yeşilleriyle dolu muhteşem bir günün ardından mutlu anılarla ayrılırsınız.
                    </p>
                  </div>
                </div>

                {/* Dahil / Dahil Değil */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Dahil Olanlar
                    </h3>
                    <ul className="space-y-2">
                      {["Öğle yemeği", "Çay ve kahve", "Taze meyve servisi", "Can yeleği", "Müzik sistemi", "Güler yüzlü ekip"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-navy-700">
                          <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      Dahil Olmayanlar
                    </h3>
                    <ul className="space-y-2">
                      {["Alkollü içecekler (satın alınabilir)", "Şnorkel ekipmanı (kiralık mevcut)", "Kişisel harcamalar"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-navy-500">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Güzergah */}
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Tur Güzergahı</h2>
                  <div className="relative">
                    <div className="absolute left-[22px] top-6 bottom-6 w-px bg-navy-200" />
                    <div className="space-y-6">
                      {itinerary.map((step, i) => (
                        <div key={i} className="flex gap-5">
                          <div className="w-11 h-11 rounded-full bg-ocean-500 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                            {step.time.split(":")[0]}:{step.time.split(":")[1]}
                          </div>
                          <div className="pt-2">
                            <p className="font-semibold text-navy-900">{step.title}</p>
                            <p className="text-sm text-navy-500 mt-1">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ: Rezervasyon Kartı */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-3xl border border-navy-100 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Rezervasyon</h3>
                  <p className="text-sm text-navy-500 mb-6">
                    Günlük kontenjan sınırlıdır. Yerinizi önceden ayırtın.
                  </p>

                  <div className="bg-ocean-50 rounded-2xl p-4 mb-6">
                    <p className="text-xs text-ocean-600 font-semibold uppercase tracking-wider mb-1">Fiyat</p>
                    <p className="text-2xl font-bold text-navy-900">Bilgi Alın</p>
                    <p className="text-xs text-navy-500 mt-1">Kişi başı fiyat — WhatsApp veya telefon</p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="https://wa.me/905383423380?text=Merhaba%2C%20Adrasan%20tekne%20turu%20i%C3%A7in%20rezervasyon%20yapmak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20b857] text-white font-semibold rounded-xl transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
                      </svg>
                      WhatsApp ile Rezervasyon
                    </a>
                    <a
                      href="tel:05383423380"
                      className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-navy-200 hover:border-ocean-400 text-navy-800 font-semibold rounded-xl transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      0538 342 33 80
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-navy-100">
                    <p className="text-xs text-navy-400 text-center">
                      Ücretsiz iptal · 24 saat öncesine kadar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diğer Turlar */}
        <section className="py-14 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Diğer Turlarımız</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { slug: "suluada", title: "Suluada Tekne Turu", img: "/images/sazak-12.jpg" },
                { slug: "mehtap", title: "Mehtap Turu", img: "/images/sazak-18.jpg" },
                { slug: "ozel", title: "Özel Tekne Turu", img: "/images/sazak-25.jpg" },
              ].map((t) => (
                <Link key={t.slug} href={`/tekne-turlari/${t.slug}`} className="group relative rounded-2xl overflow-hidden h-44 block">
                  <Image src={t.img} alt={t.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-card-gradient" />
                  <p className="absolute bottom-4 left-4 text-white font-bold">{t.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}