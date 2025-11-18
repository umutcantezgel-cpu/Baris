import React from 'react';
import { Award, Users, Target, Heart, Clock, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Qualität',
      description: 'Höchste Handwerkskunst mit über 30 Jahren Erfahrung'
    },
    {
      icon: Clock,
      title: 'Zuverlässigkeit',
      description: 'Termintreue und pünktliche Ausführung garantiert'
    },
    {
      icon: Heart,
      title: 'Kundennähe',
      description: 'Persönliche Beratung und individuelle Lösungen'
    },
    {
      icon: Shield,
      title: 'Vertrauen',
      description: 'Transparente Preise und faire Abrechnung'
    }
  ];

  const team = [
    {
      name: 'Veli Bariş',
      position: 'Geschäftsführer & Meister',
      description: 'Sanitär-, Heizungs- und Klimatechnik Meister mit über 30 Jahren Berufserfahrung'
    },
    {
      name: 'Unser Team',
      position: 'Fachkräfte',
      description: 'Qualifizierte Gesellen und Auszubildende für alle Bereiche der Haustechnik'
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Über uns
          </h1>
          <p className="text-xl text-[#2c3e50]/70 max-w-3xl mx-auto">
            Ihr Partner für zukunftssichere Haustechnik in Wetzlar und Umgebung
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
              Bariş Haustechnik – Tradition trifft Innovation
            </h2>
            <div className="space-y-4 text-[#2c3e50]/80 leading-relaxed">
              <p>
                Seit über drei Jahrzehnten steht der Name Bariş für Qualität, Zuverlässigkeit und Fachkompetenz
                im Bereich Sanitär, Heizung und Solartechnik. Was als kleiner Handwerksbetrieb begann, hat sich
                zu einem modernen Dienstleister entwickelt, der traditionelles Handwerk mit innovativer Technik verbindet.
              </p>
              <p>
                Unser Firmensitz in Löhnberg bei Weilburg ist der zentrale Ausgangspunkt für unsere Projekte
                in der gesamten Region – von Wetzlar über Gießen bis ins Rhein-Main-Gebiet. Mit einem erfahrenen
                Team aus Meistern, Gesellen und Auszubildenden realisieren wir jährlich hunderte Projekte für
                Privat- und Gewerbekunden.
              </p>
              <p>
                Besonders wichtig ist uns der persönliche Kontakt zu unseren Kunden. Von der ersten Beratung
                über die fachgerechte Umsetzung bis zum langfristigen Service stehen wir Ihnen mit Rat und Tat
                zur Seite. Dabei setzen wir auf nachhaltige, energieeffiziente Lösungen, die nicht nur die Umwelt
                schonen, sondern auch Ihre Betriebskosten senken.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-3xl border border-white/30" />
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a3a52]/5 to-[#00b050]/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#00b050]" />
                </div>
                <p className="text-[#1a3a52]/60 font-medium text-lg">Team-Foto Platzhalter</p>
                <p className="text-[#2c3e50]/40 text-sm mt-2">Empfohlen: Gruppenbild vor Firmenfahrzeug</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_64px_rgba(0,176,80,0.2)] transition-all duration-300" />
                  <div className="relative p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00b050]/20 to-[#00b050]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#00b050]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{value.title}</h3>
                    <p className="text-sm text-[#2c3e50]/70">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
            Unser Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />
                <div className="relative p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#00b050] flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#00b050] text-center font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-[#2c3e50]/70 text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52]/5 to-[#00b050]/5 backdrop-blur-xl rounded-3xl border border-white/30" />
          <div className="relative p-12 text-center">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
              Zertifizierungen & Mitgliedschaften
            </h2>
            <p className="text-[#2c3e50]/70 mb-8 max-w-2xl mx-auto">
              Als Innungsfachbetrieb sind wir Mitglied der Sanitär-, Heizungs- und Klima-Innung
              und erfüllen höchste Qualitätsstandards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative group">
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 group-hover:shadow-lg transition-all" />
                  <div className="relative h-32 flex items-center justify-center p-4">
                    <div className="text-center">
                      <Award className="w-12 h-12 mx-auto mb-2 text-[#00b050]" />
                      <p className="text-xs text-[#2c3e50]/60">Zertifikat {item}</p>
                      <p className="text-xs text-[#2c3e50]/40">150×200 px</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
