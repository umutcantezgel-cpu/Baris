import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const TrustSection = ({ isVisible = true }) => {
  const trustBadges = [
    {
      icon: Award,
      value: '25+',
      label: 'Jahre Erfahrung',
      color: '#00b050'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Zufriedene Kunden',
      color: '#00b050'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Notdienst',
      color: '#00b050'
    },
    {
      icon: ThumbsUp,
      value: '100%',
      label: 'Qualitätsgarantie',
      color: '#00b050'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="w-8 h-8 text-[#00b050]" strokeWidth={2} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-2">
                  {badge.value}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {badge.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
