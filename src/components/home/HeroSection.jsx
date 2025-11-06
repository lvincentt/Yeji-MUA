export default function HeroSection() {
  return (
    // 1. Tinggi: Ditingkatkan sedikit untuk kesan megah.
    // Background: Menggunakan warna base lembut sebagai fallback.
    <section className="relative h-screen flex items-center justify-center bg-base overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-makeup.jpg')",
          // 2. Efek Gambar: Zoom lembut dan blur halus untuk kesan dreamy/artistik
          backgroundSize: "cover",
          backgroundPosition: "center 20%", // Fokuskan pada bagian atas atau tengah objek
        }}
      >
        {/* 3. Overlay yang Lebih Halus dan Hangat: Diganti dengan gradient elegan */}
        <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-base/30 to-base/10 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-10 max-w-4xl">
        {/* Subtitle - Sentuhan personal dan elegan */}
        <p className="text-xl font-body text-accent/90 mb-3 tracking-widest uppercase opacity-90 animate-fade-in-down">
          Yeji MUA presents
        </p>

        {/* 4. Heading: Lebih besar, lebih elegan (font Playfair Display Anda) */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 leading-tight mb-6 drop-shadow-lg animate-fade-in">
          Enhance Your <br />
          Natural **Beauty**
        </h1>

        {/* Deskripsi: Font body, warna abu-abu yang lebih lembut */}
        <p className="text-gray-700 text-lg font-body max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Professional makeup artistry specializing in **bridal**, editorial,
          and **photoshoot** transformations. Experience a bespoke glow that
          truly lasts.
        </p>

        {/* 5. Tombol CTA: Menggunakan styling Navbar yang ditingkatkan (accent) */}
        <a
          href="#services"
          className="inline-block px-10 py-3.5 text-lg bg-accent text-white font-body font-semibold rounded-full shadow-xl hover:bg-primary transition duration-300 ease-in-out hover:scale-[1.05] tracking-wider transform hover:shadow-2xl animate-fade-in-up"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}
