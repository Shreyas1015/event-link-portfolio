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
  "Contact",
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      } transition-colors duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Event Link
        </motion.div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className={`text-sm ${
                  activeSection === item ? "text-[#3498db]" : "text-gray-300"
                } hover:text-[#3498db] transition-colors duration-200`}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item}
              </Button>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="text-sm text-[#3498db] border-white hover:bg-white hover:text-[#3498db]"
            onClick={() => {
              window.location.href = "https://event-link.vercel.app";
            }}
          >
            Log In
          </Button>
          <Button
            variant="default"
            className="text-sm bg-[#3498db] hover:bg-[#2980b9] text-white"
            onClick={() => {
              window.location.href = "https://event-link.vercel.app/signup";
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
