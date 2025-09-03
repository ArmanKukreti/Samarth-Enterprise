import React, { useEffect, useState } from "react";
import {
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  Construction,
  TruckIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedSection from "../components/AnimatedSection";

const Services = () => {
  const [screenWidth, setScreenWidth] = useState("base");
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: TruckIcon,
      title: "Small Capacity Cranes",
      capacity: "12-50 Tonnes",
      description:
        "Perfect for tight spaces and quick jobs, these cranes offer flexibility and fast deployment on smaller sites.",
      features: [
        "Rough terrain and truck-mounted cranes. Ideal for agile, quick setups.",
        "Versatile and compact",
        "Quick mobilization",
      ],
      image: "./assets/services/14 Ton crane.jpg",
    },
    {
      icon: BuildingOfficeIcon,
      title: "Medium Capacity Cranes",
      capacity: "60-250 Tonnes",
      description:
        "The go-to choice for most industrial and construction projects, blending power with on-site adaptability.",
      features: [
        "All-terrain cranes for diverse sites. Balances power with mobility.",
        "Adaptable to varied terrains",
        "Efficient on medium-scale jobs",
      ],
      image: "./assets/services/medium crane.webp",
    },
    {
      icon: CogIcon,
      title: "Heavy Capacity",
      capacity: "300-800 Tonnes",
      description:
        "Engineered for the heaviest lifts, these giants tackle oversized loads and demanding infrastructure projects.",
      features: [
        "Powerful lattice boom crawlers and all-terrains. For extreme lifting needs.",
        "Unmatched lifting power",
        "Handles largest components",
      ],
      image: "./assets/services/Heavy crane.jpg",
    },
  ];

  const additionalServices = [
    {
      title: "Rigging & Lifting Services",
      description:
        "Certified riggers and advanced lifting techniques ensure safe handling of heavy and delicate loads on-site.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Site Inspection & Consultation",
      description:
        "On-site evaluations and expert recommendations to select the right crane or boom lift for your project.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Lift Planning & Engineering",
      description:
        "Technical planning with CAD drawings, load calculations, and site surveys to ensure precise lift execution.",
      icon: Construction,
    },
    {
      title: "24/7 Emergency Lifting Support",
      description:
        "Rapid-response crane and boom lift deployment for industrial accidents, rescue, or urgent infrastructure support.",
      icon: ClockIcon,
    },
    {
      title: "Boom Lift Rental",
      description:
        "High-reach access solutions with JLG articulated and telescopic boom lifts and truck-mounted boom lifts.",
      icon: TruckIcon,
    },
    {
      title: "Crane Rental",
      description:
        "All equipment rentals come with experienced, licensed operators to ensure safe and efficient operation on-site.",
      icon: CogIcon,
    },
  ];

  const industries = [
    "Construction & Building",
    "Oil & Gas",
    "Manufacturing",
    "Power Generation",
    "Infrastructure",
    "Marine & Offshore",
    "Mining",
    "Renewable Energy",
  ];

  return (
    <div
      className="min-h-screen"
      style={
        screenWidth === "base" || screenWidth === "sm" || screenWidth === "smd"
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
          style={{ backgroundImage: "url(./assets/services/hero.jpg)" }}
        />
        <div
          className="relative z-10 max-w-5xl text-center"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <ScrollReveal>
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ marginBottom: "24px" }}
            >
              Our Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-slate-300">
              Comprehensive crane hire and heavy lifting solutions for every
              industry and project size.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services */}
      <section style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
              <h2
                className="text-4xl font-bold text-slate-900"
                style={{ marginBottom: "16px" }}
              >
                Crane Hiring Services
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-600 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                From compact mobile cranes to massive 800-tonne cranes, we
                provide the right equipment for your specific lifting
                requirements.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <AnimatedSection direction="left">
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div
                      className="flex items-center"
                      style={{ marginBottom: "16px" }}
                    >
                      <service.icon
                        className="h-8 w-8 text-orange-500"
                        style={{ marginRight: "12px" }}
                      />
                      <span className="text-orange-500 font-semibold">
                        {service.capacity}
                      </span>
                    </div>
                    <h3
                      className="text-3xl font-bold text-slate-900"
                      style={{ marginBottom: "16px" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-lg text-slate-600"
                      style={{ marginBottom: "24px" }}
                    >
                      {service.description}
                    </p>
                    <ul
                      className="flex flex-col gap-3"
                      style={{ marginBottom: "32px" }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircleIcon
                            className="h-5 w-5 text-orange-500 flex-shrink-0"
                            style={{ marginRight: "12px" }}
                          />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                      style={{ padding: "12px 32px" }}
                    >
                      Get Quote
                    </Link>
                  </div>
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full"
                    />
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-slate-50" style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
              <h2
                className="text-4xl font-bold text-slate-900"
                style={{ marginBottom: "16px" }}
              >
                Additional Services
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-600 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Beyond crane hire, we offer comprehensive support services to
                ensure your project's complete success.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ScrollReveal key={index} delay={400}>
                <div
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ padding: "24px" }}
                >
                  <div
                    className="flex items-center mb-4"
                    style={{ marginBottom: "16px" }}
                  >
                    <service.icon
                      className="h-8 w-8 text-orange-500"
                      style={{ marginRight: "12px" }}
                    />
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section
        className="bg-slate-900 text-white"
        style={{ padding: "64px 0" }}
      >
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
              <h2
                className="text-4xl font-bold"
                style={{ marginBottom: "16px" }}
              >
                Industries We Serve
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-300 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Our expertise spans across multiple industries, providing
                specialized crane solutions for diverse project requirements.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={index}>
                <div className="text-center">
                  <div
                    className="bg-orange-500 rounded-lg"
                    style={{ padding: "16px", marginBottom: "12px" }}
                  >
                    <div className="text-white font-semibold">{industry}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
              <h2
                className="text-4xl font-bold text-slate-900"
                style={{ marginBottom: "16px" }}
              >
                Our Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-600 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                From initial consultation to project completion, we ensure a
                seamless experience with professional service at every step.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "16px",
                  }}
                >
                  1
                </div>
                <h3
                  className="text-xl font-semibold text-slate-900"
                  style={{ marginBottom: "8px" }}
                >
                  Consultation
                </h3>
                <p className="text-slate-600">
                  We assess your project requirements and recommend the optimal
                  crane solution.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "16px",
                  }}
                >
                  2
                </div>
                <h3
                  className="text-xl font-semibold text-slate-900"
                  style={{ marginBottom: "8px" }}
                >
                  Planning
                </h3>
                <p className="text-slate-600">
                  Our experts develop a comprehensive lift plan and safety
                  protocol.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "16px",
                  }}
                >
                  3
                </div>
                <h3
                  className="text-xl font-semibold text-slate-900"
                  style={{ marginBottom: "8px" }}
                >
                  Execution
                </h3>
                <p className="text-slate-600">
                  Professional setup and operation with certified operators and
                  safety oversight.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "16px",
                  }}
                >
                  4
                </div>
                <h3
                  className="text-xl font-semibold text-slate-900"
                  style={{ marginBottom: "8px" }}
                >
                  Support
                </h3>
                <p className="text-slate-600">
                  Ongoing support and maintenance throughout your project
                  duration.
                </p>
              </div>
            </div>
          </ScrollReveal>
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
            <h2 className="text-4xl font-bold" style={{ marginBottom: "24px" }}>
              Ready to Start Your Project?
            </h2>
            <p
              className="text-xl max-w-4xl"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "32px",
              }}
            >
              Contact our team today to discuss your crane hire requirements and
              receive a customized quote for your project.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-500 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-300"
              style={{ padding: "12px 32px" }}
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Services;
