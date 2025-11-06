import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-100 shadow-soft">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
          <h1 className="text-2xl font-heading font-semibold text-neutral-900 tracking-tight">
            Yeji
            <span className="text-primary font-light"> Beauty</span>
          </h1>
        </NavLink>

        <ul className="hidden md:flex items-center space-x-8 font-body">
          {[
            { name: "Home", to: "/" },
            { name: "About", to: "/about" },
            { name: "Services", to: "/services" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Contact", to: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-all duration-300
                  ${
                    isActive
                      ? "text-neutral-900 before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-primary before:scale-x-100"
                      : "text-neutral-600 hover:text-neutral-900 before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="group relative px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-medium"
          >
            <span className="relative z-10">Book Session</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>

          <button className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-current rounded-full"></span>
              <span className="w-full h-0.5 bg-current rounded-full"></span>
              <span className="w-full h-0.5 bg-current rounded-full"></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
