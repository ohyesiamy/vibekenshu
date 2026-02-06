import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const marketGrowth = [
  { year: '2025', value: 2.96, height: 8 },
  { year: '2026', value: 4.7, height: 13 },
  { year: '2027', value: 12.3, height: 34 },
  { year: '2030', value: 45, height: 60 },
  { year: '2035', value: 120, height: 82 },
  { year: '2040', value: 325, height: 100 },
];

const gartnerPredictions = [
  { year: '2026', prediction: '40%のエンタープライズアプリにAIエージェント搭載', color: 'var(--cyan)' },
  { year: '2027', prediction: 'エンジニア80%にリスキリングが必要', color: 'var(--gold)' },
  { year: '2028', prediction: '75%のエンジニアがAIコーディングアシスタントを使用', color: 'var(--accent)' },
];

export default function MarketSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 60% 40%, rgba(230,50,50,0.06) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Loss Aversion
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            「<span style={{ color: 'var(--accent)' }}>やらない</span>」リスク
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 700, lineHeight: 1.7, fontWeight: 300 }}>
            バイブコーディング市場は年率36.8%で成長。導入しない企業は競争優位を失う。
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1.2fr 1fr', gap: m ? 16 : 28, marginTop: m ? 16 : 28 }}>
          {/* Left: Market Chart */}
          <FadeUp delay={0.2}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
              padding: m ? '16px 14px' : '28px', height: '100%',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: m ? 12 : 20 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 8 : 10, color: 'var(--text-muted)', letterSpacing: 2 }}>MARKET SIZE (USD B)</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 10, color: 'var(--accent)',
                  padding: '3px 8px', border: '1px solid var(--border-accent)', borderRadius: 4,
                }}>
                  CAGR 36.8%
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end', gap: m ? 6 : 12, height: m ? 130 : 200, borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                {marketGrowth.map((bar, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: m ? 8 : 10,
                      color: i <= 1 ? 'var(--text-secondary)' : 'var(--accent)', fontWeight: 600,
                    }}>
                      ${bar.value}B
                    </div>
                    <motion.div
                      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      style={{
                        width: '100%', height: `${bar.height}%`,
                        background: i <= 1
                          ? 'rgba(255,255,255,0.06)'
                          : `linear-gradient(180deg, var(--accent), ${i > 3 ? 'var(--gold)' : 'rgba(230,50,50,0.5)'})`,
                        borderRadius: '4px 4px 0 0', transformOrigin: 'bottom', minHeight: 12,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                {marketGrowth.map((bar, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: m ? 8 : 10, color: 'var(--text-muted)' }}>
                    {bar.year}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right: Predictions + Risk */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 10 : 14 }}>
            <FadeUp delay={0.4}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(230,50,50,0.06), rgba(230,50,50,0.02))',
                border: '1px solid var(--border-accent)', borderRadius: 14, padding: m ? '16px' : '24px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>
                  GARTNER PREDICTIONS
                </div>
                {gartnerPredictions.map((pred, i) => (
                  <FadeUp key={i} delay={0.55 + i * 0.1}>
                    <div style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      padding: m ? '8px 0' : '10px 0',
                      borderBottom: i < gartnerPredictions.length - 1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 13, fontWeight: 700, color: pred.color, minWidth: 40 }}>
                        {pred.year}
                      </div>
                      <div style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {pred.prediction}
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </FadeUp>

            {/* Risk callout */}
            <FadeUp delay={0.85}>
              <motion.div
                animate={{ borderColor: ['rgba(230,50,50,0.3)', 'rgba(230,50,50,0.6)', 'rgba(230,50,50,0.3)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{
                  background: 'rgba(230,50,50,0.06)', border: '1px solid var(--accent)',
                  borderRadius: 14, padding: m ? '16px' : '20px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 20 }}>⚠️</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: m ? 14 : 16, fontWeight: 700, color: 'var(--accent)' }}>
                    導入しないリスク
                  </span>
                </div>
                <div style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  競合がバイブコーディングを導入した場合、
                  <strong style={{ color: 'var(--accent)' }}>開発速度で3〜5倍の差</strong>が生まれる。
                </div>
              </motion.div>
            </FadeUp>

            {/* McKinsey stat */}
            <FadeUp delay={0.95}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
                padding: m ? '14px 16px' : '18px 24px', display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 24 : 32, fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>
                  20-45%
                </div>
                <div>
                  <div style={{ fontSize: m ? 11 : 13, fontWeight: 600 }}>年間開発コスト削減可能</div>
                  <div style={{ fontSize: m ? 9 : 10, color: 'var(--text-muted)' }}>McKinsey — 生成AIの経済的ポテンシャル</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
