import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Award, Clock } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Architectural Photography - Clear, Bright, and Aligned */}
      <div className="hero-media-wrapper">
        <img
          src="/hero_elevator.jpg"
          alt="Modern Architectural Atrium with Glass Elevators and Escalator"
          className="hero-bg-image"
          fetchPriority="high"
        />
        {/* Soft, clear linear gradient for text readability without black shadow */}
        <div className="hero-clear-overlay" />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand Tagline Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge-bullet" />
            <span className="badge-text">Kerala's Trusted Vertical Mobility Partner</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="hero-headline">
            <span className="hero-headline-brand">Sharp Elevator &amp; Escalator</span>
            <span className="hero-headline-tag">
              Elevating Every Journey with <span className="text-gradient-gold">Safety</span> and{' '}
              <span className="text-gradient-crimson">Reliability</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-description">
            Sharp Elevator &amp; Escalator delivers dependable vertical transportation solutions
            for residential and commercial buildings. From installation to maintenance and
            modernisation, we focus on safety, performance, and customer satisfaction.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#services" className="btn btn-gold btn-lg">
              <span>Explore Our Services</span>
              <ArrowDown size={18} />
            </a>

            <a href="#contact" className="btn btn-outline btn-lg">
              <span>Contact Us</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Highlights Bar */}
          <motion.div variants={itemVariants} className="hero-highlights">
            <div className="highlight-item">
              <ShieldCheck className="highlight-icon" size={20} />
              <div className="highlight-text">
                <strong>Safety First</strong>
                <span>Rigorous Quality Protocols</span>
              </div>
            </div>

            <div className="highlight-divider" />

            <div className="highlight-item">
              <Award className="highlight-icon" size={20} />
              <div className="highlight-text">
                <strong>Reliable Performance</strong>
                <span>Precision Engineering Solutions</span>
              </div>
            </div>

            <div className="highlight-divider" />

            <div className="highlight-item">
              <Clock className="highlight-icon" size={20} />
              <div className="highlight-text">
                <strong>24/7 Support</strong>
                <span>Dependable Field Servicing</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Clean Scroll Cue */}
      <div className="hero-scroll-cue">
        <a href="#services" aria-label="Scroll down to services">
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel" />
          </div>
          <span className="scroll-indicator-text">SCROLL</span>
        </a>
      </div>
    </section>
  );
}
