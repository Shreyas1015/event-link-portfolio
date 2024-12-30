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
    avatar: "/users (1).jpg",
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
    avatar: "/users.jpg",
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
    <section ref={ref} id="testimonials" className="py-80 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Voices of Success
          </h2>
          <p className="text-xl text-gray-300">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <Card className="bg-white/10 backdrop-blur-md border-none shadow-xl">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-blue-400 mb-4" />
                  <p className="text-xl italic mb-6 text-white">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-16 h-16 border-2 border-blue-400 mr-4">
                      <AvatarImage
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                      />
                      <AvatarFallback>
                        {testimonials[activeTestimonial].name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg text-white">
                        {testimonials[activeTestimonial].name}
                      </p>
                      <p className="text-blue-300">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <motion.img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeTestimonial ? "bg-blue-400" : "bg-gray-600"
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
            backgroundImage: 'url("/network-bg.svg")',
            backgroundSize: "200% 200%",
            opacity: 0.1,
          }}
        />
      </div>
    </section>
  );
}
