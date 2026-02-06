import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

const rows = [
  { item: 'プロトタイプ開発', before: '2〜4週間', after: '2〜3日', beforeDays: 21, afterDays: 2.5, improvement: '5x' },
  { item: '社内ツール構築', before: '1〜2ヶ月', after: '1〜2週間', beforeDays: 45, afterDays: 10, improvement: '4x' },
  { item: 'A/Bテスト実装', before: '3〜5日', after: '数時間', beforeDays: 4, afterDays: 0.3, improvement: '8x' },
  { item: 'ダッシュボード作成', before: '2〜3週間', after: '1〜2日', beforeDays: 17, afterDays: 1.5, improvement: '10x' },
  { item: 'API連携開発', before: '1〜2週間', after: '1〜3日', beforeDays: 10, afterDays: 2, improvement: '5x' },
  { item: 'バグ調査・修正', before: '半日〜2日', after: '1〜3時間', beforeDays: 1.5, afterDays: 0.15, improvement: '4x' },
];

const maxDays = 45;

export default function ComparisonSlide() {
  return (
    <SlideWrapper style={{ alignItems: 'flex-start', padding: '50px 70px' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Before / After
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            バイブコーディング導入による変化
          </h2>
        </FadeUp>

        {/* Visual Bar Chart Comparison */}
        <div style={{ marginTop: 28 }}>
          {rows.map((row, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.08}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr 60px',
                alignItems: 'center',
                gap: 16,
                padding: '10px 0',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                {/* Task name */}
                <div style={{ fontSize: 13, fontWeight: 500 }}>
                  {row.item}
                </div>

                {/* Bar chart */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {/* Before bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                      style={{
                        height: 14,
                        width: `${(row.beforeDays / maxDays) * 100}%`,
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 3,
                        transformOrigin: 'left',
                        minWidth: 20,
                      }}
                    />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {row.before}
                    </span>
                  </div>

                  {/* After bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      style={{
                        height: 14,
                        width: `${Math.max((row.afterDays / maxDays) * 100, 2)}%`,
                        background: 'linear-gradient(90deg, #22c55e, #22c55eaa)',
                        borderRadius: 3,
                        transformOrigin: 'left',
                        minWidth: 8,
                        boxShadow: '0 0 8px rgba(34,197,94,0.3)',
                      }}
                    />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#22c55e', whiteSpace: 'nowrap', fontWeight: 600 }}>
                      {row.after}
                    </span>
                  </div>
                </div>

                {/* Speed multiplier */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 900,
                    color: 'var(--accent)',
                    textAlign: 'right',
                  }}
                >
                  {row.improvement}
                </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Summary */}
        <FadeUp delay={0.9}>
          <div style={{
            marginTop: 24,
            display: 'flex',
            gap: 20,
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 24, height: 10, borderRadius: 2, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>Before（従来開発）</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 24, height: 10, borderRadius: 2, background: '#22c55e' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#22c55e' }}>After（バイブコーディング）</span>
            </div>
            <div style={{ flex: 1 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>
              ※ トランスコスモス社等の公開事例に基づく保守的見積
            </span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
