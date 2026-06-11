import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Özel Tekne Turu",
  description:
    "Adrasan özel tekne kiralama. Rotayı, süreyi ve güzergahı siz belirleyin. Aile, arkadaş grubu ve kurumsal etkinlikler için VIP tekne turu.",
  alternates: { canonical: "https://adrasantekneturlari.org/tekne-turlari/ozel" },
};

export default function OzelTurPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 h-[70vh] min-h-[500px] flex items-end overflow-hidden">
          <Image
            src="/images/sazak-25.jpg"
            alt="Özel tekne turu Adrasan"
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
            <span className="inline-block bg-sand-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">VIP</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Özel Tekne Turu</h1>
            <p className="text-white/75 text-lg max-w-2xl">Sadece Siz ve Sevdikleriniz — Rotayı siz belirleyin</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Süre", value: "İsteğe Bağlı" },
                    { label: "Kapasite", value: "Max 12 Kişi" },
                    { label: "Günler", value: "Her Gün" },
                    { label: "Rota", value: "Özel" },
                  ].map((info) => (
                    <div key={info.label} className="bg-navy-50 rounded-2xl p-4 text-center">
                      <p className="text-xs text-navy-400 mb-1">{info.label}</p>
                      <p className="font-bold text-navy-900 text-sm">{info.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Özel Tekne Deneyimi</h2>
                  <div className="text-navy-600 space-y-4 leading-relaxed">
                    <p>
                      Özel tekne turumuzda tekne tamamen sizin ve sevdiklerinizin emrinde.
                      Rotayı, süreyi ve ziyaret edilecek koyları siz belirleyin. İster günlük
                      koy turu, ister çoklu koy keşfi, ister sadece açık denizde huzurlu
                      bir gün — her isteğinize göre programı şekillendiriyoruz.
                    </p>
                    <p>
                      Aile toplantıları, arkadaş grubu gezileri, kurumsal etkinlikler ve
                      özel kutlamalar için ideal bir seçenek. Kalabalık turların aksine
                      sadece sizin grubunuz teknede olacak, böylece hem güvenliğiniz hem
                      de konforunuz en üst düzeyde sağlanacak.
                    </p>
                    <p>
                      Kaptan İsmet, bölgenin her köşesini avucunun içi gibi biliyor.
                      Bilinen güzergahların dışında, diğer tekne turlarının uğramadığı
                      gizli koyları da keşfedebilirsiniz.
                    </p>
                  </div>
                </div>

                {/* Kullanım Örnekleri */}
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Kimler İçin Uygun?</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Aile Tatili", desc: "Çocuklarınızla güvenli ve eğlenceli bir deniz günü.", icon: "👨‍👩‍👧‍👦" },
                      { title: "Arkadaş Grubu", desc: "Arkadaşlarınızla unutulmaz bir macera yaşayın.", icon: "👥" },
                      { title: "Çift Kaçamağı", desc: "Sadece ikinizin olduğu romantik bir gün.", icon: "💑" },
                      { title: "Kurumsal Etkinlik", desc: "Takım aktivitesi veya iş toplantısı için.", icon: "💼" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 p-4 bg-navy-50 rounded-2xl">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-navy-900">{item.title}</p>
                          <p className="text-sm text-navy-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-navy-900 mb-4">Dahil Olanlar</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Özel kaptan", "Özel rota belirleme", "Öğle yemeği (isteğe bağlı)", "İçecekler", "Müzik sistemi", "Can yeleği", "Tüm güvenlik ekipmanı"].map((item) => (
                      <span key={item} className="flex items-center gap-1.5 text-sm text-navy-700 bg-ocean-50 px-3 py-1.5 rounded-lg">
                        <svg className="w-3.5 h-3.5 text-ocean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-3xl border border-navy-100 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Özel Tur Fiyatı</h3>
                  <p className="text-sm text-navy-500 mb-6">Grup büyüklüğü ve süreye göre fiyatlandırılır.</p>
                  <div className="bg-sand-50 rounded-2xl p-4 mb-6">
                    <p className="text-xs text-sand-600 font-semibold uppercase tracking-wider mb-1">Fiyat</p>
                    <p className="text-2xl font-bold text-navy-900">Teklif Alın</p>
                    <p className="text-xs text-navy-500 mt-1">Kişi sayısı ve süreye göre özel fiyat</p>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/905383423380?text=Merhaba%2C%20%C3%B6zel%20tekne%20turu%20i%C3%A7in%20fiyat%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20b857] text-white font-semibold rounded-xl transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
                      </svg>
                      WhatsApp&apos;tan Teklif Al
                    </a>
                    <a href="tel:05383423380" className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-navy-200 hover:border-ocean-400 text-navy-800 font-semibold rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      0538 342 33 80
                    </a>
                  </div>
                  <p className="text-xs text-navy-400 text-center mt-6 pt-6 border-t border-navy-100">
                    Özel istekleriniz için müsaitlik durumunu sorun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Diğer Turlarımız</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { slug: "adrasan", title: "Adrasan Tekne Turu", img: "/images/sazak-5.jpg" },
                { slug: "suluada", title: "Suluada Tekne Turu", img: "/images/sazak-12.jpg" },
                { slug: "mehtap", title: "Mehtap Turu", img: "/images/sazak-18.jpg" },
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