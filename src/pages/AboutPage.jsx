export default function AboutPage() {
  return (
    // Padding vertikal lebih besar untuk halaman penuh
    <section className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* KOLOM KIRI: FOTO (Visual Artistik) */}
        <div className="relative order-2 md:order-1">
          {/* Kontainer Foto: Bentuk modern dan shadow yang elegan */}
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-primary/40 transform transition duration-700 ease-in-out hover:scale-[1.01]">
            <img
              src="/images/About.jpeg"
              alt="Yeji MUA Portrait"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Dekorasi Shape: Memberi kedalaman dan seni */}
          <div className="absolute top-[-15px] right-[-15px] w-20 h-20 border-8 border-accent rounded-full opacity-60 hidden sm:block"></div>
          <div className="absolute bottom-[-20px] left-[-20px] w-32 h-16 bg-secondary/70 rounded-br-3xl rounded-tl-3xl transform rotate-3 -z-10 shadow-lg hidden sm:block"></div>
        </div>

        {/* KOLOM KANAN: TEKS & Filosofi */}
        <div className="space-y-8 order-1 md:order-2">
          {/* Subheading */}
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium opacity-80">
            MY JOURNEY
          </p>

          {/* Heading Utama */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Meet the Artist, <br />
            **Yeji**
          </h1>

          {/* Kutipan Filosofi (Highlight) */}
          <p className="font-heading text-2xl text-gray-700 italic leading-relaxed pt-2 border-l-4 border-primary pl-4">
            "Makeup should enhance your **natural beauty**, not cover it. Every
            look I create is tailored to highlight the best version of you."
          </p>

          <p className="font-body text-lg text-gray-600 leading-relaxed">
            Hi, I’m **Yeji** — a dedicated professional makeup artist based in
            Jakarta, specializing in creating flawless looks for **bridal**,
            **graduation**, and **photoshoot** events. I started my career in
            2018 and have since worked with hundreds of clients, focusing on
            delivering a bespoke and relaxing experience.
          </p>

          <p className="font-body text-lg text-gray-600 leading-relaxed">
            I continuously explore the latest trends and techniques in the
            beauty industry to ensure **timeless, camera-ready results**. My
            mission is to make you feel your most confident self, ready for any
            spotlight.
          </p>

          {/* Tombol CTA Konsisten */}
          <a
            href="/portfolio"
            className="inline-block mt-4 px-8 py-3 bg-accent text-white font-body font-semibold rounded-full shadow-lg hover:bg-primary transition duration-300 ease-in-out hover:scale-[1.02] tracking-wider"
          >
            View My Portfolio
          </a>
        </div>
      </div>

      {/* --- Section Tambahan: Kredibilitas (Modern & Minimalis) --- */}
      <div className="container mx-auto px-6 mt-24 md:mt-32">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Credibility & Experience
        </h2>

        {/* Grid Pencapaian - Layout Minimalis dan terstruktur */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {/* Item 1: Certification */}
          <div className="space-y-3 p-6 border-b-4 border-primary/70 transition duration-300 hover:border-accent">
            <p className="text-4xl font-heading text-accent mb-2">🎓</p>
            <h3 className="font-body text-xl font-semibold text-gray-900">
              Certified MUA
            </h3>
            <p className="text-sm text-gray-600">
              Jakarta Beauty Academy (2018)
            </p>
          </div>

          {/* Item 2: Clients Served */}
          <div className="space-y-3 p-6 border-b-4 border-primary/70 transition duration-300 hover:border-accent">
            <p className="text-4xl font-heading text-accent mb-2">💍</p>
            <h3 className="font-body text-xl font-semibold text-gray-900">
              300+ Clients
            </h3>
            <p className="text-sm text-gray-600">Bridal, Event & Photoshoot</p>
          </div>

          {/* Item 3: Partnerships */}
          <div className="space-y-3 p-6 border-b-4 border-primary/70 transition duration-300 hover:border-border-accent">
            <p className="text-4xl font-heading text-accent mb-2">📸</p>
            <h3 className="font-body text-xl font-semibold text-gray-900">
              Collaborations
            </h3>
            <p className="text-sm text-gray-600">20+ Photographers & Studios</p>
          </div>

          {/* Item 4: Recognition */}
          <div className="space-y-3 p-6 border-b-4 border-primary/70 transition duration-300 hover:border-accent">
            <p className="text-4xl font-heading text-accent mb-2">🏆</p>
            <h3 className="font-body text-xl font-semibold text-gray-900">
              Featured In
            </h3>
            <p className="text-sm text-gray-600">
              "Glamour Jakarta" Magazine (2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
