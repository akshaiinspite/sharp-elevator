import React, { useState } from 'react';
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
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'services' | 'contact'

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Branded Loading Indicator */}
      <Preloader />

      {/* Main Header / Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Dynamic Page Content */}
      <main id="main-content">
        {currentPage === 'home' && (
          <>
            {/* Section 1 — Hero Banner */}
            <Hero />

            {/* Marquee Moving Announcements - Directly Below Hero Section */}
            <AnnouncementMarquee />

            {/* Section 2 — Our Core Services */}
            <Services />

            {/* Section 3 — Why Choose Sharp? */}
            <WhyChooseUs />

            {/* Section 4 — Let's Build Better Vertical Mobility & Office Information */}
            <ContactSection />
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

        {currentPage === 'contact' && (
          /* Dedicated Contact Us Menu Page (No Contact Form) */
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
