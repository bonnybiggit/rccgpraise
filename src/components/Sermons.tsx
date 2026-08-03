"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const Sermons = () => {
  return (
    <section id="sermons" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Latest Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 bg-[#f7f9fc] rounded-3xl overflow-hidden shadow-xl group border border-primary/5"
          >
            <div className="relative h-[450px]">
              <Image
                src="/hero.png"
                alt="Latest message"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 inline-block">
                  Latest Message
                </span>
                <h3 className="text-white text-3xl font-serif mb-2">Divine Acceleration</h3>
                <p className="text-white/70 font-sans">By Pastor In Charge of Zone</p>
              </div>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-all duration-300">
                <PlayCircle size={48} />
              </button>
            </div>
            <div className="p-8">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-colors">
                <PlayCircle size={20} /> Watch Now
              </button>
            </div>
          </motion.div>

          {/* Media & Stream Section */}
          <div className="w-full lg:w-2/3">
            <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">Media & Resources</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Catch Up with Grace</h2>
            
            <Link href="/gallery" className="block relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl mb-8 group cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PlayCircle size={40} />
                </div>
                <h3 className="text-2xl font-serif">Gallery & Recaps</h3>
                <p className="text-white/60">View our latest ministry moments</p>
              </div>
              {/* Placeholder Overlay */}
              <div className="absolute inset-0 bg-primary/80"></div>
              <Image 
                src="/hero.png"
                alt="Church worship"
                fill
                className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <Link href="/gallery" className="bg-[#f7f9fc] p-6 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all cursor-pointer border border-primary/8 hover:border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                   🖼️
                </div>
                <div>
                  <h4 className="font-bold text-primary">Gallery</h4>
                  <p className="text-sm text-zinc-500">Browse our church moments</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sermons;
