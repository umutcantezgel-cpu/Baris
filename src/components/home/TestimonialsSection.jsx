import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

export default function TestimonialsSection({ isVisible = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Familie Schmidt',
      location: 'Wetzlar',
      rating: 5,
      date: 'November 2024',
      text: 'Herr Bariş und sein Team haben unsere komplette Heizungsanlage modernisiert. Die Beratung war hervorragend und die Umsetzung absolut professionell. Wir sparen jetzt 40% Heizkosten und die Wärmepumpe läuft einwandfrei. Absolute Empfehlung!',
      service: 'Heizungsmodernisierung',
      avatar: 'FS',
    },
    {
      id: 2,
      name: 'Michael Weber',
      location: 'Gießen',
      rating: 5,
      date: 'Oktober 2024',
      text: 'Unser Notfall am Wochenende wurde innerhalb von 2 Stunden behoben. Kompetent, freundlich und zu fairen Preisen. So stellt man sich einen Handwerksbetrieb vor. Der 24h-Service ist wirklich Gold wert!',
      service: '24h Notdienst',
      avatar: 'MW',
    },
    {
      id: 3,
      name: 'Dr. Julia Hoffmann',
      location: 'Marburg',
      rating: 5,
      date: 'September 2024',
      text: 'Die komplette Badsanierung wurde termingerecht und sauber durchgeführt. Die Planung war durchdacht und das Ergebnis übertrifft unsere Erwartungen. Besonders beeindruckt hat uns die Zuverlässigkeit und Sauberkeit.',
      service: 'Badsanierung',
      avatar: 'JH',
    },
    {
      id: 4,
      name: 'Thomas Müller (Architekt)',
      location: 'Wetzlar',
      rating: 5,
      date: 'August 2024',
      text: 'Als Architekt arbeite ich regelmäßig mit Bariş Haustechnik zusammen. Die fachliche Kompetenz, Termintreue und Qualität der Arbeit sind herausragend. Ein verlässlicher Partner für anspruchsvolle Projekte.',
      service: 'Gewerbe-Projekte',
      avatar: 'TM',
    },
    {
      id: 5,
      name: 'Familie Yilmaz',
      location: 'Wetzlar',
      rating: 5,
      date: 'Juli 2024',
      text: 'Die Solarthermie-Anlage wurde perfekt geplant und installiert. Die Förderung wurde komplett abgewickelt und wir wurden super beraten. Nach 6 Monaten können wir sagen: Beste Investition! Vielen Dank!',
      service: 'Solartechnik',
      avatar: 'FY',
    },
    {
      id: 6,
      name: 'Restaurant "Zum Hirsch"',
      location: 'Gießen',
      rating: 5,
      date: 'Juni 2024',
      text: 'Die Gasleitungen und Sanitäranlagen für unsere Großküche wurden fachmännisch installiert. Trotz enger Zeitvorgaben wurde alles pünktlich fertig. Absolut professionelle Arbeit!',
      service: 'Gasinstallation',
      avatar: 'ZH',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            <Star className="w-4 h-4 text-secondary fill-secondary" aria-hidden="true" />
            <span>Kundenmeinungen</span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 sm:mb-6"
          >
            Das sagen unsere{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              zufriedenen Kunden
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-accent-light text-balance">
            Überzeugen Sie sich von der Qualität unserer Arbeit und unserem Service
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Main testimonial card */}
          <div
            className={`glass rounded-3xl p-8 sm:p-12 lg:p-16 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-secondary/20 to-secondary-dark/20 flex items-center justify-center">
                <Quote
                  className="w-8 h-8 sm:w-10 sm:h-10 text-secondary"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6" aria-label="5 von 5 Sternen">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-center mb-8">
              <p className="text-lg sm:text-xl lg:text-2xl text-accent leading-relaxed text-balance italic">
                "{currentTestimonial.text}"
              </p>
            </blockquote>

            {/* Author info */}
            <div className="flex flex-col items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                {currentTestimonial.avatar}
              </div>

              {/* Name and details */}
              <div className="text-center">
                <div className="font-bold text-lg sm:text-xl text-primary mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm sm:text-base text-accent-light mb-2">
                  {currentTestimonial.location} • {currentTestimonial.date}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-xs sm:text-sm font-medium text-secondary">
                  {currentTestimonial.service}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full glass glass-hover flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-target focus-visible"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft
                className="w-6 h-6 text-primary group-hover:-translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2" role="tablist" aria-label="Bewertungen Navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full touch-target focus-visible ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-secondary'
                      : 'w-3 h-3 bg-primary/20 hover:bg-primary/40'
                  }`}
                  aria-label={`Bewertung ${index + 1} anzeigen`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full glass glass-hover flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-target focus-visible"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight
                className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* All testimonials grid - compact view */}
        <div
          className={`mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`group text-left glass glass-hover rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 active:scale-95 touch-target ${
                index === currentIndex ? 'ring-2 ring-secondary' : ''
              }`}
              aria-label={`Bewertung von ${testimonial.name} anzeigen`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm sm:text-base text-primary truncate">
                    {testimonial.name}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text preview */}
              <p className="text-xs sm:text-sm text-accent-light line-clamp-3 mb-2">
                "{testimonial.text}"
              </p>

              {/* Service tag */}
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/10 text-xs font-medium text-secondary">
                {testimonial.service}
              </div>
            </button>
          ))}
        </div>

        {/* Trust seal */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass">
            <Star className="w-8 h-8 text-amber-400 fill-amber-400" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-primary">5.0</div>
              <div className="text-sm text-accent-light">Durchschnittliche Bewertung</div>
            </div>
            <div className="h-12 w-px bg-primary/20" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-primary">
                {testimonials.length}+
              </div>
              <div className="text-sm text-accent-light">Zufriedene Kunden</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
