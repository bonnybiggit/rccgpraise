"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from "lucide-react";

interface EventSlide {
  image: string;
  title: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
}

export default function EventsSlider() {
  const slides: EventSlide[] = [
    {
      image: "/God of new begin.png",
      title: "God of New Beginning",
      tagline: "Experience a divine resetting and fresh start in His presence.",
      date: "Special Program",
      time: "6:00 PM",
      location: "Main Sanctuary"
    },
    {
      image: "/merciful God.png",
      title: "Merciful God",
      tagline: "A special service encountering the infinite mercy and grace of God.",
      date: "Special Program",
      time: "6:00 PM",
      location: "Main Sanctuary"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">What's Coming</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Events</h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
          <p className="text-xl text-zinc-500 mt-4">Join us in our upcoming special programs and encounters</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto h-[550px] md:h-[600px] flex items-center justify-center">
          {/* Main Slider Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-primary/8 flex flex-col md:flex-row">
            
            {/* Slide Animating Group */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 flex flex-col md:flex-row h-full w-full"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-full bg-primary/5 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-102"
                      priority
                    />
                  </div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                  <span className="bg-secondary/15 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-max mb-6">
                    Special Event
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                    {slides[currentIndex].title}
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                    {slides[currentIndex].tagline}
                  </p>

                  <div className="space-y-4 border-t border-primary/8 pt-6">
                    <div className="flex items-center gap-4 text-zinc-700">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Date</p>
                        <p className="font-semibold text-primary">{slides[currentIndex].date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-700">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Time</p>
                        <p className="font-semibold text-primary">{slides[currentIndex].time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-700">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Venue</p>
                        <p className="font-semibold text-primary">{slides[currentIndex].location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls (Arrows) */}
            <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-3">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-primary hover:bg-secondary text-white hover:text-primary flex items-center justify-center hover:scale-105 transition-all shadow-lg border border-white/10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-primary hover:bg-secondary text-white hover:text-primary flex items-center justify-center hover:scale-105 transition-all shadow-lg border border-white/10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-9 left-8 md:left-12 z-20 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
