"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { PlayCircle, Download, Share2, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SermonsPage() {
  const sermonsLibrary = [
    {
      title: "Divine Acceleration",
      preacher: "Pastor In Charge of Zone",
      date: "May 19, 2024",
      duration: "52 minutes",
      views: "1.2K",
      image: "/hero.png"
    },
    {
      title: "Walking in Faith",
      preacher: "Pastor In Charge of Zone",
      date: "May 12, 2024",
      duration: "45 minutes",
      views: "890",
      image: "/hero.png"
    },
    {
      title: "The Power of Prayer",
      preacher: "Pastor In Charge of Zone",
      date: "May 5, 2024",
      duration: "48 minutes",
      views: "2.1K",
      image: "/hero.png"
    },
    {
      title: "Triumph Over Adversity",
      preacher: "Pastor In Charge of Zone",
      date: "April 28, 2024",
      duration: "56 minutes",
      views: "1.8K",
      image: "/hero.png"
    },
    {
      title: "God's Faithfulness",
      preacher: "Pastor In Charge of Zone",
      date: "April 21, 2024",
      duration: "50 minutes",
      views: "1.5K",
      image: "/hero.png"
    },
    {
      title: "Living a Purpose-Driven Life",
      preacher: "Pastor In Charge of Zone",
      date: "April 14, 2024",
      duration: "54 minutes",
      views: "2.3K",
      image: "/hero.png"
    }
  ];

  const mediaTypes = [
    { icon: "🖼️", title: "Gallery", count: "500+", description: "View our church moments and activities" },
    { icon: "🎙️", title: "Recap of Previous Service", count: "50+", description: "Catch up on recent ministry highlights" }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-primary to-primary/80 text-white flex items-center pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Sermons & Media</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Access powerful messages from our pulpit and stay connected with the Word of God anytime, anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sermons Component */}
      {/* <Sermons pastorImage="/pastor.png" /> */}

      {/* Media Types */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Media Library</h2>
            <p className="text-xl text-gray-600">Multiple formats for your convenience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaTypes.map((media, index) => {
              const content = (
                <>
                  <div className="text-5xl mb-4">{media.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{media.title}</h3>
                  <p className="text-3xl font-bold text-secondary mb-3">{media.count}</p>
                  <p className="text-gray-600">{media.description}</p>
                </>
              );

              return media.title === "Gallery" ? (
                <Link key={index} href="/gallery" className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center hover:scale-105 h-full cursor-pointer"
                  >
                    {content}
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center hover:scale-105 h-full"
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sermon Library */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Latest Sermons</h2>
            <p className="text-xl text-gray-600">Watch our most recent messages</p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {sermonsLibrary.slice(0, 4).map((sermon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-black overflow-hidden group-hover:opacity-90 transition-opacity">
                  <Image
                    src={sermon.image}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {sermon.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-4">{sermon.preacher}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {sermon.date}
                    </div>
                    <div>{sermon.views} views</div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                      <PlayCircle size={18} /> Watch
                    </button>
                    <button className="px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Subscribe to Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get notified when new sermons are uploaded. Follow us on our social media channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary hover:bg-accent text-primary px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
