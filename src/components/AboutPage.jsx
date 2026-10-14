import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Compass,
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  HeartHandshake,
  Layers,
  ArrowUpRight,
  Phone,
} from 'lucide-react';
import ApertureCurtainRevealImage from './ApertureCurtainRevealImage';

export default function AboutPage({ onNavigateHome, onNavigateServices }) {
  const commitments = [
    {
      title: 'Quality',
      desc: 'Careful attention to installation and maintenance requirements.',
      icon: Award,
    },
    {
      title: 'Safety',
      desc: 'Prioritising safe working practices and equipment operation.',
      icon: ShieldCheck,
    },
    {
      title: 'Reliability',
      desc: 'Supporting consistent performance through appropriate servicing.',
      icon: Layers,
    },
    {
      title: 'Customer Care',
      desc: "Understanding each project's needs and providing suitable solutions.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Header */}
      <section className="about-page-hero">
        <div className="section-container">
          <div className="about-breadcrumb-row">
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
            PRECISION ENGINEERING &amp; INTEGRITY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-hero-title"
          >
            About <span className="text-gradient-gold">Sharp Elevator</span> &amp;{' '}
            <span className="text-gradient-crimson">Escalator</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-hero-subtitle"
          >
            Engineered excellence, strict safety compliance, and dependable vertical transit support
            across residential, commercial, and industrial developments in Kerala.
          </motion.p>

          {/* Quick Section Anchors */}
          <div className="about-jump-bar">
            <a href="#about-who-we-are" className="jump-link">
              <span>01. Who We Are</span>
            </a>
            <a href="#about-mission" className="jump-link">
              <span>02. Our Mission</span>
            </a>
            <a href="#about-vision" className="jump-link">
              <span>03. Our Vision</span>
            </a>
            <a href="#about-commitment" className="jump-link">
              <span>04. Our Commitment</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Who We Are */}
      <section id="about-who-we-are" className="about-detail-section dark-alt-bg">
        <div className="section-container">
          <div className="about-editorial-row">
            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-section-badge">SECTION 01 — WHO WE ARE</div>
              <h2 className="about-section-headline">About Sharp Elevator &amp; Escalator</h2>
              <p className="about-section-desc">
                Sharp Elevator &amp; Escalator provides elevator and escalator solutions for residential
                and commercial projects. Our services cover installation, maintenance, and modernisation,
                with a commitment to reliable performance, efficient execution, and customer satisfaction.
              </p>

              <div className="about-pillar-pills">
                <div className="pillar-pill">
                  <CheckCircle2 size={16} className="pill-check" />
                  <span>Residential &amp; Commercial Solutions</span>
                </div>
                <div className="pillar-pill">
                  <CheckCircle2 size={16} className="pill-check" />
                  <span>Installation, Maintenance &amp; Modernisation</span>
                </div>
                <div className="pillar-pill">
                  <CheckCircle2 size={16} className="pill-check" />
                  <span>Efficient Execution &amp; Customer Trust</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-media-col"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <ApertureCurtainRevealImage
                src="/about_who_we_are.jpg"
                alt="Sharp Elevator &amp; Escalator Modern Architectural Atrium Installation"
                captionTitle="Architectural Shaft Excellence"
                captionSubtitle="Engineered for High-Traffic Facilities"
                className="about-showcase-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Our Mission */}
      <section id="about-mission" className="about-detail-section light-dark-bg">
        <div className="section-container">
          <div className="about-editorial-row reverse-layout">
            <motion.div
              className="about-media-col"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <ApertureCurtainRevealImage
                src="/about_mission.jpg"
                alt="Sharp Elevator Precision Engineering and Safe Cabin Alignment"
                captionTitle="Zero Compromise Safety"
                captionSubtitle="Rigorous Lifecycle Care Standards"
                className="about-showcase-img"
              />
            </motion.div>

            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-section-badge">
                <Target size={14} className="badge-inline-icon" />
                <span>SECTION 02 — OUR MISSION</span>
              </div>
              <h2 className="about-section-headline">Making Every Journey Safe and Convenient</h2>
              <p className="about-section-desc">
                Our mission is to deliver dependable vertical transportation solutions that meet the
                practical needs of buildings and their occupants. We aim to provide quality service,
                efficient project execution, and continued support throughout the equipment lifecycle.
              </p>

              <div className="mission-value-cards">
                <div className="value-mini-card">
                  <div className="mini-card-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4>Safe &amp; Dependable</h4>
                    <p>Meeting practical building needs and passenger safety standards.</p>
                  </div>
                </div>

                <div className="value-mini-card">
                  <div className="mini-card-icon icon-gold">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4>Lifecycle Support</h4>
                    <p>Continuous engineering oversight from commissioning onward.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Our Vision */}
      <section id="about-vision" className="about-detail-section dark-alt-bg">
        <div className="section-container">
          <div className="about-editorial-row">
            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-section-badge">
                <Eye size={14} className="badge-inline-icon" />
                <span>SECTION 03 — OUR VISION</span>
              </div>
              <h2 className="about-section-headline">Building Better Vertical Mobility</h2>
              <p className="about-section-desc">
                We strive to be a trusted name in elevator and escalator solutions by focusing on
                service quality, customer relationships, and continuous improvement in the way we deliver
                our services.
              </p>

              <div className="vision-quote-card">
                <Sparkles size={20} className="quote-sparkle" />
                <p>
                  "Elevating standard engineering into long-term building value through precision,
                  integrity, and customer-first focus."
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-media-col"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <ApertureCurtainRevealImage
                src="/about_vision.jpg"
                alt="Sharp Elevator High-Rise Glass Observation Elevators Vision"
                captionTitle="Modern Architectural Vision"
                captionSubtitle="Continuous Technological Improvement"
                className="about-showcase-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Our Commitment */}
      <section id="about-commitment" className="about-detail-section light-dark-bg">
        <div className="section-container">
          <div className="about-editorial-row reverse-layout">
            <motion.div
              className="about-media-col"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <ApertureCurtainRevealImage
                src="/about_commitment.jpg"
                alt="Sharp Elevator Safety Diagnostics and Laser Calibration Testing"
                captionTitle="Safety &amp; Calibration Oversight"
                captionSubtitle="Zero Compromise Indian &amp; EN Standards"
                className="about-showcase-img"
              />
            </motion.div>

            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-section-badge">SECTION 04 — OUR COMMITMENT</div>
              <h2 className="about-section-headline">Quality, Safety and Customer Satisfaction</h2>

              {/* 4 Commitment Points as Requested */}
              <div className="commitments-stacked-list">
                {commitments.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="commitment-item-card"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                    >
                      <div className="commitment-icon-box">
                        <Icon size={20} />
                      </div>
                      <div className="commitment-text-box">
                        <h4 className="commitment-point-title">{item.title}:</h4>
                        <p className="commitment-point-desc">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Button: Discover Our Services */}
              <div className="about-cta-action-row">
                <button
                  type="button"
                  onClick={onNavigateServices}
                  className="btn btn-gold btn-lg"
                >
                  <span>Discover Our Services</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Closing Company Footer Banner */}
      <section className="about-closing-strip">
        <div className="section-container">
          <div className="about-strip-card">
            <div>
              <span className="section-sub-badge badge-gold">REGIONAL ENGINEERING EXCELLENCE</span>
              <h3 className="strip-card-title">Ready to Elevate Your Building Project?</h3>
              <p className="strip-card-desc">
                Contact our engineering team at Mather Square, Ernakulam for site inspections,
                traffic analysis, and turnkey installation proposals.
              </p>
            </div>
            <div className="strip-card-buttons">
              <button
                type="button"
                onClick={onNavigateServices}
                className="btn btn-gold"
              >
                <span>View Full Services</span>
                <ArrowRight size={16} />
              </button>
              <a href="tel:9447711587" className="btn btn-outline">
                <Phone size={16} />
                <span>9447711587</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
