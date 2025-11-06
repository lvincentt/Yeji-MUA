export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
          Let's Create Magic
        </p>
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h2>
        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Interested in booking your session or collaborating? I’d love to glam
          you up for your special day. Contact me directly or follow my latest
          works!
        </p>

        <div className="grid md:grid-cols-2 max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
          <div className="p-8 md:p-12 lg:p-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-heading text-3xl text-accent mb-4">
                Booking Inquiries
              </h3>
              <div className="space-y-3 font-body text-gray-700">
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Location:</span>{" "}
                  Jakarta, Indonesia
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Email:</span>{" "}
                  <a
                    href="mailto:hello@yejimua.com"
                    className="hover:text-primary transition duration-300"
                  >
                    hello@yejimua.com
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Phone:</span>{" "}
                  <a
                    href="tel:+6281234567890"
                    className="hover:text-primary transition duration-300"
                  >
                    +62 812 3456 7890
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-accent text-white rounded-full font-semibold transition duration-300 hover:bg-primary hover:scale-[1.02] shadow-lg shadow-accent/30"
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold transition duration-300 hover:bg-primary/10 hover:border-accent"
              >
                View Instagram
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center p-10">
              <blockquote className="font-heading text-3xl italic text-accent/80 leading-relaxed">
                "Your glow starts here."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
