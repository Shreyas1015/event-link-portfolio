"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const roadmapItems = [
  {
    year: 2023,
    title: "Global Expansion",
    description: "Expanding Event Link to universities worldwide",
  },
  {
    year: 2024,
    title: "AI Integration",
    description: "Implementing AI-powered event recommendations",
  },
  {
    year: 2025,
    title: "Virtual Events Platform",
    description: "Launching a seamless virtual events experience",
  },
  {
    year: 2026,
    title: "Blockchain Ticketing",
    description: "Introducing secure, blockchain-based event ticketing",
  },
];

export function RoadmapSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="roadmap"
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#0a1128] to-[#2b2b2b]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#5c4dff] to-[#8f5cff] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Roadmap
        </motion.h2>
        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#5c4dff]"
            style={{ scaleY: lineHeight, originY: 0 }}
          />
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.year}
              className="relative flex items-center mb-12"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "text-right pr-8" : "pl-8"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2 text-[#ffcc00]">
                  {item.year}
                </h3>
                <h4 className="text-xl font-semibold mb-2 text-[#f9f9f9]">
                  {item.title}
                </h4>
                <p className="text-[#f9f9f9]">{item.description}</p>
              </div>
              <div className="absolute left-1/2 w-4 h-4 bg-[#ffcc00] rounded-full transform -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
