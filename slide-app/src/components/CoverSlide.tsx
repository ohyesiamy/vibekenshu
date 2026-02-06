import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

export default function CoverSlide() {
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(230,50,50,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(212,168,83,0.06) 0%, transparent 50%), #0a0a0a',
      }}
    >
      {/* Grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.3,
          transformOrigin: 'left',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FadeUp delay={0.1}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            letterSpacing: 6,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}>
            Proposal — 2026.02
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -2,
            whiteSpace: 'pre-line',
            background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {'Vibe Coding\nfor KONAMI'}
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            marginTop: 24,
            letterSpacing: 2,
          }}>
            AI駆動の次世代開発研修パッケージ
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div style={{
            display: 'flex',
            gap: 24,
            justifyContent: 'center',
            marginTop: 48,
          }}>
            {['開発速度 5x', '工数削減 80%', 'ROI 3,100%'].map((text, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  padding: '8px 20px',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 4,
                  color: 'var(--accent)',
                  background: 'var(--accent-soft)',
                  letterSpacing: 1,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
