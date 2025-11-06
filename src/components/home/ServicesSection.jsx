import bridal from "../../assets/images/bridal.jpeg";
import graduation from "../../assets/images/graduation.jpeg";
import photoshoot from "../../assets/images/photoshoot.jpeg";

export default function ServicesSection() {
  const services = [
    {
      title: "Bridal Makeup",
      desc: "Elegant, long-lasting bridal makeup designed to make you feel radiant on your special day.",
      price: "IDR 1.200.000",
      image: bridal,
    },
    {
      title: "Graduation Makeup",
      desc: "Soft glam look perfect for your graduation day — fresh, confident, and photo-ready.",
      price: "IDR 650.000",
      image: graduation,
    },
    {
      title: "Photoshoot Makeup",
      desc: "Makeup for editorial or casual photoshoots with flawless base and attention to detail.",
      price: "IDR 850.000",
      image: photoshoot,
    },
  ];

  return (
    // Background diubah menjadi warna yang lebih lembut (base) atau putih bersih
    <section id="services" className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 text-center">
        {/* Subheading: Tambahkan sentuhan elegan */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
          Our Offerings
        </p>

        {/* Heading: Lebih besar dan kontras */}
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Tailored Artistry
        </h2>
        <p className="font-body text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Choose the perfect look for your moment. We provide customized,
          high-quality makeup services for every special occasion, focusing on
          your individual style.
        </p>

        {/* Grid Kartu Layanan */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {services.map((srv, idx) => (
            <div
              key={idx}
              // 1. Styling Kartu: Bersih, border tipis, efek hover elegan
              className="group rounded-xl overflow-hidden border border-secondary/70 transition duration-300 bg-white shadow-xl shadow-gray-100 hover:shadow-primary/30 hover:shadow-2xl"
            >
              {/* Gambar */}
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  // Efek zoom yang lebih smooth
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Konten */}
              <div className="p-7 space-y-4 text-left">
                {/* 2. Judul: Font heading, kontras tinggi */}
                <h3 className="font-heading text-3xl font-semibold text-gray-900">
                  {srv.title}
                </h3>

                {/* Deskripsi */}
                <p className="font-body text-gray-500 text-base leading-snug">
                  {srv.desc}
                </p>

                {/* 3. Harga: Menggunakan accent, ukuran lebih dominan */}
                <p className="text-xl font-bold font-body text-accent pt-2">
                  {srv.price}
                </p>

                {/* 4. Tombol: Konsisten, elegan, dan menonjol */}
                <a
                  href="#contact"
                  className="inline-block mt-3 px-6 py-2.5 bg-accent text-white font-body rounded-full text-sm font-semibold hover:bg-primary transition duration-300 hover:scale-[1.02] shadow-md"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
