import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

export default function SolutionSlide() {
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(230,50,50,0.08) 0%, transparent 70%), #0a0a0a',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 900, position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>
            Solution
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #fff 0%, #ccc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Vibe Coding
          </h2>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            marginTop: 16,
            lineHeight: 1.7,
          }}>
            AIに自然言語で伝えるだけで、コードが生まれる。<br />
            開発工数<strong style={{ color: '#fff' }}>80%削減</strong>の実績を持つ、次世代開発手法。
          </p>
        </FadeUp>

        {/* Code demo block */}
        <FadeUp delay={0.5}>
          <div style={{
            marginTop: 40,
            background: '#0d0d0d',
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            textAlign: 'left',
          }}>
            <div style={{
              padding: '10px 16px',
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>
                vibe-coding-session.ts
              </span>
            </div>
            <div style={{ padding: '24px 28px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2 }}>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>// Human:</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span style={{ color: 'var(--gold)' }}>&quot;eFootballのマッチ結果をリアルタイムで</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <span style={{ color: 'var(--gold)' }}>&nbsp;集計するダッシュボードを作って&quot;</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                style={{ marginTop: 8 }}
              >
                <span style={{ color: 'var(--text-muted)' }}>// AI: 30分で動くプロトタイプを生成</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <span style={{ color: 'var(--accent)' }}>→ </span>
                <span style={{ color: '#22c55e' }}>React + WebSocket + Chart.js</span>
                <span style={{ color: 'var(--text-muted)' }}> // 完成</span>
              </motion.div>
            </div>
          </div>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.7}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 36 }}>
            {[
              { value: '5x', label: 'プロトタイプ速度' },
              { value: '80%', label: '工数削減' },
              { value: '0', label: '追加採用コスト' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, color: 'var(--accent)' }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 4, letterSpacing: 1 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
