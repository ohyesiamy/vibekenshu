import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

export default function CTASlide() {
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(230,50,50,0.12) 0%, transparent 60%), #0a0a0a',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 700, position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>
            Next Step
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.15,
          }}>
            まず、<span style={{ color: 'var(--accent)' }}>体験</span>を。
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p style={{
            fontSize: 16,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            marginTop: 20,
            lineHeight: 1.8,
          }}>
            コナミ様のIPを題材にした2時間の無料デモセッション。<br />
            バイブコーディングの可能性を、その目で確かめてください。
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-block',
              marginTop: 36,
              padding: '16px 48px',
              background: 'var(--accent)',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 1,
              cursor: 'pointer',
              boxShadow: '0 0 30px var(--accent-glow)',
            }}
          >
            無料デモセッションを予約する
          </motion.div>
        </FadeUp>

        <FadeUp delay={0.75}>
          <div style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}>
            {[
              { label: '早期契約特典', desc: 'パイロット研修 10%割引' },
              { label: '移行保証', desc: 'B→C移行時 50%差額充当' },
              { label: '即決特典', desc: '追加5名分の受講枠' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px',
                border: '1px solid var(--border)',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: 2, marginBottom: 6 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <div style={{
            marginTop: 40,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-muted)',
          }}>
            有効期限: 2026年3月31日
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
