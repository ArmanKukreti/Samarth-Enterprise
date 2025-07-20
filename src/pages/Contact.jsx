import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const craneTypes = [
    "Mobile Crane (25-300 tonnes)",
    "Tower Crane (50-400 tonnes)",
    "Crawler Crane (100-800 tonnes)",
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
      details: "9327512935 | 9426512935 | 9376211981 | 9427506124",
      subtitle: "24/7 Emergency Support",
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "hsamarthenterprise@gmail.com ",
      subtitle: "saienterprisecrane@gmail.com",
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
    <div className="min-h-screen" style={{ paddingTop: "7rem" }}>
      {/* Hero Section */}
      <section
        className="relative bg-slate-900 text-white"
        style={{ padding: "96px 0" }}
      >
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(./assets/gallery/hero.jpg)",
          }}
        />
        <div
          className="relative z-10 max-w-5xl text-center"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ marginBottom: "24px" }}
          >
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Get in touch for a free consultation and quote for your crane hire
            needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
                    Your request has been submitted. We'll contact you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block text-lg"
                    style={{ padding: "12px 32px" }}
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
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
                  Ready to discuss your project? Our team is here to help you
                  find the perfect crane solution. Contact us today for expert
                  advice and competitive pricing.
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
                        <p className="font-medium text-slate-900">
                          <a
                            href={`mailto:${info.details}`}
                            className="hover:text-orange-600 transition-colors"
                          >
                            {info.details}
                          </a>
                        </p>
                        <p className="font-medium text-slate-900">
                          <a
                            href={`mailto:${info.subtitle}`}
                            className="hover:text-orange-600 transition-colors"
                          >
                            {info.subtitle}
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
                <p className="text-red-800" style={{ marginBottom: "12px" }}>
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-100" style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
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
            <div className="text-center">
              <MapPinIcon
                className="h-12 w-12 text-slate-500"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "16px",
                }}
              />
              <p className="text-slate-600">
                Interactive map would be integrated here
              </p>
              <p className="text-sm text-slate-500 mt-2">
                {contactInfo[2].details} Vadodara, Gujarat - 390010
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
