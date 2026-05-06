"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "./Hero";
import { AboutSection } from "./About";
import { ServicesSection } from "./Services";
import { TestimonialsSection } from "./Testimonials";
import { GallerySection } from "./Gallery";
import { BookingCTASection } from "./BookingCTA";
import { LocationSection } from "./Location";
import { Footer } from "@/components/Footer";
import { StickyWAButton } from "@/components/StickyWA";

export default function CutbaePage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <BookingCTASection />
      <LocationSection />
      <Footer />
      <StickyWAButton />
    </div>
  );
}