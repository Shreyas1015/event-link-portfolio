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
      className="py-16 sm:py-20 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
              Transforming Event Discovery for Students and Colleges
            </h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Event Link bridges the gap between fragmented event platforms,
              providing a single hub for all college events, ensuring maximum
              visibility and engagement.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2980b9] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative mt-8 lg:mt-0" style={{ y, opacity }}>
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-[#2980b9] rounded-lg overflow-hidden">
              <Image
                src="/bgless-logo.png"
                alt="Event Link"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-black">
            What Our Users Say
          </h3>
          <div className="flex overflow-x-hidden">
            <motion.div
              className="flex"
              animate={{ x: [0, -100 * testimonials.length + 100] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="w-64 sm:w-80 mx-2 sm:mx-4 bg-white border-[#2980b9] flex-shrink-0"
                >
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-black">
            Ready to simplify your event management?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              className="bg-[#2980b9] hover:bg-[#3498db] text-white w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Discover Features
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#2980b9] text-[#2980b9] hover:bg-[#2980b9] hover:text-white w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("demo")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View the Demo
            </Button>{" "}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-[#2980b9] rounded-full opacity-20"
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
