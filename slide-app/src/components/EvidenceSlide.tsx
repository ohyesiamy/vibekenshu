import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const evidenceCards = [
  { source: 'Microsoft', metric: '3.5x', label: '平均ROI', detail: 'トップパフォーマーは10.3x', color: 'var(--cyan)' },
  { source: 'Amazon', metric: '$260M', label: '年間コスト削減', detail: 'コードレビュー費用75-85%減', color: '#22c55e' },
  { source: 'トランスコスモス', metric: '87%', label: '工数削減', detail: '15.5人日 → 1.5人日に短縮', color: 'var(--accent)' },
  { source: 'IBM', metric: '60%', label: '開発時間短縮', detail: 'エンタープライズアプリ開発', color: 'var(--gold)' },
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
    <SlideWrapper style={{ alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Industry Evidence
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            世界が証明した<span style={{ color: 'var(--accent)' }}>効果</span>
          </h2>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: m ? 10 : 16, marginTop: m ? 20 : 28 }}>
          {evidenceCards.map((card, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.1}>
              <div style={{
                background: 'var(--bg-card)', border: `1px solid ${card.color}22`, borderRadius: 12,
                padding: m ? '16px 14px' : '24px 20px', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: card.color, boxShadow: `0 0 12px ${card.color}` }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 10 : 16 }}>
                  {card.source.toUpperCase()}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5, type: 'spring' }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 40, fontWeight: 900, color: card.color, lineHeight: 1, marginBottom: 4 }}
                >
                  {card.metric}
                </motion.div>
                <div style={{ fontSize: m ? 12 : 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{card.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{card.detail}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.7}>
          <div style={{ marginTop: m ? 12 : 24, display: 'grid', gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: m ? 8 : 12 }}>
            {statsRow.map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 10,
                padding: m ? '12px' : '16px', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ fontSize: m ? 18 : 24 }}>{stat.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 16 : 20, fontWeight: 800, color: '#fff' }}>{stat.value}</div>
                  <div style={{ fontSize: m ? 10 : 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: m ? 8 : 20, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', opacity: 0.7, flexWrap: 'wrap' }}>
            <span>Gartner 2026</span><span>|</span><span>McKinsey 2025</span><span>|</span><span>Second Talent 2026</span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
