import Bridal from "../assets/images/bridal.jpeg";
import Graduation from "../assets/images/portfolio-graduation.jpeg";
import Photoshoot from "../assets/images/photoshoot.jpeg";
import Bridesmaid from "../assets/images/bridesmaid.jpeg";
import Engagement from "../assets/images/portfolio-natural.jpeg";
import TouchUp from "../assets/images/portfolio-softpink.jpeg";

export default function ServicesPage() {
  const services = [
    {
      title: "Bridal Makeup",
      desc: "Elegant and timeless bridal look using premium, long-lasting products. Includes consultation, trial session, and touch-up service during the event.",
      price: "IDR 1.200.000",
      duration: "3–4 hours",
      image: Bridal,
    },
    {
      title: "Graduation Makeup",
      desc: "Soft glam style to celebrate your big day with confidence. Perfect for photography and natural lighting setups.",
      price: "IDR 650.000",
      duration: "1.5–2 hours",
      image: Graduation,
    },
    {
      title: "Photoshoot Makeup",
      desc: "Makeup for editorial, fashion, or personal photoshoots. Designed to suit your outfit, theme, and lighting.",
      price: "IDR 850.000",
      duration: "2 hours",
      image: Photoshoot,
    },
    {
      title: "Bridesmaid Makeup",
      desc: "Elegant bridesmaid look that complements the main bridal style while keeping a natural glow.",
      price: "IDR 500.000",
      duration: "1.5 hours",
      image: Bridesmaid,
    },
    {
      title: "Engagement Makeup",
      desc: "Romantic and picture-perfect engagement makeup for your special moment. Includes hairstyling if needed.",
      price: "IDR 900.000",
      duration: "2.5 hours",
      image: Engagement,
    },

    {
      title: "Touch-up Service",
      desc: "Hourly service to maintain your flawless look throughout the event or photo session.",
      price: "IDR 200.000/hr",
      duration: "Min 2 hours",
      image: TouchUp,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">
          Explore Our Artistry
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Premium Services
        </h1>
        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Every face is unique, and every look is customized just for you.
          Choose the **tailored service** that fits your special occasion.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-secondary/70 transition duration-300 bg-white shadow-xl shadow-gray-100 hover:shadow-primary/30 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="p-7 flex flex-col flex-grow text-left">
                <h3 className="font-heading text-3xl font-semibold text-gray-900 mb-2">
                  {srv.title}
                </h3>

                <p className="font-body text-gray-500 text-base leading-snug mb-4 flex-grow">
                  {srv.desc}
                </p>

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold font-body text-accent">
                      {srv.price}
                    </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    {srv.duration}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-block px-8 py-3 bg-primary text-white font-body font-semibold rounded-full text-base transition duration-300 hover:bg-accent hover:scale-[1.01] shadow-md shadow-primary/30"
                >
                  Inquire & Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
