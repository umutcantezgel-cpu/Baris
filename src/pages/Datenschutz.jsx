import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, ArrowLeft, Lock, Eye, Database, UserCheck } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Datenschutz auf einen Blick',
      icon: Eye,
      subsections: [
        {
          subtitle: 'Allgemeine Hinweise',
          content: (
            <>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Datenerfassung auf dieser Website',
          content: (
            <>
              <p className="font-semibold text-primary mb-2">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in
                dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="font-semibold text-primary mb-2">Wie erfassen wir Ihre Daten?</p>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular
                eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
                der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="font-semibold text-primary mb-2">Wofür nutzen wir Ihre Daten?</p>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden.
              </p>
              <p className="font-semibold text-primary mb-2">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: 'Hosting',
      icon: Database,
      subsections: [
        {
          subtitle: 'Externes Hosting',
          content: (
            <>
              <p className="mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
                handeln.
              </p>
              <p className="mb-4">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
                durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung
                seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese
                Daten befolgen.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: 'Allgemeine Hinweise und Pflichtinformationen',
      icon: Shield,
      subsections: [
        {
          subtitle: 'Datenschutz',
          content: (
            <>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
                und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
                geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Hinweis zur verantwortlichen Stelle',
          content: (
            <>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="font-semibold text-primary">Bariş Haustechnik GmbH</p>
              <p>Bariş Yilmaz</p>
              <p>Musterstraße 123</p>
              <p className="mb-4">35578 Wetzlar</p>
              <p className="mb-2">
                Telefon:{' '}
                <a href="tel:01637709101" className="text-secondary hover:underline focus-visible">
                  0163 770 91 01
                </a>
              </p>
              <p className="mb-4">
                E-Mail:{' '}
                <a
                  href="mailto:info@baris-haustechnik.de"
                  className="text-secondary hover:underline break-all focus-visible"
                >
                  info@baris-haustechnik.de
                </a>
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Speicherdauer',
          content: (
            <>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
                genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für
                die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                dieser Gründe.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
          content: (
            <>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                unberührt.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: 'Datenerfassung auf dieser Website',
      icon: Lock,
      subsections: [
        {
          subtitle: 'Server-Log-Dateien',
          content: (
            <>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
                sind:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Kontaktformular',
          content: (
            <>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
                Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Anfrage per E-Mail, Telefon oder Telefax',
          content: (
            <>
              <p className="mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
                inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
                Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis
                Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
                Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: 'Ihre Rechte',
      icon: UserCheck,
      subsections: [
        {
          subtitle: 'Auskunftsrecht, Löschung und Berichtigung',
          content: (
            <>
              <p className="mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                Berichtigung oder Löschung dieser Daten.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit an uns wenden.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Recht auf Einschränkung der Verarbeitung',
          content: (
            <>
              <p className="mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
                Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                  bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
                  der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                  können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                  Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben
                  Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                  Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                  nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
              </ul>
            </>
          ),
        },
        {
          subtitle: 'Recht auf Datenübertragbarkeit',
          content: (
            <>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
                in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
                dies nur, soweit es technisch machbar ist.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Widerspruchsrecht',
          content: (
            <>
              <p className="mb-4">
                Werden Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf
                Grundlage einer Interessenabwägung) oder Art. 6 Abs. 1 lit. e DSGVO
                (Datenverarbeitung im öffentlichen Interesse) erhoben, steht Ihnen das Recht zu,
                aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
              </p>
              <p>
                Nach erfolgtem Widerspruch verarbeiten wir die betroffenen personenbezogenen Daten
                nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die
                Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen,
                oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
          content: (
            <>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
                bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
            </>
          ),
        },
      ],
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
      <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="datenschutz-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Lock className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Datenschutz</span>
            </div>

            <h1
              id="datenschutz-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Datenschutzerklärung
            </h1>

            <p className="text-lg text-accent-light max-w-3xl mx-auto">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Hier erfahren Sie, wie wir
              mit Ihren Daten umgehen und welche Rechte Sie haben.
            </p>
          </header>

          {/* Main Content */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="glass rounded-3xl p-6 sm:p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary-dark/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-primary">{section.title}</h2>
                  </div>

                  <div className="space-y-8">
                    {section.subsections.map((subsection, subIndex) => (
                      <div
                        key={subIndex}
                        className={`${
                          subIndex > 0 ? 'pt-8 border-t border-primary/10' : ''
                        }`}
                      >
                        <h3 className="text-xl font-bold text-primary mb-4">
                          {subsection.subtitle}
                        </h3>
                        <div className="text-accent-light leading-relaxed">
                          {subsection.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 glass rounded-2xl p-6 text-center">
            <p className="text-sm text-accent-light">
              Quelle: Erstellt mit dem{' '}
              <a
                href="https://www.e-recht24.de/datenschutzerklaerung-generator.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline focus-visible"
              >
                Datenschutz-Generator von eRecht24
              </a>
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 glass rounded-2xl p-8 text-center bg-gradient-to-br from-secondary/5 to-primary/5">
            <Shield className="w-12 h-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-primary mb-4">
              Fragen zum Datenschutz?
            </h2>
            <p className="text-accent-light mb-6 max-w-2xl mx-auto">
              Wenn Sie Fragen zum Datenschutz haben oder Ihre Rechte ausüben möchten, kontaktieren
              Sie uns gerne. Wir helfen Ihnen weiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@baris-haustechnik.de"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all touch-target focus-visible"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>E-Mail senden</span>
              </a>
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
              to={createPageUrl('Impressum')}
              className="text-accent hover:text-secondary transition-colors focus-visible"
            >
              Impressum
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
