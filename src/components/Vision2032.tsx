"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Vision2032 = ({ graphicImage }: { graphicImage: string }) => {
  return (
    <section id="vision" className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:28px_28px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4">Our Commitment</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
              Vision 2032: <br />
              <span className="text-secondary italic">Operation 1+1+1</span>
            </h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                We are on a divine mandate to expand the kingdom of God. Vision 2032 is our collective roadmap to reach 
                millions of souls through intentional discipleship and evangelism.
              </p>
              <div className="bg-white/8 border border-white/15 p-8 rounded-2xl backdrop-blur-sm">
                <p className="text-3xl font-serif text-white mb-2">Goal: 40 Million Souls</p>
                <p className="text-secondary font-sans font-bold">Every member winning at least one soul annually.</p>
              </div>
              <p>
                Join us as we march towards this glorious goal, ensuring that the light of the gospel reaches every corner of our community and beyond.
              </p>
            </div>
            <button className="mt-10 bg-secondary hover:bg-accent text-primary px-10 py-4 rounded-xl font-bold transition-all shadow-xl">
              Learn More About Vision 2032
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/30 aspect-square lg:aspect-auto lg:h-[600px]">
              <Image
                src="/building.jpg"
                alt="RCCG Praise Pavilion Parish Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary rounded-full flex flex-col items-center justify-center text-primary shadow-2xl p-6 text-center transform rotate-12">
               <span className="text-4xl font-serif font-bold">2032</span>
               <span className="text-xs font-bold uppercase tracking-widest">Target Year</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-20" />
    </section>
  );
};

export default Vision2032;
