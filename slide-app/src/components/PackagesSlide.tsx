import { useState } from 'react';
import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const packages = [
  {
    name: 'Vibe Academy',
    label: 'C',
    price: '6,240万円',
    priceNum: '¥62,400,000',
    perPerson: '¥312,000/名',
    duration: '12ヶ月',
    people: '200名',
    features: ['年間16回研修', 'eスポーツ学院連携', 'ハッカソン12回', 'トレーナー20名認定'],
    color: 'var(--gold)',
    bg: 'linear-gradient(135deg, rgba(240,180,41,0.06), rgba(240,180,41,0.01))',
    border: 'rgba(240,180,41,0.2)',
    details: '年間200名のアカデミー運営。組織全体にバイブコーディング文化を定着させ、採用・育成コストを劇的に削減。eスポーツ学院との連携で次世代人材パイプラインを構築。',
  },
  {
    name: 'Vibe Transformation',
    label: 'B',
    price: '1,810万円',
    priceNum: '¥18,100,000',
    perPerson: '¥301,667/名',
    duration: '3ヶ月',
    people: '60名',
    features: ['3日間集中研修', '2ヶ月フォロー', 'トレーナー5名認定', 'ROI計測レポート'],
    recommended: true,
    color: 'var(--accent)',
    bg: 'linear-gradient(135deg, rgba(230,50,50,0.08), rgba(230,50,50,0.02))',
    border: 'var(--border-accent)',
    details: '60名規模での組織変革プログラム。3日間の集中研修＋2ヶ月のフォローアップで確実に定着化。ROI計測レポートで次の投資判断の材料を提供。',
  },
  {
    name: 'Vibe Sprint',
    label: 'A',
    price: '370万円',
    priceNum: '¥3,700,000',
    perPerson: '¥185,000/名',
    duration: '2日間',
    people: '20名',
    features: ['集中ハンズオン研修', 'ゲーム開発実践ワーク', '即戦力化プログラム'],
    color: 'var(--text-secondary)',
    bg: 'var(--bg-card)',
    border: 'var(--border)',
    details: '20名のエンジニアで2日間の集中研修。コナミIPを題材にしたハンズオンでバイブコーディングを即座に体験・習得。',
  },
];

export default function PackagesSlide() {
  const m = useIsMobile();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 50% 30%, rgba(230,50,50,0.06) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Packages
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            3つのパッケージ
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 700, lineHeight: 1.7, fontWeight: 300 }}>
            規模とゴールに合わせて最適な導入プランを選択。段階的なスケールアップにも対応。
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 12 : 20, marginTop: m ? 20 : 32 }}>
          {packages.map((pkg, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.15}>
              <motion.div
                whileHover={pkg.recommended ? { y: -4, boxShadow: '0 12px 40px rgba(230,50,50,0.15)' } : { y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  background: pkg.bg, border: `1px solid ${pkg.border}`, borderRadius: 14,
                  padding: m ? '18px 16px' : '28px 24px', height: '100%',
                  display: 'flex', flexDirection: 'column', position: 'relative',
                  transform: pkg.recommended && !m ? 'scale(1.03)' : undefined,
                  cursor: 'pointer',
                }}
              >
                {/* Top accent bar */}
                {pkg.recommended && (
                  <div style={{
                    position: 'absolute', top: -1, left: 20, right: 20, height: 3,
                    background: 'var(--accent)', borderRadius: '0 0 3px 3px',
                    boxShadow: '0 0 16px var(--accent-glow)',
                  }} />
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: m ? 10 : 16 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 800,
                    width: 28, height: 28, borderRadius: 6,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: pkg.recommended ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                    color: pkg.recommended ? '#fff' : 'var(--text-secondary)',
                  }}>
                    {pkg.label}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 14 : 16, fontWeight: 700 }}>{pkg.name}</div>
                    {pkg.recommended && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 1 }}>RECOMMENDED</div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: m ? 24 : 32, fontWeight: 900, color: '#fff' }}>{pkg.price}</span>
                </div>

                <div style={{ display: 'flex', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>
                  <span>{pkg.duration}</span><span>{pkg.people}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: pkg.color, marginBottom: m ? 12 : 20 }}>
                  {pkg.perPerson}
                </div>

                <div style={{ flex: 1 }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontSize: m ? 12 : 13, color: 'var(--text-secondary)',
                      padding: m ? '5px 0' : '6px 0',
                      borderBottom: j < pkg.features.length - 1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <span style={{ color: pkg.color, fontSize: 10 }}>◆</span>{f}
                    </div>
                  ))}
                </div>

                {/* Expandable details */}
                <motion.div
                  initial={false}
                  animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0, marginTop: expanded === i ? 12 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: m ? '10px 12px' : '14px 16px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 8, border: '1px solid var(--border)',
                    fontSize: m ? 11 : 12, color: 'var(--text-secondary)', lineHeight: 1.7,
                  }}>
                    {pkg.details}
                  </div>
                </motion.div>

                {/* Expand indicator */}
                <div style={{
                  marginTop: 8, textAlign: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)',
                }}>
                  {expanded === i ? '▲ 閉じる' : '▼ 詳細を見る'}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.8}>
          <div style={{
            marginTop: m ? 12 : 20, display: 'flex', justifyContent: 'center',
            gap: m ? 12 : 32, fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 12,
            color: 'var(--text-muted)', flexWrap: 'wrap',
          }}>
            <span>※ 価格は全て税別</span>
            <span>※ B→C移行時、B投資額の50%を差額充当</span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
