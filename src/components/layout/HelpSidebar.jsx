import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  Phone,
  Mail,
  MessageCircle,
  AlertCircle,
  FileText,
  CheckSquare,
  ChevronRight,
  Clock,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HelpSidebar = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const quickHelpCards = [
    {
      icon: AlertCircle,
      title: 'Notfall-Ratgeber',
      description: 'Was tun bei Rohrbruch, Heizungsausfall & Co?',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FileText,
      title: 'Anleitungen',
      description: 'Schritt-für-Schritt Guides für häufige Fragen',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CheckSquare,
      title: 'Checklisten',
      description: 'Wartung, Winterfest & Energiesparen',
      color: 'from-green-500 to-green-600'
    }
  ];

  const popularFAQs = [
    'Wie oft sollte meine Heizung gewartet werden?',
    'Was tun bei einem Wasserrohrbruch?',
    'Wie kann ich Energie sparen?',
    'Wann ist eine Rohrreinigung notwendig?',
    'Kosten für eine Heizungswartung?'
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleCallbackRequest = (e) => {
    e.preventDefault();
    // Handle callback request
    console.log('Callback request:', phone);
    setPhone('');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/95 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-[#1a3a52]">Hilfe & Support</h2>
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Close help sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Wie können wir Ihnen helfen?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 min-h-[44px] rounded-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Emergency Contact Section */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-red-900">24h Notdienst</h3>
            </div>
            <p className="text-red-800 text-sm mb-3">
              Bei Notfällen sind wir rund um die Uhr für Sie erreichbar!
            </p>
            <a href="tel:+491234567890">
              <Button className="min-h-[44px] w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                +49 123 456 7890
              </Button>
            </a>
            <div className="flex items-center gap-2 mt-3 text-xs text-red-700">
              <Clock className="w-4 h-4" />
              <span>Durchschnittliche Antwortzeit: &lt; 5 Min</span>
            </div>
          </div>

          {/* Quick Help Cards */}
          <div>
            <h3 className="font-bold text-[#1a3a52] mb-3">Schnelle Hilfe</h3>
            <div className="space-y-3">
              {quickHelpCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <button
                    key={index}
                    className="min-h-[44px] w-full text-left backdrop-blur-xl bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#00b050] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${card.color} p-2 rounded-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-[#1a3a52] mb-1 group-hover:text-[#00b050] transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-sm text-gray-600">{card.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00b050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Popular FAQ Items */}
          <div>
            <h3 className="font-bold text-[#1a3a52] mb-3">Häufige Fragen</h3>
            <div className="space-y-2">
              {popularFAQs.map((faq, index) => (
                <button
                  key={index}
                  className="min-h-[44px] w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors group flex items-center justify-between"
                >
                  <span className="text-gray-700 group-hover:text-[#1a3a52] text-sm">
                    {faq}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00b050] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div>
            <h3 className="font-bold text-[#1a3a52] mb-3">Kontaktieren Sie uns</h3>

            {/* Email */}
            <div className="backdrop-blur-xl bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-[#00b050]" />
                <h4 className="font-semibold text-[#1a3a52]">E-Mail Support</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Schreiben Sie uns eine Nachricht. Wir antworten innerhalb von 24h.
              </p>
              <a href="mailto:info@haustechnik.de">
                <Button
                  variant="outline"
                  className="min-h-[44px] w-full hover:bg-[#00b050] hover:text-white hover:border-[#00b050] transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail schreiben
                </Button>
              </a>
            </div>

            {/* Callback Request */}
            <div className="backdrop-blur-xl bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-[#00b050]" />
                <h4 className="font-semibold text-[#1a3a52]">Rückruf anfordern</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Wir rufen Sie zum Wunschtermin zurück.
              </p>
              <form onSubmit={handleCallbackRequest} className="space-y-3">
                <Input
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="min-h-[44px]"
                  required
                />
                <Button
                  type="submit"
                  className="min-h-[44px] w-full bg-[#00b050] hover:bg-[#00b050]/90 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Rückruf anfordern
                </Button>
              </form>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-xl p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Send className="w-5 h-5 text-[#00b050]" />
              <h3 className="font-bold">Newsletter</h3>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Bleiben Sie informiert über Tipps, Angebote und Neuigkeiten.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-[44px] bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-[#00b050]"
                required
              />
              <Button
                type="submit"
                className="min-h-[44px] w-full bg-[#00b050] hover:bg-[#00b050]/90 text-white shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Anmelden
              </Button>
            </form>
          </div>

          {/* Bottom Padding */}
          <div className="h-6"></div>
        </div>
      </div>
    </>
  );
};

export default HelpSidebar;
