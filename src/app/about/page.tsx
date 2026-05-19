"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Vision2032 from "@/components/Vision2032";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Soul Winning",
      description: "We are committed to reaching souls and bringing people closer to Christ."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a strong, supportive community of believers and worshippers."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for excellence in all areas of ministry and service."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Growth",
      description: "Facilitating explosive spiritual and numerical growth in God's kingdom."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary to-primary/80 text-white flex items-center pt-20">
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
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">About Our Parish</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              RCCG Praise Pavilion Parish - A place of explosive growth and soul winning. Serving as the Zonal Headquarters with a vision to impact lives and transform communities through the power of God's Word.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To preach the gospel of our Lord Jesus Christ to all nations and peoples, building disciples who are committed to the advancement of God's kingdom. We are dedicated to soul winning, spiritual development, and community transformation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is grounded in the Great Commission: reaching the lost, nurturing the saved, and equipping believers for effective service in God's vineyard.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/hero.png"
                alt="Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision 2032 Component */}
      <Vision2032 graphicImage="/vision.png" />

      {/* Core Values */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our ministry and service</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600">Dedicated servants leading with vision and passion</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg bg-gray-300">
                  <Image
                    src="/pastor.png"
                    alt={`Leader ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Leader Name</h3>
                <p className="text-gray-600 font-medium mb-3">Position Title</p>
                <p className="text-gray-500">Dedicated to ministry and service to the glory of God</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
