import { useEffect, useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "../components/ScrollReveal";
import emailjs from "emailjs-com";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    craneType: "",
    duration: "",
    location: "",
    message: "",
  });
  const [screenWidth, setScreenWidth] = useState("base");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const getBreakpoint = (width) => {
      if (width < 640) return "base"; // Tailwind "base"
      else if (width < 768) return "sm"; // Tailwind "sm"
      else if (width < 900) return "smd";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS send
    emailjs
      .send(
        "service_sfk8bf9", // EmailJS service ID
        "template_cug0gpg", // EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "Not Provided",
          projectType: formData.projectType,
          craneType: formData.craneType || "Not Provided",
          duration: formData.duration || "Not Provided",
          location: formData.location,
          message: formData.message || "No additional message provided",
          time: new Date().toLocaleString(),
        },
        "Ua8yM2YVnmYG3oWew" // EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            craneType: "",
            duration: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          setIsLoading(false);
          alert("Error sending email: " + error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const craneTypes = [
    "Small Capacity Cranes (12-50 tonnes)",
    "Medium Capacity Cranes (60-250 tonnes)",
    "Heavy Capacity (300-800 tonnes)",
    "Boom Lift",
    "Not Sure - Need Consultation",
  ];

  const projectTypes = [
    "Construction",
    "Industrial",
    "Infrastructure",
    "Emergency",
    "Other",
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      details: "9426512935 | 9327512935 | 9376211981 | 9427506124",
      subtitle: "24/7 Emergency Support",
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "harish@samarthenterprisecrane.com",
      subtitle1: "info@samarthenterprisecrane.com",
      subtitle2: "hsamarthenterprise@gmail.com"
    },
    {
      icon: MapPinIcon,
      title: "Address",
      details: "1, Star apartment, Nr. Hanumanji Mandir Vadsar GIDC road,",
      subtitle: "Vadodara, Gujarat, 390010",
    },
    {
      icon: ClockIcon,
      title: "Hours",
      details: "Mon-Sat: 10AM-8PM",
    },
  ];

  return (
    <>
      
      <div
        className="min-h-screen"
        style={
          screenWidth === "base" ||
          screenWidth === "sm" ||
          screenWidth === "smd"
            ? { paddingTop: "4rem" }
            : { paddingTop: "7rem" }
        }
      >
        {/* Hero Section */}
        <section
          className="relative bg-slate-900 text-white"
          style={{ padding: "96px 0" }}
        >
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: "url(./assets/gallery/hero.jpg)",
            }}
          />
          <div
            className="relative z-10 max-w-5xl text-center"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <ScrollReveal>
              <h1
                className="text-5xl md:text-6xl font-bold"
                style={{ marginBottom: "24px" }}
              >
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-slate-300">
                Get in touch for a free consultation and quote for your crane
                hire needs.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section style={{ padding: "64px 0" }}>
          <div
            className="max-w-7xl"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal>
                <div
                  className="bg-white rounded-lg shadow-lg"
                  style={{ padding: "32px" }}
                >
                  <h2
                    className="text-3xl font-bold text-slate-900"
                    style={{ marginBottom: "24px" }}
                  >
                    Get Your Free Quote
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center" style={{ padding: "32px 0" }}>
                      <CheckCircleIcon
                        className="h-16 w-16 text-green-500"
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginBottom: "16px",
                        }}
                      />
                      <h3
                        className="text-2xl font-semibold text-slate-900"
                        style={{ marginBottom: "8px" }}
                      >
                        Thank You!
                      </h3>
                      <p className="text-slate-600">
                        Your request has been submitted. We'll contact you
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700"
                            style={{ marginBottom: "8px" }}
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700"
                            style={{ marginBottom: "8px" }}
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700 mb-2"
                            style={{ marginBottom: "8px" }}
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700 mb-2"
                            style={{ marginBottom: "8px" }}
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700 mb-2"
                            style={{ marginBottom: "8px" }}
                          >
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          >
                            <option value="">Select Project Type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700"
                            style={{ marginBottom: "8px" }}
                          >
                            Crane Type Needed
                          </label>
                          <select
                            name="craneType"
                            value={formData.craneType}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          >
                            <option value="">Select Crane Type</option>
                            {craneTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700"
                            style={{ marginBottom: "8px" }}
                          >
                            Duration
                          </label>
                          <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="e.g., 2 days, 1 week"
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-slate-700 mb-2"
                            style={{ marginBottom: "8px" }}
                          >
                            Location *
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="Project location"
                            className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            style={{ padding: "12px 16px" }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium text-slate-700 mb-2"
                          style={{ marginBottom: "8px" }}
                        >
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your project requirements..."
                          rows={4}
                          className="w-full border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                          style={{ padding: "12px 16px" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg inline-flex items-center justify-center"
                        style={{ padding: "12px 32px" }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <svg
                            className="animate-spin h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="2" x2="12" y2="6" />
                            <line x1="12" y1="18" x2="12" y2="22" />
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                            <line x1="2" y1="12" x2="6" y2="12" />
                            <line x1="18" y1="12" x2="22" y2="12" />
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                          </svg>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>

              {/* Contact Information */}
              <ScrollReveal>
                <div className="flex flex-col gap-8">
                  <div>
                    <h2
                      className="text-3xl font-bold text-slate-900"
                      style={{ marginBottom: "24px" }}
                    >
                      Get In Touch
                    </h2>
                    <p
                      className="text-lg text-slate-600"
                      style={{ marginBottom: "32px" }}
                    >
                      Ready to discuss your project? Our team is here to help
                      you find the perfect crane solution. Contact us today for
                      expert advice and competitive pricing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg"
                        style={{ padding: "24px" }}
                      >
                        <div
                          className="flex items-center"
                          style={{ marginBottom: "12px" }}
                        >
                          <info.icon
                            className="h-6 w-6 text-orange-500"
                            style={{ marginRight: "12px" }}
                          />
                          <h3 className="text-lg font-semibold text-slate-900">
                            {info.title}
                          </h3>
                        </div>

                        {/* Conditional rendering for phone & email to make them clickable */}
                        {info.title === "Phone" ? (
                          info.details.split("|").map((phone, i) => (
                            <p key={i} className="font-medium text-slate-900">
                              <a
                                href={`tel:${phone.trim()}`}
                                className="hover:text-orange-600 transition-colors"
                              >
                                {phone.trim()}
                              </a>
                            </p>
                          ))
                        ) : info.title === "Email" ? (
                          <>
                            <p className="font-medium text-slate-900 break-all">
                              <a
                                href={`mailto:${info.details}`}
                                className="hover:text-orange-600 transition-colors"
                              >
                                {info.details}
                              </a>
                            </p>
                            <p className="font-medium text-slate-900">
                            <a
                              href={`mailto:${info.subtitle1}`}
                              className="hover:text-orange-600 transition-colors"
                            >
                              {info.subtitle1}
                            </a>
                          </p>
                          <p className="font-medium text-slate-900">
                            <a
                              href={`mailto:${info.subtitle2}`}
                              className="hover:text-orange-600 transition-colors"
                            >
                              {info.subtitle2}
                            </a>
                          </p>
                          </>
                        ) : (
                          <>
                            <p className="font-medium text-slate-900">
                              {info.details}
                            </p>
                            {info.subtitle && (
                              <p className="text-sm text-slate-600">
                                {info.subtitle}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Emergency Contact */}
                  <div
                    className="bg-red-50 border border-red-200 rounded-lg"
                    style={{ padding: "24px" }}
                  >
                    <h3
                      className="text-lg font-semibold text-red-900"
                      style={{ marginBottom: "8px" }}
                    >
                      Emergency Services
                    </h3>
                    <p
                      className="text-red-800"
                      style={{ marginBottom: "12px" }}
                    >
                      For urgent crane requirements outside business hours:
                    </p>
                    <a
                      href="tel:+919426512935"
                      className="text-red-900 font-bold text-lg hover:text-red-700 transition-colors"
                    >
                      Emergency Hotline: (+91) 9426512935
                    </a>
                  </div>

                  {/* Service Areas */}
                  <div
                    className="bg-blue-50 border border-blue-200 rounded-lg"
                    style={{ padding: "24px" }}
                  >
                    <h3
                      className="text-lg font-semibold text-blue-900"
                      style={{ marginBottom: "8px" }}
                    >
                      Service Areas
                    </h3>
                    <p className="text-blue-800">We serve PAN India.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <ScrollReveal>
          <section className="bg-slate-100" style={{ padding: "64px 0" }}>
            <div
              className="max-w-7xl"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0 16px",
              }}
            >
              <div className="text-center" style={{ marginBottom: "32px" }}>
                <h2
                  className="text-3xl font-bold text-slate-900"
                  style={{ marginBottom: "16px" }}
                >
                  Our Location
                </h2>
                <p className="text-lg text-slate-600">
                  Visit our facility to see our fleet and discuss your project
                  requirements in person.
                </p>
              </div>
              <div className="bg-slate-300 rounded-lg h-96 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d812.5687771465908!2d73.18594475717502!3d22.25910073823411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE1JzM0LjEiTiA3M8KwMTEnMDkuNiJF!5e0!3m2!1sen!2sin!4v1754574732531!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location Map"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
};

export default Contact;
