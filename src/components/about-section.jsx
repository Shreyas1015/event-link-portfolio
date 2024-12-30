"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Layout, TrendingUp } from "lucide-react";
import Image from "next/image";

const keyPoints = [
  {
    icon: Calendar,
    title: "Centralized Hub",
    description: "Streamlined access to all event information.",
  },
  {
    icon: Users,
    title: "Tailored Roles",
    description: "Specific access for students, admins, and institutions.",
  },
  {
    icon: Layout,
    title: "User-Friendly Interface",
    description: "Seamless navigation and event discovery.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Engagement",
    description: "Improved visibility and participation.",
  },
];

const testimonials = [
  {
    name: "Sarah J.",
    role: "Student",
    quote: "Event Link has revolutionized how I discover campus events!",
  },
  {
    name: "Prof. Michael L.",
    role: "Faculty",
    quote: "Managing department events has never been easier.",
  },
  {
    name: "Emma T.",
    role: "Event Organizer",
    quote: "The analytics provided by Event Link are invaluable.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-80 overflow-hidden "
    >
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transforming Event Discovery for Students and Colleges
            </h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Event Link bridges the gap between fragmented event platforms,
              providing a single hub for all college events, ensuring maximum
              visibility and engagement.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <point.icon className="w-6 h-6 text-[#3498db]" />
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="text-sm text-gray-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative" style={{ y, opacity }}>
            <div className="w-full h-[500px] bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
              <Image
                src="/bgless-logo.png"
                layout="fill"
                objectFit="contain"
                alt="LOGO"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 backdrop-blur-lg rounded-full opacity-20"
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
