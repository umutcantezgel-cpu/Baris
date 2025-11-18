import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, ArrowLeft, Shield } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Angaben gemäß § 5 TMG',
      content: (
        <>
          <p className="font-semibold text-primary">Bariş Haustechnik GmbH</p>
          <p>Musterstraße 123</p>
          <p>35578 Wetzlar</p>
          <p>Deutschland</p>
        </>
      ),
    },
    {
      title: 'Vertreten durch',
      content: (
        <>
          <p>Geschäftsführer: Bariş Yilmaz</p>
        </>
      ),
    },
    {
      title: 'Kontakt',
      content: (
        <>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4 text-secondary" aria-hidden="true" />
            <a href="tel:01637709101" className="text-secondary hover:underline focus-visible">
              0163 770 91 01
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-secondary" aria-hidden="true" />
            <a
              href="mailto:info@baris-haustechnik.de"
              className="text-secondary hover:underline break-all focus-visible"
            >
              info@baris-haustechnik.de
            </a>
          </div>
        </>
      ),
    },
    {
      title: 'Registereintrag',
      content: (
        <>
          <p>Eintragung im Handelsregister</p>
          <p>Registergericht: Amtsgericht Wetzlar</p>
          <p>Registernummer: HRB 12345</p>
        </>
      ),
    },
    {
      title: 'Umsatzsteuer-ID',
      content: (
        <>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
          <p className="font-semibold text-primary">DE123456789</p>
        </>
      ),
    },
    {
      title: 'Berufsbezeichnung und berufsrechtliche Regelungen',
      content: (
        <>
          <p>Berufsbezeichnung: Installateur- und Heizungsbauermeister</p>
          <p>Verliehen in: Deutschland</p>
          <p className="mt-4">Zuständige Kammer:</p>
          <p>Handwerkskammer Wiesbaden</p>
          <p>Bierstadter Straße 45</p>
          <p>65189 Wiesbaden</p>
          <p className="mt-4">
            Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)
          </p>
        </>
      ),
    },
    {
      title: 'Aufsichtsbehörde',
      content: (
        <>
          <p>Handwerkskammer Wiesbaden</p>
          <p>Bierstadter Straße 45</p>
          <p>65189 Wiesbaden</p>
        </>
      ),
    },
    {
      title: 'Versicherung',
      content: (
        <>
          <p>Betriebshaftpflichtversicherung</p>
          <p>Name und Sitz des Versicherers:</p>
          <p className="font-semibold text-primary">
            Allianz Versicherungs-AG
            <br />
            10900 Berlin
          </p>
          <p className="mt-2">Geltungsraum der Versicherung: Deutschland</p>
        </>
      ),
    },
    {
      title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      content: (
        <>
          <p>Bariş Yilmaz</p>
          <p>Musterstraße 123</p>
          <p>35578 Wetzlar</p>
        </>
      ),
    },
    {
      title: 'EU-Streitschlichtung',
      content: (
        <>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline focus-visible"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </>
      ),
    },
    {
      title: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
      content: (
        <>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </>
      ),
    },
    {
      title: 'Haftung für Inhalte',
      content: (
        <>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </>
      ),
    },
    {
      title: 'Haftung für Links',
      content: (
        <>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </>
      ),
    },
    {
      title: 'Urheberrecht',
      content: (
        <>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
            und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
            dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to={createPageUrl('Home')}
          className="inline-flex items-center gap-2 text-accent hover:text-secondary transition-colors focus-visible"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          <span>Zurück zur Startseite</span>
        </Link>
      </div>

      {/* Content */}
      <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="impressum-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Shield className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Rechtliches</span>
            </div>

            <h1
              id="impressum-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Impressum
            </h1>

            <p className="text-lg text-accent-light max-w-3xl mx-auto">
              Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </p>
          </header>

          {/* Main Content */}
          <div className="glass rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="pb-10 border-b border-primary/10 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="text-accent-light leading-relaxed space-y-2">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-10 pt-10 border-t border-primary/10">
              <p className="text-sm text-accent-light">
                Quelle: Erstellt mit dem{' '}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline focus-visible"
                >
                  Impressum-Generator von eRecht24
                </a>
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 glass rounded-2xl p-8 text-center bg-gradient-to-br from-secondary/5 to-primary/5">
            <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-primary mb-4">Haben Sie Fragen?</h2>
            <p className="text-accent-light mb-6">
              Bei Fragen zum Impressum oder zu rechtlichen Themen kontaktieren Sie uns gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all touch-target focus-visible"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>Kontakt aufnehmen</span>
              </Link>
              <a
                href="tel:01637709101"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass glass-hover text-primary font-semibold rounded-xl transition-all touch-target focus-visible"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>0163 770 91 01</span>
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              to={createPageUrl('Datenschutz')}
              className="text-accent hover:text-secondary transition-colors focus-visible"
            >
              Datenschutzerklärung
            </Link>
            <span className="text-accent-light">•</span>
            <Link
              to={createPageUrl('Contact')}
              className="text-accent hover:text-secondary transition-colors focus-visible"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
