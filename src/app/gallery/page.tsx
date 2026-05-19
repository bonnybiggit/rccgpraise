"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const galleryImages = [
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
      src: "/Gallery 4.jpeg",
      alt: "Church Sanctuary Building Interior",
      title: "Holy Sanctuary",
      category: "Building"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      {/* Gallery Grid */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(image.src)}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-zinc-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-2xl font-serif font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {image.alt}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-bold text-sm">
                    <ZoomIn size={16} /> Click to Expand
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-secondary bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
