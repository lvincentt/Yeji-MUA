export default function ContactPage() {
  return (
    // Background diubah menjadi warna secondary/lembut (opsional) atau tetap base
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        {/* Subheading & Heading Konsisten */}
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
          Your Moment Awaits
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Book Your Session
        </h1>
        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Ready to achieve your flawless look? Reach out directly via WhatsApp
          for the fastest response, or explore my social media.
        </p>

        {/* CONTACT INFO BOX (Focal Point) */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl shadow-primary/30 p-8 md:p-12 space-y-8 border-t-4 border-accent">
          {/* Kontak Detail */}
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold text-accent mb-4 border-b pb-2 border-primary/20 inline-block">
              Direct Contact
            </h2>
            <div className="space-y-4 text-left font-body text-lg">
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900 mr-2">
                  📍 Location:
                </span>{" "}
                Jakarta, Indonesia
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900 mr-2">
                  📧 Email:
                </span>
                <a
                  href="mailto:hello@yejimua.com"
                  className="text-primary hover:text-accent transition duration-300"
                >
                  hello@yejimua.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900 mr-2">
                  📞 Phone / WA:
                </span>
                <a
                  href="tel:+6281234567890"
                  className="text-primary hover:text-accent transition duration-300"
                >
                  +62 812 3456 7890
                </a>
              </p>
            </div>
          </div>

          {/* CTA Buttons (Paling Menonjol) */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              // Tombol Utama WA: Accent, rounded-full, shadow kuat
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-accent text-white rounded-full font-semibold transition duration-300 hover:bg-primary hover:scale-[1.03] shadow-lg shadow-accent/40 text-base"
            >
              Chat on WhatsApp Now
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              // Tombol Sekunder IG: Outline yang elegan
              className="inline-flex items-center justify-center gap-3 px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold transition duration-300 hover:bg-primary hover:text-white"
            >
              Visit Instagram
            </a>
          </div>
        </div>

        {/* FOOTER QUOTE (Lebih Elegan) */}
        <div className="mt-20">
          <blockquote className="text-gray-600 font-heading text-2xl italic max-w-3xl mx-auto relative before:content-['“'] before:text-5xl before:text-primary before:absolute before:-top-4 before:left-0 before:opacity-50">
            <span className="ml-6">
              Confidence is the best makeup you can wear — I’m just here to
              enhance it.
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
