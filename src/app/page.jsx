
"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { DemoSection } from "@/components/demo-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { TeamSection } from "@/components/team-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { LoginSignUpPrompt } from "@/components/LoginSignUpPrompt";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <FaqSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
