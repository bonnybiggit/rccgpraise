"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles } from "lucide-react";

const activities = [
  {
    day: "Tuesday",
    title: "Digging Deep",
    time: "6:00 PM - 7:00 PM",
    icon: <Sparkles className="text-secondary" />,
    desc: "In-depth Bible study and spiritual growth.",
  },
  {
    day: "Thursday",
    title: "Faith Clinic",
    time: "6:30 PM - 8:00 PM",
    icon: <Clock className="text-secondary" />,
    desc: "A time of prayer, healing, and restoration.",
  },
  {
    day: "Sunday",
    title: "Sunday Services",
    services: [
      { name: "1st Service (Glory Service)", time: "8:00 AM - 9:30 AM" },
      { name: "Sunday School (Combined)", time: "9:30 AM - 10:15 AM" },
      { name: "2nd Service (Victory Service)", time: "10:15 AM - 11:25 AM" },
    ],
    icon: <Calendar className="text-secondary" />,
    desc: "Glorious worship and life-transforming words.",
  },
];

const WeeklyActivities = () => {
  return (
    <section id="activities" className="py-24 bg-[#f7f9fc]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">Our Schedule</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Weekly Activities</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary hover:border-secondary transition-all group hover:shadow-xl"
            >
              <div className="mb-6 bg-primary/8 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-primary mb-2">{item.day}</h3>
              <h4 className="text-lg font-bold text-secondary mb-4">{item.title}</h4>
              
              {item.services ? (
                <div className="space-y-3 mb-4">
                  {item.services.map((s, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-zinc-100 pb-2">
                      <span className="text-zinc-600 font-medium">{s.name}</span>
                      <span className="text-primary font-bold text-sm">{s.time}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-primary font-bold text-xl mb-4">{item.time}</p>
              )}
              
              <p className="text-zinc-500 italic text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-serif mb-2">Special Monthly Services</h3>
            <p className="text-white/70">Don't miss our periodic empowerment sessions.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0 relative z-10">
            <div className="text-center">
              <p className="text-secondary font-bold text-lg">First Day of Every Month</p>
              <p className="text-xs uppercase tracking-tighter text-white/70">Command the Month - 6:00 AM - 7:00 AM</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-secondary font-bold text-lg">Every 1st Sunday</p>
              <p className="text-xs uppercase tracking-tighter text-white/70">Combined Thanksgiving</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-secondary font-bold text-lg">Every 1st Friday</p>
              <p className="text-xs uppercase tracking-tighter text-white/70">Holy Ghost Service (@ Redemption Camp)</p>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyActivities;
