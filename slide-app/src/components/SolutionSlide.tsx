import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

export default function SolutionSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(230,50,50,0.08) 0%, transparent 60%), var(--bg-primary)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1.2fr', gap: m ? 20 : 60, alignItems: 'center' }}>
          {/* Left: Message */}
          <div>
            <FadeUp>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
                The Promised Land
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: m ? 32 : 'clamp(40px, 6vw, 64px)',
                fontWeight: 900, letterSpacing: -2, lineHeight: 1.1,
                background: 'linear-gradient(160deg, #ffffff 30%, #999 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Vibe Coding
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p style={{
                fontSize: m ? 13 : 16, fontWeight: 300, color: 'var(--text-secondary)',
                marginTop: m ? 8 : 14, lineHeight: 1.8,
              }}>
                AIに自然言語で伝えるだけで、コードが生まれる。
                開発工数<strong style={{ color: '#fff' }}>80%削減</strong>の実績を持つ、次世代開発手法。
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.5}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: m ? 8 : 12, marginTop: m ? 20 : 32 }}>
                {[
                  { value: '5x', label: 'プロトタイプ速度', color: 'var(--emerald)' },
                  { value: '80%', label: '工数削減', color: 'var(--cyan)' },
                  { value: '¥0', label: '追加採用コスト', color: 'var(--gold)' },
                ].map((s, i) => (
                  <div key={i} style={{
                    textAlign: 'center', padding: m ? '12px 8px' : '16px',
                    background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10,
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 22 : 28, fontWeight: 900, color: s.color }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 8 : 10, color: 'var(--text-muted)', marginTop: 4, letterSpacing: 1 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: Code Demo */}
          <FadeUp delay={0.35}>
            <div style={{
              background: '#0a0a0e', border: '1px solid var(--border)', borderRadius: 14,
              overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}>
              {/* Terminal title bar */}
              <div style={{
                padding: m ? '8px 12px' : '12px 16px',
                background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 11, color: 'var(--text-muted)', marginLeft: 8 }}>
                  vibe-coding-session.ts
                </span>
              </div>

              {/* Code content */}
              <div style={{ padding: m ? '16px 14px' : '24px 28px', fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 13, lineHeight: 2.2 }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>// Human:</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span style={{ color: 'var(--gold)' }}>&quot;eFootballのマッチ結果をリアルタイムで</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <span style={{ color: 'var(--gold)' }}>&nbsp;集計するダッシュボードを作って&quot;</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  style={{ marginTop: 12 }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>// AI: 30分で動くプロトタイプを生成</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span style={{ color: 'var(--accent)' }}>→ </span>
                  <span style={{ color: 'var(--emerald)' }}>React + WebSocket + Chart.js</span>
                </motion.div>

                {/* Progress indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)' }}
                    />
                    <span style={{ color: 'var(--emerald)', fontSize: m ? 10 : 11 }}>Build successful — 127 files generated</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </SlideWrapper>
  );
}
