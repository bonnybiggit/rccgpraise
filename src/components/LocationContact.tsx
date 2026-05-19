"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const LocationContact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100"
          >
            <h2 className="text-4xl font-serif text-primary mb-2">Get In Touch</h2>
            <p className="text-zinc-500 mb-8">Send us your prayer requests or inquiries.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Subject</label>
                <select className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all">
                  <option>Prayer Request</option>
                  <option>Testimony</option>
                  <option>Counseling</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-zinc-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform hover:scale-[1.02] shadow-lg">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Location & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Our Location</h4>
                  <p className="text-zinc-500">80, Oyemekun Busstop off College Road, Ogba, Lagos State.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Phone</h4>
                  <p className="text-zinc-500">+234 (0) 123 4567 890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Email</h4>
                  <p className="text-zinc-500">info@rccgpraisepavilion.org</p>
                </div>
              </div>
            </div>

            {/* Google Maps Frame */}
            <div className="flex-1 min-h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.023249156641!2d3.315!3d6.643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b913d8d6f5f5f%3A0x1d1d1d1d1d1d1d1d!2s80%2C%20Oyemekun%20Rd%2C%20Ifako-Ijaiye%2C%20Lagos!5e0!3m2!1sen!2sng!4v1652610000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationContact;
