import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const steps = [
  {
    step: '01',
    title: '無料体験セッション',
    desc: '経営層・技術リード向け2時間デモ。コナミIPを題材にしたライブコーディング。',
    tag: '無料',
    tagColor: 'var(--emerald)',
    accentColor: 'var(--emerald)',
    deliverables: ['ライブコーディングデモ', '質疑応答', '導入ロードマップ提案'],
  },
  {
    step: '02',
    title: 'パッケージA で実証',
    desc: '20名のエンジニアで2日間の集中研修。定量的な効果測定で投資判断の材料を。',
    tag: '¥370万',
    tagColor: 'var(--text-secondary)',
    accentColor: 'var(--cyan)',
    deliverables: ['ハンズオン研修（2日）', 'スキル評価レポート', '推奨拡大プラン'],
  },
  {
    step: '03',
    title: 'パッケージB で拡大',
    desc: '60名規模での組織変革プログラム。3ヶ月のフォローアップで確実に定着化。',
    tag: '¥1,810万',
    tagColor: 'var(--accent)',
    accentColor: 'var(--accent)',
    deliverables: ['3日間集中研修', '2ヶ月フォロー', 'ROI計測レポート', 'トレーナー5名認定'],
  },
  {
    step: '04',
    title: 'パッケージC で全社展開',
    desc: '年間200名のアカデミー運営。eスポーツ学院連携で次世代人材育成。',
    tag: '¥6,240万',
    tagColor: 'var(--gold)',
    accentColor: 'var(--gold)',
    deliverables: ['年間16回研修', 'ハッカソン12回', 'eスポーツ学院連携', 'トレーナー20名認定'],
  },
];

export default function TimelineSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 30% 70%, rgba(16,185,129,0.05) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--emerald)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Low-Friction On-Ramp
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            導入ステップ
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 700, lineHeight: 1.7, fontWeight: 300 }}>
            まずは無料体験から。段階的にスケールアップし、リスクを最小化。
          </p>
        </FadeUp>

        <div style={{ position: 'relative', marginTop: m ? 20 : 40 }}>
          {/* Vertical gradient line */}
          <motion.div
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', left: m ? 15 : 19, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, var(--emerald), var(--accent), var(--gold))',
              transformOrigin: 'top', opacity: 0.4,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 12 : 20 }}>
            {steps.map((s, i) => (
              <FadeUp key={i} delay={0.3 + i * 0.15}>
                <div style={{ display: 'flex', gap: m ? 12 : 24, alignItems: 'flex-start' }}>
                  {/* Circle node */}
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 200 }}
                    style={{
                      width: m ? 32 : 40, height: m ? 32 : 40, borderRadius: '50%',
                      background: 'var(--bg-primary)', border: `2px solid ${s.accentColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 12, fontWeight: 600,
                      color: s.accentColor, flexShrink: 0, position: 'relative', zIndex: 1,
                    }}
                  >
                    {s.step}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ borderColor: `${s.accentColor}44`, y: -1 }}
                    style={{
                      flex: 1, background: 'var(--bg-card)', border: '1px solid var(--border)',
                      borderRadius: 12, padding: m ? '12px 14px' : '20px 24px',
                    }}
                  >
                    <div style={{
                      display: 'flex', flexDirection: m ? 'column' : 'row',
                      justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'center',
                      gap: m ? 8 : 0, marginBottom: m ? 8 : 10,
                    }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 14 : 18, fontWeight: 700, marginBottom: 4, color: s.accentColor }}>
                          {s.title}
                        </h3>
                        <p style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: m ? 12 : 14, fontWeight: 700,
                        color: s.tagColor, padding: m ? '4px 12px' : '8px 16px',
                        background: `${s.accentColor}10`, border: `1px solid ${s.accentColor}33`,
                        borderRadius: 8, whiteSpace: 'nowrap', marginLeft: m ? 0 : 20,
                      }}>
                        {s.tag}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: m ? 4 : 6,
                      paddingTop: m ? 6 : 8, borderTop: '1px solid var(--border)',
                    }}>
                      {s.deliverables.map((d, j) => (
                        <span key={j} style={{
                          fontFamily: 'var(--font-mono)', fontSize: m ? 8 : 9,
                          color: 'var(--text-muted)', padding: '2px 8px',
                          background: 'rgba(255,255,255,0.02)', borderRadius: 4,
                          border: '1px solid var(--border)',
                        }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Small yes cascade note */}
        <FadeUp delay={1.0}>
          <div style={{
            marginTop: m ? 16 : 28, padding: m ? '12px 14px' : '16px 24px',
            background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)',
            borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ fontSize: m ? 18 : 22, flexShrink: 0 }}>🎯</div>
            <div style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--emerald)' }}>リスクゼロ</strong>の無料体験から始めて、効果を確認しながら段階的に拡大。各ステップで成果を測定し、次の投資判断に活用。
            </div>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
