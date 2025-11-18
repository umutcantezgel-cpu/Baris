import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  Shield,
  Target,
  Star,
  Phone,
  ArrowRight,
  Building2,
  Wrench,
  Clock,
} from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Qualität',
      description:
        'Höchste Handwerkskunst und Meisterqualität in jedem Projekt. Wir setzen auf bewährte Techniken und moderne Innovationen.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      title: 'Zuverlässigkeit',
      description:
        'Termintreue und Verlässlichkeit sind für uns selbstverständlich. Auf unser Wort können Sie sich verlassen.',
      color: 'text-secondary',
      bgColor: 'bg-green-50',
    },
    {
      icon: Heart,
      title: 'Kundennähe',
      description:
        'Persönliche Betreuung und individuelle Lösungen stehen bei uns im Mittelpunkt. Ihre Zufriedenheit ist unser Antrieb.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Target,
      title: 'Vertrauen',
      description:
        'Transparente Kommunikation und faire Preise schaffen Vertrauen. Über 500 zufriedene Kunden sprechen für sich.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  const team = [
    {
      name: 'Bariş Yilmaz',
      role: 'Geschäftsführer & Installateur-Meister',
      description:
        'Mit über 25 Jahren Erfahrung in der Haustechnik leitet Bariş das Unternehmen mit Leidenschaft und Expertise.',
      specialties: ['Sanitär', 'Heizung', 'Projektleitung'],
      avatar: 'BY',
    },
    {
      name: 'Unser Team',
      role: '12 qualifizierte Fachkräfte',
      description:
        'Erfahrene Gesellen, Monteure und Auszubildende arbeiten Hand in Hand für Ihren Erfolg.',
      specialties: ['Installation', 'Wartung', 'Kundenservice'],
      avatar: 'TEAM',
    },
  ];

  const certifications = [
    {
      title: 'Meisterbetrieb',
      description: 'Handwerkskammer Wiesbaden',
      icon: Award,
    },
    {
      title: 'TÜV Zertifiziert',
      description: 'Für Gasinstallationen',
      icon: Shield,
    },
    {
      title: 'KfW Partner',
      description: 'Energieeffizienz-Experte',
      icon: Star,
    },
    {
      title: 'Fachbetrieb',
      description: 'WHG §19l geprüft',
      icon: CheckCircle2,
    },
  ];

  const milestones = [
    { year: '1998', event: 'Gründung des Unternehmens' },
    { year: '2005', event: 'Meisterprüfung erfolgreich absolviert' },
    { year: '2010', event: 'Expansion: 5 Mitarbeiter' },
    { year: '2015', event: 'Spezialisierung auf Solartechnik' },
    { year: '2020', event: '500+ abgeschlossene Projekte' },
    { year: '2024', event: '12 Mitarbeiter, modernste Ausstattung' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="about-hero-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Building2 className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Über uns</span>
            </div>

            <h1
              id="about-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Ihr zuverlässiger Partner für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Haustechnik
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent-light text-balance">
              Seit über 25 Jahren Ihr Meisterbetrieb für Sanitär, Heizung und Solar in Wetzlar und
              Umgebung. Qualität, Zuverlässigkeit und Kundenzufriedenheit sind unsere Leitprinzipien.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Story */}
            <div>
              <h2 id="story-heading" className="text-3xl sm:text-4xl font-black text-primary mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-accent-light leading-relaxed">
                <p>
                  Was 1998 als Ein-Mann-Betrieb begann, ist heute ein etabliertes Unternehmen mit 12
                  qualifizierten Mitarbeitern. Die Vision von Bariş Yilmaz war klar: Haustechnik auf
                  höchstem Niveau mit persönlichem Service zu verbinden.
                </p>
                <p>
                  Nach erfolgreicher Meisterprüfung im Jahr 2005 expandierte das Unternehmen stetig.
                  Durch kontinuierliche Weiterbildung und Investitionen in moderne Technik können wir
                  heute ein umfassendes Leistungsspektrum anbieten - von klassischen Sanitär- und
                  Heizungsinstallationen bis hin zu innovativen Solarlösungen.
                </p>
                <p>
                  Was uns auszeichnet, ist die Kombination aus traditionellem Handwerk und modernem
                  Know-how. Jedes Projekt - ob Neubau, Sanierung oder Wartung - wird mit derselben
                  Sorgfalt und Professionalität durchgeführt.
                </p>
                <p className="font-semibold text-primary">
                  Über 500 zufriedene Kunden und zahlreiche erfolgreiche Projekte bestätigen unseren
                  Qualitätsanspruch.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '25+', label: 'Jahre Erfahrung' },
                  { value: '12', label: 'Mitarbeiter' },
                  { value: '500+', label: 'Projekte' },
                  { value: '100%', label: 'Zufriedenheit' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm border border-white/30"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-accent-light font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Timeline */}
            <div>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-secondary" aria-hidden="true" />
                  Unsere Meilensteine
                </h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {milestone.year}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="w-0.5 h-full bg-gradient-to-b from-secondary to-transparent mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-accent font-medium leading-relaxed">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-br from-secondary/5 to-primary/5"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-black text-primary mb-4">
              Unsere{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Werte
              </span>
            </h2>
            <p className="text-lg text-accent-light">
              Diese Prinzipien leiten uns bei allem, was wir tun
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article
                  key={index}
                  className="glass glass-hover rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${value.bgColor} mb-4 sm:mb-6`}
                  >
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${value.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-accent-light leading-relaxed">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Users className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Unser Team</span>
            </div>

            <h2 id="team-heading" className="text-3xl sm:text-4xl font-black text-primary mb-4">
              Die Menschen hinter{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Bariş Haustechnik
              </span>
            </h2>
            <p className="text-lg text-accent-light">
              Qualifizierte Fachkräfte mit Leidenschaft für Haustechnik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <article
                key={index}
                className="glass glass-hover rounded-2xl p-8 sm:p-10 text-center transition-all duration-300 hover:scale-105"
              >
                {/* Avatar */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl sm:text-3xl font-black mx-auto mb-6 shadow-xl">
                  {member.avatar}
                </div>

                {/* Info */}
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-secondary font-semibold mb-4">{member.role}</p>
                <p className="text-accent-light leading-relaxed mb-6">{member.description}</p>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-secondary/10 text-sm font-medium text-secondary"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
        aria-labelledby="cert-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 id="cert-heading" className="text-3xl sm:text-4xl font-black text-primary mb-4">
              Zertifizierungen &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Qualifikationen
              </span>
            </h2>
            <p className="text-lg text-accent-light">
              Geprüfte Qualität und kontinuierliche Weiterbildung
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary-dark/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">{cert.title}</h3>
                  <p className="text-sm text-accent-light">{cert.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              'Handwerkskammer',
              'Fachverband SHK',
              'Versichert',
              'ISO 9001',
              'Energieeffizienz-Experte',
            ].map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20" aria-label="Kontakt Call-to-Action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                Lernen Sie uns kennen!
              </h2>
              <p className="text-lg text-accent-light mb-8">
                Überzeugen Sie sich persönlich von unserer Qualität und Kompetenz. Wir freuen uns
                auf Ihre Kontaktaufnahme.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={createPageUrl('Contact')}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  aria-label="Jetzt Beratungstermin vereinbaren"
                >
                  <span>Beratungstermin vereinbaren</span>
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href="tel:01637709101"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  aria-label="Direkt anrufen"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>0163 770 91 01</span>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-accent-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Kostenlose Erstberatung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Unverbindliches Angebot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Schnelle Rückmeldung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
