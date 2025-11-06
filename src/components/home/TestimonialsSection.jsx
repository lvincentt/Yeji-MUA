// Pastikan konfigurasi warna Anda (primary, accent, base) aktif
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Clara Setiawan",
      text: "Yeji is absolutely amazing! My bridal makeup stayed flawless all day and looked so natural in photos. I felt confident and beautiful!",
      image: "/images/testi-1.jpeg",
    },
    {
      name: "Aurelia Tan",
      text: "Super professional and friendly. She knew exactly what style fit my face shape. Loved my graduation makeup so much!",
      image: "/images/testi-2.jpeg",
    },
    {
      name: "Nadia Rahma",
      text: "From booking to the actual day, everything was smooth. The makeup was elegant and long-lasting. Highly recommended!",
      image: "/images/testi-3.jfif",
    },
  ];

  return (
    // 1. Background: Menggunakan warna secondary (apricot muda) yang lembut
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/60">
      <div className="container mx-auto px-6 text-center">
        {/* Subheading */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
          Genuine Feedback
        </p>

        {/* Heading: Menggunakan font Playfair Display (heading) dan ukuran besar */}
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Words from My Clients
        </h2>
        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          It's an honor to be part of your most treasured moments. Here's what
          my lovely clients have to say about their experience.
        </p>

        {/* Grid Testimonial */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              // 2. Styling Kartu: Bersih, menggunakan bg-white, padding besar
              className="bg-white rounded-xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/30 transition duration-300 transform hover:-translate-y-1 text-left flex flex-col h-full"
            >
              {/* Kutipan (Paling Menonjol) */}
              <p className="font-heading text-xl text-gray-800 leading-relaxed italic mb-6 flex-grow">
                “{t.text}”
              </p>

              {/* Garis pemisah yang elegan */}
              <hr className="border-t border-primary/50 w-1/3 mb-6" />

              {/* Info Klien */}
              <div className="flex items-center gap-4">
                {/* 3. Foto Klien: Ukuran lebih besar untuk visual yang lebih baik */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/70 shadow-md"
                />

                {/* Nama Klien */}
                <div>
                  <h3 className="font-body text-lg font-semibold text-accent leading-none">
                    {t.name}
                  </h3>
                  <p className="font-body text-sm text-gray-500">
                    Happy Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
