import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Settings,
  Sparkles,
  Clock,
  Navigation,
  Route
} from 'lucide-react';

export default function Services() {
  const [progress, setProgress] = useState(0.08); // 0 to 1
  const [activeStops, setActiveStops] = useState([true, false, false, false]);
  const [guidePos, setGuidePos] = useState({ x: 146, y: 36, angle: 90 });
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null);
  const roadmapRef = useRef(null);
  const mainPathRef = useRef(null);
  const glowPathRef = useRef(null);
  const pathLengthRef = useRef(1600);

  const stopThresholds = [0.06, 0.35, 0.68, 0.98];

  const stopsData = [
    {
      id: 'installation',
      number: '01',
      title: 'Installation',
      label: 'QUALITY ASSURANCE',
      labelIcon: ShieldCheck,
      description: 'Professional installation solutions tailored to your building requirements.',
      image: '/service_installation.jpg',
      icon: Wrench,
      positionClass: 'stop-left stop-1',
      features: [
        'Custom Shaft Engineering',
        'Energy Efficient Drives',
        'Comprehensive Load Testing',
      ],
      whatsappQuery: 'Hello%20Sharp%20Elevator%2C%20I%20am%20interested%20in%20Installation%20services',
    },
    {
      id: 'maintenance',
      number: '02',
      title: 'Maintenance',
      label: 'VETTING & SAFETY',
      labelIcon: Settings,
      description: 'Regular servicing to support safe, reliable, and efficient operation.',
      image: '/station2.jpg',
      icon: Settings,
      positionClass: 'stop-right stop-2',
      features: [
        'Preventive Diagnostics',
        'OEM Component Checks',
        'Lubrication & Calibration',
      ],
      whatsappQuery: 'Hello%20Sharp%20Elevator%2C%20I%20am%20interested%20in%20Maintenance%20services',
    },
    {
      id: 'modernisation',
      number: '03',
      title: 'Modernisation',
      label: 'UPGRADES & RETROFIT',
      labelIcon: Sparkles,
      description: 'Upgrades to improve the performance and functionality of existing systems.',
      image: '/service_modernisation.jpg',
      icon: Sparkles,
      positionClass: 'stop-left stop-3',
      features: [
        'Controller Upgrades',
        'Aesthetic Cab Refurbishment',
        'Door Operator Renewal',
      ],
      whatsappQuery: 'Hello%20Sharp%20Elevator%2C%20I%20am%20interested%20in%20Modernisation%20services',
    },
    {
      id: 'amc',
      number: '04',
      title: 'Annual Maintenance Contracts (AMC)',
      label: 'PEACE OF MIND & 24/7 SUPPORT',
      labelIcon: Clock,
      description: 'Planned maintenance solutions to help extend equipment life and reduce unexpected interruptions.',
      image: '/service_amc.jpg',
      icon: Clock,
      positionClass: 'stop-right stop-4',
      features: [
        'Scheduled Periodic Audits',
        'Priority Breakdown Callout',
        'Predictive Life-Cycle Care',
      ],
      whatsappQuery: 'Hello%20Sharp%20Elevator%2C%20I%20am%20interested%20in%20Annual%20Maintenance%20Contracts',
    },
  ];

  // Initialize total length of the SVG path
  useEffect(() => {
    if (mainPathRef.current) {
      try {
        const total = mainPathRef.current.getTotalLength();
        if (total > 0) {
          pathLengthRef.current = total;
          if (glowPathRef.current) {
            glowPathRef.current.style.strokeDasharray = `${total}`;
            glowPathRef.current.style.strokeDashoffset = `${total * (1 - progress)}`;
          }
          mainPathRef.current.style.strokeDasharray = `${total}`;
          mainPathRef.current.style.strokeDashoffset = `${total * (1 - progress)}`;
        }
      } catch {
        // fallback
      }
    }
  }, [progress]);

  // Update guide position and path dashoffset based on a normalized progress (0 to 1)
  const updateGuideToProgress = useCallback((p) => {
    if (!mainPathRef.current || !roadmapRef.current) return;
    if (typeof window !== 'undefined' && window.innerWidth <= 960) return;

    const clampedP = Math.max(0.01, Math.min(0.999, p));
    const total = pathLengthRef.current;
    const distance = clampedP * total;

    try {
      const pt = mainPathRef.current.getPointAtLength(distance);
      const nextDist = Math.min(distance + 14, total);
      const nextPt = mainPathRef.current.getPointAtLength(nextDist);

      // SVG coordinates (viewBox 1000 x 2200) scaled to actual container dimensions
      const roadmapRect = roadmapRef.current.getBoundingClientRect();
      const scaleX = roadmapRect.width / 1000;
      const scaleY = roadmapRect.height / 2200;

      // Guide element is 68x68 px on desktop, 48x48 on mobile
      const isMobile = roadmapRect.width < 680;
      const offset = isMobile ? 24 : 34;
      const guideX = pt.x * scaleX - offset;
      const guideY = pt.y * scaleY - offset;

      const angle = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);

      setGuidePos({ x: guideX, y: guideY, angle: angle + 45 });

      // Update stroke dashoffset
      const dash = total * (1 - clampedP);
      if (mainPathRef.current) {
        mainPathRef.current.style.strokeDashoffset = `${dash}`;
      }
      if (glowPathRef.current) {
        glowPathRef.current.style.strokeDashoffset = `${dash}`;
      }

      // Update active states for the 4 stops
      setActiveStops([
        clampedP >= 0.02,
        clampedP >= 0.26,
        clampedP >= 0.58,
        clampedP >= 0.88,
      ]);
    } catch {
      // fallback
    }
  }, []);

  // Smooth rAF scroll listener: dynamically and fluidly drives the logo tracker
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.innerWidth <= 960) return;
      if (isHovering || !roadmapRef.current) return;
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = roadmapRef.current?.getBoundingClientRect();
        if (!rect) return;
        const windowH = window.innerHeight;

        // Section progress calculation - smooth tracking from when top enters viewport until bottom passes
        const totalH = rect.height;
        const visibleOffset = windowH * 0.55 - rect.top;
        const currentP = Math.max(0.01, Math.min(0.999, visibleOffset / (totalH - windowH * 0.2)));

        setProgress(currentP);
        updateGuideToProgress(currentP);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isHovering, updateGuideToProgress]);

  // Window resize handler to maintain accurate scale mapping
  useEffect(() => {
    const handleResize = () => {
      updateGuideToProgress(progress);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [progress, updateGuideToProgress]);

  // Click/Hover action on cards to guide the logo to that station
  const handleSelectStop = (index) => {
    const targetP = stopThresholds[index];
    setProgress(targetP);
    updateGuideToProgress(targetP);
  };

  return (
    <section className="journey-section-wrapper" id="services" ref={sectionRef}>
      <div className="section-container">
        {/* 1. Who We Are / Our Journey Intro Header */}
        <div className="whoweare-intro-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-badge-logo"
          >
            <Route size={16} className="badge-route-icon" />
            <span>OUR JOURNEY &amp; CORE EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-title-logo"
          >
            Supporting Buildings &amp; Facilities Through{' '}
            <span className="highlight-tagline text-gradient-gold">
              Trusted Vertical Mobility
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-lead-styled"
          >
            Every building deserves dependable, whisper-quiet vertical transportation engineered
            with uncompromising safety. At Sharp Elevator &amp; Escalator, we help architects, builders,
            and facility managers achieve flawless passenger transit through precision installation,
            proactive servicing, and complete lifecycle care across Kerala.
          </motion.p>
        </div>

        {/* 2. Interactive Journey Roadmap */}
        <div className="journey-roadmap" ref={roadmapRef}>
          {/* SVG Road Track with Golden Gradient & Dynamic Illuminated Glow */}
          <svg
            className="journey-svg"
            viewBox="0 0 1000 2200"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="journeyPathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C59B27" stopOpacity="0.4" />
                <stop offset="35%" stopColor="#E5C058" stopOpacity="1" />
                <stop offset="70%" stopColor="#C59B27" stopOpacity="1" />
                <stop offset="100%" stopColor="#E31B23" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="journeyPathGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(197, 155, 39, 0.1)" />
                <stop offset="50%" stopColor="rgba(229, 192, 88, 0.55)" />
                <stop offset="100%" stopColor="rgba(227, 27, 35, 0.35)" />
              </linearGradient>
            </defs>

            {/* Base Background Track (Faint Dashed Line) */}
            <path
              d="M 180 80 C 180 320, 820 340, 820 580 C 820 840, 180 860, 180 1100 C 180 1380, 820 1400, 820 1640"
              stroke="rgba(197, 155, 39, 0.16)"
              strokeWidth="4"
              strokeDasharray="8 8"
              fill="none"
              strokeLinecap="round"
            />

            {/* Soft Ambient Glow Path Behind Active Stroke */}
            <path
              ref={glowPathRef}
              className="journey-svg-path-glow"
              d="M 180 80 C 180 320, 820 340, 820 580 C 820 840, 180 860, 180 1100 C 180 1380, 820 1400, 820 1640"
              stroke="url(#journeyPathGlow)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />

            {/* Main Glowing Road Stroke */}
            <path
              ref={mainPathRef}
              className="journey-svg-path"
              d="M 180 80 C 180 320, 820 340, 820 580 C 820 840, 180 860, 180 1100 C 180 1380, 820 1400, 820 1640"
              stroke="url(#journeyPathGrad)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Station Milestones on Path for Clear Flow */}
            <circle cx="180" cy="80" r="12" fill="#0B111B" stroke="#C59B27" strokeWidth="3" />
            <circle cx="180" cy="80" r="5" fill="#E5C058" />

            <circle cx="820" cy="580" r="12" fill="#0B111B" stroke="#C59B27" strokeWidth="3" />
            <circle cx="820" cy="580" r="5" fill="#E5C058" />

            <circle cx="180" cy="1100" r="12" fill="#0B111B" stroke="#C59B27" strokeWidth="3" />
            <circle cx="180" cy="1100" r="5" fill="#E5C058" />

            <circle cx="820" cy="1640" r="14" fill="#0B111B" stroke="#E31B23" strokeWidth="3.5" />
            <circle cx="820" cy="1640" r="6" fill="#E31B23" />
          </svg>

          {/* 3. The Moving Guide Tracker (Features Company Logo Instead of Doctor) */}
          <div
            className="journey-doctor-guide"
            style={{
              transform: `translate(${guidePos.x}px, ${guidePos.y}px)`,
            }}
          >
            <div className="doctor-pulse-ring" />
            <div className="doctor-avatar-wrap">
              <img
                src="/Sharp_Elevator_and_Escalator_Logo-removebg-preview.png"
                alt="Sharp Elevator &amp; Escalator Guide"
                className="guide-brand-logo"
              />
            </div>
            <div
              className="doctor-direction-arrow"
              style={{ transform: `rotate(${guidePos.angle}deg)` }}
            >
              <Navigation size={11} />
            </div>
            <div className="doctor-glow" />
          </div>

          {/* 4. Journey Stops: 4 Alternating Interactive Cards */}
          {stopsData.map((stop, idx) => {
            const isActive = activeStops[idx];
            const IconComponent = stop.icon;
            const LabelIcon = stop.labelIcon;

            return (
              <div
                key={stop.id}
                className={`journey-stop ${stop.positionClass} ${isActive ? 'is-active' : ''}`}
                onClick={() => handleSelectStop(idx)}
                onMouseEnter={() => {
                  setIsHovering(true);
                  handleSelectStop(idx);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Active Checkmark Pill (Revealed when reached) */}
                <div className={`journey-check ${isActive ? 'revealed' : ''}`}>
                  <CheckCircle2 size={18} className="check-icon-green" />
                </div>

                {/* Stop Watermark Number */}
                <div className="journey-stop-number">{stop.number}</div>

                {/* Top Right Stop Icon */}
                <div className="journey-stop-icon">
                  <IconComponent size={20} />
                </div>

                {/* Card Media Preview */}
                <div className="whoweare-card-image-wrapper">
                  <img
                    src={stop.image}
                    alt={stop.title}
                    className="whoweare-card-image"
                    loading="lazy"
                  />
                  <div className="whoweare-card-badge">
                    <span>STATION {stop.number}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="whoweare-card-body">
                  <span className="whoweare-card-label">
                    <LabelIcon size={13} />
                    <span>{stop.label}</span>
                  </span>

                  <h3 className="whoweare-card-heading">{stop.title}</h3>

                  <p className="whoweare-card-desc">{stop.description}</p>

                  <div className="whoweare-card-features">
                    {stop.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <CheckCircle2 size={13} className="feature-dot" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/919447711587?text=${stop.whatsappQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whoweare-card-btn btn-glow"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Inquire Solution</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
