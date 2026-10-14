import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Compass, Shield, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer className="contact-footer-section" id="contact">
      {/* Upper CTA Banner with Newly Generated Background Image */}
      <div className="section-container">
        <motion.div
          className="cta-banner-card with-bg-image cta-banner-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/cta_banner_bg.jpg"
            alt="Sharp Elevator Architectural Skyline"
            className="cta-bg-image"
            loading="lazy"
          />
          <div className="cta-banner-overlay" />

          <div className="cta-banner-content cta-content-balanced">
            <span className="section-sub-badge badge-gold">LET'S BUILD BETTER VERTICAL MOBILITY</span>
            <h2 className="cta-headline">The Right Solution for Your Building</h2>
            <p className="cta-description">
              Whether you are planning a new building, upgrading an existing elevator, or looking
              for dependable maintenance, our team is ready to discuss your requirements.
            </p>

            <div className="cta-buttons-wrapper">
              <a
                href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%20%26%20Escalator%2C%20I%20would%20like%20to%20request%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-xl"
              >
                <MessageCircle size={20} />
                <span>Request a Consultation</span>
                <ArrowUpRight size={18} />
              </a>

              <a href="tel:9447711587" className="btn btn-outline-white btn-xl">
                <Phone size={18} />
                <span>Call Directly: 9447711587</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Structured Office & Contact Information Strip */}
      <div className="office-info-strip">
        <div className="section-container">
          <div className="office-grid">
            {/* Column 1: Company Profile & Much Bigger Brand Logo */}
            <div className="office-col brand-col">
              <div className="footer-brand">
                <img
                  src="/Sharp_Elevator_and_Escalator_Logo-removebg-preview.png"
                  alt="Sharp Elevator & Escalator Logo"
                  className="footer-logo-img big-logo"
                />
              </div>
              <p className="footer-brand-desc">
                Dependable vertical transportation, installation, maintenance, and modernisation
                tailored to residential, commercial, and industrial facilities across Kerala.
              </p>
              <div className="brand-trust-badges">
                <span className="trust-badge">
                  <Shield size={14} /> Certified Standards
                </span>
                <span className="trust-badge">
                  <Compass size={14} /> Ernakulam, Kerala
                </span>
              </div>
            </div>

            {/* Column 2: Head Office Address */}
            <div className="office-col address-col">
              <h4 className="office-heading">
                <MapPin size={18} className="heading-icon" />
                <span>Our Office</span>
              </h4>
              <address className="office-address">
                <strong className="address-name">Sharp Elevator &amp; Escalator</strong>
                <p>Mather Square, C Block, 4th Floor,</p>
                <p>Xavier Arakkal Road, Near North Railway Station,</p>
                <p>Kacheripady, Ernakulam, Kerala – 682018.</p>
              </address>
              <a
                href="https://maps.google.com/?q=Mather+Square+Kacheripady+Ernakulam"
                target="_blank"
                rel="noopener noreferrer"
                className="office-link"
              >
                View on Google Maps <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Column 3: Direct Inquiries & Telephone */}
            <div className="office-col contact-col">
              <h4 className="office-heading">
                <Phone size={18} className="heading-icon" />
                <span>Telephone &amp; WhatsApp</span>
              </h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-tag">Primary &amp; WhatsApp</span>
                  <a href="tel:9447711587" className="contact-link highlight">
                    <Phone size={15} />
                    <span>+91 94477 11587</span>
                  </a>
                </li>
                <li>
                  <span className="contact-tag">Alternative Number</span>
                  <a href="tel:9496447558" className="contact-link">
                    <Phone size={15} />
                    <span>+91 94964 47558</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Email & Operating Support */}
            <div className="office-col email-col">
              <h4 className="office-heading">
                <Mail size={18} className="heading-icon" />
                <span>Electronic Mail</span>
              </h4>
              <p className="email-label">Official Correspondence:</p>
              <a href="mailto:sharpescalator@gmail.com" className="email-link">
                sharpescalator@gmail.com
              </a>

              <div className="hours-block">
                <div className="hours-title-row">
                  <Clock size={14} className="clock-icon" />
                  <span className="hours-title">Operational Support</span>
                </div>
                <span className="hours-value">Monday – Saturday: 9:00 AM – 7:00 PM</span>
                <span className="hours-emergency">Emergency Breakdown Services: 24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer / Copyright */}
      <div className="sub-footer">
        <div className="section-container sub-footer-content">
          <p className="copyright-text">
            &copy; 2026 Sharp Elevator &amp; Escalator. All rights reserved.
          </p>
          <div className="sub-footer-links">
            <span className="location-indicator">Ernakulam · Kochi · Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
