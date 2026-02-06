import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

const rows = [
  { item: 'プロトタイプ開発', before: '2〜4週間', after: '2〜3日', improvement: '5x' },
  { item: '社内ツール構築', before: '1〜2ヶ月', after: '1〜2週間', improvement: '4x' },
  { item: 'A/Bテスト実装', before: '3〜5日', after: '数時間', improvement: '8x' },
  { item: 'ダッシュボード作成', before: '2〜3週間', after: '1〜2日', improvement: '10x' },
  { item: 'API連携開発', before: '1〜2週間', after: '1〜3日', improvement: '5x' },
  { item: 'バグ調査・修正', before: '半日〜2日', after: '1〜3時間', improvement: '4x' },
];

export default function ComparisonSlide() {
  return (
    <SlideWrapper style={{ alignItems: 'flex-start', padding: '50px 70px' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Before / After
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            バイブコーディング導入による変化
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{
            marginTop: 32,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr 0.6fr',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.02)',
              borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-muted)',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}>
              <div>Task</div>
              <div>Before</div>
              <div>After</div>
              <div style={{ textAlign: 'right' }}>Speed</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <FadeUp key={i} delay={0.3 + i * 0.08} y={10}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 1fr 0.6fr',
                  padding: '16px 28px',
                  borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'center',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{row.item}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>
                    {row.before}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#22c55e', fontWeight: 600 }}>
                    {row.after}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 800,
                    color: 'var(--accent)',
                    textAlign: 'right',
                  }}>
                    {row.improvement}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <div style={{
            marginTop: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}>
            ※ 実績値はトランスコスモス社等の公開事例およびバイブコーディング業界実績に基づく保守的見積
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
