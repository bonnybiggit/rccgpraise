"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Sermons", href: "/sermons" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-14 h-14 bg-white rounded-lg overflow-hidden shadow-md p-1">
             <Image 
               src="/RCCG LOGO.jpeg" 
               alt="RCCG Praise Pavilion Parish Logo" 
               fill 
               className="object-contain"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif font-bold text-xl leading-none">Praise Pavilion Parish</span>
            <span className="text-secondary text-[10px] uppercase tracking-widest font-sans font-bold mt-1">Zonal Headquarters</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-secondary transition-colors font-sans text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#give"
            className="bg-secondary hover:bg-accent text-primary px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Give Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-secondary text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#give"
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-primary px-6 py-3 rounded-full font-bold text-center"
              >
                Give Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
