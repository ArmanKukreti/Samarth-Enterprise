import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  UserGroupIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedSection from "../components/AnimatedSection";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const craneFleetRef = useRef(null);

  const stats = [
    { number: "500+", label: "Projects Completed", delay: 0 },
    { number: "18+", label: "Years Experience", delay: 200 },
    { number: "50+", label: "Crane Fleet", delay: 400 },
    { number: "24/7", label: "Emergency Support", delay: 600 },
  ];

  const features = [
    {
      icon: TruckIcon,
      title: "Modern Fleet",
      description:
        "State-of-the-art cranes up to 800 tonnes capacity with latest safety features",
      delay: 200,
    },
    {
      icon: UserGroupIcon,
      title: "Expert Operators",
      description: "Experienced operators with proven track record",
      delay: 400,
    },
    {
      icon: ShieldCheckIcon,
      title: "Safety First",
      description:
        "100% safety compliance with comprehensive insurance coverage",
      delay: 600,
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and flexible scheduling",
      delay: 800,
    },
  ];

  const craneTypes = [
    {
      name: "Small Capacity Cranes",
      capacity: "12-50 tonnes",
      image: "./assets/cranes/15T crane.jpeg",
      features: [
        "Rough terrain and truck-mounted cranes. Ideal for agile, quick setups.",
        "Versatile and compact",
        "Quick mobilization",
      ],
    },
    {
      name: "Medium Capacity Cranes",
      capacity: "60-250 tonnes",
      image: "./assets/cranes/250T crane.png",
      features: [
        "All-terrain cranes for diverse sites. Balances power with mobility.",
        "Adaptable to varied terrains",
        "Efficient on medium-scale jobs",
      ],
    },
    {
      name: "Heavy Capacity",
      capacity: "300-800 tonnes",
      image: "./assets/cranes/350T crane.jpg",
      features: [
        "Powerful lattice boom crawlers and all-terrains. For extreme lifting needs.",
        "Unmatched lifting power",
        "Handles largest components",
      ],
    },
    {
      name: "JLG Boom Lift",
      capacity: "Up to 150 ft reach",
      image: "./assets/cranes/JLG.jpeg",
      features: [
        "Telescopic and articulating boom lifts for precise elevation.",
        "Ideal for construction, maintenance, electrical and signage installation.",
        "Excellent horizontal outreach with enhanced safety features.",
        "Rough terrain capability and easy maneuverability.",
      ],
    },
    {
      name: "Truck Mounted Boom Lift",
      capacity: "Up to 35 ft reach",
      image: "./assets/cranes/truck-mounted-boomlift.png",
      features: [
        "Mounted on commercial trucks for easy transport and setup.",
        "Quick deployment for urban and highway applications",
        "Sturdy and road-legal for interstate mobility",
      ],
    },
  ];

  const majorClients = [
    {
      name: "BANCO ALUMINIUM LID.",
      logo: "./assets/clients/Banco.png",
      delay: 0,
    },
    {
      name: "SCHAEFFLER",
      logo: "./assets/clients/Schaeffler.png",
      delay: 200,
    },
    {
      name: "LARSEN & TOUBRO",
      logo: "./assets/clients/L&T.png",
      delay: 400,
    },
    {
      name: "PARAMOUNT LIMITED",
      logo: "./assets/clients/Paramount.png",
      delay: 600,
    },
    {
      name: "SILOX INDIA",
      logo: "./assets/clients/Silox.png",
      delay: 800,
    },
    {
      name: "SOPAN",
      logo: "./assets/clients/Sopan.png",
      delay: 1000,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const cards = craneFleetRef.current?.querySelectorAll(".crane-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  });

  return (
    <div>
      <Hero />
      {/* Stats Section */}

      <section
        className="bg-blue-950 text-white"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal delay={stat.delay}>
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section
        className="bg-slate-50"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div
          className="max-w-7xl"
          style={{
            paddingTop: "16px",
            paddingBottom: "16px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900"
                style={{ marginBottom: "16px" }}
              >
                Why Choose Samarth Enterprise?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-600 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                We combine cutting-edge equipment with unmatched expertise to
                deliver safe, efficient, and reliable crane services for every
                project.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal delay={feature.delay}>
                <div
                  key={index}
                  className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ padding: "32px" }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full"
                    style={{ marginBottom: "16px" }}
                  >
                    <feature.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-slate-900"
                    style={{ marginBottom: "12px" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crane Fleet Section */}
      <section
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
        ref={craneFleetRef}
      >
        <div
          className="max-w-7xl"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900"
              style={{ marginBottom: "16px" }}
            >
              Our Crane Fleet
            </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p
              className="text-xl text-slate-600 max-w-4xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Samarth Enterprise boasts a comprehensive and meticulously
              maintained fleet of cranes, designed to tackle any lifting
              challenge. Our diverse range ensures we have the right equipment
              for every project, from compact sites to large-scale industrial
              operations.
            </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {craneTypes.map((crane, index) => (
              <div
                key={index}
                data-card-index={index}
                className={`crane-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative ${
                  visibleCards.has(index) ? "animate-unfold" : ""
                }`}
              >
                <div className="crane-card-inner">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={crane.image}
                      alt={crane.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div
                      className="absolute top-4 left-4 bg-orange-500 text-white rounded-full text-sm font-semibold"
                      style={{ padding: "4px 12px" }}
                    >
                      {crane.capacity}
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      className="text-2xl font-bold text-slate-900"
                      style={{ marginBottom: "12px" }}
                    >
                      {crane.name}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {crane.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-slate-600"
                        >
                          <CheckCircleIcon
                            className="h-5 w-5 text-orange-500 flex-shrink-0"
                            style={{ marginRight: "12px" }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative" style={{ padding: "64px" }}>
        <div className="absolute inset-0 bg-[linear-gradient(225deg,rgba(15,23,42,0.96)_0%,rgba(30,41,59,0.93)_30%,rgba(51,65,85,0.9)_70%,rgba(71,85,105,0.87)_100%)] z-1" />
        <div
          className="relative z-10 max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "16px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div
                className="text-white"
                style={
                  window.innerWidth >= 1024
                    ? { marginBottom: "0px" }
                    : { marginBottom: "32px" }
                }
              >
                <h2
                  className="text-3xl md:text-5xl font-bold"
                  style={{ marginBottom: "24px" }}
                >
                  Complete Lifting Solutions
                </h2>
                <p
                  className="text-xl text-slate-300"
                  style={{ marginBottom: "32px" }}
                >
                  We provide comprehensive crane hiring services across
                  construction, industrial, and infrastructure sectors with
                  unmatched safety standards and operational excellence.
                </p>
                <div
                  className="flex flex-col gap-8"
                  style={{ marginBottom: "32px" }}
                >
                  <div className="flex items-start gap-3">
                    <WrenchScrewdriverIcon
                      className="h-6 w-6 text-orange-500 flex-shrink-0"
                      style={{ marginTop: "4px" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ marginBottom: "4px" }}
                      >
                        Professional Installation
                      </h4>
                      <p className="text-slate-300">
                        Expert setup and operation by best technicians
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheckIcon
                      className="h-6 w-6 text-orange-500 flex-shrink-0"
                      style={{ marginTop: "4px" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ marginBottom: "4px" }}
                      >
                        Safety Compliance
                      </h4>
                      <p className="text-slate-300">
                        100% compliance with industry safety standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon
                      className="h-6 w-6 text-orange-500 flex-shrink-0"
                      style={{ marginTop: "4px" }}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ marginBottom: "4px" }}
                      >
                        Flexible Scheduling
                      </h4>
                      <p className="text-slate-300">
                        24/7 availability with emergency response
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                  style={{ padding: "12px 32px" }}
                >
                  View All Services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="./assets/image.jpg"
                  alt="Crane at construction site"
                  className="rounded-lg shadow-2xl w-full opacity-90"
                />
                <div
                  className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-lg shadow-lg text-center"
                  style={{ padding: "16px" }}
                >
                  <div className="text-primary-100">Upto</div>
                  <div className="text-2xl font-bold">800</div>
                  <div className="text-primary-100">Tonnes</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="bg-slate-50" style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ padding: "0 16px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900"
                style={{ marginBottom: "16px" }}
              >
                Trusted by Industry Leaders
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-600 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                We're proud to work with leading companies across construction,
                industrial, and infrastructure sectors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {majorClients.map((client, index) => (
              <ScrollReveal delay={client.delay}>
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  style={{ padding: "24px" }}
                >
                  <div style={{ marginBottom: "16px" }}>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-24 object-contain"
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                  </div>
                  <h4
                    className="font-semibold text-slate-900 text-sm"
                    style={{ marginBottom: "4px" }}
                  >
                    {client.name}
                  </h4>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center" style={{ marginTop: "48px" }}>
              <Link
                to="/clients"
                className="bg-orange-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                style={{ padding: "12px 32px" }}
              >
                View All Clients
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-slate-50" style={{ padding: "64px" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900"
              style={{ marginBottom: "16px" }}
            >
              What Our Clients Say
            </h2>
            <p
              className="text-xl text-slate-600 max-w-4xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Don't just take our word for it - hear from the construction and
              industrial leaders who trust CraneMax for their critical lifting
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ padding: "32px" }}
              >
                <div
                  className="flex items-center"
                  style={{ marginBottom: "16px" }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p
                  className="text-slate-600 italic"
                  style={{ marginBottom: "24px" }}
                >
                  "{testimonial.text}"
                </p>
                <div
                  className="border-t border-slate-200"
                  style={{ paddingTop: "16px" }}
                >
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <ScrollReveal>
        <section
          className="bg-orange-500 text-white text-center"
          style={{ padding: "64px 0px" }}
        >
          <div
            className="max-w-7xl"
            style={{ marginLeft: "auto", marginRight: "auto", padding: "16px" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ marginBottom: "24px" }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-xl max-w-4xl"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "32px",
              }}
            >
              Contact our expert team today for a free consultation and quote.
              We'll help you find the perfect crane solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-orange-500 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-300"
                style={{ padding: "12px 32px" }}
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+919426512935"
                className="bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 inline-flex items-center gap-2"
                style={{ padding: "12px 32px" }}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call Now: (+91) 9426512935</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
