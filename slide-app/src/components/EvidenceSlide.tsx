import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import CountUp from './CountUp';
import useIsMobile from '../hooks/useIsMobile';

const evidenceCards = [
  { source: 'Microsoft', metric: 3.5, suffix: 'x', label: '平均ROI', detail: 'トップパフォーマーは10.3x', color: 'var(--cyan)', decimals: 1 },
  { source: 'Amazon', metric: 260, prefix: '$', suffix: 'M', label: '年間コスト削減', detail: 'コードレビュー費用75-85%減', color: 'var(--emerald)', decimals: 0 },
  { source: 'トランスコスモス', metric: 87, suffix: '%', label: '工数削減', detail: '15.5人日 → 1.5人日', color: 'var(--accent)', decimals: 0 },
  { source: 'IBM', metric: 60, suffix: '%', label: '開発時間短縮', detail: 'エンタープライズアプリ開発', color: 'var(--gold)', decimals: 0 },
];

const statsRow = [
  { value: '92%', label: '米国の開発者がAI日常利用', icon: '👨‍💻' },
  { value: '87%', label: 'Fortune 500が導入済', icon: '🏢' },
  { value: '$4.7B', label: '市場規模（2026年）', icon: '📈' },
  { value: '74%', label: '生産性向上を実感', icon: '⚡' },
];

export default function EvidenceSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 60% 30%, rgba(6,182,212,0.05) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cyan)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Social Proof
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            世界が証明した<span style={{ color: 'var(--accent)' }}>効果</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 700, lineHeight: 1.7, fontWeight: 300 }}>
            グローバル企業が既に導入し、圧倒的な成果を報告している。
          </p>
        </FadeUp>

        {/* Evidence Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: m ? 10 : 16, marginTop: m ? 20 : 32 }}>
          {evidenceCards.map((card, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ borderColor: `${card.color}44`, y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'var(--bg-card)', border: `1px solid ${card.color}22`, borderRadius: 12,
                  padding: m ? '16px 14px' : '24px 20px', position: 'relative', overflow: 'hidden', height: '100%',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: card.color, opacity: 0.8 }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 10 : 16 }}>
                  {typeof card.source === 'string' ? card.source.toUpperCase() : card.source}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 40, fontWeight: 900, color: card.color, lineHeight: 1, marginBottom: 4 }}>
                  <CountUp to={card.metric} prefix={card.prefix || ''} suffix={card.suffix || ''} decimals={card.decimals} delay={0.5 + i * 0.12} />
                </div>
                <div style={{ fontSize: m ? 12 : 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{card.label}</div>
                <div style={{ fontSize: m ? 10 : 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{card.detail}</div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Stats Bar */}
        <FadeUp delay={0.7}>
          <div style={{ marginTop: m ? 16 : 24, display: 'grid', gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: m ? 8 : 12 }}>
            {statsRow.map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 10,
                padding: m ? '12px' : '16px', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ fontSize: m ? 18 : 24 }}>{stat.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 16 : 20, fontWeight: 800, color: '#fff' }}>{stat.value}</div>
                  <div style={{ fontSize: m ? 9 : 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Sources */}
        <FadeUp delay={0.9}>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: m ? 8 : 20, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', opacity: 0.5, flexWrap: 'wrap' }}>
            <span>Gartner 2026</span><span>|</span><span>McKinsey 2025</span><span>|</span><span>Second Talent 2026</span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
