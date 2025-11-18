import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    trust: false,
    services: false,
    portfolio: false,
    testimonials: false,
    cta: false,
  });

  useEffect(() => {
    // Set hero visible immediately
    setVisibleSections((prev) => ({ ...prev, hero: true }));

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['trust', 'services', 'portfolio', 'testimonials', 'cta'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection isVisible={visibleSections.hero} />

      {/* Trust Section */}
      <div id="trust">
        <TrustSection isVisible={visibleSections.trust} />
      </div>

      {/* Services Grid */}
      <div id="services">
        <ServicesGrid isVisible={visibleSections.services} />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <PortfolioSection isVisible={visibleSections.portfolio} />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection isVisible={visibleSections.testimonials} />
      </div>

      {/* CTA Section */}
      <div id="cta">
        <CTASection isVisible={visibleSections.cta} />
      </div>
    </div>
  );
}
