"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";

export function Footer() {
  // const [showBackToTop, setShowBackToTop] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => setShowBackToTop(window.scrollY > 300);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Image
              src="/logo.svg"
              alt="Event Link Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-gray-300">
              Transforming event management with innovative solutions for
              seamless experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#2980b9] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Features", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-[#2980b9]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-[#2980b9] mb-4">
              Support & Resources
            </h3>
            <ul className="space-y-2">
              {[
                "FAQs",
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-[#2980b9]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold text-[#2980b9] mb-4">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#2980b9]"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <form>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mb-2 bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-[#2980b9] hover:bg-[#2980b9]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          &copy; 2024 Event Link. All Rights Reserved.
        </div>
      </div>

      {/* Back-to-Top Button */}
      {/* {showBackToTop && (
        <motion.button
          className="fixed bottom-4 right-4 bg-[#2980b9] p-2 rounded-full shadow-lg text-white"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )} */}
    </footer>
  );
}
