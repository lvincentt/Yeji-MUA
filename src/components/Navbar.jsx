import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-100 shadow-soft">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="group flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
          <h1 className="text-2xl font-heading font-semibold text-neutral-900 tracking-tight">
            Yeji<span className="text-primary font-light"> Beauty</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-body">
          {menuItems.map((item) => (
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

        {/* CTA + Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:opacity-90 transition"
          >
            Book Session
          </a>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden group">
            <div className="w-6 h-5 flex flex-col justify-between transition-all">
              <span
                className={`h-0.5 w-full bg-neutral-800 rounded transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-neutral-800 rounded transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-neutral-800 rounded transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-height: 100vh; max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 bg-white border-t border-neutral-200 font-body">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-neutral-700 text-sm font-medium hover:text-neutral-900 transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
