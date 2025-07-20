import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: "20px 50px" }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-black text-red-500">
            SAMARTH ENTERPRISE
          </h1>
          <p className="text-sm md:text-2xl hidden sm:block">
            Powering Your Projects
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex">
          <ul className="flex gap-8 font-medium items-center">
            {[
              { path: "/", label: "HOME" },
              { path: "/about", label: "ABOUT US" },
              { path: "/services", label: "OUR SERVICES" },
              { path: "/gallery", label: "GALLERY" },
              { path: "/clients", label: "CLIENTS" },
              { path: "/contact", label: "CONTACT US" },
            ].map((link) => (
              <li key={link.path} className="link">
                <Link to={link.path}>
                  <button className="cursor-pointer hover:text-red-500 transition-colors duration-300">
                    {link.label}
                  </button>
                </Link>
              </li>
            ))}
            <li className="">
              <Link to="/contact">
                <button
                  className="border-2 rounded-md border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer transition-all duration-300"
                  style={{ padding: "8px 16px" }}
                >
                  GET QUOTE
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-red-500 hover:text-red-700 transition-colors duration-300"
            style={{ padding: "4px" }}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col font-medium" style={{ padding: "16px" }}>
            {[
              { path: "/", label: "HOME" },
              { path: "/about", label: "ABOUT US" },
              { path: "/gallery", label: "GALLERY" },
              { path: "/contact", label: "CONTACT US" },
              { path: "/services", label: "OUR SERVICES" },
            ].map((link) => (
              <li
                key={link.path}
                className="border-b border-gray-200 last:border-b-0"
                style={{ padding: "12px 0" }}
              >
                <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                  <button className="cursor-pointer hover:text-red-500 transition-colors duration-300 w-full text-left">
                    {link.label}
                  </button>
                </Link>
              </li>
            ))}
            <li style={{ padding: "12px 0", marginTop: "8px" }}>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button
                  className="border-2 border-red-400 rounded-md cursor-pointer hover:text-red-400 hover:border-black transition-all duration-300 w-full"
                  style={{ padding: "8px 16px" }}
                >
                  GET QUOTE
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
