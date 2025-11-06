import testi1 from "../../assets/images/testi-1.jpeg";
import testi2 from "../../assets/images/testi-2.jpeg";
import testi3 from "../../assets/images/testi-3.jfif";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Clara Setiawan",
      text: "Yeji is absolutely amazing! My bridal makeup stayed flawless all day and looked so natural in photos. I felt confident and beautiful!",
      image: testi1,
    },
    {
      name: "Aurelia Tan",
      text: "Super professional and friendly. She knew exactly what style fit my face shape. Loved my graduation makeup so much!",
      image: testi2,
    },
    {
      name: "Nadia Rahma",
      text: "From booking to the actual day, everything was smooth. The makeup was elegant and long-lasting. Highly recommended!",
      image: testi3,
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/60">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
          Genuine Feedback
        </p>

        <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Words from My Clients
        </h2>
        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          It's an honor to be part of your most treasured moments. Here's what
          my lovely clients have to say about their experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/30 transition duration-300 transform hover:-translate-y-1 text-left flex flex-col h-full"
            >
              <p className="font-heading text-xl text-gray-800 leading-relaxed italic mb-6 flex-grow">
                “{t.text}”
              </p>

              <hr className="border-t border-primary/50 w-1/3 mb-6" />

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/70 shadow-md"
                />

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
