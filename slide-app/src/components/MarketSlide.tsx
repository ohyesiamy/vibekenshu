import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

const marketGrowth = [
  { year: '2025', value: 2.96, height: 8 },
  { year: '2026', value: 4.7, height: 13 },
  { year: '2027', value: 12.3, height: 34 },
  { year: '2030', value: 45, height: 60 },
  { year: '2035', value: 120, height: 82 },
  { year: '2040', value: 325, height: 100 },
];

const gartnerPredictions = [
  {
    year: '2026',
    prediction: '40%のエンタープライズアプリにAIエージェント搭載',
    source: 'Gartner',
    color: 'var(--cyan)',
  },
  {
    year: '2027',
    prediction: 'エンジニア80%にリスキリングが必要',
    source: 'Gartner',
    color: 'var(--gold)',
  },
  {
    year: '2028',
    prediction: '75%のエンジニアがAIコーディングアシスタントを使用',
    source: 'Gartner',
    color: 'var(--accent)',
  },
];

export default function MarketSlide() {
  return (
    <SlideWrapper style={{ alignItems: 'flex-start', padding: '50px 70px' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Market & Risk
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            「やらない」リスク
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>
            バイブコーディング市場は年率36.8%で成長。導入しない企業は競争優位を失う。
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, marginTop: 28 }}>
          {/* Left: Market Growth Chart */}
          <FadeUp delay={0.2}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '24px 28px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2 }}>
                  VIBE CODING MARKET SIZE (USD BILLION)
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--accent)',
                  padding: '3px 8px',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 4,
                }}>
                  CAGR 36.8%
                </div>
              </div>

              {/* Bar Chart */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 12,
                height: 180,
                borderBottom: '1px solid var(--border)',
                paddingBottom: 8,
              }}>
                {marketGrowth.map((bar, i) => (
                  <div key={i} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: i <= 1 ? 'var(--text-secondary)' : 'var(--accent)',
                      fontWeight: 600,
                    }}>
                      ${bar.value}B
                    </div>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      style={{
                        width: '100%',
                        height: `${bar.height}%`,
                        background: i <= 1
                          ? 'rgba(255,255,255,0.08)'
                          : `linear-gradient(180deg, var(--accent), ${i > 3 ? 'var(--gold)' : 'rgba(230,50,50,0.5)'})`,
                        borderRadius: '4px 4px 0 0',
                        transformOrigin: 'bottom',
                        minHeight: 12,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Year labels */}
              <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                {marketGrowth.map((bar, i) => (
                  <div key={i} style={{
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--text-muted)',
                  }}>
                    {bar.year}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right: Gartner Predictions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <FadeUp delay={0.4}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(230,50,50,0.08), rgba(230,50,50,0.02))',
                border: '1px solid var(--border-accent)',
                borderRadius: 12,
                padding: '20px 24px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>
                  GARTNER PREDICTIONS
                </div>
                {gartnerPredictions.map((pred, i) => (
                  <FadeUp key={i} delay={0.55 + i * 0.1}>
                    <div style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                      padding: '10px 0',
                      borderBottom: i < gartnerPredictions.length - 1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 12,
                        fontWeight: 700,
                        color: pred.color,
                        minWidth: 40,
                      }}>
                        {pred.year}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {pred.prediction}
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>

            {/* Risk callout */}
            <FadeUp delay={0.85}>
              <div style={{
                background: 'rgba(230,50,50,0.08)',
                border: '1px solid var(--accent)',
                borderRadius: 12,
                padding: '20px 24px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 10,
                }}>
                  <span style={{ fontSize: 20 }}>⚠️</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--accent)' }}>
                    導入しないリスク
                  </span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  McKinseyの調査によると、AIコーディングツールの生産性向上効果は
                  <strong style={{ color: '#fff' }}>年間支出の20〜45%</strong>に相当。
                  競合がバイブコーディングを導入した場合、
                  <strong style={{ color: 'var(--accent)' }}>開発速度で3〜5倍の差</strong>が生まれる。
                </div>
              </div>
            </FadeUp>

            {/* McKinsey stat */}
            <FadeUp delay={0.95}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 900,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}>
                  20-45%
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>
                    年間開発コスト削減可能
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                    McKinsey — 生成AIの経済的ポテンシャル
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
