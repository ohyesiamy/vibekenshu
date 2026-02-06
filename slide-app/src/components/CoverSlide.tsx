import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

export default function CoverSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 30% 40%, rgba(230,50,50,0.15) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(240,180,41,0.06) 0%, transparent 50%), var(--bg-primary)',
        justifyContent: 'center',
      }}
    >
      {/* Dramatic grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: m ? '40px 40px' : '100px 100px',
        pointerEvents: 'none',
      }} />

      {/* Horizontal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'absolute', top: '48%', left: 0, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent 10%, var(--accent) 50%, transparent 90%)', opacity: 0.2, transformOrigin: 'left' }}
      />

      {/* Floating orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: m ? '15%' : '20%', right: m ? '10%' : '15%',
          width: m ? 120 : 200, height: m ? 120 : 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,50,50,0.15), transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900 }}>
        <FadeUp delay={0.1}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 11, letterSpacing: m ? 3 : 8,
            color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: m ? 24 : 40,
          }}>
            Confidential — KONAMI Group Corporation
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: m ? 48 : 'clamp(64px, 9vw, 110px)',
            fontWeight: 800, lineHeight: 1, letterSpacing: m ? -1 : -3,
            background: 'linear-gradient(160deg, #ffffff 30%, #888888 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Vibe Coding
          </h1>
        </FadeUp>

        <FadeUp delay={0.45}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: m ? 18 : 28, fontWeight: 300,
            color: 'var(--text-secondary)', marginTop: m ? 8 : 12, letterSpacing: m ? 2 : 6,
          }}>
            for KONAMI
          </div>
        </FadeUp>

        <FadeUp delay={0.6}>
          <p style={{
            fontSize: m ? 13 : 16, color: 'var(--text-muted)', marginTop: m ? 20 : 32,
            lineHeight: 1.8, fontWeight: 300, maxWidth: 500, margin: `${m ? 20 : 32}px auto 0`,
          }}>
            AI駆動の次世代開発研修パッケージ
          </p>
        </FadeUp>

        <FadeUp delay={0.8}>
          <div style={{
            display: 'flex', gap: m ? 8 : 16, justifyContent: 'center',
            marginTop: m ? 32 : 56, flexWrap: 'wrap',
          }}>
            {[
              { value: '5x', label: '開発速度', color: 'var(--emerald)' },
              { value: '80%', label: '工数削減', color: 'var(--cyan)' },
              { value: '3,100%', label: 'ROI', color: 'var(--accent)' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.5 }}
                style={{
                  padding: m ? '10px 16px' : '14px 28px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8, backdropFilter: 'blur(10px)',
                  display: 'flex', alignItems: 'center', gap: m ? 8 : 12,
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: m ? 18 : 24, fontWeight: 800, color: item.color }}>
                  {item.value}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 10, color: 'var(--text-muted)', letterSpacing: 1 }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={1.2}>
          <div style={{
            marginTop: m ? 32 : 56, fontFamily: 'var(--font-mono)',
            fontSize: m ? 9 : 10, color: 'var(--text-muted)', letterSpacing: 2,
          }}>
            2026.02 — Second Talent Inc.
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
