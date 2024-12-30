"use client";

import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/users (1).jpg",
    bio: "Visionary leader with 15+ years in tech, driving innovation and growth.",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/users (1).jpg",
    bio: "Tech enthusiast and product launch expert, pushing boundaries in development.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Head of Marketing",
    image: "/users (1).jpg",
    bio: "Creative strategist blending data-driven insights with innovative campaigns.",
    linkedin: "https://linkedin.com/in/mikejohnson",
    twitter: "https://twitter.com/mikejohnson",
  },
  {
    name: "Sarah Lee",
    role: "Lead Designer",
    image: "/users (1).jpg",
    bio: "UX/UI expert crafting intuitive and visually stunning user experiences.",
    linkedin: "https://linkedin.com/in/sarahlee",
    twitter: "https://twitter.com/sarahlee",
  },
  {
    name: "David Chen",
    role: "Senior Developer",
    image: "/users (1).jpg",
    bio: "Full-stack wizard with expertise in multiple programming languages.",
    linkedin: "https://linkedin.com/in/davidchen",
    twitter: "https://twitter.com/davidchen",
  },
  {
    name: "Emily Taylor",
    role: "Customer Success Manager",
    image: "/users (1).jpg",
    bio: "Dedicated to ensuring client satisfaction and fostering long-term relationships.",
    linkedin: "https://linkedin.com/in/emilytaylor",
    twitter: "https://twitter.com/emilytaylor",
  },
  {
    name: "Alex Rodriguez",
    role: "Product Manager",
    image: "/users (1).jpg",
    bio: "Bridging user needs with technical solutions for optimal product development.",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    twitter: "https://twitter.com/alexrodriguez",
  },
  {
    name: "Lisa Wong",
    role: "Data Scientist",
    image: "/users (1).jpg",
    bio: "Transforming complex data into actionable insights for strategic decision-making.",
    linkedin: "https://linkedin.com/in/lisawong",
    twitter: "https://twitter.com/lisawong",
  },
];

export function TeamSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="team" className="py-80 text-white">
      <div className="container mx-auto px-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{
            duration: 1.5, // Increased duration for the heading
            delay: 0.5,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to excellence and innovation in
            event management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                duration: 1.2, // Slightly longer animation for the cards
                delay: index * 0.3, // Staggered delay between cards
              }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-96">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4 text-sm">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 1.5, // Longer animation for the call-to-action
            delay: 0.8,
          }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Want to Join Our Team?
          </h3>
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Explore Career Opportunities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
