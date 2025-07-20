import { AcademicCapIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import {
  CheckCircle,
  ClockIcon,
  Diamond,
  Eye,
  ShieldCheckIcon,
  Target,
  TrophyIcon,
} from "lucide-react";
import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  const milestones = [
    {
      year: "2007",
      title: "Company Founded",
      description: "Started with a small fleet of 3 mobile cranes",
    },
    {
      year: "2013",
      title: "Fleet Expansion",
      description: "Added tower cranes and expanded to 25 units",
    },
    {
      year: "2018",
      title: "Heavy Lifting Division",
      description: "Introduced crawler cranes up to 500 tonnes",
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Implemented GPS tracking and digital monitoring",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Now operating 50+ cranes up to 800 tonnes",
    },
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Safety First",
      description:
        "We prioritize safety in every operation with comprehensive training and strict protocols.",
      delay: 0
    },
    {
      icon: TrophyIcon,
      title: "Excellence",
      description:
        "We strive for operational excellence and continuous improvement in all our services.",
      delay: 200
    },
    {
      icon: UserGroupIcon,
      title: "Teamwork",
      description:
        "Our skilled team works together to deliver exceptional results for every project.",
      delay: 400
    },
    {
      icon: ClockIcon,
      title: "Reliability",
      description:
        "We deliver on time, every time, with 24/7 support and emergency response.",
      delay: 800
    },
  ];

  const about = [
    {
      icon: <Diamond className="w-12 h-12" />,
      title: "Specialized Experience",
      description:
        "With over two decades of specialized experience, CraneHire Pro has become a trusted name in heavy lifting. We bring a wealth of knowledge and practical expertise to every project, no matter how complex. Our seasoned team understands the nuances of diverse industrial requirements.",
      delay: 0,
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Our Mission",
      description:
        "Our mission is to deliver reliable, high-performance lifting solutions that exceed client expectations. We achieve this by deploying state-of-the-art equipment and employing highly skilled professionals, ensuring seamless operations from start to finish.",
      delay: 200,
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Our Vision",
      description:
        "We aspire to be the preferred partner for complex industrial projects across various sectors. By consistently providing innovative and safe lifting solutions, we aim to build lasting relationships and contribute significantly to our clients' success.",
      delay: 400,
    },
  ];

  const capabilities = [
    "Heavy lifting up to 500 tons capacity",
    "Precision placement and positioning",
    "Emergency response and rescue operations",
    "Industrial maintenance and installation",
    "Construction site support services",
    "Specialized rigging and transport",
    "24/7 technical support and consultation",
    "Multi-site project coordination",
  ];

  const teamMembers = [
    {
      name: "Mr. Harish Mahajan",
      role: "Director / Proprietor",
      gradient: "from-orange-500 to-orange-600",
      desc: "With over 20 years of experience in the crane and heavy equipment industry, he continues to lead with deep technical expertise and strategic vision",
      image: "./assets/Management/Harish Mahajan.jpg",
      delay: 200
    },
    {
      name: "Mr. Rakesh Patel",
      role: "Chief Operations Officer",
      gradient: "from-slate-600 to-slate-700",
      desc: "Backed by 20+ years in crane operations and logistics, he remains hands-on and committed to delivering excellence in every project.",
      image: "./assets/Management/Rakesh Patel.jpg",
      delay: 400
    },
  ];

  return (
    <div className="min-h-screen" style={{ paddingTop: "7rem" }}>
      {/* Hero Section */}
      <section
        className="relative bg-slate-900 text-white overflow-hidden"
        style={{ padding: "96px 0" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(./assets/about/Hero.jpg)",
            backgroundPosition: "center right",
          }}
        />

        <ScrollReveal>
          <div
            className="relative z-10 max-w-5xl text-center"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0 16px",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ marginBottom: "24px" }}
            >
              About Samarth Enterprise
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300">
              Over 18 years of excellence in heavy lifting solutions, serving
              construction and industrial projects with unwavering commitment to
              safety and quality.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* About Compay */}
      <section className="bg-white" style={{ padding: "80px 0" }}>
        <div
          className="container"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {about.map((item, index) => (
              <ScrollReveal delay={item.delay}>
                <div key={index} className="text-center">
                  <div
                    className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "24px",
                    }}
                  >
                    <div className="text-orange-500">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2
                  className="text-4xl font-bold text-slate-900"
                  style={{ marginBottom: "24px" }}
                >
                  Our Story
                </h2>
                <p
                  className="text-lg text-slate-600"
                  style={{ marginBottom: "24px" }}
                >
                  Founded in 2007, Samarth Enterprise began as a small crane
                  rental company with a simple mission: to provide safe,
                  reliable heavy lifting solutions to the construction industry.
                  What started with just three mobile cranes has grown into one
                  of the region's most trusted crane hire specialists.
                </p>
                <p
                  className="text-lg text-slate-600"
                  style={{ marginBottom: "24px" }}
                >
                  Today, we operate a modern fleet of over 50 cranes ranging
                  from versatile mobile units to massive 800-tonne crawler
                  cranes. Our commitment to safety, innovation, and customer
                  service has made us the preferred choice for major
                  construction and industrial projects.
                </p>
                <p className="text-lg text-slate-600">
                  We've built our reputation on delivering exceptional results
                  while maintaining the highest safety standards. Every project,
                  regardless of size, receives our full attention and expertise.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="./assets/about/about.jpg"
                  alt="Samarth Enterprise Crane"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div
                  className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-lg shadow-lg text-center"
                  style={{ padding: "24px" }}
                >
                  <div className="text-3xl font-bold">18+</div>
                  <div className="text-orange-100">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-slate-50" style={{ padding: "16px 0" }}>
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
                Our Journey
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-xl text-slate-600 max-w-4xl"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                From humble beginnings to industry leadership, here are the key
                milestones that have shaped Samarth Enterprise into the company
                we are today.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal>
            <div className="absolute z-2 left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500" />
            

            <div className="flex flex-col gap-8">
              {milestones.map((milestone, index) => (
                <ScrollReveal>
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`bg-white z-3 md:z-1 rounded-lg shadow-lg flex-1`}
                      style={
                        index % 2 === 0
                          ? { marginRight: "32px", padding: "24px" }
                          : { marginLeft: "32px", padding: "24px" }
                      }
                    >
                      <div
                        className="text-orange-500 font-bold text-lg"
                        style={{ marginBottom: "8px" }}
                      >
                        {milestone.year}
                      </div>
                      <h3
                        className="text-xl font-semibold text-slate-900"
                        style={{ marginBottom: "8px" }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                    <div className="z-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "64px" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "16px" }}
        >
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <ScrollReveal>
            <h2
              className="text-4xl font-bold text-slate-900"
              style={{ marginBottom: "16px" }}
            >
              Our Values
            </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p
              className="text-xl text-slate-600 max-w-4xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              These core values guide everything we do and shape how we serve
              our clients.
            </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal delay={value.delay}>
              <div key={index} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full"
                  style={{ marginBottom: "16px" }}
                >
                  <value.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3
                  className="text-xl font-semibold text-slate-900"
                  style={{ marginBottom: "12px" }}
                >
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-blue-900 text-white" style={{ padding: "80px" }}>
        <div
          className="container"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
            <div>
              <h2
                className="text-4xl font-bold"
                style={{ marginBottom: "24px" }}
              >
                Our Capabilities
              </h2>
              <p
                className="text-xl text-blue-200"
                style={{ marginBottom: "32px" }}
              >
                We offer comprehensive lifting solutions with state-of-the-art
                equipment and unmatched expertise across various industries and
                project types.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-blue-100">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
            <div className="relative">
              <img
                src="./assets/about/capablities.jpg"
                alt="Crane capabilities"
                className="rounded-lg shadow-xl"
              />
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="bg-slate-900 text-white"
        style={{ padding: "64px 0" }}
      >
        <ScrollReveal>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold"
                style={{ marginBottom: "24px" }}
              >
                Compliances
              </h2>
              <p
                className="text-xl text-slate-300"
                style={{ marginBottom: "32px" }}
              >
                We maintain the highest industry standards through rigorous
                certification and compliance programs. Our commitment to
                excellence is demonstrated through our comprehensive safety and
                quality certifications.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-orange-500 mb-2"
                  style={{ marginBottom: "8px" }}
                >
                  100%
                </div>
                <div className="text-slate-300">Safety Compliance</div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-orange-500"
                  style={{ marginBottom: "8px" }}
                >
                  500+
                </div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-orange-500"
                  style={{ marginBottom: "8px" }}
                >
                  0
                </div>
                <div className="text-slate-300">Safety Incidents</div>
              </div>
              <div className="text-center">
                <div
                  className="text-4xl font-bold text-orange-500"
                  style={{ marginBottom: "8px" }}
                >
                  24/7
                </div>
                <div className="text-slate-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Team Section */}
      <section style={{ padding: "64px" }}>
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
              Expert Team
            </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p
              className="text-xl text-slate-600 max-w-4xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Our success is built on the expertise and dedication of our
              professional team.
            </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
                <ScrollReveal delay={400}>
              <div
                className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 rounded-full"
                style={{ marginBottom: "16px" }}
              >
                <UserGroupIcon className="h-10 w-10 text-orange-500" />
              </div>
              <h3
                className="text-2xl font-semibold text-slate-900"
                style={{ marginBottom: "8px" }}
              >
                Experienced Operators
              </h3>
              <p className="text-slate-600">
                All our crane operators have extensive experience in complex
                lifting operations.
              </p>
              </ScrollReveal>
            </div>
            <div className="text-center">
                <ScrollReveal delay={400}>
              <div
                className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 rounded-full"
                style={{ marginBottom: "16px" }}
              >
                <AcademicCapIcon className="h-10 w-10 text-orange-500" />
              </div>
              <h3
                className="text-2xl font-semibold text-slate-900"
                style={{ marginBottom: "8px" }}
              >
                Safety Experts
              </h3>
              <p className="text-slate-600">
                Our safety team ensures every operation meets or exceeds
                industry safety standards and regulations.
              </p>
              </ScrollReveal>
            </div>
            <div className="text-center">
                <ScrollReveal delay={400}>
              <div
                className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 rounded-full"
                style={{ marginBottom: "16px" }}
              >
                <TrophyIcon className="h-10 w-10 text-orange-500" />
              </div>
              <h3
                className="text-2xl font-semibold text-slate-900 mb-2"
                style={{ marginBottom: "8px" }}
              >
                Project Managers
              </h3>
              <p className="text-slate-600">
                Experienced project managers coordinate every aspect of your
                lifting operations for seamless execution.
              </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
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
              Leadership Team
            </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p
              className="text-xl text-slate-600 max-w-4xl"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Meet the experienced professionals who lead Samarth Enterprise
              with vision, expertise, and unwavering commitment to excellence.
            </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
                <ScrollReveal delay={member.delay}>
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3
                    className="text-xl font-bold text-slate-900"
                    style={{ marginBottom: "4px" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-orange-500 font-semibold"
                    style={{ marginBottom: "12px" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-slate-600 text-sm"
                    style={{ marginBottom: "16px" }}
                  >
                    {member.desc}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
