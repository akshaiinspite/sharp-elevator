import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function ContactPage({ onNavigateHome }) {
  const coverageDistricts = [
    'Ernakulam & Kochi City',
    'Thrissur',
    'Kottayam',
    'Alappuzha',
    'Kozhikode',
    'Palakkad',
    'Malappuram',
    'Kollam',
    'Thiruvananthapuram',
  ];

  return (
    <div className="contact-page-wrapper contact-page-white">
      {/* 1. Contact Page Hero with Full Background Cover Banner */}
      <section className="contact-hero-banner full-bg-banner">
        {/* Full-Cover Background Architectural Image */}
        <img
          src="/contact_banner.jpg"
          alt="Sharp Elevator &amp; Escalator Vertical Glass Mobility Architecture"
          className="contact-hero-full-bg"
          loading="eager"
        />
        {/* Dark Luxury Gradient Overlay for Crystal Clear Typography */}
        <div className="contact-hero-full-overlay" />

        <div className="section-container contact-hero-content hero-content-on-bg">
          <div className="contact-breadcrumb-row">
            <button
              type="button"
              onClick={onNavigateHome}
              className="contact-breadcrumb-btn btn-on-dark"
            >
              &larr; Back to Home
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-sub-badge badge-gold"
          >
            DIRECT COMMUNICATIONS &amp; CONSULTATIONS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-page-title text-white-glow"
          >
            Get in Touch with <span className="text-gradient-gold">Sharp Elevator</span> &amp;{' '}
            <span className="text-gradient-crimson">Escalator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-page-subtitle text-white-muted"
          >
            Based at Mather Square in Ernakulam, our specialized vertical transportation engineering
            team is ready to discuss your architectural shafts, modernisations, and 24/7 service contracts.
          </motion.p>

          {/* Regional Office Pill Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="contact-banner-floating-badge banner-badge-centered"
          >
            <div className="badge-pulse-dot" />
            <span>Kerala Regional Engineering Office · Mather Square, Ernakulam</span>
          </motion.div>

          {/* Integrated Frosted Glass Specifications Bar */}
          <motion.div
            className="contact-banner-specs-bar frosted-specs-bar"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className="spec-metric">
              <ShieldCheck size={22} className="spec-icon" />
              <div className="spec-text">
                <strong className="text-white">Zero Compromise Safety</strong>
                <span className="text-light-muted">Strict IS / EN Standard Compliance</span>
              </div>
            </div>
            <div className="spec-metric">
              <Clock size={22} className="spec-icon" />
              <div className="spec-text">
                <strong className="text-white">24/7 Field Support</strong>
                <span className="text-light-muted">Rapid Breakdown Van Dispatch</span>
              </div>
            </div>
            <div className="spec-metric">
              <Award size={22} className="spec-icon" />
              <div className="spec-text">
                <strong className="text-white">Certified Technicians</strong>
                <span className="text-light-muted">OEM Parts &amp; Preventive AMC</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Direct Channels 4-Card Grid on Crisp White Background */}
      <section className="contact-channels-section white-theme">
        <div className="section-container">
          <div className="section-header-centered">
            <span className="section-sub-badge badge-gold">INSTANT ASSISTANCE</span>
            <h2 className="section-main-heading dark-heading">Direct Communication Lines</h2>
            <p className="section-description-text slate-text">
              Reach our engineering desk immediately for project consultations, shaft drawings, and technical queries.
            </p>
          </div>

          <div className="contact-channels-grid">
            {/* Channel 1: Primary Hotline */}
            <motion.div
              className="channel-card light-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="channel-icon-box gold-icon-bg">
                <Phone size={24} className="channel-icon" />
              </div>
              <span className="channel-tag">Primary Hotline</span>
              <h3 className="channel-value dark-val">+91 94477 11587</h3>
              <p className="channel-desc slate-desc">Direct line for engineering inquiries, pricing, and project tenders.</p>
              <a href="tel:9447711587" className="channel-btn">
                <span>Call Now</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Channel 2: WhatsApp Chat */}
            <motion.div
              className="channel-card light-card highlight-whatsapp"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="channel-icon-box whatsapp-bg">
                <MessageCircle size={24} className="channel-icon-whatsapp" />
              </div>
              <span className="channel-tag tag-whatsapp">Instant WhatsApp</span>
              <h3 className="channel-value dark-val">+91 94477 11587</h3>
              <p className="channel-desc slate-desc">Send shaft drawings, site photos, or request instant quotes via WhatsApp.</p>
              <a
                href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%20%26%20Escalator%2C%20I%20am%20inquiring%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-btn btn-whatsapp"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Channel 3: Alternative Phone */}
            <motion.div
              className="channel-card light-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="channel-icon-box gold-icon-bg">
                <Phone size={24} className="channel-icon" />
              </div>
              <span className="channel-tag">Alternative Line</span>
              <h3 className="channel-value dark-val">+91 94964 47558</h3>
              <p className="channel-desc slate-desc">Secondary support line for technical queries and administrative coordination.</p>
              <a href="tel:9496447558" className="channel-btn">
                <span>Call Line 2</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Channel 4: Email Correspondence */}
            <motion.div
              className="channel-card light-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="channel-icon-box gold-icon-bg">
                <Mail size={24} className="channel-icon" />
              </div>
              <span className="channel-tag">Official Email</span>
              <h3 className="channel-value dark-val email-text">sharpescalator@gmail.com</h3>
              <p className="channel-desc slate-desc">Submit formal RFPs, architectural tender documents, and contracts.</p>
              <a href="mailto:sharpescalator@gmail.com" className="channel-btn">
                <span>Send Email</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Office Headquarters & Location Guide */}
      <section className="contact-office-section white-theme">
        <div className="section-container">
          <div className="office-detail-grid">
            {/* Left Column: Office Address & Visiting Details */}
            <div className="office-card-main light-panel">
              <div className="office-card-header">
                <div className="office-header-icon gold-icon-bg">
                  <Building size={24} />
                </div>
                <div>
                  <span className="office-sub-tag">REGISTERED HEADQUARTERS</span>
                  <h2 className="office-title dark-title">Mather Square, Ernakulam</h2>
                </div>
              </div>

              <div className="office-address-block light-address-block">
                <MapPin size={22} className="address-marker-icon" />
                <address className="office-full-address dark-address">
                  <strong>Sharp Elevator &amp; Escalator</strong>
                  <span>Mather Square, C Block, 4th Floor,</span>
                  <span>Xavier Arakkal Road, Near North Railway Station,</span>
                  <span>Kacheripady, Ernakulam, Kerala – 682018.</span>
                </address>
              </div>

              <div className="office-highlights-row">
                <div className="office-meta-item light-meta-item">
                  <Clock size={18} className="meta-icon" />
                  <div>
                    <strong>Working Hours:</strong>
                    <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="office-meta-item light-meta-item">
                  <ShieldCheck size={18} className="meta-icon" />
                  <div>
                    <strong>Emergency Breakdown:</strong>
                    <span className="text-gold-strong">24/7 Field Technical Support</span>
                  </div>
                </div>
              </div>

              <div className="office-action-row">
                <a
                  href="https://maps.google.com/?q=Mather+Square+Kacheripady+Ernakulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <MapPin size={17} />
                  <span>Get Driving Directions</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%2C%20I%20would%20like%20to%20visit%20your%20office%20at%20Mather%20Square"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  <MessageCircle size={17} />
                  <span>Schedule Office Visit</span>
                </a>
              </div>
            </div>

            {/* Right Column: Kerala District Coverage */}
            <div className="coverage-card-main light-panel">
              <div className="coverage-header">
                <div className="coverage-icon-box gold-icon-bg">
                  <Compass size={22} className="coverage-icon" />
                </div>
                <div>
                  <span className="coverage-sub-tag">REGIONAL REACH</span>
                  <h3 className="coverage-title dark-title">Statewide Service Footprint</h3>
                </div>
              </div>

              <p className="coverage-desc slate-desc">
                Our mobile engineering vans and resident service technicians provide prompt on-site
                inspections, erection, and preventive AMC servicing across Kerala:
              </p>

              <div className="districts-list-grid light-districts-grid">
                {coverageDistricts.map((d, idx) => (
                  <div key={idx} className="district-item light-district-item">
                    <CheckCircle2 size={16} className="district-check-icon" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <div className="coverage-banner-note light-note">
                <span className="note-dot" />
                <span>Rapid emergency dispatch within 30–60 minutes in Greater Cochin region.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Balanced Consultation Banner */}
      <section className="contact-page-cta-section white-theme">
        <div className="section-container">
          <div className="cta-banner-card with-bg-image cta-banner-centered">
            <img
              src="/contact_banner.jpg"
              alt="Sharp Elevator High-Rise Architectural Background"
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
          </div>
        </div>
      </section>
    </div>
  );
}
