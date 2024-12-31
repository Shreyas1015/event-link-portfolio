"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle, Mail, Phone } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    questions: [
      {
        question: "What is Event Link?",
        answer:
          "Event Link is a comprehensive platform designed to streamline college event management. It provides a centralized hub for organizing, promoting, and participating in campus events.",
      },
      {
        question: "How does Event Link benefit students?",
        answer:
          "Event Link makes it easy for students to discover and participate in campus events. They can browse all events in one place, receive personalized recommendations, and manage their event attendance seamlessly.",
      },
    ],
  },
  {
    name: "Features",
    questions: [
      {
        question: "Can event organizers use Event Link?",
        answer:
          "Yes, Event Link offers powerful tools for event organizers to create, manage, and promote their events. They can track attendance, communicate with participants, and gather valuable insights.",
      },
      {
        question: "Is Event Link customizable for different colleges?",
        answer:
          "Event Link can be tailored to fit the specific needs and branding of individual colleges. We offer customization options to ensure the platform aligns with your institution's identity and requirements.",
      },
    ],
  },
  {
    name: "Security",
    questions: [
      {
        question: "How secure is the data on Event Link?",
        answer:
          "We take data security very seriously. Event Link employs industry-standard encryption and security measures to protect user data. We also comply with relevant data protection regulations to ensure user privacy.",
      },
      {
        question: "Can I control who sees my event information?",
        answer:
          "Yes, Event Link provides robust privacy settings. You can control the visibility of your events, deciding whether they're public, limited to certain groups, or completely private.",
      },
    ],
  },
];

export function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqCategories);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const filtered = faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);
    setFilteredFaqs(filtered);
    if (
      filtered.length > 0 &&
      !filtered.some((c) => c.name === activeCategory)
    ) {
      setActiveCategory(filtered[0].name);
    }
  }, [searchTerm, activeCategory]);

  return (
    <section
      ref={ref}
      id="faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black to-[#2980b9]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8">
            Find quick answers to common questions
          </p>
          <div className="relative max-w-xl sm:max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs"
              className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-[#2980b9] bg-white text-black placeholder-gray-500 focus:border-[#3498db] focus:ring focus:ring-[#3498db] focus:ring-opacity-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
              Categories
            </h3>
            <ul className="space-y-2">
              {filteredFaqs.map((category) => (
                <li key={category.name}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm sm:text-base ${
                      activeCategory === category.name
                        ? "bg-[#2980b9] text-white"
                        : "text-white hover:bg-[#2980b9]"
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-3"
          >
            {filteredFaqs.map((category) => (
              <div
                key={category.name}
                className={activeCategory === category.name ? "" : "hidden"}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                  {category.name}
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="space-y-3 sm:space-y-4"
                >
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-[#2980b9]"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-base sm:text-lg font-medium text-white">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm sm:text-base text-white">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-white">
            Still Need Help?
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
            Our support team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              className="flex items-center justify-center bg-transparent border-[#2980b9] text-white hover:bg-[#2980b9] text-sm sm:text-base"
            >
              <MessageCircle className="mr-2" size={18} />
              Chat
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center bg-transparent border-[#2980b9] text-white hover:bg-[#2980b9] text-sm sm:text-base"
            >
              <Mail className="mr-2" size={18} />
              Email
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center bg-transparent border-[#2980b9] text-white hover:bg-[#2980b9] text-sm sm:text-base"
            >
              <Phone className="mr-2" size={18} />
              Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
