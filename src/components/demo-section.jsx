"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const demoSteps = [
  {
    title: "Browse Events",
    description:
      "Explore a wide range of college events with our intuitive interface.",
    image: "/register.png",
  },
  {
    title: "Event Details",
    description:
      "Get comprehensive information about each event, including date, time, and location.",
    image: "/event-details.png",
  },
  {
    title: "Register & Participate",
    description:
      "Easily register for events and manage your participation all in one place.",
    image: "/easy.jpg",
  },
];

export function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef(null);

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => (prev + 1) % demoSteps.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => (prev - 1 + demoSteps.length) % demoSteps.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextStep();
      } else if (event.key === "ArrowLeft") {
        prevStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="demo" className="py-80 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience Event Link in Action
        </motion.h2>
        <div className="relative max-w-6xl mx-auto" ref={constraintsRef}>
          <Card className="bg-gray-800 border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentStep}
                      src={demoSteps[currentStep].image}
                      alt={demoSteps[currentStep].title}
                      className="absolute top-0 left-0 w-full h-full object-center object-cover"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={constraintsRef}
                      dragElastic={0.05}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                          nextStep();
                        } else if (swipe > swipeConfidenceThreshold) {
                          prevStep();
                        }
                      }}
                    />
                  </AnimatePresence>
                </div>
                <div className="p-8 flex flex-col justify-between bg-gray-900">
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={`title-${currentStep}`}
                        className="text-3xl font-semibold mb-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        {demoSteps[currentStep].title}
                      </motion.h3>
                      <motion.p
                        key={`description-${currentStep}`}
                        className="text-gray-300 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {demoSteps[currentStep].description}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevStep}
                        className="bg-[#3498db] hover:bg-[#3498db] text-white rounded-full"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <div className="flex space-x-2">
                        {demoSteps.map((_, index) => (
                          <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                              index === currentStep
                                ? "bg-blue-500"
                                : "bg-gray-600"
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCurrentStep(index)}
                          />
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextStep}
                        className="bg-[#3498db] hover:bg-[#3498db] text-white rounded-full"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {demoSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          className={`relative cursor-pointer overflow-hidden rounded-lg ${
                            index === currentStep ? "ring-2 ring-[#3498db]" : ""
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentStep(index)}
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-20 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">
                              Step {index + 1}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[#3498db] hover:bg-[#3498db] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
