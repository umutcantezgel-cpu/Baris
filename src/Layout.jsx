import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  HelpCircle,
  AlertCircle,
  Shield,
  Award,
} from 'lucide-react';
import { createPageUrl } from '@/utils';
import HelpSidebar from '@/components/layout/HelpSidebar';
import FloatingEmergencyButton from '@/components/home/FloatingEmergencyButton';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpSidebarOpen, setHelpSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Startseite', path: createPageUrl('Home') },
    { name: 'Leistungen', path: createPageUrl('Services') },
    { name: 'Über uns', path: createPageUrl('About') },
    { name: 'Referenzen', path: createPageUrl('Projects') },
    { name: 'Blog & Hilfe', path: createPageUrl('Blog') },
    { name: 'Kontakt', path: createPageUrl('Contact') },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/20">
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-secondary focus:text-white focus:rounded-lg focus:shadow-lg focus-visible"
        aria-label="Zum Hauptinhalt springen"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary/5'
            : 'bg-white/80 backdrop-blur-md'
        }`}
        role="banner"
      >
        {/* Top bar - Hidden on mobile */}
        <div className="hidden lg:block border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              {/* Contact info */}
              <div className="flex items-center gap-6 text-accent">
                <a
                  href="tel:01637709101"
                  className="flex items-center gap-2 hover:text-secondary transition-colors focus-visible"
                  aria-label="Telefonnummer anrufen"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>0163 770 91 01</span>
                </a>
                <a
                  href="mailto:info@baris-haustechnik.de"
                  className="flex items-center gap-2 hover:text-secondary transition-colors focus-visible"
                  aria-label="E-Mail senden"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>info@baris-haustechnik.de</span>
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Mo-Fr: 8-18 Uhr</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-accent">
                  <Shield className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Meisterbetrieb</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Award className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Zertifiziert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to={createPageUrl('Home')}
              className="flex items-center gap-3 group focus-visible"
              aria-label="Bariş Haustechnik - Zur Startseite"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-xl sm:text-2xl" aria-hidden="true">
                  B
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg sm:text-xl font-black text-primary leading-tight">
                  Bariş Haustechnik
                </div>
                <div className="text-xs text-accent-light">Sanitär • Heizung • Solar</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus-visible ${
                    isActive(item.path)
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-accent hover:text-primary hover:bg-primary/5'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Help button */}
              <button
                onClick={() => setHelpSidebarOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-primary hover:bg-primary/5 transition-all duration-200 font-medium touch-target focus-visible"
                aria-label="Hilfe öffnen"
              >
                <HelpCircle className="w-5 h-5" aria-hidden="true" />
                <span className="hidden md:inline">Hilfe</span>
              </button>

              {/* Emergency button */}
              <a
                href="tel:01637709101"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="24h Notdienst anrufen"
              >
                <AlertCircle className="w-5 h-5" aria-hidden="true" />
                <span>Notdienst</span>
              </a>

              {/* Mobile emergency button - Smaller */}
              <a
                href="tel:01637709101"
                className="sm:hidden w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg flex items-center justify-center touch-target focus-visible"
                aria-label="24h Notdienst anrufen"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/5 transition-colors touch-target focus-visible"
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 top-16 sm:top-20 z-50 bg-white/98 backdrop-blur-xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2" aria-label="Mobile Hauptnavigation">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl font-semibold transition-all duration-200 touch-target ${
                    isActive(item.path)
                      ? 'bg-secondary text-white shadow-lg'
                      : 'bg-white/60 text-accent hover:bg-primary/5 hover:text-primary'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              ))}

              {/* Mobile help button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setHelpSidebarOpen(true);
                }}
                className="w-full flex items-center justify-between px-6 py-4 rounded-xl font-semibold bg-white/60 text-accent hover:bg-primary/5 hover:text-primary transition-all duration-200 touch-target"
                aria-label="Hilfe öffnen"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5" aria-hidden="true" />
                  Hilfe & Support
                </span>
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Mobile contact info */}
              <div className="mt-8 pt-8 border-t border-primary/10 space-y-4">
                <a
                  href="tel:01637709101"
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/60 text-accent hover:bg-primary/5 transition-all touch-target"
                >
                  <Phone className="w-5 h-5 text-secondary" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-medium text-accent-light">Telefon</div>
                    <div className="font-semibold text-primary">0163 770 91 01</div>
                  </div>
                </a>
                <a
                  href="mailto:info@baris-haustechnik.de"
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/60 text-accent hover:bg-primary/5 transition-all touch-target"
                >
                  <Mail className="w-5 h-5 text-secondary" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-medium text-accent-light">E-Mail</div>
                    <div className="font-semibold text-primary text-sm">
                      info@baris-haustechnik.de
                    </div>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1" role="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-primary via-primary-light to-accent text-white mt-20" role="contentinfo">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden" aria-hidden="true">
          <svg
            className="absolute w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"
              fill="currentColor"
              className="text-gray-50"
            />
          </svg>
        </div>

        <div className="relative pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main footer content */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-black text-2xl">B</span>
                  </div>
                  <div>
                    <div className="text-xl font-black">Bariş Haustechnik</div>
                    <div className="text-sm text-white/70">Ihr Meisterbetrieb</div>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Professionelle Haustechnik-Lösungen seit über 25 Jahren. Ihr zuverlässiger Partner
                  für Sanitär, Heizung und Solartechnik in Wetzlar und Umgebung.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target focus-visible"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target focus-visible"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target focus-visible"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <nav aria-label="Footer Navigation">
                <h3 className="text-lg font-bold mb-4">Schnellzugriff</h3>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 focus-visible"
                      >
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-4">Kontakt</h3>
                <address className="not-italic space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-white/80">Bariş Haustechnik GmbH</div>
                      <div className="text-white/80">Musterstraße 123</div>
                      <div className="text-white/80">35578 Wetzlar</div>
                    </div>
                  </div>
                  <a
                    href="tel:01637709101"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors focus-visible"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>0163 770 91 01</span>
                  </a>
                  <a
                    href="mailto:info@baris-haustechnik.de"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors break-all focus-visible"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>info@baris-haustechnik.de</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-white/80">
                      <div>Mo-Fr: 8:00 - 18:00 Uhr</div>
                      <div className="text-secondary font-semibold mt-1">24h Notdienst verfügbar</div>
                    </div>
                  </div>
                </address>
              </div>

              {/* Service Area */}
              <div>
                <h3 className="text-lg font-bold mb-4">Service-Gebiet</h3>
                <p className="text-sm text-white/80 mb-4">
                  Wir sind in folgenden Regionen für Sie tätig:
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    Wetzlar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    Gießen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    Marburg
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    Lahn-Dill-Kreis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    Limburg-Weilburg
                  </li>
                </ul>
                <p className="text-xs text-white/60 mt-4">
                  Weitere Standorte auf Anfrage
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
                <div className="text-center sm:text-left">
                  &copy; {new Date().getFullYear()} Bariş Haustechnik GmbH. Alle Rechte vorbehalten.
                </div>
                <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Footer Legal">
                  <Link
                    to={createPageUrl('Impressum')}
                    className="hover:text-white transition-colors focus-visible"
                  >
                    Impressum
                  </Link>
                  <Link
                    to={createPageUrl('Datenschutz')}
                    className="hover:text-white transition-colors focus-visible"
                  >
                    Datenschutz
                  </Link>
                  <a href="#" className="hover:text-white transition-colors focus-visible">
                    AGB
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Sidebar */}
      <HelpSidebar isOpen={helpSidebarOpen} onClose={() => setHelpSidebarOpen(false)} />

      {/* Floating Emergency Button */}
      <FloatingEmergencyButton />
    </div>
  );
}
