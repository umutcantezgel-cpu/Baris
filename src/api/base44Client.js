/**
 * Base44 API Client
 * Mock implementation for local development
 * Replace with actual base44 client in production
 */

class Base44Client {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || 'https://api.base44.com';
    this.entities = {
      BlogPost: new BlogPostEntity(),
    };
  }
}

class BlogPostEntity {
  constructor() {
    this.mockPosts = [
      {
        id: '1',
        title: 'Was tun bei Rohrbruch? Schnelle Hilfe in 5 Schritten',
        slug: 'was-tun-bei-rohrbruch',
        excerpt: 'Ein Rohrbruch ist ein Albtraum für jeden Hausbesitzer. Wir zeigen Ihnen, wie Sie im Notfall richtig reagieren und größere Schäden vermeiden.',
        content: `# Was tun bei Rohrbruch? Schnelle Hilfe in 5 Schritten

Ein Rohrbruch kann jederzeit auftreten und erfordert schnelles Handeln. Hier sind die wichtigsten Schritte, die Sie sofort unternehmen sollten:

## 1. Hauptwasserhahn sofort schließen

Der erste und wichtigste Schritt: Drehen Sie den Hauptwasserhahn zu! Dieser befindet sich meist im Keller oder im Hausanschlussraum.

## 2. Strom abschalten

Wenn Wasser in die Nähe von Steckdosen oder elektrischen Geräten gelangt ist, schalten Sie die Sicherung für diesen Bereich aus.

## 3. Wasserschaden dokumentieren

Fotografieren Sie den Schaden für die Versicherung. Dokumentieren Sie auch beschädigte Gegenstände.

## 4. Wasser entfernen

Beginnen Sie so schnell wie möglich mit dem Entfernen des Wassers, um weitere Schäden zu vermeiden.

## 5. Notdienst kontaktieren

Rufen Sie unseren 24h-Notdienst unter **0163 7709101** an. Wir sind innerhalb von 60 Minuten vor Ort!

## Wichtige Tipps

- Bewahren Sie Ruhe und handeln Sie systematisch
- Informieren Sie Ihre Versicherung innerhalb von 7 Tagen
- Lassen Sie beschädigte Rohre nur von Fachbetrieben reparieren

Bei Fragen stehen wir Ihnen jederzeit zur Verfügung!`,
        category: 'notfallhilfe',
        tags: ['Notfall', 'Rohrbruch', 'Wasserschaden', 'Erste Hilfe'],
        reading_time: 4,
        views: 1247,
        helpful_count: 89,
        featured: true,
        download_url: '/downloads/notfall-checkliste-rohrbruch.pdf',
        related_service: 'Notdienst',
        created_date: '2024-01-15',
      },
      {
        id: '2',
        title: 'KfW-Förderung 2024: Bis zu 70% Zuschuss für neue Heizung',
        slug: 'kfw-foerderung-2024-heizung',
        excerpt: 'Die neue BEG-Förderung macht den Heizungstausch attraktiver denn je. Erfahren Sie, wie Sie bis zu 70% Zuschuss erhalten können.',
        content: `# KfW-Förderung 2024: Bis zu 70% Zuschuss für neue Heizung

Die Bundesförderung für effiziente Gebäude (BEG) bietet 2024 attraktive Zuschüsse für den Heizungstausch.

## Fördersätze im Überblick

- **Grundförderung**: 30% für Wärmepumpen
- **Geschwindigkeitsbonus**: +20% bei Austausch alter Öl-/Gasheizung bis 2028
- **Einkommensbonus**: +30% bei Haushaltseinkommen unter 40.000€
- **Maximaler Zuschuss**: 70% (max. 21.000€ bei 30.000€ Investition)

## Voraussetzungen

1. Antragstellung VOR Beginn der Maßnahme
2. Fachunternehmen muss die Installation durchführen
3. Hydraulischer Abgleich erforderlich
4. Mindestens 5 Jahre Nutzungspflicht

## So beantragen Sie die Förderung

1. Energieberater konsultieren (optional, aber empfohlen)
2. Angebot von Fachbetrieb einholen
3. Antrag bei KfW stellen
4. Bewilligung abwarten (ca. 2-4 Wochen)
5. Installation durchführen lassen
6. Verwendungsnachweis einreichen

Wir unterstützen Sie gerne bei der Antragstellung!`,
        category: 'foerderung_rechtliches',
        tags: ['KfW', 'Förderung', 'Heizung', 'Wärmepumpe', 'BEG'],
        reading_time: 6,
        views: 2134,
        helpful_count: 156,
        featured: true,
        download_url: '/downloads/foerderung-checkliste-2024.pdf',
        related_service: 'Heizungsmodernisierung',
        created_date: '2024-01-10',
      },
      {
        id: '3',
        title: 'Heizung entlüften: So geht\'s in 5 Minuten',
        slug: 'heizung-entlueften-anleitung',
        excerpt: 'Gluckernde Heizkörper und ungleichmäßige Wärme? Mit unserer Schritt-für-Schritt-Anleitung können Sie Ihre Heizung selbst entlüften.',
        content: `# Heizung entlüften: So geht's in 5 Minuten

Wenn Ihre Heizkörper gluckern oder nicht richtig warm werden, ist wahrscheinlich Luft im System.

## Was Sie benötigen

- Entlüftungsschlüssel (Baumarkt, ca. 2€)
- Kleines Gefäß oder Tuch
- Evtl. Handschuhe

## Schritt-für-Schritt-Anleitung

### 1. Heizung aufdrehen
Stellen Sie die Heizung auf maximale Stufe und warten Sie 30 Minuten.

### 2. Entlüftungsventil öffnen
- Ventil befindet sich meist seitlich oben am Heizkörper
- Mit Schlüssel langsam gegen Uhrzeigersinn drehen
- Vorsicht: Wasser kann austreten!

### 3. Luft entweichen lassen
- Sie hören ein Zischen
- Warten Sie, bis Wasser austritt
- Ventil sofort wieder zudrehen

### 4. Heizungsdruck prüfen
Nach dem Entlüften aller Heizkörper den Druck an der Heizungsanlage kontrollieren.

### 5. Wasser nachfüllen (falls nötig)
Bei zu niedrigem Druck Wasser nachfüllen (Anleitung siehe Bedienungsanleitung).

## Wichtige Hinweise

- Entlüften Sie regelmäßig (1-2x jährlich)
- Beginnen Sie unten im Haus, arbeiten Sie sich nach oben
- Bei häufigem Lufteinschluss: Fachmann konsultieren

Probleme beim Entlüften? Rufen Sie uns an: 0163 7709101`,
        category: 'do_it_yourself',
        tags: ['DIY', 'Heizung', 'Wartung', 'Anleitung'],
        reading_time: 3,
        views: 3421,
        helpful_count: 234,
        featured: false,
        download_url: null,
        related_service: 'Wartung',
        created_date: '2024-01-05',
      },
    ];
  }

  async list(sortBy = '-created_date') {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    let posts = [...this.mockPosts];

    // Simple sorting
    if (sortBy === '-created_date') {
      posts.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    }

    return posts;
  }

  async get(id) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.mockPosts.find((post) => post.id === id);
  }

  async update(id, data) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const post = this.mockPosts.find((p) => p.id === id);
    if (post) {
      Object.assign(post, data);
    }
    return post;
  }

  async create(data) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const newPost = {
      id: Date.now().toString(),
      created_date: new Date().toISOString(),
      ...data,
    };
    this.mockPosts.push(newPost);
    return newPost;
  }
}

export const base44 = new Base44Client();
