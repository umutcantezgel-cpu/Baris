import React, { useState } from 'react';
import { X, Search, Phone, Mail, MessageCircle, BookOpen, AlertCircle, Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HelpSidebar({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  const quickHelp = [
    {
      icon: AlertCircle,
      title: 'Notfall-Ratgeber',
      description: 'Sofortige Hilfe bei Rohrbruch & Co.',
      link: createPageUrl('Blog') + '?category=notfallhilfe',
      color: 'from-red-500/20 to-red-500/5'
    },
    {
      icon: BookOpen,
      title: 'Anleitungen & Tipps',
      description: 'Schritt-für-Schritt Guides',
      link: createPageUrl('Blog') + '?category=do_it_yourself',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      icon: Download,
      title: 'Checklisten',
      description: 'Praktische Downloads',
      link: createPageUrl('Blog') + '?downloads=true',
      color: 'from-green-500/20 to-green-500/5'
    }
  ];

  const faqItems = [
    'Wann ist eine Heizungswartung Pflicht?',
    'Welche Förderungen gibt es 2024?',
    'Wie entlüfte ich meine Heizung?',
    'Was tun bei Wasserrohrbruch?'
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Mobile optimized width */}
      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-[400px] lg:w-[450px] bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto safe-area-top safe-area-bottom ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Hilfe und Support"
        role="dialog"
        aria-modal="true"
      >
        {/* Header - Touch optimized */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white p-4 sm:p-6 z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Hilfe & Support</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Suchen Sie nach Hilfe..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12"
              aria-label="Suche"
            />
          </div>
        </div>

        {/* Content - Touch optimized spacing */}
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Emergency Contact */}
          <div className="relative touch-target" role="alert" aria-live="polite">
            <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-red-500/20" />
            <div className="relative p-4 text-center">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2 animate-pulse" aria-hidden="true" />
              <h3 className="font-bold text-primary mb-2">24h Notdienst</h3>
              <p className="text-sm text-accent/70 mb-3">Bei Notfällen sofort erreichbar</p>
              <a href="tel:01637709101" className="block">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white min-h-[48px] text-base">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  0163 7709101 anrufen
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Help Cards */}
          <nav aria-label="Schnellhilfe">
            <h3 className="font-bold text-primary mb-4 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              Schnellhilfe
            </h3>
            <div className="space-y-3">
              {quickHelp.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={onClose}
                    className="block relative group touch-target"
                  >
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 group-active:bg-white/40 transition-all duration-300" />
                    <div className="relative p-4 flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-accent/70">{item.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Popular FAQ */}
          <nav aria-label="Häufige Fragen">
            <h3 className="font-bold text-primary mb-4 text-lg">Häufige Fragen</h3>
            <div className="space-y-2">
              {faqItems.map((question, index) => (
                <Link
                  key={index}
                  to={createPageUrl('Blog') + '?category=faq'}
                  onClick={onClose}
                  className="block p-3 sm:p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 hover:border-secondary/30 active:bg-secondary/5 transition-all text-sm text-accent min-h-[48px] flex items-center"
                >
                  {question}
                </Link>
              ))}
            </div>
            <Link
              to={createPageUrl('Blog') + '?category=faq'}
              onClick={onClose}
              className="block mt-3 text-center text-secondary font-medium hover:underline py-2"
            >
              Alle FAQs anzeigen →
            </Link>
          </nav>

          {/* Contact Options */}
          <nav aria-label="Kontaktoptionen">
            <h3 className="font-bold text-primary mb-4 text-lg">Kontakt aufnehmen</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@baris-haustechnik.de"
                className="block relative group touch-target"
              >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 group-active:border-secondary/30 transition-all" />
                <div className="relative p-4 flex items-center gap-3 min-h-[56px]">
                  <Mail className="w-5 h-5 text-secondary" aria-hidden="true" />
                  <span className="text-primary font-medium">E-Mail senden</span>
                </div>
              </a>

              <Link
                to={createPageUrl('Contact')}
                onClick={onClose}
                className="block relative group touch-target"
              >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 group-active:border-secondary/30 transition-all" />
                <div className="relative p-4 flex items-center gap-3 min-h-[56px]">
                  <MessageCircle className="w-5 h-5 text-secondary" aria-hidden="true" />
                  <span className="text-primary font-medium">Rückruf vereinbaren</span>
                </div>
              </Link>
            </div>
          </nav>

          {/* Newsletter */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30" />
            <div className="relative p-4">
              <h3 className="font-bold text-primary mb-2">💡 Expertentipps</h3>
              <p className="text-sm text-accent/70 mb-3">
                Erhalten Sie monatlich hilfreiche Tipps & News
              </p>
              <Input
                type="email"
                placeholder="Ihre E-Mail"
                className="mb-2 h-12"
                aria-label="E-Mail für Newsletter"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 min-h-[48px]">
                Anmelden
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
