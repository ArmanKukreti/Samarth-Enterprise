import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState("base");
  const location = useLocation();

  useEffect(() => {
    const getBreakpoint = (width) => {
      if (width < 640) return "base"; // Tailwind "base"
      else if (width < 768) return "sm"; // Tailwind "sm"
      else if (width < 1024) return "md"; // Tailwind "md"
      else if (width < 1280) return "lg"; // Tailwind "lg"
      else return "xl"; // Tailwind "xl"
    };

    const updateScreenWidth = () => {
      setScreenWidth(getBreakpoint(window.innerWidth));
    };

    updateScreenWidth(); // initial check

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

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
        style={
          screenWidth === "lg" || screenWidth === "xl"
            ? { padding: "30px 40px 8px 40px" }
            : { padding: "10px 20px 0 40px" }
        }
      >
        <div className="flex items-center gap-0">
          <img
            src="./assets/logo.png" // <- your "SE" logo image
            alt="Samarth Enterprise Icon"
            className="h-15 w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-4xl font-bold text-[#23169a]">
              Samarth <span className="text-[red]">Enterprise</span>
            </span>
            <span className="text-sm md:text-base text-gray-500">
              Powering your projects
            </span>
          </div>
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
                  <button
                    className={`cursor-pointer transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-red-500 underline underline-offset-4"
                        : "hover:text-red-500"
                    }`}
                  >
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
                  <button
                    className={`cursor-pointer transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-red-500 underline underline-offset-4"
                        : "hover:text-red-500"
                    }`}
                  >
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
