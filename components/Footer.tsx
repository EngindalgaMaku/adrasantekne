import Link from "next/link";

const turLinks = [
  { href: "/tekne-turlari/adrasan", label: "Adrasan Tekne Turu" },
  { href: "/tekne-turlari/suluada", label: "Suluada Tekne Turu" },
  { href: "/tekne-turlari/mehtap", label: "Mehtap Turu" },
  { href: "/tekne-turlari/ozel", label: "Özel Tekne Turu" },
];

const blogLinks = [
  { href: "/blog/adrasanda-neler-yapilir", label: "Adrasan'da Neler Yapılır?" },
  { href: "/blog/adrasan-tarihcesi", label: "Adrasan Tarihçesi" },
  { href: "/blog/adrasanda-nerede-kalinir", label: "Adrasan'da Nerede Kalınır?" },
  { href: "/blog/adrasana-nasil-gidilir", label: "Adrasan'a Nasıl Gidilir?" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-500 flex items-center justify-center font-bold text-sm shrink-0">
                ST
              </div>
              <div>
                <p className="font-bold text-base leading-tight">Sazak Teknesi</p>
                <p className="text-xs text-white/50">Adrasan Tekne Turları</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Adrasan&apos;ın bakir koylarını İsmet Kaptan eşliğinde keşfedin.
              Her gün hizmetinizdeyiz.
            </p>
            <a
              href="https://wa.me/905383423380"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20b857] rounded-xl text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004a9.96 9.96 0 01-5.031-1.36l-.361-.214-3.741.975.998-3.622-.235-.372a9.808 9.808 0 01-1.52-5.192c.002-5.45 4.46-9.884 9.937-9.884a9.908 9.908 0 017.027 2.898 9.788 9.788 0 012.909 6.99c-.003 5.452-4.462 9.881-9.979 9.881zm5.464-7.399c-.299-.149-1.768-.869-2.042-.968-.273-.099-.472-.149-.671.149-.198.298-.769.968-.943 1.167-.173.199-.347.224-.645.075-.298-.15-1.258-.462-2.395-1.47-.886-.788-1.484-1.76-1.658-2.058-.173-.299-.018-.46.13-.608.134-.134.299-.348.448-.523.149-.175.199-.299.298-.498.099-.199.05-.374-.025-.523-.075-.15-.671-1.618-.92-2.216-.242-.582-.488-.503-.671-.512a12.6 12.6 0 00-.572-.011.96.96 0 00-.696.324c-.248.273-.945.92-.945 2.244 0 1.324.969 2.603 1.104 2.777.135.174 1.907 2.9 4.622 4.067.646.277 1.149.443 1.541.567.647.204 1.237.175 1.703.106.52-.077 1.768-.722 2.017-1.419.249-.697.249-1.295.174-1.419-.074-.124-.273-.199-.572-.349z"/>
              </svg>
              WhatsApp ile Yaz
            </a>
          </div>

          {/* Turlar */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Tekne Turları
            </h3>
            <ul className="space-y-3">
              {turLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Adrasan Rehberi
            </h3>
            <ul className="space-y-3">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-ocean-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-sm text-white/70">Adrasan Sahili, Adrasan, Antalya</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-ocean-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:05383423380" className="text-sm text-white/70 hover:text-white transition-colors">
                  0538 342 33 80
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-ocean-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm text-white/70">Her gün 09:30 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Sazak Teknesi – Adrasan Tekne Turları. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors">Ana Sayfa</Link>
            <Link href="/tekne-turlari" className="text-xs text-white/40 hover:text-white/70 transition-colors">Turlar</Link>
            <Link href="/iletisim" className="text-xs text-white/40 hover:text-white/70 transition-colors">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}