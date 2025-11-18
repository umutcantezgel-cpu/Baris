import React, { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import ServicesGrid from '../components/home/ServicesGrid';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import FloatingEmergencyButton from '../components/home/FloatingEmergencyButton';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Section */}
      <TrustSection isVisible={isVisible} />

      {/* Services Grid */}
      <ServicesGrid isVisible={isVisible} />

      {/* Portfolio Section */}
      <PortfolioSection isVisible={isVisible} />

      {/* Testimonials */}
      <TestimonialsSection isVisible={isVisible} />

      {/* CTA Section */}
      <CTASection />

      {/* Floating Emergency Button */}
      <FloatingEmergencyButton />
    </div>
  );
}
