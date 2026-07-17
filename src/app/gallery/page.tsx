"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export default function GalleryPage() {
  const originalImages: GalleryImage[] = [
    {
      src: "/Gallery 1.jpeg",
      alt: "Praise Pavilion Parish Sanctuary Worshippers",
      title: "Atmosphere of Praise",
      category: "Worship"
    },
    {
      src: "/Gallery 2.jpeg",
      alt: "Congregation in Worship",
      title: "Sunday Service Glory",
      category: "Service"
    },
    {
      src: "/Gallery 3.jpeg",
      alt: "Worship Leader and Choir",
      title: "Praise and Adoration",
      category: "Choir"
    },
    {
      src: "/entrance.jpeg",
      alt: "RCCG Praise Pavilion Parish Building Entrance",
      title: "Our Church Entrance",
      category: "Building"
    }
  ];

  const july12Images: GalleryImage[] = [
    {
      src: "/july12-choir.jpg",
      alt: "Choir ministering during July 12 service",
      title: "Choir in Ministry",
      category: "Choir"
    },
    {
      src: "/july12-choir2.jpg",
      alt: "Choir and instrumentalists leading praise",
      title: "Praise & Worship",
      category: "Choir"
    },
    {
      src: "/july12-instrumentalist.jpg",
      alt: "Instrumentalists playing during service",
      title: "Music Ministry",
      category: "Music"
    },
    {
      src: "/july12-ministers.jpg",
      alt: "Ministers during the July 12 service",
      title: "Ministers in Service",
      category: "Ministers"
    },
    {
      src: "/july12-ministers2.jpg",
      alt: "Ministers leading the congregation in worship",
      title: "Leadership in Worship",
      category: "Ministers"
    },
    {
      src: "/july12-congreg.jpg",
      alt: "Congregation worshipping during Sunday service",
      title: "Congregation in Worship",
      category: "Congregation"
    },
    {
      src: "/july12-congreg2.jpg",
      alt: "Members of congregation during praise",
      title: "Members in Praise",
      category: "Congregation"
    },
    {
      src: "/july12-congreg3.jpg",
      alt: "Congregation seated during the service",
      title: "Sunday Gathering",
      category: "Congregation"
    },
    {
      src: "/july12-firsttimer.jpg",
      alt: "First timers during the July 12 service",
      title: "First Timers Welcome",
      category: "First Timers"
    },
    {
      src: "/july12-firsttimer2.jpg",
      alt: "First timers welcomed to the parish",
      title: "New Members",
      category: "First Timers"
    },
    {
      src: "/july12-teens.jpg",
      alt: "Teens department participating in service",
      title: "Teens in Worship",
      category: "Teens"
    }
  ];

  const categories = ["All", "Choir", "Music", "Ministers", "Congregation", "First Timers", "Teens"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredJuly12 = activeCategory === "All"
    ? july12Images
    : july12Images.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-primary to-primary/80 text-white flex items-center pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Explore the moments, worship sessions, and community gatherings that define RCCG Praise Pavilion Parish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Original Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Church Moments</h2>
            <p className="text-xl text-gray-600">Capturing the moves of God in our midst</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {originalImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(image)}
                className="group relative h-[260px] rounded-2xl overflow-hidden shadow-md cursor-pointer bg-zinc-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-white text-base font-serif font-bold mb-1">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-1 text-secondary font-bold text-xs">
                    <ZoomIn size={13} /> Click to Expand
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* July 12 Service Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="inline-block bg-secondary/20 text-primary font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              📸 Sunday Service — July 12, 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">July 12 Service Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A beautiful capture of God&apos;s presence among us — choir, congregation, ministers, first timers and teens all gathered in one accord.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-zinc-100 text-zinc-500 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* July 12 Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"
            >
              {filteredJuly12.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative h-[240px] rounded-2xl overflow-hidden shadow-md cursor-pointer bg-zinc-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-1">
                      {image.category}
                    </span>
                    <h3 className="text-white text-sm font-serif font-bold mb-1">{image.title}</h3>
                    <div className="flex items-center gap-1 text-secondary font-bold text-xs">
                      <ZoomIn size={12} /> View Full
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredJuly12.length === 0 && (
            <p className="text-center text-gray-400 mt-12">No images in this category.</p>
          )}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-secondary bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[95vw] max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center">
              <span className="text-secondary text-xs uppercase tracking-widest font-bold">{selectedImage.category}</span>
              <p className="text-white font-serif text-lg font-bold mt-1">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
