"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeeklyActivities from "@/components/WeeklyActivities";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import EventsSlider from "@/components/EventsSlider";

export default function ActivitiesPage() {
  const upcomingEvents = [
    {
      date: "Every Sunday",
      title: "Holy Communion Service",
      time: "8:00 AM - 10:00 AM",
      location: "Main Sanctuary",
      description: "Experience powerful worship and life-transforming messages that draw you closer to God."
    },
    {
      date: "Every Sunday",
      title: "Second Service",
      time: "10:15 AM - 12:30 PM",
      location: "Main Sanctuary",
      description: "Join thousands of worshippers in our second service featuring dynamic praise and preaching."
    },
    {
      date: "Every Wednesday",
      title: "Mid-Week Bible Study",
      time: "6:00 PM - 7:30 PM",
      location: "Church Hall",
      description: "Deep dive into Scripture with our comprehensive Bible study program."
    },
    {
      date: "Every Friday",
      title: "Night of Glory",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      description: "Experience powerful prayer, worship, and the manifest presence of God."
    },
    {
      date: "Monthly",
      title: "Men's Fellowship",
      time: "Third Saturday, 9:00 AM",
      location: "Fellowship Hall",
      description: "A gathering of men committed to spiritual growth and brotherly communion."
    },
    {
      date: "Monthly",
      title: "Women's Ministry",
      time: "Second Saturday, 10:00 AM",
      location: "Fellowship Hall",
      description: "Empowering women through fellowship, teaching, and mutual support."
    }
  ];

  const programs = [
    {
      icon: "👶",
      title: "Children's Church",
      description: "Age-appropriate spiritual formation and fun activities for children aged 5-12"
    },
    {
      icon: "🎓",
      title: "Youth Ministry",
      description: "Dynamic programs designed to guide teenagers through their faith journey"
    },
    {
      icon: "📚",
      title: "Sunday School",
      description: "Comprehensive biblical education for all age groups"
    },
    {
      icon: "🙏",
      title: "Prayer Groups",
      description: "Specialized prayer initiatives for specific needs and intercession"
    },
    {
      icon: "🤝",
      title: "Outreach Programs",
      description: "Community service and missionary activities spreading God's love"
    },
    {
      icon: "🎵",
      title: "Choir & Music",
      description: "Various music groups offering training and worship experiences"
    }
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
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Weekly Activities</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Join us for inspiring worship, growth opportunities, and community fellowship throughout the week.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Activities Component */}
      <WeeklyActivities />

      {/* Events Slider Section */}
      <EventsSlider />

      {/* Programs Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Diverse ministries for spiritual growth at every stage of life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-6xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We'd love to see you at one of our services or events. New members are always welcome!
            </p>
            <button className="bg-secondary hover:bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              Get Directions
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
