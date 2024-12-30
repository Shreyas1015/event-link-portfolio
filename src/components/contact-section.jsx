"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-80 ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16  text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#f9f9f9]">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-[#5c4dff] mr-4" />
                <p className="text-[#f9f9f9]">
                  123 Event Street, College Town, ST 12345
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#5c4dff] mr-4" />
                <p className="text-[#f9f9f9]">info@eventlink.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#5c4dff] mr-4" />
                <p className="text-[#f9f9f9]">(123) 456-7890</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#1a1a1a] border-[#5c4dff] text-[#f9f9f9]"
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#1a1a1a] border-[#5c4dff] text-[#f9f9f9]"
              />
              <Textarea
                placeholder="Your Message"
                required
                className="bg-[#1a1a1a] border-[#5c4dff] text-[#f9f9f9]"
                rows={4}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5c4dff] hover:bg-[#8f5cff] text-white transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
