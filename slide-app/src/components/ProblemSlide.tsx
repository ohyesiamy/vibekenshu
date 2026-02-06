import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const problems = [
  { icon: '👥', title: '開発人材の逼迫', stat: '2,349名', statLabel: 'KDE単体', desc: '桃鉄、ゴエモン、eFootball、遊戯王 — 大型タイトルを同時並行開発。中途採用は常時募集中。', color: 'var(--accent)' },
  { icon: '🚀', title: '新作の開発加速', stat: '2026年7月', statLabel: 'ゴエモン新作', desc: 'ボンバーマンコレクション等の大型タイトルが控える。プロトタイプ速度が成否を分ける。', color: 'var(--gold)' },
  { icon: '🏗️', title: '新拠点の稼働', stat: '2025年10月', statLabel: '有明竣工', desc: 'コナミクリエイティブフロント東京ベイ。新たな開発プロセスの構築が急務。', color: 'var(--cyan)' },
  { icon: '🔄', title: '運用型ゲームの効率化', stat: '365日', statLabel: 'ライブオペ', desc: 'eFootball等のA/Bテスト・ツール開発のサイクルを高速化したい。', color: 'var(--violet)' },
];

export default function ProblemSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 50% 0%, rgba(230,50,50,0.06) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Challenge
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            しかし、成長には<span style={{ color: 'var(--accent)' }}>壁</span>がある
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 600, lineHeight: 1.7, fontWeight: 300 }}>
            過去最高の業績を更新し続けるKONAMI。しかし、開発リソースが成長速度に追いついていない。
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2, 1fr)', gap: m ? 10 : 16, marginTop: m ? 20 : 36 }}>
          {problems.map((p, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ borderColor: `${p.color}44`, y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
                  padding: m ? '16px' : '24px', height: '100%', position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {/* Top color accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: p.color, opacity: 0.6 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: m ? 10 : 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: m ? 20 : 24 }}>{p.icon}</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 14 : 16, fontWeight: 700 }}>{p.title}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 16 : 20, fontWeight: 800, color: p.color, lineHeight: 1 }}>{p.stat}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 1 }}>{p.statLabel}</div>
                  </div>
                </div>
                <p style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Key insight - psychological bridge */}
        <FadeUp delay={0.7}>
          <motion.div
            animate={{ borderColor: ['rgba(230,50,50,0.15)', 'rgba(230,50,50,0.35)', 'rgba(230,50,50,0.15)'] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              marginTop: m ? 16 : 28, padding: m ? '14px 16px' : '20px 28px',
              background: 'linear-gradient(135deg, rgba(230,50,50,0.06), rgba(230,50,50,0.02))',
              border: '1px solid var(--border-accent)', borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: m ? 10 : 16,
            }}
          >
            <div style={{
              width: m ? 36 : 44, height: m ? 36 : 44, borderRadius: 10,
              background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: m ? 18 : 22, flexShrink: 0,
            }}>
              💡
            </div>
            <div>
              <div style={{ fontSize: m ? 13 : 15, fontWeight: 700, marginBottom: 2 }}>
                新規採用に頼らず、現有戦力の生産性を劇的に引き上げる方法がある
              </div>
              <div style={{ fontSize: m ? 10 : 12, color: 'var(--text-muted)' }}>
                2,349名 × 生産性300% = 追加7,047名分の開発能力
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
