"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
          <Image
            src="/images/sazak-3.jpg"
            alt="Adrasan iletisim"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <span className="tag bg-ocean-500/20 text-ocean-300 mb-4">İletişim</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Bize Ulaşın</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Rezervasyon, fiyat bilgisi veya tur hakkında sorularınız için
              aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* İletişim Bilgileri */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">İletişim Bilgileri</h2>
                  <div className="space-y-5">
                    <a
                      href="tel:05383423380"
                      className="flex items-start gap-4 p-5 rounded-2xl border border-navy-100 hover:border-ocean-300 hover:bg-ocean-50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0 group-hover:bg-ocean-500 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 font-medium uppercase tracking-wider mb-1">Telefon</p>
                        <p className="font-bold text-navy-900 text-lg">0538 342 33 80</p>
                        <p className="text-sm text-navy-500 mt-0.5">Her gün 08:00 – 20:00</p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/905383423380?text=Merhaba%2C%20tekne%20turu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-5 rounded-2xl border border-navy-100 hover:border-[#25D366] hover:bg-green-50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 font-medium uppercase tracking-wider mb-1">WhatsApp</p>
                        <p className="font-bold text-navy-900 text-lg">Hızlı Mesaj Gönder</p>
                        <p className="text-sm text-navy-500 mt-0.5">Genellikle dakikalar içinde yanıt</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-5 rounded-2xl border border-navy-100">
                      <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 font-medium uppercase tracking-wider mb-1">Adres</p>
                        <p className="font-bold text-navy-900">Adrasan Sahili</p>
                        <p className="text-sm text-navy-500 mt-0.5">Adrasan, Kumluca, Antalya</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-2xl border border-navy-100">
                      <div className="w-12 h-12 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 font-medium uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                        <p className="font-bold text-navy-900">Her Gün Açık</p>
                        <p className="text-sm text-navy-500 mt-0.5">Tur saatleri: 09:30 – 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kaptan Hakkında */}
                <div className="bg-navy-50 rounded-3xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                      <Image
                        src="/images/sazak-6.jpg"
                        alt="Kaptan İsmet"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 text-lg">İsmet Kaptan</p>
                      <p className="text-sm text-navy-500">Sazak Teknesi Sahibi</p>
                      <div className="flex gap-0.5 mt-1">
                        {[1,2,3,4,5].map((s) => (
                          <svg key={s} className="w-3.5 h-3.5 text-sand-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    15 yılı aşkın deneyimiyle Adrasan koylarını avucunun içi gibi bilen
                    İsmet Kaptan, her turda güvenliğinizi ve konforunuzu ön planda tutar.
                  </p>
                </div>
              </div>

              {/* İletişim Formu */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Mesaj Gönderin</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        Adınız
                      </label>
                      <input
                        type="text"
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-navy-900 placeholder:text-navy-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="05xx xxx xx xx"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-navy-900 placeholder:text-navy-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      İlgilendiğiniz Tur
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-navy-900 bg-white">
                      <option value="">Tur seçin</option>
                      <option value="adrasan">Adrasan Tekne Turu</option>
                      <option value="suluada">Suluada Tekne Turu</option>
                      <option value="mehtap">Mehtap Turu</option>
                      <option value="ozel">Özel Tekne Turu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Tahmini Tarih
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-navy-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Mesajınız
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Sorularınızı veya isteklerinizi yazın..."
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-100 outline-none transition-all text-navy-900 placeholder:text-navy-300 resize-none"
                    />
                  </div>

                  <a
                    href="https://wa.me/905383423380?text=Merhaba%2C%20rezervasyon%20bilgisi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl transition-colors text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
                    </svg>
                    WhatsApp ile Gönder
                  </a>
                  <p className="text-xs text-navy-400 text-center">
                    Formu doldurun, WhatsApp&apos;ta önceden hazırlanmış mesajla bize ulaşın.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Harita */}
        <section className="h-80 bg-navy-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.5!2d30.4714!3d36.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c05b5f4b5a1c8d%3A0x1!2sAdrasan%2C%20Kumluca%2FAntalya!5e0!3m2!1str!2str!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Adrasan haritası"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}