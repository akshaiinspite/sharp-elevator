import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent touch bleed-through
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Services', id: 'services', href: '/services' },
    { name: 'Gallery', id: 'gallery', href: '/gallery' },
    { name: 'Contact Us', id: 'contact', href: '/contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.id === 'home') {
      onNavigate('home');
    } else if (link.id === 'about') {
      onNavigate('about');
    } else if (link.id === 'services') {
      onNavigate('services');
    } else if (link.id === 'gallery') {
      onNavigate('gallery');
    } else if (link.id === 'contact') {
      onNavigate('contact');
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(link.href) || document.querySelector('#services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(link.href) || document.querySelector('#services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo - Significantly Bigger */}
          <a
            href="/"
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            aria-label="Sharp Elevator & Escalator Homepage"
          >
            <img
              src="/Sharp_Elevator_and_Escalator_Logo-removebg-preview.png"
              alt="Sharp Elevator & Escalator"
              className="navbar-logo-img big-logo-header"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav desktop-only" aria-label="Main Navigation">
            <ul className="navbar-links">
              {navLinks.map((link) => {
                const isActive =
                  link.id === currentPage ||
                  (link.id === 'home' && currentPage === 'home');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href || '#'}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, link)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="active-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button & Hotline */}
          <div className="navbar-actions desktop-only">
            <a
              href="tel:9447711587"
              className="navbar-phone-link"
              title="Call Sharp Escalators and Elevators"
            >
              <Phone size={16} className="phone-icon" />
              <span className="phone-text">9447711587</span>
            </a>

            <a
              href="tel:9447711587"
              className="btn btn-gold btn-sm"
              title="Book an engineering consultation"
            >
              <span>Consultation</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle mobile-only"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay - Rendered OUTSIDE header with highest z-index and opaque background */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="mobile-drawer-header">
          <div className="drawer-brand-wrap">
            <img
              src="/Sharp_Elevator_and_Escalator_Logo-removebg-preview.png"
              alt="Sharp Elevator"
              className="mobile-drawer-logo"
            />
          </div>

          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="mobile-drawer-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => {
              const isActive =
                link.id === currentPage ||
                (link.id === 'home' && currentPage === 'home');
              return (
                <li key={link.name}>
                  <button
                    type="button"
                    className={`mobile-nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={18} className="mobile-btn-arrow" />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-contact-block">
              <span className="mobile-label">Direct Hotline:</span>
              <a href="tel:9447711587" className="mobile-phone-num">
                <Phone size={16} /> +91 94477 11587
              </a>
              <a href="tel:9496447558" className="mobile-phone-num alt">
                <Phone size={16} /> +91 94964 47558
              </a>
            </div>

            <a
              href="tel:9447711587"
              className="btn btn-gold btn-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Direct Consultation</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
