import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const photos = [
  { id: 'lift-1', src: '/lift1.jpeg', alt: 'Sharp Elevator Installation 1' },
  { id: 'lift-2', src: '/lift2.jpeg', alt: 'Sharp Elevator Installation 2' },
  { id: 'lift-3', src: '/lift3.jpeg', alt: 'Sharp Elevator Installation 3' },
  { id: 'lift-4', src: '/lift4.jpeg', alt: 'Sharp Elevator Installation 4' },
  { id: 'lift-5', src: '/lift5.jpeg', alt: 'Sharp Elevator Installation 5' },
  { id: 'lift-6', src: '/lift6.jpeg', alt: 'Sharp Elevator Installation 6' },
];

export default function GalleryPage({ onNavigateHome }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handleNext = useCallback(() => {
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return (current + 1) % photos.length;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return (current - 1 + photos.length) % photos.length;
    });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhotoIndex]);

  return (
    <div className="gallery-page-wrapper">
      {/* Minimal Header */}
      <section className="gallery-hero-header">
        <div className="section-container">
          <div className="gallery-breadcrumb-row">
            <button
              type="button"
              onClick={onNavigateHome}
              className="breadcrumb-back-btn"
            >
              &larr; Back to Home
            </button>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gallery-hero-title"
          >
            Project <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
        </div>
      </section>

      {/* 6 Photos Showcase */}
      <section className="gallery-showcase-section">
        <div className="section-container">
          <div className="gallery-photos-grid">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="gallery-photo-card"
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <div className="gallery-photo-media">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="gallery-pure-img"
                  />
                  <div className="gallery-photo-overlay">
                    <div className="gallery-zoom-icon">
                      <Maximize2 size={22} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Photo Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pure-lightbox-backdrop"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              className="pure-lightbox-close"
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label="Close"
            >
              <X size={26} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              className="pure-lightbox-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              className="pure-lightbox-nav next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>

            {/* Lightbox Image */}
            <motion.div
              key={selectedPhotoIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="pure-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].alt}
                className="pure-lightbox-img"
              />
              <div className="pure-lightbox-counter">
                {selectedPhotoIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
