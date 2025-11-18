import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ isVisible = true }) => {
  const testimonials = [
    {
      name: 'Michael Schmidt',
      role: 'Hausbesitzer',
      rating: 5,
      text: 'Hervorragende Arbeit bei der Installation unserer neuen Heizungsanlage. Pünktlich, professionell und sauber. Absolut empfehlenswert!',
      location: 'München'
    },
    {
      name: 'Sarah Weber',
      role: 'Geschäftsführerin',
      rating: 5,
      text: 'Der 24/7 Notdienst hat uns am Wochenende gerettet. Schnelle Reaktion und kompetente Lösung. Vielen Dank!',
      location: 'Hamburg'
    },
    {
      name: 'Thomas Müller',
      role: 'Architekt',
      rating: 5,
      text: 'Zuverlässiger Partner für unsere Bauprojekte. Die Zusammenarbeit ist immer reibungslos und die Qualität überzeugt.',
      location: 'Berlin'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Quote className="absolute w-96 h-96 text-[#1a3a52] -top-24 -left-24 rotate-12" />
        <Quote className="absolute w-96 h-96 text-[#1a3a52] -bottom-24 -right-24 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Kundenstimmen
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Was unsere Kunden über uns sagen
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-[#00b050] opacity-50" strokeWidth={1.5} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00b050] text-[#00b050]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <h4 className="font-bold text-[#1a3a52]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#00b050] font-semibold">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white px-8 py-4 rounded-full shadow-lg">
            <Star className="w-6 h-6 fill-[#00b050] text-[#00b050]" />
            <span className="text-lg font-semibold">
              4.9/5 Sterne bei über 500 Bewertungen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
