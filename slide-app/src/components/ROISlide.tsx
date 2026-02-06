import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import CountUp from './CountUp';
import useIsMobile from '../hooks/useIsMobile';

const packages = [
  { label: 'A', name: 'Sprint', people: 20, cost: 3700000, duration: '2日間' },
  { label: 'B', name: 'Transformation', people: 60, cost: 18100000, duration: '3ヶ月' },
  { label: 'C', name: 'Academy', people: 200, cost: 62400000, duration: '12ヶ月' },
];

export default function ROISlide() {
  const m = useIsMobile();
  const [pkgIndex, setPkgIndex] = useState(1);
  const [productivityRate, setProductivityRate] = useState(300);
  const [applicationRate, setApplicationRate] = useState(40);

  const pkg = packages[pkgIndex];

  const calc = useMemo(() => {
    const monthlySalaryPerPerson = 666667;
    const monthlyPersonnelCost = pkg.people * monthlySalaryPerPerson;
    const effectiveMultiplier = (productivityRate / 100) * (applicationRate / 100);
    const monthlyAdditionalCapacity = Math.round(monthlyPersonnelCost * effectiveMultiplier);
    const additionalHeadcount = Math.round(pkg.people * effectiveMultiplier);
    const annualReturn = monthlyAdditionalCapacity * 12;
    const roi = Math.round((annualReturn / pkg.cost) * 100);
    const paybackDays = Math.round((pkg.cost / monthlyAdditionalCapacity) * 30);
    const operatingProfit = 123000000000;
    const investmentRatio = ((pkg.cost / operatingProfit) * 100).toFixed(4);

    return {
      investment: pkg.cost,
      monthlyPersonnelCost,
      monthlyAdditionalCapacity,
      additionalHeadcount,
      annualReturn,
      roi,
      paybackDays,
      investmentRatio,
    };
  }, [pkgIndex, productivityRate, applicationRate, pkg.cost, pkg.people]);

  const fmt = (n: number) => '¥' + n.toLocaleString();

  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(230,50,50,0.1) 0%, transparent 55%), var(--bg-primary)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Interactive ROI Simulator
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            ROI <span style={{ color: 'var(--accent)' }}><CountUp to={calc.roi} delay={0.3} suffix="%" /></span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 700, lineHeight: 1.7, fontWeight: 300 }}>
            パラメータを調整して、御社の条件でシミュレーション。スライダーを動かしてください。
          </p>
        </FadeUp>

        {/* Controls */}
        <FadeUp delay={0.15}>
          <div style={{
            marginTop: m ? 14 : 24,
            background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
            padding: m ? '14px' : '20px 24px',
            display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr 1fr', gap: m ? 12 : 20,
          }}>
            {/* Package selector */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 8 }}>
                PACKAGE
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {packages.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setPkgIndex(i)}
                    style={{
                      flex: 1, padding: m ? '8px 4px' : '10px 8px',
                      background: i === pkgIndex ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${i === pkgIndex ? 'var(--accent)' : 'var(--border)'}`,
                      borderRadius: 8, cursor: 'pointer',
                      color: i === pkgIndex ? '#fff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-display)', fontSize: m ? 11 : 13, fontWeight: 700,
                      transition: 'all 0.2s',
                    }}
                  >
                    {p.label}
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, opacity: 0.7, marginTop: 2 }}>
                      {p.people}名
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Productivity slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2 }}>
                  生産性向上率
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>
                  {productivityRate}%
                </div>
              </div>
              <input
                type="range" min={100} max={500} step={10} value={productivityRate}
                onChange={(e) => setProductivityRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)', height: 6 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--text-muted)', marginTop: 4 }}>
                <span>100%</span><span>保守的</span><span>500%</span>
              </div>
            </div>

            {/* Application rate slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2 }}>
                  実効適用率
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cyan)', fontWeight: 700 }}>
                  {applicationRate}%
                </div>
              </div>
              <input
                type="range" min={10} max={80} step={5} value={applicationRate}
                onChange={(e) => setApplicationRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--cyan)', height: 6 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--text-muted)', marginTop: 4 }}>
                <span>10%</span><span>保守的</span><span>80%</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 14 : 24, marginTop: m ? 14 : 20 }}>
          {/* Left: Calculation */}
          <FadeUp delay={0.25}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
              padding: m ? '16px 14px' : '24px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 10 : 16 }}>
                PACKAGE {pkg.label} — {pkg.people}名での試算
              </div>
              {[
                { label: '投資額', value: fmt(calc.investment), color: 'var(--text-primary)' },
                { label: `${pkg.people}名の月間人件費`, value: fmt(calc.monthlyPersonnelCost), color: 'var(--text-secondary)' },
                { label: '生産性向上率', value: `${productivityRate}%`, color: 'var(--accent)' },
                { label: '実効適用率（保守的）', value: `${applicationRate}%`, color: 'var(--text-secondary)' },
                { label: '月間追加開発能力', value: fmt(calc.monthlyAdditionalCapacity), color: 'var(--emerald)' },
                { label: '追加要員換算', value: `${calc.additionalHeadcount}名分 / 月`, color: 'var(--gold)' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: m ? '6px 0' : '8px 0',
                  borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: m ? 11 : 13, color: 'var(--text-muted)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 14, fontWeight: 600, color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: Impact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 10 : 16 }}>
            {/* Payback period */}
            <FadeUp delay={0.35}>
              <motion.div
                animate={{ borderColor: ['rgba(230,50,50,0.2)', 'rgba(230,50,50,0.5)', 'rgba(230,50,50,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(135deg, rgba(230,50,50,0.1), rgba(230,50,50,0.03))',
                  border: '1px solid var(--border-accent)', borderRadius: 14,
                  padding: m ? '16px' : '24px', textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 10 }}>
                  投資回収期間
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 36 : 56, fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                  ~{calc.paybackDays < 30 ? `${calc.paybackDays}日` : `${Math.round(calc.paybackDays / 7)}週間`}
                </div>
                <div style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', marginTop: 8 }}>
                  営業利益1,230億円に対し、投資額は <strong style={{ color: '#fff' }}>{calc.investmentRatio}%</strong>
                </div>
              </motion.div>
            </FadeUp>

            {/* Visual bar comparison */}
            <FadeUp delay={0.45}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
                padding: m ? '14px' : '20px 24px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 14 }}>
                  INVESTMENT vs RETURN
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginBottom: 6 }}>投資額</div>
                    <div style={{ position: 'relative', height: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 5 }}>
                      <motion.div
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.max((calc.investment / calc.annualReturn) * 100, 2)}%`, background: 'var(--accent)', borderRadius: 5, transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginBottom: 6 }}>年間リターン</div>
                    <div style={{ position: 'relative', height: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 5 }}>
                      <motion.div
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.0 }}
                        style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%', background: 'linear-gradient(90deg, var(--emerald), var(--gold))', borderRadius: 5, transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'right' }}>
                  <span style={{ color: 'var(--emerald)', fontWeight: 700 }}>{Math.round(calc.roi / 100)}x</span> return
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
