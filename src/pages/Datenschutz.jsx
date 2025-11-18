import React from 'react';

export default function Datenschutz() {
  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />
          
          <div className="relative p-12">
            <h1 className="text-4xl font-bold text-[#1a3a52] mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8 text-[#2c3e50]">
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2 mt-4">
                  Allgemeine Hinweise
                </h3>
                <p className="leading-relaxed mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <p className="leading-relaxed mb-4">
                  Bariş Haustechnik<br />
                  Veli Bariş<br />
                  Oberer Käuzerain 14<br />
                  35792 Löhnberg<br />
                  Telefon: 0163 7709101<br />
                  E-Mail: info@baris-haustechnik.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  3. Ihre Rechte
                </h2>
                <p className="leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                  Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                  Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
