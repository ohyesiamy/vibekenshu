import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const segments = [
  { name: 'デジタルエンタテインメント', revenue: '2,661億円', growth: '+16.3%', ratio: 75.4, color: 'var(--accent)' },
  { name: 'スポーツ', revenue: '372億円', growth: '+2.3%', ratio: 10.5, color: 'var(--gold)' },
  { name: 'ゲーミング&システム', revenue: '287億円', growth: '△5.7%', ratio: 8.1, color: 'var(--cyan)' },
  { name: 'アーケードゲーム', revenue: '164億円', growth: '+12.6%', ratio: 4.7, color: '#8b5cf6' },
];

export default function StatsSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{ alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Financial Highlights
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            過去最高業績の裏側
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>
            2026年3月期 第3四半期累計（連結）
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 12 : 24, marginTop: m ? 20 : 36 }}>
          {[
            { label: '売上収益', value: '3,530', unit: '億円', sub: '前年同期比 +13.6%' },
            { label: '営業利益', value: '1,017', unit: '億円', sub: '前年同期比 +17.4%' },
            { label: '時価総額', value: '2.57', unit: '兆円', sub: '東証プライム 9766' },
          ].map((item, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.1}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: m ? '16px 20px' : '24px 28px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 6 }}>
                  {item.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 40, fontWeight: 900, color: '#fff' }}>
                    {item.value}
                  </span>
                  <span style={{ fontSize: m ? 13 : 16, color: 'var(--text-secondary)' }}>{item.unit}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', marginTop: 4 }}>
                  {item.sub}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.6}>
          <div style={{ marginTop: m ? 20 : 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>
              SEGMENT BREAKDOWN
            </div>
            <div style={{ display: 'flex', gap: 3, height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
              {segments.map((seg, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  style={{ width: `${seg.ratio}%`, background: seg.color, transformOrigin: 'left', borderRadius: 2 }}
                />
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: m ? 10 : 16 }}>
              {segments.map((seg, i) => (
                <FadeUp key={i} delay={1 + i * 0.08}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: seg.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: m ? 11 : 12, fontWeight: 500 }}>{seg.name}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 12, color: 'var(--text-secondary)' }}>
                        {seg.revenue} <span style={{ color: seg.growth.startsWith('+') ? '#22c55e' : 'var(--accent)', fontSize: 11 }}>{seg.growth}</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
