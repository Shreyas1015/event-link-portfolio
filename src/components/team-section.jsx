"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/avatarr.webp",
    bio: "Visionary leader with 15+ years in tech, driving innovation and growth.",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/avatarr.webp",
    bio: "Tech enthusiast and product launch expert, pushing boundaries in development.",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Head of Marketing",
    image: "/avatarr.webp",
    bio: "Creative strategist blending data-driven insights with innovative campaigns.",
    linkedin: "https://linkedin.com/in/mikejohnson",
    twitter: "https://twitter.com/mikejohnson",
  },
  {
    name: "Sarah Lee",
    role: "Lead Designer",
    image: "/avatarr.webp",
    bio: "UX/UI expert crafting intuitive and visually stunning user experiences.",
    linkedin: "https://linkedin.com/in/sarahlee",
    twitter: "https://twitter.com/sarahlee",
  },
  {
    name: "David Chen",
    role: "Senior Developer",
    image: "/avatarr.webp",
    bio: "Full-stack wizard with expertise in multiple programming languages.",
    linkedin: "https://linkedin.com/in/davidchen",
    twitter: "https://twitter.com/davidchen",
  },
  {
    name: "Emily Taylor",
    role: "Customer Success Manager",
    image: "/avatarr.webp",
    bio: "Dedicated to ensuring client satisfaction and fostering long-term relationships.",
    linkedin: "https://linkedin.com/in/emilytaylor",
    twitter: "https://twitter.com/emilytaylor",
  },
  {
    name: "Alex Rodriguez",
    role: "Product Manager",
    image: "/avatarr.webp",
    bio: "Bridging user needs with technical solutions for optimal product development.",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    twitter: "https://twitter.com/alexrodriguez",
  },
  {
    name: "Lisa Wong",
    role: "Data Scientist",
    image: "/avatarr.webp",
    bio: "Transforming complex data into actionable insights for strategic decision-making.",
    linkedin: "https://linkedin.com/in/lisawong",
    twitter: "https://twitter.com/lisawong",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to excellence and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    {/* Responsive Image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                    </div>
                    {/* Member Info */}
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#2980b9] text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#2980b9]"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#2980b9]"
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

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Want to Join Our Team?</h3>
          <Button className="bg-[#2980b9] hover:bg-[#2980b9] text-white px-6 py-3 rounded-md">
            Explore Career Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
