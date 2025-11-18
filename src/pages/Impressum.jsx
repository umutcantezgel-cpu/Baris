import React from 'react';

export default function Impressum() {
  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />
          
          <div className="relative p-12">
            <h1 className="text-4xl font-bold text-[#1a3a52] mb-8">Impressum</h1>

            <div className="space-y-8 text-[#2c3e50]">
              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="leading-relaxed">
                  Bariş Haustechnik<br />
                  Veli Bariş<br />
                  Oberer Käuzerain 14<br />
                  35792 Löhnberg
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  Kontakt
                </h2>
                <p className="leading-relaxed">
                  Telefon: 06471 3790879<br />
                  Mobil: 0163 7709101<br />
                  E-Mail: info@baris-haustechnik.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p className="leading-relaxed">
                  Berufsbezeichnung: Installateur- und Heizungsbauermeister<br />
                  Zuständige Kammer: Handwerkskammer Wiesbaden<br />
                  Verliehen in: Deutschland
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
