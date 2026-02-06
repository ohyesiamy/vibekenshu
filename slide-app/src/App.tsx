import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { slides } from './data/slides';
import useIsMobile from './hooks/useIsMobile';
import CoverSlide from './components/CoverSlide';
import StatsSlide from './components/StatsSlide';
import ProblemSlide from './components/ProblemSlide';
import WhatIsSlide from './components/WhatIsSlide';
import SolutionSlide from './components/SolutionSlide';
import EvidenceSlide from './components/EvidenceSlide';
import WorkflowSlide from './components/WorkflowSlide';
import ComparisonSlide from './components/ComparisonSlide';
import MarketSlide from './components/MarketSlide';
import PackagesSlide from './components/PackagesSlide';
import ROISlide from './components/ROISlide';
import TimelineSlide from './components/TimelineSlide';
import CTASlide from './components/CTASlide';

const slideComponents = [
  CoverSlide, StatsSlide, ProblemSlide, WhatIsSlide, SolutionSlide,
  EvidenceSlide, WorkflowSlide, ComparisonSlide, MarketSlide,
  PackagesSlide, ROISlide, TimelineSlide, CTASlide,
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = slides.length;
  const isMobile = useIsMobile();
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((prev) => {
      if (index >= 0 && index < total && index !== prev) {
        setDirection(index > prev ? 1 : -1);
        return index;
      }
      return prev;
    });
  }, [total]);

  const next = useCallback(() => {
    setCurrent((prev) => {
      if (prev < total - 1) {
        setDirection(1);
        return prev + 1;
      }
      return prev;
    });
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      if (prev > 0) {
        setDirection(-1);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchRef.current = null;
  }, [next, prev]);

  const CurrentSlide = slideComponents[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '4%' : '-4%',
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '4%' : '-4%',
      opacity: 0,
      scale: 0.97,
    }),
  };

  return (
    <div
      style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Navigation bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? '10px 12px' : '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
          zIndex: 100,
        }}
      >
        {/* Left: slide indicator */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: isMobile ? 10 : 12,
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          minWidth: isMobile ? 40 : 60,
        }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
            {String(current + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        {/* Center: progress dots (hidden on very small screens) */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 20 : 5,
                  height: 5,
                  borderRadius: 3,
                  background: i === current ? 'var(--accent)' : i < current ? 'rgba(230,50,50,0.3)' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Mobile: simple progress bar */}
        {isMobile && (
          <div style={{
            flex: 1,
            height: 3,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 2,
            margin: '0 12px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${((current + 1) / total) * 100}%`,
              background: 'var(--accent)',
              borderRadius: 2,
              transition: 'width 0.3s ease',
            }} />
          </div>
        )}

        {/* Right: navigation buttons */}
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              width: isMobile ? 36 : 32,
              height: isMobile ? 36 : 32,
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.03)',
              color: current === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              padding: 0,
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            style={{
              width: isMobile ? 36 : 32,
              height: isMobile ? 36 : 32,
              borderRadius: 6,
              border: '1px solid var(--border-accent)',
              background: current === total - 1 ? 'rgba(255,255,255,0.03)' : 'var(--accent)',
              color: current === total - 1 ? 'var(--text-muted)' : '#fff',
              cursor: current === total - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 600,
              padding: 0,
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
