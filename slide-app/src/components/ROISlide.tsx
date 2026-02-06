import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import CountUp from './CountUp';
import useIsMobile from '../hooks/useIsMobile';

export default function ROISlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(230,50,50,0.1) 0%, transparent 55%), var(--bg-primary)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Return on Investment
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            ROI <span style={{ color: 'var(--accent)' }}><CountUp to={3100} delay={0.3} suffix="%" /></span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: m ? 12 : 15, marginTop: 8, maxWidth: 700, lineHeight: 1.7, fontWeight: 300 }}>
            Package Bの場合、約2週間で投資回収。「断る理由」が見当たらない投資対効果。
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 16 : 28, marginTop: m ? 20 : 32 }}>
          {/* Left: Calculation */}
          <FadeUp delay={0.2}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
              padding: m ? '18px 16px' : '28px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 12 : 20 }}>
                PACKAGE B — 60名での試算
              </div>
              {[
                { label: '投資額', value: '¥18,100,000', color: 'var(--text-primary)' },
                { label: '60名の月間人件費', value: '¥40,000,000', color: 'var(--text-secondary)' },
                { label: '生産性向上率', value: '300%', color: 'var(--accent)' },
                { label: '実効適用率（保守的）', value: '40%', color: 'var(--text-secondary)' },
                { label: '月間追加開発能力', value: '¥48,000,000', color: 'var(--emerald)' },
                { label: '追加要員換算', value: '24名分 / 月', color: 'var(--gold)' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: m ? '7px 0' : '10px 0',
                  borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: m ? 11 : 13, color: 'var(--text-muted)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 14, fontWeight: 600, color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: Impact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 12 : 20 }}>
            {/* Payback period - hero */}
            <FadeUp delay={0.35}>
              <motion.div
                animate={{ borderColor: ['rgba(230,50,50,0.2)', 'rgba(230,50,50,0.5)', 'rgba(230,50,50,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(135deg, rgba(230,50,50,0.1), rgba(230,50,50,0.03))',
                  border: '1px solid var(--border-accent)', borderRadius: 14,
                  padding: m ? '20px' : '32px', textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>
                  投資回収期間
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 40 : 64, fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                  ~2週間
                </div>
                <div style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', marginTop: 10 }}>
                  営業利益1,230億円に対し、投資額は <strong style={{ color: '#fff' }}>0.0015%</strong>
                </div>
              </motion.div>
            </FadeUp>

            {/* Visual bar comparison */}
            <FadeUp delay={0.5}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14,
                padding: m ? '16px' : '24px 28px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 16 }}>
                  INVESTMENT vs RETURN
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginBottom: 6 }}>投資額</div>
                    <div style={{ position: 'relative', height: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 5 }}>
                      <motion.div
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3%', background: 'var(--accent)', borderRadius: 5, transformOrigin: 'left' }}
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
                  <span style={{ color: 'var(--emerald)', fontWeight: 700 }}>31x</span> return
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
