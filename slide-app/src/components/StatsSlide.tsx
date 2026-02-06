import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import CountUp from './CountUp';
import useIsMobile from '../hooks/useIsMobile';

const segments = [
  { name: 'デジタルエンタテインメント', revenue: '2,661億', growth: '+16.3%', ratio: 75.4, color: 'var(--accent)' },
  { name: 'スポーツ', revenue: '372億', growth: '+2.3%', ratio: 10.5, color: 'var(--gold)' },
  { name: 'ゲーミング&システム', revenue: '287億', growth: '△5.7%', ratio: 8.1, color: 'var(--cyan)' },
  { name: 'アーケードゲーム', revenue: '164億', growth: '+12.6%', ratio: 4.7, color: 'var(--violet)' },
];

export default function StatsSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{ justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 24 : 60, alignItems: 'center' }}>
          {/* Left: Hero number */}
          <div>
            <FadeUp>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>
                KONAMI — FY2026 Q3 累計
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 20 : 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: m ? 8 : 16 }}>
                過去最高業績を更新する巨人
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: m ? 56 : 'clamp(56px, 9vw, 96px)', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: -2 }}>
                  <CountUp to={3530} delay={0.5} />
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: m ? 16 : 22, color: 'var(--text-secondary)', fontWeight: 300 }}>億円</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 12 : 14, color: 'var(--emerald)', marginTop: 8, fontWeight: 600 }}>
                前年同期比 +13.6%
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: m ? 8 : 16, marginTop: m ? 20 : 36 }}>
                {[
                  { label: '営業利益', value: '1,017', unit: '億円', sub: '+17.4%' },
                  { label: '時価総額', value: '2.57', unit: '兆円', sub: '東証 9766' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10,
                    padding: m ? '14px' : '20px',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 8 }}>
                      {item.label}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: m ? 22 : 28, fontWeight: 800 }}>{item.value}</span>
                      <span style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)' }}>{item.unit}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--emerald)', marginTop: 4 }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: Segment breakdown */}
          <FadeUp delay={0.4}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: m ? '20px' : '32px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 16 : 24 }}>
                SEGMENT REVENUE
              </div>
              {/* Stacked bar */}
              <div style={{ display: 'flex', gap: 2, height: 10, borderRadius: 5, overflow: 'hidden', marginBottom: m ? 20 : 28 }}>
                {segments.map((seg, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                    style={{ width: `${seg.ratio}%`, background: seg.color, transformOrigin: 'left', borderRadius: 2 }}
                  />
                ))}
              </div>
              {/* Segment details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 12 : 16 }}>
                {segments.map((seg, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: seg.color, flexShrink: 0 }} />
                      <span style={{ fontSize: m ? 11 : 13, color: 'var(--text-primary)' }}>{seg.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 13, color: 'var(--text-secondary)' }}>{seg.revenue}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: seg.growth.startsWith('+') ? 'var(--emerald)' : 'var(--accent)', minWidth: 50, textAlign: 'right' }}>{seg.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* DE emphasis */}
              <div style={{ marginTop: m ? 16 : 24, padding: m ? '12px' : '16px', background: 'rgba(230,50,50,0.04)', border: '1px solid var(--border-accent)', borderRadius: 8 }}>
                <div style={{ fontSize: m ? 11 : 12, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  デジタルエンタテインメント事業が売上の<strong style={{ color: '#fff' }}>75.4%</strong>を占める。
                  この事業の開発効率が、全社業績を左右する。
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </SlideWrapper>
  );
}
