import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  Search,
  BookOpen,
  AlertCircle,
  Lightbulb,
  FileText,
  Download,
  TrendingUp,
  Clock,
  Eye,
  ThumbsUp,
  ChevronRight,
  Filter,
  X,
  Star,
} from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { createPageUrl, debounce, getReadingTime } from '@/utils';
import { Input } from '@/components/ui/input';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch blog posts
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.list('-created_date'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const categories = [
    {
      id: 'all',
      label: 'Alle Themen',
      icon: BookOpen,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: 'notfallhilfe',
      label: 'Notfallhilfe',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      id: 'energie_sparen',
      label: 'Energie sparen',
      icon: Lightbulb,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'do_it_yourself',
      label: 'Do it yourself',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'foerderung_rechtliches',
      label: 'Förderung & Recht',
      icon: TrendingUp,
      color: 'text-secondary',
      bgColor: 'bg-green-50',
    },
  ];

  // Featured/pinned posts
  const featuredPosts = posts.filter((post) => post.featured);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Debounced search
  const handleSearchChange = debounce((value) => {
    setSearchQuery(value);
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  }, 300);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const newParams = new URLSearchParams(searchParams);
    if (categoryId !== 'all') {
      newParams.set('category', categoryId);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="blog-hero-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <BookOpen className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Blog & Hilfe</span>
            </div>

            <h1
              id="blog-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Ratgeber &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Expertentipps
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent-light mb-8 text-balance">
              Hilfreiche Anleitungen, Tipps und aktuelle Informationen rund um Sanitär, Heizung und
              Haustechnik. Von Notfallhilfe bis Energiesparen.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-light"
                  aria-hidden="true"
                />
                <Input
                  type="text"
                  placeholder="Suche nach Themen, Tipps, Anleitungen..."
                  defaultValue={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-12 pr-4 h-14 text-base rounded-xl glass border-white/30 focus:border-secondary"
                  aria-label="Blog durchsuchen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-primary/10" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-secondary fill-secondary" aria-hidden="true" />
              <h2 id="featured-heading" className="text-xl sm:text-2xl font-bold text-primary">
                Beliebte Themen
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  to={`${createPageUrl('BlogPost')}?id=${post.id}`}
                  className="group glass glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary-dark/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-accent-light">
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{post.views} Aufrufe</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-accent-light line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white/30 backdrop-blur-sm sticky top-16 sm:top-20 z-30 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full flex items-center justify-between px-6 py-3 rounded-xl glass glass-hover text-primary font-semibold mb-4"
            aria-expanded={showFilters}
            aria-controls="category-filters"
          >
            <span className="flex items-center gap-2">
              <Filter className="w-5 h-5" aria-hidden="true" />
              Kategorien filtern
            </span>
            {showFilters ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            )}
          </button>

          {/* Category buttons */}
          <div
            id="category-filters"
            className={`${
              showFilters ? 'flex' : 'hidden'
            } lg:flex flex-wrap justify-center gap-3 sm:gap-4`}
            role="tablist"
            aria-label="Blog-Kategorien"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryChange(category.id);
                    setShowFilters(false);
                  }}
                  className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/30'
                      : 'glass glass-hover text-primary'
                  }`}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  <span className="text-sm sm:text-base">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20" aria-label="Blog-Artikel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading state */}
          {isLoading && (
            <div className="text-center py-16">
              <div className="inline-block w-12 h-12 border-4 border-primary/20 border-t-secondary rounded-full animate-spin mb-4" aria-hidden="true" />
              <p className="text-accent-light">Lade Artikel...</p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center py-16 glass rounded-2xl p-8">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" aria-hidden="true" />
              <p className="text-lg text-accent mb-2">Fehler beim Laden der Artikel</p>
              <p className="text-sm text-accent-light">Bitte versuchen Sie es später erneut.</p>
            </div>
          )}

          {/* Posts Grid */}
          {!isLoading && !error && (
            <>
              {filteredPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                      }}
                    >
                      {/* Post header */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary/20" aria-hidden="true" />
                        {/* Category badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary">
                          {categories.find((c) => c.id === post.category)?.label || 'Allgemein'}
                        </div>
                        {/* Download badge */}
                        {post.download_url && (
                          <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-secondary/90 backdrop-blur-sm flex items-center justify-center">
                            <Download className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                        )}
                      </div>

                      {/* Post content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-accent-light mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {post.reading_time} Min.
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                            {post.views}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
                            {post.helpful_count}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-accent-light mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags?.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-secondary/10 text-xs font-medium text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <Link
                          to={`${createPageUrl('BlogPost')}?id=${post.id}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all group/link focus-visible"
                          aria-label={`Artikel lesen: ${post.title}`}
                        >
                          <span>Artikel lesen</span>
                          <ChevronRight
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                // Empty state
                <div className="text-center py-16 glass rounded-2xl p-8">
                  <Search className="w-12 h-12 text-primary/20 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-lg text-accent mb-2">Keine Artikel gefunden</p>
                  <p className="text-sm text-accent-light mb-6">
                    Versuchen Sie es mit anderen Suchbegriffen oder Kategorien.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                      setSearchParams({});
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all touch-target focus-visible"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                    Filter zurücksetzen
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5" aria-label="Hilfe Call-to-Action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4 animate-pulse" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4">
              Haben Sie einen Notfall?
            </h2>
            <p className="text-lg text-accent-light mb-8 max-w-2xl mx-auto">
              Bei akuten Problemen mit Sanitär, Heizung oder Gas sind wir 24/7 für Sie da. Unser
              Notdienst ist innerhalb von 60 Minuten vor Ort.
            </p>
            <a
              href="tel:01637709101"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible text-lg"
              aria-label="24h Notdienst anrufen"
            >
              <AlertCircle className="w-6 h-6" aria-hidden="true" />
              <span>0163 770 91 01</span>
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
