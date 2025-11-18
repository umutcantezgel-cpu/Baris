import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  MessageCircle,
  Calendar,
  Wrench,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { isValidEmail } from '@/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      primary: '0163 770 91 01',
      secondary: 'Mo-Fr: 8-18 Uhr',
      href: 'tel:01637709101',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Mail,
      title: 'E-Mail',
      primary: 'info@baris-haustechnik.de',
      secondary: 'Antwort in 24h',
      href: 'mailto:info@baris-haustechnik.de',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      primary: 'Musterstraße 123',
      secondary: '35578 Wetzlar',
      href: 'https://maps.google.com',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      primary: 'Mo-Fr: 8:00 - 18:00 Uhr',
      secondary: '24h Notdienst verfügbar',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    if (!formData.email.trim()) {
      errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Bitte geben Sie Ihre Telefonnummer ein';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Bitte wählen Sie ein Thema';
    }

    if (!formData.message.trim()) {
      errors.message = 'Bitte geben Sie eine Nachricht ein';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Die Nachricht sollte mindestens 10 Zeichen lang sein';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, send data to backend
      console.log('Form data:', formData);

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'normal',
      });
      setFormErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="contact-hero-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <MessageCircle className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Kontakt</span>
            </div>

            <h1
              id="contact-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Wir sind für Sie{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                erreichbar
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent-light text-balance">
              Haben Sie Fragen oder benötigen Sie eine Beratung? Kontaktieren Sie uns - wir freuen
              uns auf Ihre Nachricht und helfen Ihnen gerne weiter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-primary/10" aria-label="Kontaktinformationen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const Component = info.href ? 'a' : 'div';
              const props = info.href ? { href: info.href } : {};

              return (
                <Component
                  key={index}
                  {...props}
                  className={`group glass glass-hover rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                    info.href ? 'cursor-pointer' : ''
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${info.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${info.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                  <p className="text-base font-semibold text-accent mb-1">{info.primary}</p>
                  <p className="text-sm text-accent-light">{info.secondary}</p>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section
        className="py-12 bg-gradient-to-br from-red-500/5 to-red-600/5"
        aria-label="24h Notdienst Banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12 border-2 border-red-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-black text-primary mb-1">24h Notdienst</h3>
                  <p className="text-accent-light">
                    Bei Notfällen erreichen Sie uns rund um die Uhr
                  </p>
                </div>
              </div>
              <a
                href="tel:01637709101"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible text-lg whitespace-nowrap"
                aria-label="24h Notdienst anrufen"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                <span>0163 770 91 01</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 id="form-heading" className="text-3xl sm:text-4xl font-black text-primary mb-6">
                Kontaktformular
              </h2>
              <p className="text-lg text-accent-light mb-8">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Ihr Name *
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-light"
                      aria-hidden="true"
                    />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className={`pl-12 h-12 ${formErrors.name ? 'border-red-500' : ''}`}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                  </div>
                  {formErrors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    E-Mail-Adresse *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-light"
                      aria-hidden="true"
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.de"
                      className={`pl-12 h-12 ${formErrors.email ? 'border-red-500' : ''}`}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {formErrors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Telefonnummer *
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-light"
                      aria-hidden="true"
                    />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0163 7709101"
                      className={`pl-12 h-12 ${formErrors.phone ? 'border-red-500' : ''}`}
                      aria-invalid={!!formErrors.phone}
                      aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                    />
                  </div>
                  {formErrors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-600">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                    Betreff *
                  </label>
                  <div className="relative">
                    <Wrench
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-light"
                      aria-hidden="true"
                    />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 h-12 rounded-lg border bg-white/60 backdrop-blur-sm transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${
                        formErrors.subject ? 'border-red-500' : 'border-white/30'
                      }`}
                      aria-invalid={!!formErrors.subject}
                      aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="beratung">Kostenlose Beratung</option>
                      <option value="angebot">Angebot anfordern</option>
                      <option value="wartung">Wartungstermin</option>
                      <option value="notfall">Notfall</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  {formErrors.subject && (
                    <p id="subject-error" className="mt-2 text-sm text-red-600">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Ihre Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={6}
                    className={`resize-none ${formErrors.message ? 'border-red-500' : ''}`}
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Bevorzugte Kontaktaufnahme
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="w-4 h-4 text-secondary focus:ring-secondary"
                      />
                      <span className="text-accent">E-Mail</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="w-4 h-4 text-secondary focus:ring-secondary"
                      />
                      <span className="text-accent">Telefon</span>
                    </label>
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-green-900">Nachricht erfolgreich gesendet!</p>
                      <p className="text-sm text-green-700 mt-1">
                        Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-red-900">Fehler beim Senden</p>
                      <p className="text-sm text-red-700 mt-1">
                        Bitte versuchen Sie es später erneut oder rufen Sie uns an.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 touch-target"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Nachricht senden</span>
                    </>
                  )}
                </Button>

                <p className="text-sm text-accent-light text-center">
                  * Pflichtfelder • Ihre Daten werden vertraulich behandelt
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-secondary" aria-hidden="true" />
                  So finden Sie uns
                </h3>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center mb-6">
                  <MapPin className="w-16 h-16 text-primary/20" aria-hidden="true" />
                </div>
                <div className="space-y-3 text-accent">
                  <p className="font-semibold text-primary">Bariş Haustechnik GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>35578 Wetzlar</p>
                  <p className="text-sm text-accent-light pt-4 border-t border-primary/10">
                    Kostenfreie Parkplätze direkt vor dem Haus
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-secondary" aria-hidden="true" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Montag - Freitag', time: '8:00 - 18:00 Uhr' },
                    { day: 'Samstag', time: 'Nach Vereinbarung' },
                    { day: 'Sonntag', time: 'Geschlossen' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-lg bg-white/40"
                    >
                      <span className="font-medium text-accent">{item.day}</span>
                      <span className="text-primary font-semibold">{item.time}</span>
                    </div>
                  ))}
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
                    <p className="font-bold text-red-600 mb-1">24h Notdienst</p>
                    <p className="text-sm text-accent-light">
                      An 365 Tagen im Jahr für Sie erreichbar
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-secondary/5 to-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Wichtige Informationen</h3>
                <ul className="space-y-3">
                  {[
                    'Kostenlose Erstberatung',
                    'Antwort innerhalb von 24 Stunden',
                    'Unverbindliches Angebot',
                    'Festpreisgarantie',
                    'Terminvereinbarung nach Ihren Wünschen',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-accent">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
