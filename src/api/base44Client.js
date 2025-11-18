// Mock Base44 client for development
// Replace with actual Base44 client implementation

const mockBlogPosts = [
  {
    id: '1',
    title: 'Rohrbruch - Was tun im Notfall?',
    slug: 'rohrbruch-notfall-hilfe',
    excerpt: 'Schnelle Hilfe bei Wasserrohrbruch: Diese 5 Schritte können Sie sofort selbst durchführen, bevor der Notdienst eintrifft.',
    content: `# Rohrbruch - Was tun im Notfall?

## Sofortmaßnahmen bei Rohrbruch

Ein Wasserrohrbruch ist ein echter Notfall, der schnelles Handeln erfordert. Hier sind die wichtigsten Schritte:

### 1. Hauptwasserventil schließen
Das Wichtigste zuerst: Drehen Sie sofort das Hauptwasserventil zu. Dieses befindet sich meist im Keller oder Hausanschlussraum.

### 2. Stromversorgung unterbrechen
Wenn Wasser in Bereiche mit Elektrik gelaufen ist, schalten Sie die Sicherung aus.

### 3. Wasser aufnehmen
Beginnen Sie, ausgelaufenes Wasser mit Handtüchern und Eimern aufzunehmen.

### 4. Notdienst rufen
Kontaktieren Sie unseren 24h-Notdienst: 0163 7709101

### 5. Schaden dokumentieren
Fotografieren Sie den Schaden für die Versicherung.

## Häufige Ursachen

- Frostschäden im Winter
- Alterung der Rohre
- Korrosion
- Mechanische Beschädigung

Wir sind innerhalb von 60 Minuten vor Ort!`,
    category: 'notfallhilfe',
    tags: ['Notfall', 'Rohrbruch', 'Wasserschaden'],
    reading_time: 5,
    views: 1243,
    helpful_count: 89,
    featured: true,
    download_url: '/downloads/rohrbruch-checkliste.pdf',
    related_service: 'Notdienst'
  },
  {
    id: '2',
    title: 'KfW-Förderung 2024: Bis zu 70% Zuschuss für neue Heizung',
    slug: 'kfw-foerderung-2024-heizung',
    excerpt: 'Nutzen Sie die staatliche Förderung für Ihre neue Heizungsanlage. Wir zeigen, welche Programme es gibt und wie Sie bis zu 70% Zuschuss erhalten.',
    content: `# KfW-Förderung 2024: Bis zu 70% Zuschuss für neue Heizung

Die Bundesregierung fördert den Austausch alter Heizungen massiv. Hier erfahren Sie alles Wichtige.

## Förderprogramme im Überblick

### BEG (Bundesförderung für effiziente Gebäude)
- Bis zu 70% Zuschuss möglich
- Kombinierbar mit anderen Förderungen

### Welche Heizungen werden gefördert?
- Wärmepumpen: bis zu 70%
- Solarthermie: bis zu 45%
- Biomasse: bis zu 45%

## Voraussetzungen
- Austausch einer funktionsfähigen Heizung
- Mindestens 20 Jahre alte Heizanlage

Kontaktieren Sie uns für eine kostenlose Förderberatung!`,
    category: 'foerderung_rechtliches',
    tags: ['Förderung', 'KfW', 'BAFA', 'Heizung'],
    reading_time: 8,
    views: 2156,
    helpful_count: 134,
    featured: true,
    download_url: '/downloads/foerderung-checkliste.pdf',
    related_service: 'Heizungsmodernisierung'
  },
  {
    id: '3',
    title: 'Heizung entlüften: Anleitung in 5 Schritten',
    slug: 'heizung-entlueften-anleitung',
    excerpt: 'Ihre Heizung wird nicht richtig warm oder macht gluckernde Geräusche? Wir zeigen Ihnen, wie Sie Ihre Heizung selbst entlüften können.',
    content: `# Heizung entlüften: Anleitung in 5 Schritten

Gluckernde Geräusche oder kalte Heizkörper? Dann ist Luft im System.

## Schritt-für-Schritt Anleitung

### 1. Heizung aufdrehen
Drehen Sie den Heizkörper voll auf und warten Sie 30 Minuten.

### 2. Heizungspumpe ausschalten
Schalten Sie die Umwälzpumpe ab (falls möglich).

### 3. Entlüftungsventil öffnen
Mit einem Entlüftungsschlüssel das Ventil vorsichtig öffnen.

### 4. Luft entweichen lassen
Bis Wasser gleichmäßig austritt.

### 5. Druck prüfen
Heizungsdruck kontrollieren und ggf. Wasser nachfüllen.

## Wann sollten Sie einen Fachmann rufen?
- Wenn ständig Luft nachkommt
- Bei Druckproblemen
- Bei älteren Anlagen`,
    category: 'do_it_yourself',
    tags: ['DIY', 'Heizung', 'Wartung'],
    reading_time: 4,
    views: 3421,
    helpful_count: 267,
    featured: false,
    related_service: 'Wartung'
  }
]

export const base44 = {
  entities: {
    BlogPost: {
      list: async (sortBy = '-created_date') => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300))
        return mockBlogPosts
      },
      update: async (id, data) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100))
        return { success: true }
      }
    }
  }
}
