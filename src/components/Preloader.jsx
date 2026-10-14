import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isDone) {
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    // Smooth progress counter from 0 to 100% over ~1.3s
    const startTime = performance.now();
    const duration = 1350; // ms

    const frame = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(frame);
      } else {
        // Hold at 100% briefly, then trigger exit curtain
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 300);
      }
    };

    const animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = '';
    };
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle architectural ambient background */}
          <div className="preloader-grid-bg" />
          <div className="preloader-ambient-glow" />

          {/* Premium Logo Reveal Loader */}
          <motion.div
            className="preloader-logo-wrapper enhanced-loader"
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pulsing Gold Aura Ring */}
            <div className="loader-logo-aura-ring" />

            {/* Logo Image */}
            <div className="loader-logo-frame">
              <img
                src="/Sharp_Elevator_and_Escalator_Logo-removebg-preview.png"
                alt="Sharp Elevator &amp; Escalator"
                className="preloader-logo-img premium-logo"
              />
            </div>

            {/* Brand Title & Tagline */}
            <div className="loader-brand-text">
              <span className="loader-tagline">ENGINEERING EXCELLENCE</span>
            </div>

            {/* High-Tech Progress Bar */}
            <div className="loader-progress-track">
              <div
                className="loader-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage & Status Indicator */}
            <div className="loader-status-row">
              <span className="loader-status-label">Initializing Mobility Systems</span>
              <span className="loader-percentage-num">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
