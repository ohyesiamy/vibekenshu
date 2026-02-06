import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { slides } from './data/slides';
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
  CoverSlide,
  StatsSlide,
  ProblemSlide,
  WhatIsSlide,
  SolutionSlide,
  EvidenceSlide,
  WorkflowSlide,
  ComparisonSlide,
  MarketSlide,
  PackagesSlide,
  ROISlide,
  TimelineSlide,
  CTASlide,
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < total) setCurrent(index);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

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

  const CurrentSlide = slideComponents[current];

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <CurrentSlide key={current} />
      </AnimatePresence>

      {/* Navigation bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          zIndex: 100,
        }}
      >
        {/* Left: slide indicator */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
            {String(current + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        {/* Center: progress dots */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 20 : 5,
                height: 5,
                borderRadius: 3,
                background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Right: navigation buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              width: 32,
              height: 32,
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
              width: 32,
              height: 32,
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
