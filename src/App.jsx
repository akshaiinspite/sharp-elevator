import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnnouncementMarquee from './components/AnnouncementMarquee';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import SEO from './components/SEO';
import './App.css';

const pathToPage = (path) => {
  const clean = (path || '').replace(/\/+$/, '').toLowerCase();
  if (clean === '/about') return 'about';
  if (clean === '/services') return 'services';
  if (clean === '/gallery') return 'gallery';
  if (clean === '/contact') return 'contact';
  return 'home';
};

const pageToPath = (page) => {
  if (page === 'about') return '/about';
  if (page === 'services') return '/services';
  if (page === 'gallery') return '/gallery';
  if (page === 'contact') return '/contact';
  return '/';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return pathToPage(window.location.pathname);
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pathToPage(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    const targetPath = pageToPath(page);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Dynamic SEO Meta Tags & Schema.org JSON-LD Structured Data */}
      <SEO page={currentPage} />

      {/* Branded Loading Indicator */}
      <Preloader />

      {/* Main Header / Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Dynamic Page Content */}
      <main id="main-content">
        {currentPage === 'home' && (
          <>
            {/* Section 1 — Hero Banner */}
            <Hero onNavigateServices={() => handleNavigate('services')} onNavigateContact={() => handleNavigate('contact')} />

            {/* Marquee Moving Announcements - Directly Below Hero Section */}
            <AnnouncementMarquee />

            {/* Section 2 — Our Core Services */}
            <Services onNavigateServices={() => handleNavigate('services')} />

            {/* Section 3 — Why Choose Sharp? */}
            <WhyChooseUs />

            {/* Section 4 — Let's Build Better Vertical Mobility & Office Information */}
            <ContactSection onNavigateContact={() => handleNavigate('contact')} />
          </>
        )}

        {currentPage === 'about' && (
          <>
            {/* Dedicated About Us Menu Page with Aperture Reveal Animation */}
            <AboutPage
              onNavigateHome={() => handleNavigate('home')}
              onNavigateServices={() => handleNavigate('services')}
            />
            {/* Footer Information Strip */}
            <div className="contact-page-footer-wrapper">
              <div className="sub-footer">
                <div className="section-container sub-footer-content">
                  <p className="copyright-text">
                    &copy; 2026 Sharp Elevator &amp; Escalator. All rights reserved.
                  </p>
                  <div className="sub-footer-links">
                    <span className="location-indicator">Mather Square, Ernakulam · Kochi · Kerala</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentPage === 'services' && (
          <>
            {/* Dedicated Services Menu Page with Mosaic Animation for Each Service */}
            <ServicesPage onNavigateHome={() => handleNavigate('home')} />
            {/* Footer Information Strip */}
            <div className="contact-page-footer-wrapper">
              <div className="sub-footer">
                <div className="section-container sub-footer-content">
                  <p className="copyright-text">
                    &copy; 2026 Sharp Elevator &amp; Escalator. All rights reserved.
                  </p>
                  <div className="sub-footer-links">
                    <span className="location-indicator">Mather Square, Ernakulam · Kochi · Kerala</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentPage === 'gallery' && (
          <>
            {/* Dedicated Gallery Menu Page showcasing Real Installations Lift 1 to Lift 6 */}
            <GalleryPage
              onNavigateHome={() => handleNavigate('home')}
            />
            {/* Footer Information Strip */}
            <div className="contact-page-footer-wrapper">
              <div className="sub-footer">
                <div className="section-container sub-footer-content">
                  <p className="copyright-text">
                    &copy; 2026 Sharp Elevator &amp; Escalator. All rights reserved.
                  </p>
                  <div className="sub-footer-links">
                    <span className="location-indicator">Mather Square, Ernakulam · Kochi · Kerala</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {currentPage === 'contact' && (
          /* Dedicated Contact Us Menu Page */
          <>
            <ContactPage onNavigateHome={() => handleNavigate('home')} />
            {/* Footer Information Strip */}
            <div className="contact-page-footer-wrapper">
              <div className="sub-footer">
                <div className="section-container sub-footer-content">
                  <p className="copyright-text">
                    &copy; 2026 Sharp Elevator &amp; Escalator. All rights reserved.
                  </p>
                  <div className="sub-footer-links">
                    <span className="location-indicator">Mather Square, Ernakulam · Kochi · Kerala</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
