import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  HelpCircle,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import HelpSidebar from '@/components/layout/HelpSidebar';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelpSidebarOpen, setIsHelpSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { name: 'Home', path: createPageUrl('Home') },
    { name: 'Services', path: createPageUrl('Services') },
    { name: 'About', path: createPageUrl('About') },
    { name: 'Projects', path: createPageUrl('Projects') },
    { name: 'Blog', path: createPageUrl('Blog') },
    { name: 'Contact', path: createPageUrl('Contact') }
  ];

  const serviceAreas = [
    'Berlin',
    'Hamburg',
    'München',
    'Köln',
    'Frankfurt',
    'Stuttgart',
    'Düsseldorf',
    'Dortmund'
  ];

  const quickLinks = [
    { name: 'Impressum', path: createPageUrl('Impressum') },
    { name: 'Datenschutz', path: createPageUrl('Datenschutz') }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/90 shadow-lg'
            : 'backdrop-blur-xl bg-white/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00b050] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] p-2 rounded-xl">
                  <Wrench className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1a3a52] leading-tight">
                  Haustechnik
                </span>
                <span className="text-xs text-gray-600 leading-tight">
                  Ihr zuverlässiger Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-[#00b050] bg-[#00b050]/10'
                      : 'text-gray-700 hover:text-[#1a3a52] hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => setIsHelpSidebarOpen(true)}
                className="min-h-[44px] text-gray-700 hover:text-[#1a3a52] hover:bg-gray-100"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Hilfe
              </Button>

              <a href="tel:+491234567890">
                <Button className="min-h-[44px] bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  24h Notdienst
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-700 hover:text-[#1a3a52] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 border-t border-gray-200 shadow-xl">
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`min-h-[44px] flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-[#00b050] bg-[#00b050]/10'
                        : 'text-gray-700 hover:text-[#1a3a52] hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="border-t border-gray-200 my-2"></div>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsHelpSidebarOpen(true);
                  }}
                  className="min-h-[44px] flex items-center px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-[#1a3a52] hover:bg-gray-100 transition-all duration-300"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Hilfe
                </button>

                <a href="tel:+491234567890">
                  <Button className="min-h-[44px] w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    24h Notdienst
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a3a52] via-[#2d5a7b] to-[#1a3a52] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#00b050] p-2 rounded-lg">
                  <Wrench className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-xl font-bold">Haustechnik</span>
              </div>
              <p className="text-white/80 mb-4">
                Ihr zuverlässiger Partner für professionelle Sanitär-, Heizungs- und Klimatechnik.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center text-white/80 hover:text-white transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 text-[#00b050]" />
                  <div>
                    <a
                      href="tel:+491234567890"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      +49 123 456 7890
                    </a>
                    <p className="text-xs text-white/60">24/7 Notdienst</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 text-[#00b050]" />
                  <a
                    href="mailto:info@haustechnik.de"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@haustechnik.de
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#00b050]" />
                  <span className="text-white/80">
                    Musterstraße 123<br />
                    12345 Musterstadt
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 mt-0.5 text-[#00b050]" />
                  <div className="text-white/80">
                    <p>Mo-Fr: 08:00 - 18:00</p>
                    <p>Sa: 09:00 - 14:00</p>
                    <p className="text-[#00b050] font-medium">Notdienst: 24/7</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h3 className="text-lg font-bold mb-4">Servicegebiet</h3>
              <p className="text-white/80 text-sm mb-3">
                Wir sind für Sie in folgenden Städten tätig:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="text-white/80 text-sm flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-[#00b050] rounded-full mr-2"></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Haustechnik. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Sidebar */}
      <HelpSidebar
        isOpen={isHelpSidebarOpen}
        onClose={() => setIsHelpSidebarOpen(false)}
      />
    </div>
  );
};

export default Layout;
