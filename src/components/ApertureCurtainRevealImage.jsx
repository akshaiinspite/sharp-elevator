import React, { useState, useEffect, useRef } from 'react';

/**
 * ApertureCurtainRevealImage Component
 * Modern cinematic scroll-triggered dual-curtain aperture reveal with 3D depth tilt & golden laser edge sweep.
 * Completely distinct from the polygon mosaic used on the Services page.
 */
export default function ApertureCurtainRevealImage({
  src,
  alt,
  captionTitle,
  captionSubtitle,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`aperture-reveal-wrapper ${isVisible ? 'is-in-view' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="aperture-inner-stage">
        {/* Cinematic Zooming Base Image */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="aperture-photo-asset"
        />

        {/* Ambient Dark-Gold Vignette Overlay */}
        <div className="aperture-vignette" />

        {/* Diagonal Golden Laser Wipe Sheen */}
        <div className="aperture-laser-beam" />

        {/* Top/Left Slide Curtain Panel */}
        <div className="aperture-curtain curtain-top" />

        {/* Bottom/Right Slide Curtain Panel */}
        <div className="aperture-curtain curtain-bottom" />

        {/* Floating Spec Badge if provided */}
        {captionTitle && (
          <div className="aperture-floating-caption">
            <span className="aperture-caption-pulse" />
            <div className="aperture-caption-text">
              <strong>{captionTitle}</strong>
              {captionSubtitle && <span>{captionSubtitle}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
