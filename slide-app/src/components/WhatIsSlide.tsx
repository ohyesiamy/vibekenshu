import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const flowSteps = [
  { icon: '💬', label: '自然言語で指示', sub: 'Describe intent', color: 'var(--gold)', glow: 'rgba(240,180,41,0.15)' },
  { icon: '🤖', label: 'AIが意図を解析', sub: 'Parse & plan', color: 'var(--cyan)', glow: 'rgba(6,182,212,0.15)' },
  { icon: '⚡', label: 'コードを即座に生成', sub: 'Generate code', color: 'var(--accent)', glow: 'rgba(230,50,50,0.15)' },
  { icon: '🚀', label: '動くアプリが完成', sub: 'Ship in minutes', color: 'var(--emerald)', glow: 'rgba(16,185,129,0.15)' },
];

export default function WhatIsSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 30% 60%, rgba(6,182,212,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(240,180,41,0.04) 0%, transparent 50%), var(--bg-primary)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1.1fr', gap: m ? 20 : 60, alignItems: 'center' }}>
          {/* Left: Definition */}
          <div>
            <FadeUp>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
                Paradigm Shift
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
                バイブコーディングとは
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 12, lineHeight: 1.8, fontWeight: 300 }}>
                Andrej Karpathy（元Tesla AI責任者）が2025年に提唱した次世代開発手法。AIに自然言語で「作りたいもの」を伝えるだけでソフトウェアが完成する。
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div style={{
                marginTop: m ? 16 : 28, padding: m ? '12px 14px' : '16px 20px',
                background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.15)',
                borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{ fontSize: m ? 20 : 24, flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontSize: m ? 12 : 14, fontWeight: 700 }}>Collins Dictionary「Word of the Year 2025」</div>
                  <div style={{ fontSize: m ? 10 : 12, color: 'var(--text-muted)', marginTop: 2 }}>世界が認めたパラダイムシフト</div>
                </div>
              </div>
            </FadeUp>

            {/* Traditional vs Vibe mini comparison */}
            <FadeUp delay={0.6}>
              <div style={{ marginTop: m ? 16 : 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: m ? 8 : 12 }}>
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10,
                  padding: m ? '12px' : '16px', opacity: 0.7,
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 8 }}>TRADITIONAL</div>
                  {['要件定義', '設計書', 'コーディング', 'テスト', 'デバッグ', 'デプロイ'].map((s, i) => (
                    <div key={i} style={{ fontSize: m ? 10 : 11, color: 'var(--text-muted)', padding: '2px 0' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, marginRight: 6 }}>{i + 1}.</span>{s}
                    </div>
                  ))}
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 12, color: 'var(--accent)', marginTop: 8, fontWeight: 700 }}>2〜4週間</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(6,182,212,0.04))',
                  border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10,
                  padding: m ? '12px' : '16px',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--emerald)', letterSpacing: 2, marginBottom: 8 }}>VIBE CODING</div>
                  {[
                    { text: '意図を伝える', icon: '💬' },
                    { text: 'AIが生成', icon: '⚡' },
                    { text: '確認・修正', icon: '👀' },
                  ].map((s, i) => (
                    <div key={i} style={{ fontSize: m ? 11 : 12, color: 'var(--text-primary)', padding: '4px 0', fontWeight: 500 }}>
                      <span style={{ marginRight: 6 }}>{s.icon}</span>{s.text}
                    </div>
                  ))}
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 12, color: 'var(--emerald)', marginTop: 8, fontWeight: 700 }}>2〜3日 (5x)</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Flow Diagram */}
          <FadeUp delay={0.3}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16,
              padding: m ? '20px' : '32px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 16 : 24 }}>
                HOW IT WORKS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 10 : 16 }}>
                {flowSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: m ? 12 : 16,
                      padding: m ? '12px' : '16px', borderRadius: 10,
                      background: step.glow, border: `1px solid ${step.color}22`,
                    }}
                  >
                    <div style={{
                      width: m ? 36 : 44, height: m ? 36 : 44, borderRadius: 10,
                      background: `${step.color}18`, border: `1px solid ${step.color}33`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: m ? 18 : 22, flexShrink: 0, position: 'relative',
                    }}>
                      {step.icon}
                      <div style={{
                        position: 'absolute', top: -6, left: -6, width: 18, height: 18, borderRadius: '50%',
                        background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700, color: '#fff',
                      }}>
                        {i + 1}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 13 : 15, fontWeight: 700, color: step.color }}>
                        {step.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>
                        {step.sub}
                      </div>
                    </div>
                    {i < flowSteps.length - 1 && !m && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)', opacity: 0.4 }}>↓</div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Cycle indicator */}
              <div style={{
                marginTop: m ? 12 : 16, padding: m ? '10px' : '12px 16px',
                background: 'rgba(255,255,255,0.02)', borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ fontSize: 14 }}
                >
                  🔄
                </motion.div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 11, color: 'var(--text-muted)' }}>
                  このサイクルが数分で完了
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </SlideWrapper>
  );
}
