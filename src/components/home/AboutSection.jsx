export default function AboutSection() {
  return (
    // Padding vertikal lebih besar untuk kesan "spacious" (lapang)
    <section id="about" className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* FOTO PROFIL (Visual Artistik) */}
        <div className="relative">
          {/* 1. Kontainer Foto: Bentuk modern dan shadow yang elegan */}
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl shadow-primary/30 transform transition duration-700 hover:scale-[1.01] ease-in-out">
            <img
              src="/images/About.jpeg"
              alt="Yeji MUA - Professional Makeup Artist"
              // 2. Efek Gambar: Zoom saat hover untuk memberi kesan dinamis
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* 3. Dekorasi Shape: Bentuk geometris sederhana (minimalis) */}
          <div className="absolute top-[-20px] left-[-20px] w-16 h-16 border-4 border-accent rounded-full opacity-60 animate-spin-slow-reverse hidden sm:block" />
          <div className="absolute bottom-[-10px] right-[-10px] w-24 h-24 bg-primary/40 rounded-3xl transform rotate-12 -z-10 blur-sm" />
        </div>

        {/* TEKS (Tipografi Elegan) */}
        <div className="space-y-7">
          {/* Subheading sebagai pemisah */}
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium opacity-80">
            OUR ARTISTRY
          </p>

          {/* 4. Heading: Lebih besar dan kontras */}
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Meet the Artist Behind the **Glow**
          </h2>

          {/* 5. Paragraf: Text body yang lebih besar, warna lembut */}
          <p className="font-body text-lg text-gray-700 leading-relaxed italic">
            "I believe that makeup should never hide who you are, but highlight
            the best version of yourself — **timeless, radiant, and full of
            personality**."
          </p>

          <p className="font-body text-gray-600 leading-relaxed border-l-4 border-primary pl-4 pt-2">
            Hi, I’m <span className="font-semibold text-accent">Yeji</span> — a
            professional makeup artist based in Jakarta, specializing in
            **bridal**, graduation, and **photoshoot** makeup. With over 5 years
            of dedicated experience, my focus is always on enhancing your
            natural beauty and ensuring you feel absolutely confident for any
            special occasion.
          </p>

          {/* 6. Tombol CTA: Menggunakan styling CTA yang konsisten (dari Navbar) */}
          <a
            href="/portfolio"
            className="inline-block mt-4 px-8 py-3 bg-accent text-white font-body font-semibold rounded-lg shadow-lg hover:bg-primary transition duration-300 ease-in-out hover:scale-[1.02]"
          >
            View My Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
