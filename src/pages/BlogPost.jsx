import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import {
  ArrowLeft,
  Clock,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Download,
  Share2,
  BookOpen,
  ChevronRight,
  Tag,
  AlertCircle,
  CheckCircle2,
  Phone,
  Calendar,
} from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { createPageUrl, formatDate } from '@/utils';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const postId = searchParams.get('id');
  const queryClient = useQueryClient();
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  // Check if user already voted (using localStorage)
  useEffect(() => {
    if (postId) {
      const voted = localStorage.getItem(`blog_voted_${postId}`);
      setHasVoted(!!voted);
    }
  }, [postId]);

  // Fetch post data
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: () => base44.entities.BlogPost.get(postId),
    enabled: !!postId,
    staleTime: 5 * 60 * 1000,
  });

  // Helpful vote mutation
  const voteMutation = useMutation({
    mutationFn: (isHelpful) =>
      base44.entities.BlogPost.update(postId, {
        helpful_count: (post?.helpful_count || 0) + (isHelpful ? 1 : 0),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['blogPost', postId]);
      localStorage.setItem(`blog_voted_${postId}`, 'true');
      setHasVoted(true);
    },
  });

  const handleVote = (isHelpful) => {
    if (!hasVoted) {
      voteMutation.mutate(isHelpful);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link wurde in die Zwischenablage kopiert!');
    }
  };

  // Redirect if no postId
  if (!postId) {
    navigate(createPageUrl('Blog'));
    return null;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary/20 border-t-secondary rounded-full animate-spin mb-4" aria-hidden="true" />
          <p className="text-accent-light">Lade Artikel...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" aria-hidden="true" />
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Artikel nicht gefunden
            </h1>
            <p className="text-accent-light mb-8">
              Der von Ihnen gesuchte Artikel existiert nicht oder wurde entfernt.
            </p>
            <Link
              to={createPageUrl('Blog')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all touch-target focus-visible"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Zurück zum Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to={createPageUrl('Blog')}
          className="inline-flex items-center gap-2 text-accent hover:text-secondary transition-colors focus-visible"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          <span>Zurück zur Übersicht</span>
        </Link>
      </div>

      {/* Article */}
      <article className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8 sm:mb-12">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-sm font-medium text-secondary mb-6">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>
                {post.category === 'notfallhilfe' && 'Notfallhilfe'}
                {post.category === 'energie_sparen' && 'Energie sparen'}
                {post.category === 'do_it_yourself' && 'Do it yourself'}
                {post.category === 'foerderung_rechtliches' && 'Förderung & Recht'}
                {!post.category && 'Allgemein'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-accent-light mb-6">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {formatDate(post.created_date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {post.reading_time} Min. Lesezeit
              </span>
              <span className="inline-flex items-center gap-2">
                <Eye className="w-4 h-4" aria-hidden="true" />
                {post.views} Aufrufe
              </span>
              <span className="inline-flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" aria-hidden="true" />
                {post.helpful_count} hilfreich
              </span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 text-sm font-medium text-accent"
                  >
                    <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="glass rounded-2xl p-6 sm:p-8 lg:p-12 mb-8">
            <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-code:text-secondary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          {/* Download Section */}
          {post.download_url && (
            <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary-dark/20 flex items-center justify-center">
                  <Download className="w-6 h-6 text-secondary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Zum Download</h3>
                  <p className="text-accent-light mb-4">
                    Laden Sie unsere praktische Checkliste als PDF herunter.
                  </p>
                  <a
                    href={post.download_url}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    <span>PDF herunterladen</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Helpful Vote */}
          <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              War dieser Artikel hilfreich?
            </h3>
            {hasVoted ? (
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-3" aria-hidden="true" />
                <p className="text-accent-light">Vielen Dank für Ihr Feedback!</p>
              </div>
            ) : (
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => handleVote(true)}
                  className="flex-1 max-w-xs inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl hover:scale-105 active:scale-95 touch-target"
                  disabled={voteMutation.isPending}
                >
                  <ThumbsUp className="w-5 h-5" aria-hidden="true" />
                  <span>Ja, hilfreich</span>
                </Button>
                <Button
                  onClick={() => handleVote(false)}
                  className="flex-1 max-w-xs inline-flex items-center justify-center gap-2 px-6 py-4 glass glass-hover text-primary font-semibold rounded-xl hover:scale-105 active:scale-95 touch-target"
                  disabled={voteMutation.isPending}
                >
                  <ThumbsDown className="w-5 h-5" aria-hidden="true" />
                  <span>Nicht hilfreich</span>
                </Button>
              </div>
            )}
          </div>

          {/* Share */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
              aria-label="Artikel teilen"
            >
              <Share2 className="w-5 h-5" aria-hidden="true" />
              <span>Artikel teilen</span>
            </button>
          </div>

          {/* Related Service CTA */}
          {post.related_service && (
            <div className="glass rounded-2xl p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-black text-primary mb-4">
                  Benötigen Sie professionelle Hilfe?
                </h3>
                <p className="text-lg text-accent-light mb-8 max-w-2xl mx-auto">
                  Unser Team steht Ihnen bei allen Fragen zu {post.related_service} zur Verfügung.
                  Kontaktieren Sie uns für eine kostenlose Beratung!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={createPageUrl('Contact')}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  >
                    <span>Jetzt Kontakt aufnehmen</span>
                    <ChevronRight
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                  <a
                    href="tel:01637709101"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>0163 770 91 01</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Emergency Banner */}
      {post.category === 'notfallhilfe' && (
        <section className="py-12 bg-gradient-to-br from-red-500/5 to-red-600/5 border-y border-red-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl p-8 text-center border-2 border-red-500/20">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">Akuter Notfall?</h3>
              <p className="text-accent-light mb-6">
                Bei Notfällen erreichen Sie unseren 24h-Notdienst unter:
              </p>
              <a
                href="tel:01637709101"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible text-lg"
                aria-label="24h Notdienst anrufen"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                <span>0163 770 91 01</span>
              </a>
              <p className="text-sm text-accent-light mt-4">
                Durchschnittlich 2h Reaktionszeit • Sofortige Hilfe garantiert
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <Link
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            <span>Weitere Artikel entdecken</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
