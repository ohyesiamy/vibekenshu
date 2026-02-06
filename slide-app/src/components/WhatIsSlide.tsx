import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const flowSteps = [
  { icon: '💬', label: '自然言語', sub: '日本語で指示', color: 'var(--gold)' },
  { icon: '🤖', label: 'AI解析', sub: '意図を理解', color: 'var(--cyan)' },
  { icon: '⚡', label: 'コード生成', sub: '即座に実装', color: 'var(--accent)' },
  { icon: '🚀', label: '動くアプリ', sub: '数分で完成', color: '#22c55e' },
];

export default function WhatIsSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 60%), #0a0a0a' }}
    >
      <div style={{ width: '100%', maxWidth: 1100, position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            What is Vibe Coding?
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            バイブコーディングとは
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 14, marginTop: 8, maxWidth: 700, lineHeight: 1.7 }}>
            Andrej Karpathy（元Tesla AI責任者）が2025年に提唱。AIに自然言語で伝えるだけで
            ソフトウェアを開発する、次世代の開発手法。Collins Dictionary「Word of the Year 2025」に選出。
          </p>
        </FadeUp>

        {/* Flow Diagram */}
        <FadeUp delay={0.25}>
          <div style={{
            marginTop: m ? 24 : 40,
            display: 'grid',
            gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: m ? 12 : 16,
            justifyItems: 'center',
          }}>
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '100%',
                  maxWidth: 160,
                  aspectRatio: '1',
                  borderRadius: 20,
                  background: 'var(--bg-card)',
                  border: `1px solid ${step.color}33`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: m ? 28 : 36 }}>{step.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 13 : 15, fontWeight: 700, color: step.color }}>
                  {step.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>
                  {step.sub}
                </div>
                <div style={{
                  position: 'absolute', top: -8, left: -8, width: 22, height: 22, borderRadius: '50%',
                  background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: '#fff',
                }}>
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Comparison: Traditional vs Vibe */}
        <FadeUp delay={0.8}>
          <div style={{
            marginTop: m ? 20 : 40,
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : '1fr auto 1fr',
            gap: m ? 12 : 20,
            alignItems: 'stretch',
          }}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
              padding: m ? '16px 18px' : '20px 24px', opacity: 0.6,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 10 }}>
                TRADITIONAL
              </div>
              {['要件定義', '設計書', 'コーディング', 'テスト', 'デバッグ', 'デプロイ'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', fontSize: 12, color: 'var(--text-muted)' }}>
                  <div style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>{i + 1}</div>
                  {s}
                </div>
              ))}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginTop: 8, fontWeight: 600 }}>2〜4週間</div>
            </div>

            {!m && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: 'var(--text-muted)', transform: 'rotate(-5deg)' }}>vs</div>
              </div>
            )}

            <div style={{
              background: 'linear-gradient(135deg, rgba(230,50,50,0.06), rgba(0,212,255,0.04))',
              border: '1px solid var(--border-accent)', borderRadius: 12,
              padding: m ? '16px 18px' : '20px 24px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, marginBottom: 10 }}>
                VIBE CODING
              </div>
              {[
                { text: '意図を伝える', icon: '💬' },
                { text: 'AIが生成', icon: '⚡' },
                { text: '確認・修正', icon: '👀' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>{s.text}
                </div>
              ))}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#22c55e', marginTop: 8, fontWeight: 600 }}>2〜3日 (5x 高速)</div>
            </div>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
