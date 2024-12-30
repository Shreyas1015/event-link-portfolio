"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800  relative overflow-hidden container mx-auto text-white py-12 flex justify-center items-center h-screen px-20">
      <div className="absolute inset-0 bg-[url('/footer-pattern.jpg')] opacity-10"></div>
      <motion.div
        className="container mx-auto px-4 py-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand Logo & Mission Statement */}
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Event Link Logo"
              width={120}
              height={40}
            />
            <p className="text-sm text-gray-300">
              Transforming event management with innovative solutions for
              seamless experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Features", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
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
                    className="text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 transform hover:scale-105"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="hidden lg:block h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
            ></div>
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Event Link. All Rights Reserved.</p>
        </div>

        {/* Accessibility Options */}
        {/* <div className="mt-4 text-center">
          <Button
            variant="ghost"
            className="text-sm text-gray-400 hover:text-white"
            onClick={() => alert("Font size increased")}
          >
            Increase Font Size
          </Button>
          <Button
            variant="ghost"
            className="text-sm text-gray-400 hover:text-white ml-4"
            onClick={() => alert("Theme toggled")}
          >
            Toggle Dark/Light Mode
          </Button>
        </div> */}
      </motion.div>

      {/* Back-to-Top Button */}
      <motion.button
        className={`fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg ${
          showBackToTop ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
}
