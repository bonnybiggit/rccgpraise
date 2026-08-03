"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with White-leaning Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Church Entrance"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Layered overlays: strong white on left fading right, plus overall light veil */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-white/30" />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-sans font-bold tracking-[0.2em] uppercase mb-4">
              Welcome to RCCG Praise Pavilion Parish
            </h4>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6">
              A place of <span className="text-secondary italic">explosive growth</span> and soul winning.
            </h1>
            <p className="text-primary/70 text-xl font-sans mb-10 max-w-xl leading-relaxed">
              Experience the power of God's presence, vibrant worship, and life-changing messages at the Zonal Headquarters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-secondary text-white hover:text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all"
              >
                Join Us This Sunday
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 hover:bg-white backdrop-blur-md text-primary border border-primary/20 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-md"
              >
                Give Online
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
