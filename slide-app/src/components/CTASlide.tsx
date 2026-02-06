import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

export default function CTASlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(230,50,50,0.12) 0%, transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(240,180,41,0.05) 0%, transparent 40%), var(--bg-primary)',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: m ? '40px 40px' : '80px 80px',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', maxWidth: 800, position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: m ? 16 : 24 }}>
            Next Step
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: m ? 36 : 'clamp(48px, 7vw, 80px)',
            fontWeight: 900, letterSpacing: -2, lineHeight: 1.1,
          }}>
            まず、<span style={{ color: 'var(--accent)' }}>体験</span>を。
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p style={{
            fontSize: m ? 13 : 17, fontWeight: 300, color: 'var(--text-secondary)',
            marginTop: m ? 14 : 20, lineHeight: 1.8, maxWidth: 600, margin: `${m ? 14 : 20}px auto 0`,
          }}>
            コナミ様のIPを題材にした2時間の無料デモセッション。
            バイブコーディングの可能性を、その目で確かめてください。
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px var(--accent-glow)' }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ['0 0 20px rgba(230,50,50,0.2)', '0 0 40px rgba(230,50,50,0.4)', '0 0 20px rgba(230,50,50,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'inline-block', marginTop: m ? 24 : 40,
              padding: m ? '14px 36px' : '18px 56px',
              background: 'var(--accent)', borderRadius: 10,
              fontSize: m ? 15 : 18, fontWeight: 700, letterSpacing: 1,
              cursor: 'pointer',
            }}
          >
            無料デモセッションを予約する
          </motion.div>
        </FadeUp>

        <FadeUp delay={0.75}>
          <div style={{
            marginTop: m ? 28 : 48, display: 'grid',
            gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 8 : 16,
          }}>
            {[
              { label: '早期契約特典', desc: 'パイロット研修 10%割引', icon: '🎁', color: 'var(--gold)' },
              { label: '移行保証', desc: 'B→C移行時 50%差額充当', icon: '🔄', color: 'var(--cyan)' },
              { label: '即決特典', desc: '追加5名分の受講枠', icon: '⚡', color: 'var(--emerald)' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ borderColor: `${item.color}44` }}
                style={{
                  padding: m ? '14px 16px' : '20px', border: '1px solid var(--border)',
                  borderRadius: 10, background: 'rgba(255,255,255,0.02)',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: m ? 16 : 18 }}>{item.icon}</span>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: item.color, letterSpacing: 2 }}>
                    {item.label}
                  </div>
                </div>
                <div style={{ fontSize: m ? 12 : 14, color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              marginTop: m ? 24 : 40, fontFamily: 'var(--font-mono)',
              fontSize: m ? 10 : 12, color: 'var(--accent)',
            }}
          >
            有効期限: 2026年3月31日
          </motion.div>
        </FadeUp>

        <FadeUp delay={1.0}>
          <div style={{
            marginTop: m ? 16 : 24, fontFamily: 'var(--font-mono)',
            fontSize: m ? 9 : 10, color: 'var(--text-muted)', letterSpacing: 2,
          }}>
            2026.02 — Second Talent Inc.
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
