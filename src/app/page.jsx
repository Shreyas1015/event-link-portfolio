// "use client";

// import { Navbar } from "@/components/navbar";
// import { HeroSection } from "@/components/hero-section";
// import { AboutSection } from "@/components/about-section";
// import { FeaturesSection } from "@/components/features-section";
// import { DemoSection } from "@/components/demo-section";
// import { TestimonialsSection } from "@/components/testimonials-section";
// import { FaqSection } from "@/components/faq-section";
// import { TeamSection } from "@/components/team-section";
// import { CtaSection } from "@/components/cta-section";
// import { Footer } from "@/components/footer";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { LoginSignUpPrompt } from "@/components/LoginSignUpPrompt";

// export default function Home() {
//   return (
//     <main className="min-h-screen text-white relative">
//       {/* YouTube Video Background */}
//       <div className="absolute top-0 left-0 w-full h-full object-full">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src="/videoplayback (1).webm" // Path to your video file
//           autoPlay
//           muted
//           loop
//         />
//       </div>

//       <Navbar />
//       <Parallax pages={9}>
//         {/* <ParallaxLayer offset={0} speed={0.2}></ParallaxLayer> */}
//         <ParallaxLayer offset={0} speed={0.5}>
//           <HeroSection />
//         </ParallaxLayer>
//         <ParallaxLayer offset={1} speed={0.8}>
//           <AboutSection />
//         </ParallaxLayer>
//         <ParallaxLayer offset={2} speed={0.5}>
//           <FeaturesSection />
//         </ParallaxLayer>
//         <ParallaxLayer offset={3} speed={0.2}>
//           <DemoSection />
//         </ParallaxLayer>
//         <ParallaxLayer offset={4.5} speed={0.5}>
//           <TestimonialsSection />
//         </ParallaxLayer>
//         <ParallaxLayer offset={5.5} speed={0.5}>
//           <FaqSection />
//         </ParallaxLayer>
//         <ParallaxLayer offset={6.5} speed={0.9}>
//           <TeamSection />
//         </ParallaxLayer>

//         <ParallaxLayer offset={8} speed={0.5}>
//           <Footer />
//         </ParallaxLayer>
//       </Parallax>
//       <LoginSignUpPrompt />
//     </main>
//   );
// }

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
      <LoginSignUpPrompt />
    </main>
  );
}
