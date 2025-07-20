import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "construction", name: "Construction" },
    { id: "industrial", name: "Industrial" },
    { id: "infrastructure", name: "Infrastructure" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "./assets/gallery/image1.jpg",
      title: "Facade Lift Support",
      category: "construction",
      description: "Mobile crane lifting materials at a commercial site.",
      location: "City Center",
      craneType: "Mobile Crane",
    },
    {
      id: 2,
      src: "./assets/gallery/image2.jpg",
      title: "Tank Erection Lift",
      category: "industrial",
      description: "Mobile crane erecting heavy process tanks at site.",
      location: "Industrial Zone",
      craneType: "Mobile Crane",
    },
    {
      id: 3,
      src: "./assets/gallery/image3.jpg",
      title: "Dual Crane Lift",
      category: "industrial",
      description: "Two cranes erecting heavy vessel on steel structure.",
      location: "Fabrication Yard",
      craneType: "Mobile Cranes",
    },
    {
      id: 4,
      src: "./assets/gallery/image4.jpg",
      title: "Bridge Support Lift",
      category: "infrastructure",
      description: "Mobile crane at bridge girder construction site.",
      location: "Highway Project",
      craneType: "Mobile Crane",
    },
    {
      id: 5,
      src: "./assets/gallery/image5.jpg",
      title: "Tower Lift Setup",
      category: "construction",
      description: "Mobile crane erecting tower crane mast section.",
      location: "Urban Project",
      craneType: "Mobile Crane",
    },
    {
      id: 6,
      src: "./assets/gallery/image6.jpg",
      title: "Factory Roof Lift",
      category: "industrial",
      description: "SANY crane lifting equipment onto factory rooftop.",
      location: "Industrial Estate",
      craneType: "Mobile Crane",
    },
    {
      id: 7,
      src: "./assets/gallery/image7.jpg",
      title: "Heavy Module Lift",
      category: "industrial",
      description: "Two cranes lifting large heat exchanger module.",
      location: "Plant Site",
      craneType: "Mobile Cranes",
    },
    {
      id: 8,
      src: "./assets/gallery/image8.jpg",
      title: "Vessel Placement",
      category: "industrial",
      description: "Mobile crane positioning vessel on structural frame.",
      location: "Fabrication Yard",
      craneType: "Mobile Crane",
    },
    {
      id: 9,
      src: "./assets/gallery/image9.jpg",
      title: "Rig Maintenance Lift",
      category: "oil & gas",
      description: "Multiple cranes handling rig components during overhaul.",
      location: "Oil Field",
      craneType: "Mobile Cranes",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

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
            backgroundImage: "url(./assets/gallery/hero.jpg)",
          }}
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
            Project Gallery
          </h1>
          </ScrollReveal>
          <ScrollReveal>
          <p className="text-xl md:text-2xl text-slate-300">
            Showcasing our expertise across construction, industrial, and
            infrastructure projects.
          </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section
        className="bg-white sticky top-24 z-40 shadow-md"
        style={{ padding: "32px 0" }}
      >
        <ScrollReveal>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                style={{ padding: "12px 24px" }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "64px 0" }}>
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
                <ScrollReveal>
              <div
                key={image.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full  transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <MagnifyingGlassIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div
                    className="absolute top-4 left-4 bg-orange-500 text-white rounded-full text-sm font-semibold"
                    style={{ padding: "4px 12px" }}
                  >
                    {image.craneType}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3
                    className="text-xl font-bold text-slate-900"
                    style={{ marginBottom: "8px" }}
                  >
                    {image.title}
                  </h3>
                  <p
                    className="text-slate-600"
                    style={{ marginBottom: "12px" }}
                  >
                    {image.description}
                  </p>
                  <p className="text-sm text-orange-500 font-semibold">
                    {image.location}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          style={{ padding: "16px" }}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              style={{ padding: "8px" }}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              style={{ padding: "8px" }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              style={{ padding: "8px" }}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div
              className="bg-white rounded-lg"
              style={{ padding: "24px", marginTop: "16px" }}
            >
              <h3
                className="text-2xl font-bold text-slate-900"
                style={{ marginBottom: "8px" }}
              >
                {selectedImage.title}
              </h3>
              <p className="text-slate-600" style={{ marginBottom: "12px" }}>
                {selectedImage.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-orange-500 font-semibold">
                  {selectedImage.location}
                </p>
                <span
                  className="bg-orange-100 text-orange-700 rounded-full text-sm font-semibold"
                  style={{ padding: "4px 12px" }}
                >
                  {selectedImage.craneType}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <ScrollReveal>
      <section
        className="bg-orange-500 text-white"
        style={{ padding: "64px 0" }}
      >
        <div
          className="max-w-7xl"
          style={{ marginLeft: "auto", marginRight: "auto", padding: "0 16px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold"
                style={{ marginBottom: "8px" }}
              >
                500+
              </div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold"
                style={{ marginBottom: "8px" }}
              >
                50+
              </div>
              <div className="text-orange-100">Active Cranes</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold"
                style={{ marginBottom: "8px" }}
              >
                18+
              </div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold"
                style={{ marginBottom: "8px" }}
              >
                100%
              </div>
              <div className="text-orange-100">Safety Record</div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
};

export default Gallery;
