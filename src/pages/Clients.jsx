import {
  BuildingOfficeIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  StarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "../components/ScrollReveal";
import { useEffect, useState } from "react";

const Clients = () => {
  const [screenWidth, setScreenWidth] = useState("base");

  const majorClients = [
    {
      name: "BANCO ALUMINIUM LTD.",
      logo: "./assets/clients/Banco.png",
      industry: "Aluminium Manufacturing",
      description:
        "Specializes in aluminium extrusions and heat exchangers for automotive and industrial applications.",
    },
    {
      name: "SCHAEFFLER",
      logo: "./assets/clients/Schaeffler.png",
      industry: "Automotive & Industrial",
      description:
        "Global supplier of components and systems for engines, transmissions, and chassis.",
    },
    {
      name: "LARSEN & TOUBRO",
      logo: "./assets/clients/L&T.png",
      industry: "Engineering & Construction",
      description:
        "A major Indian multinational engaged in engineering, construction, manufacturing, and financial services.",
    },
    {
      name: "PARAMOUNT LIMITED",
      logo: "./assets/clients/Paramount.png",
      industry: "Chemicals",
      description:
        "Leading chemical company offering high-quality industrial and specialty chemicals.",
    },
    {
      name: "SILOX INDIA",
      logo: "./assets/clients/Silox.png",
      industry: "Chemical Manufacturing",
      description:
        "Specialist in inorganic chemical products, especially used in surface treatment and pigments.",
    },
    {
      name: "SOPAN",
      logo: "./assets/clients/Sopan.png",
      industry: "Automation & Engineering Services",
      description:
        "Provider of industrial automation solutions and engineering services across multiple domains.",
    },
    {
      name: "THERMAX",
      logo: "./assets/clients/Thermax.png",
      industry: "Energy & Environment",
      description:
        "Offers sustainable solutions in energy and environment through equipment and services.",
    },
    {
      name: "PARIKH CONSTRUCTION CO.",
      logo: "./assets/clients/Parikh.jpg",
      industry: "Construction",
      description:
        "Civil engineering and construction company known for infrastructure and real estate projects.",
    },
    {
      name: "RR CABLES",
      logo: "./assets/clients/RR cables.png",
      industry: "Electrical Equipment",
      description:
        "Manufacturer of electrical cables and wires used in residential, commercial, and industrial setups.",
    },
  ];

  const industries = [
    {
      icon: BuildingOfficeIcon,
      name: "Construction",
      clients: 45,
      description:
        "Construction development projects supported by mobile crane operations",
    },
    {
      icon: WrenchScrewdriverIcon,
      name: "Industrial",
      clients: 32,
      description:
        "Manufacturing plants, processing facilities, heavy machinery installation",
    },
    {
      icon: TruckIcon,
      name: "Infrastructure",
      clients: 28,
      description:
        "Bridges, highways, public facilities, transportation projects",
    },
    {
      icon: StarIcon,
      name: "Energy",
      clients: 18,
      description: "Power plants, renewable energy, oil & gas facilities",
    },
  ];

  const achievements = [
    {
      number: "150+",
      label: "Active Clients",
      description: "Trusted by leading companies",
    },
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed",
    },
    {
      number: "18+",
      label: "Years Partnership",
      description: "Long-term relationships",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Proven track record",
    },
  ];

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
                Our Clients
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xl md:text-2xl text-slate-300">
                Trusted by industry leaders across construction, industrial, and
                infrastructure sectors.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Client Achievements */}
        <section
          className="bg-orange-500 text-white"
          style={{ padding: "64px 0" }}
        >
          <div
            className="max-w-7xl"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={index}>
                  <div>
                    <div
                      className="text-4xl font-bold"
                      style={{ marginBottom: "8px" }}
                    >
                      {achievement.number}
                    </div>
                    <div
                      className="text-orange-100 font-semibold"
                      style={{ marginBottom: "4px" }}
                    >
                      {achievement.label}
                    </div>
                    <div className="text-orange-200 text-sm">
                      {achievement.description}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Major Clients */}
        <section style={{ padding: "64px 0" }}>
          <div
            className="max-w-7xl"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <div className="text-center" style={{ marginBottom: "64px" }}>
              <ScrollReveal>
                <h2
                  className="text-4xl font-bold text-slate-900"
                  style={{ marginBottom: "16px" }}
                >
                  Major Clients
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p
                  className="text-xl text-slate-600 max-w-4xl"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  We're proud to work with industry leaders who trust us with
                  their most critical projects.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {majorClients.map((client, index) => (
                <ScrollReveal key={index}>
                  <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 bg-white flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain"
                        style={{ padding: "8px 30px" }}
                      />
                    </div>
                    <div style={{ padding: "24px" }}>
                      <div
                        className="flex flex-col justify-between items-start gap-2"
                        style={{ marginBottom: "12px" }}
                      >
                        <h3 className="text-xl font-bold text-slate-900">
                          {client.name}
                        </h3>
                        <span
                          className="bg-orange-100 text-orange-700 rounded text-sm font-semibold"
                          style={{ padding: "4px 8px" }}
                        >
                          {client.industry}
                        </span>
                      </div>
                      <p
                        className="text-slate-600"
                        style={{ marginBottom: "16px" }}
                      >
                        {client.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="bg-slate-50" style={{ padding: "64px 0" }}>
          <div
            className="max-w-7xl"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <div className="text-center" style={{ marginBottom: "64px" }}>
              <ScrollReveal>
                <h2
                  className="text-4xl font-bold text-slate-900"
                  style={{ marginBottom: "16px" }}
                >
                  Industries We Serve
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p
                  className="text-xl text-slate-600 max-w-4xl"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  Our expertise spans across multiple industries with
                  specialized solutions for each sector.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <ScrollReveal key={index}>
                  <div
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                    style={{ padding: "24px" }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full"
                      style={{ marginBottom: "16px" }}
                    >
                      <industry.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-slate-900"
                      style={{ marginBottom: "8px" }}
                    >
                      {industry.name}
                    </h3>
                    <p
                      className="text-3xl font-bold text-orange-500"
                      style={{ marginBottom: "8px" }}
                    >
                      {industry.clients}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Wall
      <section style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <h2
              className="text-4xl font-bold text-slate-900"
              style={{ marginBottom: "16px" }}
            >
              Trusted By
            </h2>
            <p className="text-xl text-slate-600">
              Some of the leading companies that trust CraneMax for their
              projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-24"
                style={{ padding: "24px" }}
              >
                <span className="text-slate-600 font-semibold text-center text-sm">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Partnership Benefits */}
        <section
          className="bg-slate-900 text-white"
          style={{ padding: "64px 0" }}
        >
          <div
            className="max-w-7xl"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <div className="text-center" style={{ marginBottom: "64px" }}>
              <ScrollReveal>
                <h2
                  className="text-4xl font-bold"
                  style={{ marginBottom: "16px" }}
                >
                  Why Clients Choose Us
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p
                  className="text-xl text-slate-300 max-w-4xl"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  Our commitment to excellence and long-term partnerships sets
                  us apart.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="text-center">
                  <CheckCircleIcon
                    className="h-12 w-12 text-orange-500"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ marginBottom: "12px" }}
                  >
                    Proven Track Record
                  </h3>
                  <p className="text-slate-300">
                    18+ years of successful project delivery with zero safety
                    incidents.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center">
                  <CheckCircleIcon
                    className="h-12 w-12 text-orange-500"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ marginBottom: "12px" }}
                  >
                    Long-term Partnerships
                  </h3>
                  <p className="text-slate-300">
                    Building lasting relationships with clients through
                    consistent quality service.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center">
                  <CheckCircleIcon
                    className="h-12 w-12 text-orange-500"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ marginBottom: "12px" }}
                  >
                    Industry Expertise
                  </h3>
                  <p className="text-slate-300">
                    Deep understanding of diverse industry requirements and
                    challenges.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ScrollReveal>
          <section
            className="bg-orange-500 text-white text-center"
            style={{ padding: "64px 0" }}
          >
            <div
              className="max-w-7xl"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0 16px",
              }}
            >
              <h2
                className="text-4xl font-bold"
                style={{ marginBottom: "24px" }}
              >
                Join Our Satisfied Clients
              </h2>
              <p
                className="text-xl max-w-4xl"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "32px",
                }}
              >
                Experience the Samarth Enterprise difference. Contact us today
                to discuss your project requirements.
              </p>
              <a
                href="/contact"
                className="bg-white text-orange-500 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-300"
                style={{ padding: "12px 32px" }}
              >
                Become a Client
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
};

export default Clients;
