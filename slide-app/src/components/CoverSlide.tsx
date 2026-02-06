import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

export default function CoverSlide() {
  const m = useIsMobile();
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
        backgroundSize: m ? '40px 40px' : '80px 80px',
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
            fontSize: m ? 10 : 13,
            letterSpacing: m ? 3 : 6,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: m ? 20 : 32,
          }}>
            Proposal — 2026.02
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 8vw, 96px)',
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
            fontSize: m ? 14 : 18,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            marginTop: m ? 16 : 24,
            letterSpacing: m ? 1 : 2,
          }}>
            AI駆動の次世代開発研修パッケージ
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div style={{
            display: 'flex',
            gap: m ? 8 : 24,
            justifyContent: 'center',
            marginTop: m ? 28 : 48,
            flexWrap: 'wrap',
          }}>
            {['開発速度 5x', '工数削減 80%', 'ROI 3,100%'].map((text, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: m ? 10 : 12,
                  padding: m ? '6px 12px' : '8px 20px',
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
