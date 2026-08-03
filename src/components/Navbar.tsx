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
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-2 shadow-[0_4px_24px_rgba(26,39,68,0.08)]"
          : "bg-white/95 backdrop-blur-md py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="mr-2 flex shrink-0 items-center md:mr-6">
          <Image
            src="/church-logo-transparent.png"
            alt="RCCG Praise Pavilion Parish Logo"
            width={300}
            height={80}
            priority
            className="h-10 w-auto sm:h-12 md:h-14 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center space-x-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary/80 transition-all duration-200 hover:text-primary hover:-translate-y-[1px]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#give"
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Give Online
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary transition-all duration-200 hover:bg-primary/10 hover:text-secondary md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-primary/10 bg-white/98 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-4 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-primary transition-colors hover:text-secondary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#give"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-primary/90"
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
