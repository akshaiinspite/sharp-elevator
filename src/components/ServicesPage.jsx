import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Cpu,
  Users,
  Building,
  Sparkles,
  Phone,
  MessageCircle,
  Layers,
  Hospital,
  Compass,
  Zap,
  ArrowUpRight,
  Settings,
} from 'lucide-react';
import MosaicRevealImage from './MosaicRevealImage';

export default function ServicesPage({ onNavigateHome }) {
  const specializedCategories = [
    {
      title: 'Passenger Elevators',
      desc: 'High-speed, smooth and whisper-quiet passenger transportation for high-rises and apartments.',
      icon: Users,
    },
    {
      title: 'Residential Elevators',
      desc: 'Compact, luxurious, low-energy villa and duplex elevators with customizable cabins.',
      icon: Building,
    },
    {
      title: 'Freight Elevators',
      desc: 'Heavy-duty industrial and warehouse cargo lifts built for rugged reliability and high payload.',
      icon: Layers,
    },
    {
      title: 'Hospital Elevators',
      desc: 'Spacious, jerk-free stretchers and medical bed transit elevators with priority dispatch.',
      icon: Hospital,
    },
    {
      title: 'Panoramic Elevators',
      desc: 'Architectural full-view glass observation lifts that transform atriums into luxury spectacles.',
      icon: Sparkles,
    },
    {
      title: 'Machine-Room-Less (MRL) Elevators',
      desc: 'Space-saving gearless elevators eliminating bulky rooftop machine rooms with eco-drives.',
      icon: Settings,
    },
    {
      title: 'Escalators and Travolators',
      desc: 'Continuous pedestrian transit solutions for commercial complexes, malls, and public hubs.',
      icon: Compass,
    },
    {
      title: 'Elevator Controllers & Traction Machines',
      desc: 'Advanced microprocessor V3F control panels and permanent magnet synchronous traction motors.',
      icon: Zap,
    },
  ];

  const integrityPillars = [
    {
      title: 'Safety First',
      description: 'A focus on safe installation and maintenance practices.',
      icon: Shield,
    },
    {
      title: 'Reliable Performance',
      description: 'Solutions designed to support consistent operation.',
      icon: Cpu,
    },
    {
      title: 'Customer-Focused Service',
      description: 'Support tailored to project and maintenance requirements.',
      icon: Users,
    },
    {
      title: 'Professional Execution',
      description: 'Careful coordination throughout installation and servicing.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="services-page-wrapper">
      {/* 1. Services Page Hero Header */}
      <section className="services-hero-header">
        <div className="section-container">
          <div className="services-breadcrumb-row">
            <button
              type="button"
              onClick={onNavigateHome}
              className="breadcrumb-back-btn"
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
            END-TO-END VERTICAL TRANSPORTATION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="services-hero-title"
          >
            Complete Elevator &amp; Escalator <span className="text-gradient-gold">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="services-hero-subtitle"
          >
            From turnkey architectural installations to certified 24/7 preventive AMC and energy-efficient
            modernisation, Sharp Elevator &amp; Escalator provides precision engineering tailored to your building.
          </motion.p>

          {/* Quick Anchor Navigation Bar */}
          <div className="services-jump-bar">
            <a href="#section-installation" className="jump-link">
              <span>01. Installation</span>
            </a>
            <a href="#section-maintenance" className="jump-link">
              <span>02. Maintenance &amp; AMC</span>
            </a>
            <a href="#section-modernisation" className="jump-link">
              <span>03. Modernisation</span>
            </a>
            <a href="#section-specialised" className="jump-link">
              <span>04. Specialised Solutions</span>
            </a>
            <a href="#section-integrity" className="jump-link">
              <span>05. Engineering Integrity</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Elevator and Escalator Installation */}
      <section id="section-installation" className="service-detail-section dark-alt-bg">
        <div className="section-container">
          <div className="service-editorial-row">
            <motion.div
              className="service-content-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="service-number-badge">SECTION 01 — INSTALLATION</div>
              <h2 className="service-section-headline">Professional Installation Solutions</h2>
              <p className="service-section-desc">
                We provide installation solutions for residential and commercial buildings based on
                project requirements. Our approach focuses on appropriate planning, coordinated execution,
                and careful attention to safety and performance.
              </p>

              <div className="service-features-list">
                {[
                  'Passenger elevator installation',
                  'Residential and commercial applications',
                  'Escalator installation',
                  'Installation coordination and commissioning, subject to project scope',
                ].map((item, idx) => (
                  <div key={idx} className="service-feature-item">
                    <div className="feature-check-icon">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="feature-text">{item}</span>
                  </div>
                ))}
              </div>

              <div className="service-actions-row">
                <a
                  href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%2C%20I%20would%20like%20to%20discuss%20an%20Installation%20Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <span>Request Installation Plan</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="service-media-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="service-mosaic-wrapper">
                <MosaicRevealImage
                  src="/service_installation.jpg"
                  alt="Sharp Elevator and Escalator Professional Installation Solutions"
                  className="service-mosaic-img"
                />
                <div className="service-floating-info-card">
                  <div className="info-card-dot" />
                  <div>
                    <strong>Precision Shaft Alignment</strong>
                    <span>Bureau of Indian Standards Protocol</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Maintenance and Annual Maintenance Contracts */}
      <section id="section-maintenance" className="service-detail-section light-dark-bg">
        <div className="section-container">
          <div className="service-editorial-row reverse-layout">
            <motion.div
              className="service-media-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="service-mosaic-wrapper">
                <MosaicRevealImage
                  src="/service_maintenance.jpg"
                  alt="Sharp Elevator Maintenance and Annual Maintenance Contracts"
                  className="service-mosaic-img"
                />
                <div className="service-floating-info-card">
                  <div className="info-card-dot live-emerald" />
                  <div>
                    <strong>24/7 Breakdown Dispatch</strong>
                    <span>Rapid Mobile Van Response Across Kerala</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="service-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="service-number-badge">SECTION 02 — MAINTENANCE &amp; AMC</div>
              <h2 className="service-section-headline">Reliable Care for Long-Term Performance</h2>
              <p className="service-section-desc">
                Regular maintenance helps support equipment reliability, identify potential issues,
                and reduce unexpected downtime. Our maintenance solutions are designed around the
                equipment's requirements and the building's operational needs.
              </p>

              <div className="service-features-list">
                {[
                  'Preventive maintenance',
                  'Routine equipment inspections',
                  'Fault identification and servicing',
                  'Annual Maintenance Contracts (AMC)',
                  'Maintenance planning and service support',
                ].map((item, idx) => (
                  <div key={idx} className="service-feature-item">
                    <div className="feature-check-icon icon-gold">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="feature-text">{item}</span>
                  </div>
                ))}
              </div>

              <div className="service-actions-row">
                <a
                  href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%2C%20I%20would%20like%20to%20inquire%20about%20Annual%20Maintenance%20Contracts%20(AMC)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <span>Enquire About AMC Coverage</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Modernisation and Upgrades */}
      <section id="section-modernisation" className="service-detail-section dark-alt-bg">
        <div className="section-container">
          <div className="service-editorial-row">
            <motion.div
              className="service-content-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="service-number-badge">SECTION 03 — MODERNISATION</div>
              <h2 className="service-section-headline">Improve Your Existing Elevator Systems</h2>
              <p className="service-section-desc">
                Modernisation helps improve the performance, functionality, and usability of existing
                elevator and escalator systems. We can assess project requirements and recommend
                suitable upgrades based on equipment condition and compatibility.
              </p>

              <div className="service-features-list">
                {[
                  'Elevator system upgrades',
                  'Control system modernisation',
                  'Component replacement, where required',
                  'Performance and reliability improvements',
                  'Assessment of existing equipment',
                ].map((item, idx) => (
                  <div key={idx} className="service-feature-item">
                    <div className="feature-check-icon">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="feature-text">{item}</span>
                  </div>
                ))}
              </div>

              <div className="service-actions-row">
                <a
                  href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%2C%20I%20would%20like%20an%20Equipment%20Assessment%20for%20Modernisation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <span>Book Equipment Assessment</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="service-media-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="service-mosaic-wrapper">
                <MosaicRevealImage
                  src="/service_modernisation.jpg"
                  alt="Sharp Elevator Cabin and Control Modernisation and Upgrades"
                  className="service-mosaic-img"
                />
                <div className="service-floating-info-card">
                  <div className="info-card-dot" />
                  <div>
                    <strong>Energy-Saving V3F Drives</strong>
                    <span>Smooth Microprocessor Leveling</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Specialised Solutions */}
      <section id="section-specialised" className="service-detail-section light-dark-bg">
        <div className="section-container">
          <div className="service-editorial-row reverse-layout">
            <motion.div
              className="service-media-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="service-mosaic-wrapper">
                <MosaicRevealImage
                  src="/service_specialised.jpg"
                  alt="Sharp Elevator Specialised Architectural Solutions"
                  className="service-mosaic-img"
                />
                <div className="service-floating-info-card">
                  <div className="info-card-dot live-gold" />
                  <div>
                    <strong>Bespoke Architectural Engineering</strong>
                    <span>Tailored for Any Shaft Dimension</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="service-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="service-number-badge">SECTION 04 — SPECIALISED SOLUTIONS</div>
              <h2 className="service-section-headline">Solutions Designed Around Your Building</h2>
              <p className="service-section-desc">
                Different buildings have different vertical transportation needs. We can discuss
                suitable equipment options based on space, usage, capacity, and project requirements.
              </p>
              <p className="service-section-note">
                Potential product categories to confirm with the company before publishing:
              </p>

              {/* 8 Product Categories in 2-Column Grid */}
              <div className="specialised-categories-grid">
                {specializedCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="category-pill-card"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <div className="category-pill-icon">
                        <Icon size={18} />
                      </div>
                      <div className="category-pill-info">
                        <h4 className="category-pill-title">{cat.title}</h4>
                        <p className="category-pill-desc">{cat.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ENGINEERING INTEGRITY: Your Trusted Partner in Vertical Mobility */}
      <section id="section-integrity" className="service-detail-section dark-alt-bg integrity-section-block">
        <div className="section-container">
          <div className="why-editorial-grid">
            <div className="why-content-col">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="section-sub-badge badge-gold"
              >
                ENGINEERING INTEGRITY
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="section-title text-left"
              >
                Your Trusted Partner in Vertical Mobility
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="why-lead-text"
              >
                At Sharp Elevator &amp; Escalator, our dedication is rooted in precision mechanics,
                rigorous safety oversight, and dependable support from project inception through
                lifetime operation.
              </motion.p>

              <div className="why-benefits-grid">
                {integrityPillars.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="why-benefit-card"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    >
                      <div className="benefit-icon-wrapper">
                        <Icon size={22} className="benefit-icon" />
                      </div>
                      <div className="benefit-info">
                        <h3 className="benefit-title">{item.title}</h3>
                        <p className="benefit-desc">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="why-media-col">
              <div className="why-mosaic-frame">
                <MosaicRevealImage
                  src="/sharp_mobility.jpg"
                  alt="Sharp Elevator Precision Engineering and Modern Lobby Installation"
                  className="why-showcase-image"
                />

                <motion.div
                  className="mosaic-floating-badge"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="floating-badge-icon">
                    <div className="badge-pulse-indicator" />
                  </div>
                  <div className="floating-badge-content">
                    <span className="badge-caption">Sharp Elevator Precision</span>
                    <span className="badge-heading">Modern Lobby &amp; Architectural Engineering</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section className="services-closing-cta-section">
        <div className="section-container">
          <motion.div
            className="services-closing-cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="cta-glow-glowring" />
            <div className="cta-card-content">
              <span className="section-sub-badge badge-gold">DIRECT CONSULTATION</span>
              <h2 className="cta-card-title">
                Have a project in mind? Contact our team to discuss the right solution for your building.
              </h2>
              <p className="cta-card-subtitle">
                Our Kerala engineering office at Mather Square, Ernakulam is available to review shaft dimensions,
                traffic calculations, modernisation plans, and preventive maintenance requirements.
              </p>

              <div className="cta-card-actions">
                <a
                  href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%20%26%20Escalator%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-lg"
                >
                  <MessageCircle size={18} />
                  <span>Enquire About Our Services</span>
                  <ArrowUpRight size={18} />
                </a>

                <a href="tel:9447711587" className="btn btn-outline btn-lg">
                  <Phone size={18} />
                  <span>Call Hotline: 9447711587</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
