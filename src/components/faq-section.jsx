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
    <section ref={ref} id="faq" className="py-80 px-20 ">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Find quick answers to common questions
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs"
              className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <h3 className="text-xl font-semibold mb-4 text-white">
              Categories
            </h3>
            <ul className="space-y-2">
              {filteredFaqs.map((category) => (
                <li key={category.name}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      activeCategory === category.name
                        ? "bg-blue-900 text-blue-200"
                        : "text-gray-300 hover:text-white"
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
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {category.name}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-gray-700"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-lg font-medium text-gray-200">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300">{faq.answer}</p>
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
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Still Need Help?
          </h3>
          <p className="text-gray-300 mb-6">
            Our support team is here to assist you.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="flex items-center bg-transparent border-white text-white hover:bg-gray-800 hover:text-white"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat
            </Button>
            <Button
              variant="outline"
              className="flex items-center bg-transparent border-white text-white hover:bg-gray-800 hover:text-white"
            >
              <Mail className="mr-2" size={20} />
              Email
            </Button>
            <Button
              variant="outline"
              className="flex items-center bg-transparent border-white text-white hover:bg-gray-800 hover:text-white"
            >
              <Phone className="mr-2" size={20} />
              Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
