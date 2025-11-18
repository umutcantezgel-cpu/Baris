import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Impressum = React.lazy(() => import('./pages/Impressum'));
const Datenschutz = React.lazy(() => import('./pages/Datenschutz'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="spinner" role="status" aria-label="Lädt">
      <span className="sr-only">Lädt...</span>
    </div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-accent mb-4">Seite nicht gefunden</h2>
      <p className="text-accent/70 mb-8">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all duration-300"
      >
        Zur Startseite
      </a>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

// Analytics tracking (placeholder)
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Zum Hauptinhalt springen
      </a>

      <Layout>
        <main id="main-content" role="main">
          <React.Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/leistungen" element={<Services />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/referenzen" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/artikel" element={<BlogPost />} />
              <Route path="/kontakt" element={<Contact />} />

              {/* Legal pages */}
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />

              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </main>
      </Layout>
    </>
  );
}

export default App;
