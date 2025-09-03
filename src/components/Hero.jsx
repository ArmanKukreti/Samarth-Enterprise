import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const carouselImages = [
    {
      id: 1,
      image: "./assets/hero/image1.png",
      alt: "Zoomlion 350T Crane",
    },
    {
      id: 2,
      image: "./assets/hero/image2.png",
      alt: "XCMG Crane",
    },
    {
      id: 3,
      image: "./assets/hero/image3.png",
      alt: "SANY Crane",
    },
    {
      id: 4,
      image: "./assets/hero/image4.png",
      alt: "ACE Crane",
    },
    {
      id: 5,
      image: "./assets/hero/image5.png",
      alt: "Liebherr Crane",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState("base");

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    resetTimer();
  };

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
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [carouselImages.length]);

  return (
    <section
      className="relative flex flex-col lg:flex-row w-full h-[50vh] sm:h-screen"
      style={
        screenWidth === "base" || screenWidth === "sm" || screenWidth === "smd"
          ? { paddingTop: "4rem" }
          : { paddingTop: "7rem" }
      }
    >
      {/* Left text area */}
      {/* <div
        className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left"
        style={{ padding: "2rem" }}
      >
        <div className="overlay"></div>
        <div
          className="w-full lg:mx-0 text-left"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black text-reveal"
            style={{ marginBottom: "0.8rem" }}
          >
            Lifting Your Projects Higher
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
            style={{ marginBottom: "1rem" }}
          >
            Samarth Enterprise provides efficient crane rental services and
            lifting solutions across industries. Reliable equipment. Experienced
            operators. On-time project support.
          </p>

          <div className="flex gap-8 items-center justify-left">
            <Link to={"/contact"} className="text-center">
              <button
                className="bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 cursor-pointer font-semibold text-sm sm:text-base md:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ marginTop: "1rem", padding: "12px 24px" }}
              >
                Get Quote
              </button>
            </Link>

            <Link to={"/services"} className="text-center">
              <button
                className="bg-red-500 text-white rounded-lg hover:bg-red-400 transition-all duration-300 cursor-pointer font-semibold text-sm sm:text-base md:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ marginTop: "1rem", padding: "12px 24px" }}
              >
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      {/* image carousel */}
      <div
        className="bg-blue-950 relative flex justify-center items-center w-full h-full overflow-hidden"
        style={{ padding: "1rem" }}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((img) => (
            <img
              key={img.id}
              className="flex-shrink-0 w-full h-full object-contain md:object-fill lg:object-cover"
              src={img.image}
              alt={img.alt}
            />
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 items-center justify-between">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-500 w-8"
                  : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
          style={{ padding: "0 16px" }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
          style={{ padding: "0 16px" }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        style={{ marginBottom: "1rem" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start hover:border-blue-500 transition-all duration-[500ms]">
          <div
            className="w-1 h-3 bg-white rounded-full animate-pulse"
            style={{ marginTop: "8px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
