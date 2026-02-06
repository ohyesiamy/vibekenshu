import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const problems = [
  { icon: '👥', title: '開発人材の逼迫', desc: 'KDE単体 2,349名で桃鉄2、ゴエモン、eFootball、遊戯王等を同時並行開発。中途採用は常時募集中。' },
  { icon: '⚡', title: '新作の開発加速', desc: '2026年7月ゴエモン新作、ボンバーマンコレクション等の大型タイトルが控える。プロトタイプ速度が成否を分ける。' },
  { icon: '🏗️', title: '新拠点の稼働', desc: 'コナミクリエイティブフロント東京ベイ（有明）が2025年10月竣工。新たな開発プロセスの構築が急務。' },
  { icon: '🔄', title: '運用型ゲームの効率化', desc: 'eFootball等のライブオペレーション。日々の改善・A/Bテスト・ツール開発のサイクルを高速化したい。' },
];

export default function ProblemSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{ alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Challenge
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            成長の壁
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 13 : 15, marginTop: 8, maxWidth: 600, lineHeight: 1.6 }}>
            過去最高の業績を更新し続けるKONAMI。しかし、開発リソースが成長速度に追いついていない。
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2, 1fr)', gap: m ? 12 : 20, marginTop: m ? 20 : 36 }}>
          {problems.map((p, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.12}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: m ? '18px 20px' : '28px 30px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: 'var(--accent)', borderRadius: '3px 0 0 3px' }} />
                <div style={{ fontSize: m ? 22 : 28, marginBottom: m ? 8 : 12 }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 15 : 18, fontWeight: 700, marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: m ? 12 : 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.8}>
          <div style={{
            marginTop: m ? 16 : 28,
            padding: m ? '12px 16px' : '16px 24px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--border-accent)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span style={{ fontSize: 20 }}>💡</span>
            <span style={{ fontSize: m ? 12 : 14, color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>新規採用に頼らず</strong>、現有戦力 2,349名 の生産性を劇的に引き上げる方法がある。
            </span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
