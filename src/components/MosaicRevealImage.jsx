import React, { useState, useEffect, useRef } from 'react';

/**
 * 3x3 Staggered Polygon Clip-Path Mosaic Reveal Animation Component
 * Exactly reproduces the luxury spatial mosaic reveal pattern.
 */
export default function MosaicRevealImage({ src, alt, className = '' }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const isReduced = isMobile || (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [isVisible, setIsVisible] = useState(true);
  const [animationDone, setAnimationDone] = useState(isMobile);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isReduced) {
      setAnimationDone(true);
      return;
    }

    let completionTimer;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // 1.5s timeout to hand off to base image and clean up overlay masks
          completionTimer = setTimeout(() => {
            setAnimationDone(true);
          }, 1200);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (completionTimer) clearTimeout(completionTimer);
    };
  }, [isReduced, isMobile]);

  // Generate 3x3 matrix (9 tiles)
  // Each tile is positioned in a 3x3 CSS grid and references the exact 300% cropped slice of the background image
  const tiles = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      tiles.push({
        id: `mosaic-tile-${r}-${c}`,
        row: r,
        col: c,
        delay: (r + c) * 0.15, // diagonal wave ripple stagger
        bgPos: `${c * 50}% ${r * 50}%`,
      });
    }
  }

  return (
    <div
      ref={containerRef}
      className={`mosaic-reveal-container ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {/* Permanent base image that remains after animation completes */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`mosaic-base-img ${animationDone ? 'animation-done' : ''}`}
      />

      {/* 3x3 Animated Tile Masks: active only until animation completes */}
      {!animationDone && (
        <div className="mosaic-grid-overlay" aria-hidden="true">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="mosaic-tile-cell"
              style={{
                left: `${tile.col * 33.3333}%`,
                top: `${tile.row * 33.3333}%`,
                width: '33.3334%',
                height: '33.3334%',
              }}
            >
              <div
                className="mosaic-tile-inner"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: tile.bgPos,
                  clipPath: isVisible
                    ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
                  transition: `clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${tile.delay}s`,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
