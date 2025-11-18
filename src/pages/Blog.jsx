import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Search, Clock, Eye, ThumbsUp, Download, ArrowRight, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => base44.entities.BlogPost.list('-created_date'),
    initialData: []
  });

  const categories = [
    { id: 'all', name: 'Alle Artikel', icon: '📚' },
    { id: 'notfallhilfe', name: 'Notfallhilfe', icon: '🚨' },
    { id: 'energie_sparen', name: 'Energie sparen', icon: '💡' },
    { id: 'heizung_modernisierung', name: 'Heizung', icon: '🔥' },
    { id: 'sanitaer_baeder', name: 'Sanitär & Bäder', icon: '🚿' },
    { id: 'foerderung_rechtliches', name: 'Förderung', icon: '💰' },
    { id: 'faq', name: 'FAQ', icon: '❓' },
    { id: 'do_it_yourself', name: 'DIY', icon: '🔧' },
    { id: 'hausbesitzer_wissen', name: 'Wissen', icon: '📖' }
  ];

  const featuredTopics = [
    {
      title: 'KfW-Förderung 2024',
      description: 'Bis zu 70% Zuschuss sichern',
      link: '#',
      color: 'from-green-500/20 to-green-500/5'
    },
    {
      title: 'Heizung entlüften',
      description: 'In 5 Minuten selbst gemacht',
      link: '#',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      title: 'Notfall-Checkliste',
      description: 'Bei Rohrbruch richtig handeln',
      link: '#',
      color: 'from-red-500/20 to-red-500/5'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Blog & Hilfe-Center
          </h1>
          <p className="text-xl text-[#2c3e50]/70 max-w-3xl mx-auto">
            Expertentipps, Anleitungen und Antworten auf alle Ihre Fragen rund um Sanitär, Heizung und Energie
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />
            <div className="relative p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Suchen Sie nach Themen, Tipps oder Anleitungen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredTopics.map((topic, index) => (
            <a
              key={index}
              href={topic.link}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_64px_rgba(0,176,80,0.2)] transition-all duration-300" />
              <div className="relative p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <TrendingUp className="w-6 h-6 text-[#1a3a52]" />
                </div>
                <h3 className="font-bold text-[#1a3a52] mb-2">{topic.title}</h3>
                <p className="text-sm text-[#2c3e50]/70">{topic.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 min-h-[44px] ${
                  selectedCategory === category.id
                    ? 'bg-[#00b050] text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm border border-white/30 text-[#1a3a52] hover:bg-white/80'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00b050] mx-auto" />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-[#2c3e50]/70">
              Keine Artikel gefunden. Versuchen Sie eine andere Kategorie oder Suche.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={createPageUrl('BlogPost') + `?id=${post.id}`}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_64px_rgba(0,176,80,0.2)] group-hover:-translate-y-2 transition-all duration-300" />

                <div className="relative p-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <Badge className="bg-[#00b050]/10 text-[#00b050] border-[#00b050]/20">
                      {categories.find(c => c.id === post.category)?.name}
                    </Badge>
                    {post.featured && (
                      <Badge className="ml-2 bg-[#1a3a52]/10 text-[#1a3a52] border-[#1a3a52]/20">
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3 group-hover:text-[#00b050] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#2c3e50]/70 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-[#2c3e50]/60 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.reading_time} Min.
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views || 0}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {post.helpful_count || 0}
                    </div>
                  </div>

                  {/* Download Badge */}
                  {post.download_url && (
                    <div className="mt-3">
                      <div className="inline-flex items-center gap-1 text-xs text-[#00b050] font-medium">
                        <Download className="w-3 h-3" />
                        PDF verfügbar
                      </div>
                    </div>
                  )}

                  {/* Read More */}
                  <div className="mt-4 flex items-center text-[#00b050] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Artikel lesen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52] to-[#00b050] rounded-3xl" />
          <div className="relative p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ihre Frage nicht gefunden?
            </h2>
            <p className="text-xl mb-6">
              Unser Expertenteam hilft Ihnen gerne weiter
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-white text-[#1a3a52] hover:bg-white/90 min-h-[48px]">
                Jetzt Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
