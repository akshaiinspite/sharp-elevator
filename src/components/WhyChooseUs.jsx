import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Users, CheckCircle2 } from 'lucide-react';
import MosaicRevealImage from './MosaicRevealImage';

export default function WhyChooseUs() {
  const benefits = [
    {
      id: 'safety',
      title: 'Safety First',
      description: 'A focus on safe installation and maintenance practices.',
      icon: Shield,
    },
    {
      id: 'performance',
      title: 'Reliable Performance',
      description: 'Solutions designed to support consistent operation.',
      icon: Cpu,
    },
    {
      id: 'customer',
      title: 'Customer-Focused Service',
      description: 'Support tailored to project and maintenance requirements.',
      icon: Users,
    },
    {
      id: 'execution',
      title: 'Professional Execution',
      description: 'Careful coordination throughout installation and servicing.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="why-section" id="why-choose-us">
      <div className="section-container">
        <div className="why-editorial-grid">
          {/* Left Column: Asymmetrical Editorial Content */}
          <div className="why-content-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="section-sub-badge"
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

            {/* 4 Benefits Stacked in 2x2 Grid */}
            <div className="why-benefits-grid">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className="why-benefit-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
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

          {/* Right Column: 3x3 Polygon Mosaic Reveal Animation Showcase */}
          <div className="why-media-col">
            <div className="why-mosaic-frame">
              <MosaicRevealImage
                src="/sharp_mobility.jpg"
                alt="Sharp Elevator Precision Engineering and Modern Lobby Installation"
                className="why-showcase-image"
              />

              {/* Floating Architectural Badge */}
              <motion.div
                className="mosaic-floating-badge"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="floating-badge-icon">
                  <div className="badge-pulse-indicator" />
                </div>
                <div className="floating-badge-content">
                  <span className="badge-caption">Standard of Excellence</span>
                  <span className="badge-heading">Bureau of Indian Standards Compliant</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
