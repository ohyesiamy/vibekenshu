import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

const flowSteps = [
  { icon: '💬', label: '自然言語', sub: '日本語で指示', color: 'var(--gold)' },
  { icon: '🤖', label: 'AI解析', sub: '意図を理解', color: 'var(--cyan)' },
  { icon: '⚡', label: 'コード生成', sub: '即座に実装', color: 'var(--accent)' },
  { icon: '🚀', label: '動くアプリ', sub: '数分で完成', color: '#22c55e' },
];

export default function WhatIsSlide() {
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 60%), #0a0a0a',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1100, position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            What is Vibe Coding?
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            バイブコーディングとは
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8, maxWidth: 700, lineHeight: 1.7 }}>
            Andrej Karpathy（元Tesla AI責任者）が2025年に提唱。AIに自然言語で伝えるだけで
            ソフトウェアを開発する、次世代の開発手法。Collins Dictionary「Word of the Year 2025」に選出。
          </p>
        </FadeUp>

        {/* Flow Diagram */}
        <FadeUp delay={0.25}>
          <div style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
          }}>
            {flowSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 20,
                    background: 'var(--bg-card)',
                    border: `1px solid ${step.color}33`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    position: 'relative',
                  }}
                >
                  <div style={{ fontSize: 36 }}>{step.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: step.color }}>
                    {step.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>
                    {step.sub}
                  </div>
                  {/* Step number */}
                  <div style={{
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#fff',
                  }}>
                    {i + 1}
                  </div>
                </motion.div>

                {/* Arrow between steps */}
                {i < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                    style={{
                      width: 60,
                      height: 2,
                      background: `linear-gradient(90deg, ${flowSteps[i].color}, ${flowSteps[i + 1].color})`,
                      position: 'relative',
                      transformOrigin: 'left',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      right: -6,
                      top: -5,
                      width: 0,
                      height: 0,
                      borderLeft: `8px solid ${flowSteps[i + 1].color}`,
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                    }} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Comparison: Traditional vs Vibe */}
        <FadeUp delay={0.8}>
          <div style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 20,
            alignItems: 'stretch',
          }}>
            {/* Traditional */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '20px 24px',
              opacity: 0.6,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>
                TRADITIONAL
              </div>
              {['要件定義', '設計書', 'コーディング', 'テスト', 'デバッグ', 'デプロイ'].map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 0',
                  fontSize: 12,
                  color: 'var(--text-muted)',
                }}>
                  <div style={{ width: 16, height: 16, borderRadius: 4, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>
                    {i + 1}
                  </div>
                  {s}
                  {i < 5 && <span style={{ marginLeft: 'auto', fontSize: 10 }}>↓</span>}
                </div>
              ))}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginTop: 8, fontWeight: 600 }}>
                2〜4週間
              </div>
            </div>

            {/* VS */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 24,
                fontWeight: 900,
                color: 'var(--text-muted)',
                transform: 'rotate(-5deg)',
              }}>
                vs
              </div>
            </div>

            {/* Vibe Coding */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(230,50,50,0.06), rgba(0,212,255,0.04))',
              border: '1px solid var(--border-accent)',
              borderRadius: 12,
              padding: '20px 24px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, marginBottom: 12 }}>
                VIBE CODING
              </div>
              {[
                { text: '意図を伝える', icon: '💬' },
                { text: 'AIが生成', icon: '⚡' },
                { text: '確認・修正', icon: '👀' },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 0',
                  fontSize: 13,
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  {s.text}
                  {i < 2 && <span style={{ marginLeft: 'auto', fontSize: 10 }}>↓</span>}
                </div>
              ))}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#22c55e', marginTop: 8, fontWeight: 600 }}>
                2〜3日 (5x 高速)
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
