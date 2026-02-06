import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

const packages = [
  {
    name: 'Vibe Sprint',
    label: 'A',
    price: '370万円',
    duration: '2日間',
    people: '20名',
    features: ['集中ハンズオン研修', 'ゲーム開発実践', '即戦力化'],
    color: 'var(--text-secondary)',
    bg: 'var(--bg-card)',
    border: 'var(--border)',
  },
  {
    name: 'Vibe Transformation',
    label: 'B',
    price: '1,810万円',
    duration: '3ヶ月',
    people: '60名',
    features: ['3日間集中研修', '2ヶ月フォロー', 'トレーナー5名認定', 'ROI計測'],
    recommended: true,
    color: 'var(--accent)',
    bg: 'linear-gradient(135deg, rgba(230,50,50,0.08), rgba(230,50,50,0.02))',
    border: 'var(--border-accent)',
  },
  {
    name: 'Vibe Academy',
    label: 'C',
    price: '6,240万円',
    duration: '12ヶ月',
    people: '200名',
    features: ['年間16回研修', 'eスポーツ学院連携', 'ハッカソン12回', 'トレーナー20名'],
    color: 'var(--gold)',
    bg: 'linear-gradient(135deg, rgba(212,168,83,0.06), rgba(212,168,83,0.01))',
    border: 'rgba(212,168,83,0.2)',
  },
];

export default function PackagesSlide() {
  return (
    <SlideWrapper style={{ alignItems: 'flex-start', padding: '50px 70px' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Packages
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            3つのパッケージ
          </h2>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
          {packages.map((pkg, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.15}>
              <div style={{
                background: pkg.bg,
                border: `1px solid ${pkg.border}`,
                borderRadius: 12,
                padding: '28px 24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}>
                {pkg.recommended && (
                  <div style={{
                    position: 'absolute',
                    top: -1,
                    left: 20,
                    right: 20,
                    height: 2,
                    background: 'var(--accent)',
                    borderRadius: '0 0 2px 2px',
                    boxShadow: '0 0 12px var(--accent-glow)',
                  }} />
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 12,
                    fontWeight: 800,
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: pkg.recommended ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                    color: pkg.recommended ? '#fff' : 'var(--text-secondary)',
                  }}>
                    {pkg.label}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700 }}>
                      {pkg.name}
                    </div>
                    {pkg.recommended && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 1 }}>
                        RECOMMENDED
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, color: '#fff' }}>
                    {pkg.price}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 20 }}>
                  <span>{pkg.duration}</span>
                  <span>{pkg.people}</span>
                </div>

                <div style={{ flex: 1 }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      padding: '6px 0',
                      borderBottom: j < pkg.features.length - 1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <span style={{ color: pkg.color, fontSize: 11 }}>◆</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.8}>
          <div style={{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--text-muted)',
          }}>
            <span>※ 価格は全て税別</span>
            <span>※ B→C移行時、B投資額の50%を差額充当</span>
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
