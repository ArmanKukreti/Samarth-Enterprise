import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  const contactInfo = {
    address:
      "1, Star apartment, Nr. Hanumanji Mandir Vadsar GIDC road, Vadodara, Gujarat, 390010",
    phone: "9426512935, 9327512935, 9376211981",
    email: "hsamarthenterprise@gmail.com",
  };

  return (
    <footer
      className="bg-gray-900 text-gray-300 font-sans shadow-lg"
      style={{
        paddingTop: "32px",
        paddingBottom: "32px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "24px",
        }}
      >
        {/* Company Info Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3
            className="text-xl sm:text-2xl font-bold text-white"
            style={{ marginBottom: "12px" }}
          >
            Samarth Enterprise
          </h3>
          <p className="text-gray-400 text-sm" style={{ marginBottom: "12px" }}>
            Powering your projects
          </p>

          {/* Social Media Links */}
          <div className="flex text-2xl" style={{ gap: "12px" }}>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/9426512935"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          style={{ gap: "12px" }}
        >
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Quick Links
          </h4>
          <ul
            className="flex flex-wrap justify-center md:flex-col"
            style={{ gap: "8px" }}
          >
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white hover:underline transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Map Section */}
        <div
          className="md:col-span-1 lg:col-span-2 flex flex-col md:flex-row items-center justify-center w-full"
          style={{ gap: "24px" }}
        >
          {/* Contact Info */}
          <div
            className="flex flex-col justify-between text-left text-sm text-gray-300"
            style={{
              gap: "12px",
              flex: 1,
              height: "100%",
              minWidth: "260px",
            }}
          >
            <p>
              <strong className="text-white">Address:</strong>{" "}
              {contactInfo.address}
            </p>
            <p>
              <strong className="text-white">Phone:</strong>{" "}
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>

          {/* Map */}
          <div
            className="rounded-lg overflow-hidden shadow-md w-full"
            style={{ flex: 1, minHeight: "180px", height: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d812.5687771465908!2d73.18594475717502!3d22.25910073823411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE1JzM0LjEiTiA3M8KwMTEnMDkuNiJF!5e0!3m2!1sen!2sin!4v1754574732531!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "180px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="border-t border-gray-700 text-center text-gray-500 text-xs"
        style={{ marginTop: "24px", paddingTop: "16px" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Samarth Enterprise. All rights
          reserved.
        </p>
        <p style={{ marginTop: "2px" }}>
          Designed and Developed by ARM Technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
