"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Bell, BarChart, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Centralized Hub",
    description: "Bring all events into one place for easy access.",
  },
  {
    icon: Users,
    title: "Tailored Roles",
    description: "Define access levels for students, admins, and institutions.",
  },
  {
    icon: Bell,
    title: "Enhanced Engagement",
    description:
      "Boost participation with targeted notifications and reminders.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description:
      "Gain insights into event performance and attendee engagement.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Avoid conflicts with intelligent event scheduling suggestions.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Ensure data privacy and security for all users and events.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="features" ref={ref} className="py-80 px-10  overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Unlock Key Features of Event Link for Seamless Event Management
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Event Link simplifies event discovery, management, and engagement by
            offering tailored solutions for students, admins, and institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-800 border-2 border-transparent hover:border-[#3498db] transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <motion.div
                    className="text-[#3498db] mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon size={40} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#3498db] rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
}
