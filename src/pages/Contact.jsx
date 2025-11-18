import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['06471 3790879', '0163 7709101 (Mobil)'],
      action: 'tel:01637709101'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      details: ['info@baris-haustechnik.de'],
      action: 'mailto:info@baris-haustechnik.de'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Oberer Käuzerain 14', '35792 Löhnberg'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      details: ['Mo-Fr: 08:00 - 17:00 Uhr', '24h Notdienst'],
      action: null
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Kontakt aufnehmen
          </h1>
          <p className="text-xl text-[#2c3e50]/70 max-w-3xl mx-auto">
            Wir sind für Sie da – persönlich, telefonisch oder per E-Mail
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
              Wie können wir Ihnen helfen?
            </h2>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_64px_rgba(0,176,80,0.2)] transition-all duration-300" />

                  <div className="relative p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b050]/20 to-[#00b050]/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#00b050]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1a3a52] mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-[#2c3e50]/80">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action}
                          className="inline-block mt-2 text-[#00b050] font-medium hover:underline min-h-[44px] flex items-center"
                        >
                          {info.icon === Phone ? 'Jetzt anrufen' :
                           info.icon === Mail ? 'E-Mail senden' :
                           'Route planen'} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Emergency Banner */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm rounded-2xl border border-red-500/20" />
              <div className="relative p-6 text-center">
                <h3 className="font-bold text-[#1a3a52] mb-2 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-red-500" />
                  24-Stunden Notdienst
                </h3>
                <p className="text-sm text-[#2c3e50]/80 mb-4">
                  Bei Notfällen erreichen Sie uns rund um die Uhr
                </p>
                <Button
                  className="w-full bg-red-500 hover:bg-red-600 text-white min-h-[48px]"
                  onClick={() => window.location.href = 'tel:01637709101'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  0163 7709101
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

            <div className="relative p-8">
              <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
                Anfrage senden
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                    Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr vollständiger Name"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre.email@beispiel.de"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0123 456789"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                    Interessiert an *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Bitte wählen..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="badsanierung">Badsanierung</SelectItem>
                      <SelectItem value="heizung">Heizungsmodernisierung</SelectItem>
                      <SelectItem value="waermepumpe">Wärmepumpe</SelectItem>
                      <SelectItem value="solar">Solaranlage</SelectItem>
                      <SelectItem value="notdienst">Notdienst</SelectItem>
                      <SelectItem value="wartung">Wartung</SelectItem>
                      <SelectItem value="beratung">Allgemeine Beratung</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a3a52] mb-2">
                    Ihre Nachricht *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#00b050] hover:bg-[#00b050]/90 min-h-[48px]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Anfrage absenden
                </Button>

                <p className="text-xs text-[#2c3e50]/60 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-3xl border border-white/30" />
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a3a52]/5 to-[#00b050]/5 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-[#00b050]" />
              <p className="text-[#1a3a52] font-bold text-lg mb-2">Karten-Platzhalter</p>
              <p className="text-[#2c3e50]/60">
                Interaktive Karte mit Standort & Service-Gebiet
              </p>
              <p className="text-sm text-[#2c3e50]/40 mt-2">
                Empfohlen: Google Maps oder OpenStreetMap Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
