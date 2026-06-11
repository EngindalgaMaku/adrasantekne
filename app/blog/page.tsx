import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Blog - Adrasan Rehberi",
  description:
    "Adrasan hakkında her şey: nasıl gidilir, nerede kalınır, neler yapılır, tarihi ve koyları. Adrasan seyahat rehberi.",
  alternates: { canonical: "https://adrasantekneturlari.org/blog" },
};

const posts = [
  {
    slug: "adrasanda-neler-yapilir",
    title: "Adrasan'da Neler Yapılır?",
    excerpt:
      "Adrasan'da geçirebileceğiniz en güzel aktiviteler, gidilecek yerler ve unutulmaz deneyimler için kapsamlı rehberimiz.",
    image: "/images/sazak-5.jpg",
    date: "15 Nisan 2024",
    readTime: "5 dk okuma",
    category: "Rehber",
  },
  {
    slug: "adrasan-tarihcesi",
    title: "Adrasan Tarihçesi",
    excerpt:
      "Antik çağlardan günümüze Adrasan'ın tarihi yolculuğu. Piri Reis'in haritalarında geçen bu efsanevi koyun hikayesi.",
    image: "/images/sazak-8.jpg",
    date: "10 Nisan 2024",
    readTime: "6 dk okuma",
    category: "Tarih",
  },
  {
    slug: "adrasanda-nerede-kalinir",
    title: "Adrasan'da Nerede Kalınır?",
    excerpt:
      "Butik pansiyonlardan kamp alanlarına kadar Adrasan'ın konaklama seçenekleri ve bütçenize göre en iyi tercihler.",
    image: "/images/sazak-6.jpg",
    date: "5 Nisan 2024",
    readTime: "4 dk okuma",
    category: "Konaklama",
  },
  {
    slug: "adrasana-nasil-gidilir",
    title: "Adrasan'a Nasıl Gidilir?",
    excerpt:
      "İstanbul, Ankara ve Antalya'dan Adrasan'a ulaşım rehberi. Otobüs, uçak ve araçla en pratik güzergahlar.",
    image: "/images/sazak-3.jpg",
    date: "1 Nisan 2024",
    readTime: "4 dk okuma",
    category: "Ulaşım",
  },
];

const categoryColors: Record<string, string> = {
  Rehber: "bg-ocean-100 text-ocean-700",
  Tarih: "bg-navy-100 text-navy-700",
  Konaklama: "bg-teal-100 text-teal-700",
  Ulaşım: "bg-sand-100 text-navy-700",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
          <Image
            src="/images/sazak-21.jpg"
            alt="Adrasan blog"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <span className="tag bg-ocean-500/20 text-ocean-300 mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Adrasan Rehberi</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Adrasan&apos;ı en iyi şekilde keşfetmeniz için hazırladığımız
              kapsamlı seyahat rehberleri ve yerel bilgiler.
            </p>
          </div>
        </section>

        {/* Blog Listesi */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Öne Çıkan */}
            <div className="mb-14">
              <Link
                href={`/blog/${posts[0].slug}`}
                className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-navy-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`tag ${categoryColors[posts[0].category]}`}>
                      {posts[0].category}
                    </span>
                    <span className="text-xs text-navy-400">Öne Çıkan</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 group-hover:text-ocean-600 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-navy-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-navy-400">
                      <span>{posts[0].date}</span>
                      <span>{posts[0].readTime}</span>
                    </div>
                    <span className="text-sm font-semibold text-ocean-600 group-hover:underline">
                      Devamını Oku →
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Diğer Yazılar */}
            <div className="grid md:grid-cols-3 gap-6">
              {posts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border border-navy-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`tag text-xs ${categoryColors[post.category]} mb-3 inline-block`}>
                      {post.category}
                    </span>
                    <h2 className="font-bold text-navy-900 text-lg mb-3 group-hover:text-ocean-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-navy-500 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-navy-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-ocean-600">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Hazırsanız Tekneye Atlayalım!
            </h2>
            <p className="text-white/80 mb-8">
              Adrasan&apos;ı okudunuz, artık bizzat yaşama zamanı.
            </p>
            <Link href="/tekne-turlari" className="btn-secondary">
              Turları Görüntüle
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}