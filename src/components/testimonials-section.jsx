"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    avatar: "/users.jpg",
    quote:
      "Event Link has revolutionized how I discover and participate in campus events. The platform's intuitive interface and personalized recommendations have significantly enhanced my college experience.",
  },
  {
    name: "Prof. Michael Lee",
    role: "Faculty Advisor",
    avatar: "/users (1).jpg",
    quote:
      "As a faculty advisor, I've found Event Link to be an invaluable tool for managing and promoting departmental events. The analytics and engagement features have helped us optimize our event planning strategies.",
  },
  {
    name: "Emily Chen",
    role: "Student Council President",
    avatar: "/emily.webp",
    quote:
      "Event Link has transformed our approach to campus-wide event organization. The platform's robust features and user-friendly interface have significantly increased student engagement and participation.",
  },
  {
    name: "David Wilson",
    role: "Event Organizer",
    avatar: "/users (1).jpg",
    quote:
      "The comprehensive analytics and real-time feedback provided by Event Link have been game-changing for our event planning process. We've seen a marked improvement in attendance and overall event success.",
  },
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black via-[#2980b9] to-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-white">
            Voices of Success
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Discover how Event Link is transforming campus experiences
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"
            >
              <Card className="bg-black/30 backdrop-blur-md border-none shadow-xl order-2 md:order-1">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#2980b9] mb-2 sm:mb-4" />
                  <p className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 text-white">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-[#2980b9] mr-3 sm:mr-4">
                      <AvatarImage
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                      />
                      <AvatarFallback>
                        {testimonials[activeTestimonial].name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-base sm:text-lg text-white">
                        {testimonials[activeTestimonial].name}
                      </p>
                      <p className="text-sm sm:text-base text-[#2980b9]">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg order-1 md:order-2">
                <motion.img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 sm:px-4 -mt-6 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-[#2980b9]/10 hover:bg-[#2980b9]/20 text-white rounded-full backdrop-blur-md w-8 h-8 sm:w-10 sm:h-10"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-[#2980b9]/10 hover:bg-[#2980b9]/20 text-white rounded-full backdrop-blur-md w-8 h-8 sm:w-10 sm:h-10"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === activeTestimonial ? "bg-[#2980b9]" : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: 'url("/network-bg.webp")',
            backgroundSize: "200% 200%",
            opacity: 0.1,
          }}
        />
      </div>
    </section>
  );
}
