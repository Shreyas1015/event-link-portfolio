"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  "Home",
  "About",
  "Features",
  "Demo",
  "Testimonials",
  "FAQ",
  "Team",
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-hidden ${
        isScrolled
          ? "bg-black bg-opacity-80 backdrop-blur-md"
          : "bg-transparent"
      } transition-colors duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          className="text-xl sm:text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Event Link
        </motion.div>
        <div className="hidden md:flex space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className={`text-sm ${
                  activeSection === item ? "text-[#2980b9]" : "text-white"
                } hover:text-[#2980b9] transition-colors duration-200`}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex space-x-2">
          <Button
            variant="outline"
            className="text-sm text-[#2980b9] border-white hover:bg-white hover:text-[#2980b9] transition-colors duration-200"
            onClick={() => {
              window.location.href = "https://event-link.vercel.app";
            }}
          >
            Log In
          </Button>
          <Button
            variant="default"
            className="text-sm bg-[#2980b9] hover:bg-[#3498db] text-white transition-colors duration-200"
            onClick={() => {
              window.location.href = "https://event-link.vercel.app/signup";
            }}
          >
            Sign Up
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black bg-opacity-90 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={`w-full text-left text-sm ${
                  activeSection === item ? "text-[#2980b9]" : "text-white"
                } hover:text-[#2980b9] transition-colors duration-200`}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </Button>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                className="text-sm text-[#2980b9] border-white hover:bg-white hover:text-[#2980b9] transition-colors duration-200"
                onClick={() => {
                  window.location.href = "https://event-link.vercel.app";
                }}
              >
                Log In
              </Button>
              <Button
                variant="default"
                className="text-sm bg-[#2980b9] hover:bg-[#3498db] text-white transition-colors duration-200"
                onClick={() => {
                  window.location.href = "https://event-link.vercel.app/signup";
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
