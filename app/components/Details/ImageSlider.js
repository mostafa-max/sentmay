"use client";
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PlaceholderImage from '../common/Placeholder';

const arabicNumber = (num) => new Intl.NumberFormat('ar-EG').format(num);

export const ImageSlider = ({ item }) => {
    
  const [activeIndex, setActiveIndex] = useState(0);  
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef(null);
  const aspectRatio = 1;
  const images = useMemo(() => 
    item?.picture?.split(',') ,
    [item]
  );
  const hasMultipleImages = images?.length > 1;
  const handleKeyDown = useCallback((e) => {
    if (hasMultipleImages) {
      if (e.key === 'ArrowRight') handlePrev();
      if (e.key === 'ArrowLeft') handleNext();
    }
  }, [hasMultipleImages]);

  useEffect(() => {
    const slider = containerRef.current;
    slider?.addEventListener('keydown', handleKeyDown);
    return () => slider?.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handlePrev = useCallback(() => {
    if (hasMultipleImages) {
      setActiveIndex(prev => (prev - 1 + images.length) % images.length);
    }
  }, [images?.length, setActiveIndex, hasMultipleImages]);

  const handleNext = useCallback(() => {
    if (hasMultipleImages) {
      setActiveIndex(prev => (prev + 1) % images?.length);
    }
  }, [images?.length, setActiveIndex, hasMultipleImages]);

  const handleTouchStart = (e) => {
    if (hasMultipleImages) {
      setDragStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (hasMultipleImages) {
      const dragEndX = e.changedTouches[0].clientX;
      const deltaX = dragEndX - dragStartX;
      const swipeThreshold = 50;

      if (Math.abs(deltaX) > swipeThreshold) {
        deltaX > 0 ? handlePrev() : handleNext();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      tabIndex={0}
      className="relative overflow-hidden outline-none"
      style={{ paddingTop: `${aspectRatio * 100}%` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">
        {hasMultipleImages && (
          <div className="absolute inset-0 flex justify-between items-center z-20">
            <button
              onClick={handlePrev}
              className="mr-2 p-2 bg-base-100/40 rounded-full hover:bg-base-100 transition-all shadow-lg"
              aria-label="الصورة السابقة"
            >
              <FiChevronLeft className="w-6 h-6 transform scale-x-[-1]" />
            </button>
            <button
              onClick={handleNext}
              className="ml-2 p-2 bg-base-100/40 rounded-full hover:bg-base-100 transition-all shadow-lg"
              aria-label="الصورة التالية"
            >
              <FiChevronRight className="w-6 h-6 transform scale-x-[-1]" />
            </button>
          </div>
        )}

        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
                {images?<Image
                  src={images[activeIndex]}
                  alt="صورة "
                  fill
                  className="object-cover"
                  priority={activeIndex === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />: <PlaceholderImage/>}
              </div>
            </motion.div>
          </AnimatePresence>

          {hasMultipleImages && (
            <>
              <div className="absolute top-4 right-4 bg-base-100/80 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                {/* {arabicNumber(activeIndex + 1)} / {arabicNumber(images?.length)} */}
                {(activeIndex + 1)} / {(images?.length)}
              </div>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-base-100/80 hover:bg-base-100'
                    }`}
                    aria-label={`انتقل إلى الصورة ${arabicNumber(idx + 1)}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};