import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Clock, Eye, ThumbsUp, Download, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { createPageUrl } from '@/utils';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id');
  const queryClient = useQueryClient();
  const [hasVoted, setHasVoted] = useState(false);

  const { data: post, isLoading } = useQuery({
    queryKey: ['blogPost', postId],
    queryFn: async () => {
      const posts = await base44.entities.BlogPost.list();
      return posts.find(p => p.id === postId);
    },
    enabled: !!postId
  });

  const incrementViewsMutation = useMutation({
    mutationFn: async (id) => {
      await base44.entities.BlogPost.update(id, {
        views: (post?.views || 0) + 1
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPost', postId] });
    }
  });

  const voteHelpfulMutation = useMutation({
    mutationFn: async (id) => {
      await base44.entities.BlogPost.update(id, {
        helpful_count: (post?.helpful_count || 0) + 1
      });
    },
    onSuccess: () => {
      setHasVoted(true);
      queryClient.invalidateQueries({ queryKey: ['blogPost', postId] });
    }
  });

  useEffect(() => {
    if (post && !isLoading) {
      incrementViewsMutation.mutate(post.id);
    }
  }, [post?.id]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00b050]" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="relative min-h-screen py-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-[#1a3a52] mb-4">Artikel nicht gefunden</h1>
        <Link to={createPageUrl('Blog')}>
          <Button>Zurück zum Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to={createPageUrl('Blog')} className="inline-flex items-center text-[#00b050] hover:underline mb-8 min-h-[44px]">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zum Blog
        </Link>

        {/* Article Header */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

          <div className="relative p-8">
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-[#00b050]/10 text-[#00b050] border-[#00b050]/20">
                {post.category?.replace(/_/g, ' ')}
              </Badge>
              {post.tags?.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-[#2c3e50]/70">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#1a3a52] mb-4">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#2c3e50]/60 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.reading_time} Min. Lesezeit
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views || 0} Aufrufe
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                {post.helpful_count || 0} hilfreich
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-[#2c3e50]/80 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />

          <div className="relative p-8 prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-[#1a3a52] mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-[#1a3a52] mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-[#2c3e50]/80 leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-[#2c3e50]/80">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-[#1a3a52]">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-[#00b050] hover:underline">
                    {children}
                  </a>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Download Section */}
        {post.download_url && (
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00b050]/10 to-[#1a3a52]/10 backdrop-blur-xl rounded-2xl border border-white/30" />
            <div className="relative p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#1a3a52] mb-1">Checkliste herunterladen</h3>
                <p className="text-sm text-[#2c3e50]/70">
                  Praktische PDF-Checkliste zum Ausdrucken
                </p>
              </div>
              <Button className="bg-[#00b050] hover:bg-[#00b050]/90 min-h-[48px]">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        )}

        {/* Helpful Section */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30" />
          <div className="relative p-8 text-center">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
              War dieser Artikel hilfreich?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => voteHelpfulMutation.mutate(post.id)}
                disabled={hasVoted}
                className="bg-[#00b050] hover:bg-[#00b050]/90 min-h-[48px]"
              >
                <ThumbsUp className="w-5 h-5 mr-2" />
                {hasVoted ? 'Danke für Ihr Feedback!' : 'Ja, hilfreich'}
              </Button>
              <Button size="lg" variant="outline" className="min-h-[48px]">
                <Share2 className="w-5 h-5 mr-2" />
                Teilen
              </Button>
            </div>
          </div>
        </div>

        {/* Related Service CTA */}
        {post.related_service && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52] to-[#00b050] rounded-3xl" />
            <div className="relative p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">
                Interessiert an {post.related_service}?
              </h3>
              <p className="text-lg mb-6">
                Lassen Sie sich kostenlos von unseren Experten beraten
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-[#1a3a52] hover:bg-white/90 min-h-[48px]">
                  Jetzt Beratung anfragen
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
