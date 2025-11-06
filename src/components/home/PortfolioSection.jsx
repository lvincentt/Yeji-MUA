export default function PortfolioSection() {
  const portfolios = [
    { id: 1, image: "/images/portfolio-bridal.jpeg", title: "Bridal Look" },
    {
      id: 2,
      image: "/images/portfolio-graduation.jpeg",
      title: "Graduation Glam",
    },
    {
      id: 3,
      image: "/images/portfolio_editorial.jpeg",
      title: "Editorial Style",
    },
    { id: 4, image: "/images/portfolio-natural.jpeg", title: "Natural Beauty" },
    {
      id: 5,
      image: "/images/portfolio-softpink.jpeg",
      title: "Soft Pink Tone",
    },
    { id: 6, image: "/images/classic.jpeg", title: "Classic Glamour" },
  ];

  return (
    // 1. Background: Menggunakan warna base lembut
    <section id="portfolio" className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 text-center">
        {/* Subheading */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
          Our Masterpieces
        </p>

        {/* Heading: Lebih besar dan kuat */}
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Portfolio
        </h2>

        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          A visual collection of our best work. Every look is a custom
          creation—**timeless, vibrant, and uniquely yours**.
        </p>

        {/* Grid Galeri - Ditingkatkan untuk fleksibilitas visual */}
        {/* Catatan: Untuk grid yang lebih dinamis (seperti Pinterest), Anda mungkin perlu library masonry atau class kustom. Di sini, kita akan gunakan grid standar yang clean. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolios.map((item) => (
            <a
              key={item.id}
              href={`/portfolio/${item.id}`} // Tautan ke detail portofolio
              // 2. Styling Kartu: Bersih, tanpa shadow keras
              className="group relative overflow-hidden rounded-xl border border-secondary/50 transition duration-500 block"
            >
              {/* Gambar */}
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* 3. Overlay & Teks Hover: Lebih minimalis, menggunakan gradient gelap */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">
                <div className="w-full text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-body uppercase tracking-wider opacity-80">
                    {item.title}
                  </p>
                  <h3 className="text-white text-2xl font-heading font-semibold leading-tight">
                    See Details →
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 4. CTA: Konsisten dengan gaya CTA lainnya */}
        <div className="mt-16">
          <a
            href="/portfolio"
            className="inline-block px-10 py-3.5 text-lg bg-primary text-white font-body font-semibold rounded-full shadow-lg hover:bg-accent transition duration-300 ease-in-out hover:scale-[1.02] tracking-wider"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
