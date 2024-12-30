"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-80">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Event Management?
          </h2>
          <p className="text-xl mb-8">
            Join Event Link today and experience the future of college event
            organization.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
