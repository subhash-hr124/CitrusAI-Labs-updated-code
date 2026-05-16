import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookieConsent } from './components/CookieConsent';
import { MedResearchPage } from './pages/products/MedResearchPage';
import { MindBloomPage } from './pages/products/MindBloomPage';
import { UtilityHubPage } from './pages/products/UtilityHubPage';
import { ArtistryPage } from './pages/products/ArtistryPage';
import { LightenPage } from './pages/products/LightenPage';
import { NaviXPage } from './pages/products/NaviXPage';
import { HealthcareSolutionPage } from './pages/solutions/HealthcarePage';
import { EducationSolutionPage } from './pages/solutions/EducationPage';
import { ITSolutionPage } from './pages/solutions/ITPage';
import { StartupsSolutionPage } from './pages/solutions/StartupsPage';

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<number>(0);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId, selectedBlogPostId]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'products': return <ProductsPage setSelectedProductId={setSelectedProductId} setCurrentPage={setCurrentPage} />;
      case 'product': return <ProductDetailPage productId={selectedProductId} setCurrentPage={setCurrentPage} />;
      case 'solutions': return <SolutionsPage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'blog': return <BlogPage setCurrentPage={setCurrentPage} setSelectedPostId={setSelectedBlogPostId} />;
      case 'blog-post': return <BlogPostDetailPage postId={selectedBlogPostId} setCurrentPage={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'careers': return <CareersPage setCurrentPage={setCurrentPage} />;
      case 'privacy': return <PrivacyPage setCurrentPage={setCurrentPage} />;
      case 'terms': return <TermsPage setCurrentPage={setCurrentPage} />;
      case 'prod-medresearch': return <MedResearchPage setCurrentPage={setCurrentPage} />;
      case 'prod-mindbloom': return <MindBloomPage setCurrentPage={setCurrentPage} />;
      case 'prod-utilityhub': return <UtilityHubPage setCurrentPage={setCurrentPage} />;
      case 'prod-artistry': return <ArtistryPage setCurrentPage={setCurrentPage} />;
      case 'prod-lighten': return <LightenPage setCurrentPage={setCurrentPage} />;
      case 'prod-navix': return <NaviXPage setCurrentPage={setCurrentPage} />;
      case 'sol-healthcare': return <HealthcareSolutionPage setCurrentPage={setCurrentPage} />;
      case 'sol-education': return <EducationSolutionPage setCurrentPage={setCurrentPage} />;
      case 'sol-it': return <ITSolutionPage setCurrentPage={setCurrentPage} />;
      case 'sol-startups': return <StartupsSolutionPage setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--deep-dark)] transition-colors duration-300 selection:bg-accent-premier/30 selection:text-[var(--text-heading)]">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setSelectedProductId={setSelectedProductId}
      />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === 'product' ? `product-${selectedProductId}` : currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <CookieConsent setCurrentPage={setCurrentPage} />
    </div>
  );
}
