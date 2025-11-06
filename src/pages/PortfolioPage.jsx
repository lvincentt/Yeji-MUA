// Import React state jika Anda ingin mengimplementasikan filtering yang berfungsi
// import React, { useState } from 'react';

export default function PortfolioPage() {
  const portfolios = [
    {
      id: 1,
      image: "/images/bridal.jpeg",
      category: "Bridal",
      title: "Classic Bridal Look",
    },
    {
      id: 2,
      image: "/images/bridesmaid.jpeg",
      category: "Graduation",
      title: "Soft Glam Graduation",
    },
    {
      id: 3,
      image: "/images/classic.jpeg",
      category: "Photoshoot",
      title: "Editorial Makeup",
    },
    {
      id: 4,
      image: "/images/graduation.jpeg",
      category: "Bridal",
      title: "Modern Bride",
    },
    {
      id: 5,
      image: "/images/photoshoot.jpeg",
      category: "Photoshoot",
      title: "Studio Glow",
    },
    {
      id: 6,
      image: "/images/portfolio_editorial.jpeg",
      category: "Graduation",
      title: "Fresh Natural Look",
    },
    {
      id: 7,
      image: "/images/portfolio-natural.jpeg",
      category: "Engagement",
      title: "Romantic Engagement Style",
    },
    {
      id: 8,
      image: "/images/portfolio-softpink.jpeg",
      category: "Bridesmaid",
      title: "Elegant Bridesmaid",
    },
    {
      id: 9,
      image: "/images/portfolio-graduation.jpeg",
      category: "Photoshoot",
      title: "Fashion Editorial",
    },
  ];

  const categories = [
    "All",
    "Bridal",
    "Graduation",
    "Photoshoot",
    "Engagement",
    "Bridesmaid",
  ];
  const currentFilter = "All"; // Placeholder untuk state filter saat ini

  return (
    // Background diubah menjadi warna base/putih yang lembut
    <section className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 text-center">
        {/* Subheading & Heading Konsisten */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
          Our Visual Collection
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          My Portfolio
        </h1>
        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          A curated collection of my works across all specializations. Every
          photo captures the magic of personalized beauty.
        </p>

        {/* --- FILTER KATEGORI (Fungsionalitas Baru) --- */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-wrap justify-center gap-3 font-body">
          {categories.map((cat) => (
            <button
              key={cat}
              // Styling tombol filter yang clean dan menggunakan accent
              className={`px-5 py-2 text-sm font-semibold rounded-full transition duration-300 border-2 
                ${
                  cat === currentFilter
                    ? "bg-accent text-white border-accent shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
                }`}
              // onClick={() => setCurrentFilter(cat)} // uncomment jika menggunakan state
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GALERI - Grid Imersif */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolios.map((item) => (
            <div
              key={item.id}
              // Styling Kartu: Bersih, border tipis, efek hover elegan
              className="group relative overflow-hidden rounded-xl border border-secondary/50 transition duration-500 block"
            >
              {/* Gambar dengan Rasio Vertikal yang lebih artistik */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Overlay Dinamis & Teks Hover (Cinematic) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <div className="w-full text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-sm font-body uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-heading font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Konsisten */}
        <div className="mt-16">
          <a
            href="#contact"
            // Tombol CTA Konsisten: Rounded-full, Primary to Accent hover
            className="inline-block px-10 py-3.5 text-lg bg-primary text-white font-body font-semibold rounded-full shadow-lg hover:bg-accent transition duration-300 ease-in-out hover:scale-[1.02] tracking-wider"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}
