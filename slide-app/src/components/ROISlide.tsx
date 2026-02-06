import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

export default function ROISlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(230,50,50,0.1) 0%, transparent 60%), #0a0a0a',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Return on Investment
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            ROI <span style={{ color: 'var(--accent)' }}>3,100%</span>
          </h2>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 12 : 28, marginTop: m ? 20 : 32 }}>
          {/* Left: Calculation */}
          <FadeUp delay={0.2}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: m ? '18px 16px' : '28px',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: m ? 12 : 20 }}>
                PACKAGE B — 60名での試算
              </div>
              {[
                { label: '投資額', value: '¥18,100,000', color: 'var(--text-primary)' },
                { label: '60名の月間人件費', value: '¥40,000,000', color: 'var(--text-secondary)' },
                { label: '生産性向上率', value: '300%', color: 'var(--accent)' },
                { label: '実効適用率', value: '40%', color: 'var(--text-secondary)' },
                { label: '月間追加開発能力', value: '¥48,000,000', color: '#22c55e' },
                { label: '追加要員換算', value: '24名分 / 月', color: 'var(--gold)' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: m ? '7px 0' : '10px 0',
                  borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: m ? 11 : 13, color: 'var(--text-muted)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 11 : 14, fontWeight: 600, color: row.color }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: Impact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FadeUp delay={0.35}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(230,50,50,0.1), rgba(230,50,50,0.03))',
                border: '1px solid var(--border-accent)',
                borderRadius: 12,
                padding: '28px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>
                  投資回収期間
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: m ? 36 : 56, fontWeight: 900, color: 'var(--accent)' }}>
                  ~2週間
                </div>
                <div style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', marginTop: 8 }}>
                  営業利益1,230億円に対し、投資額は 0.0015%
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '24px 28px',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 16 }}>
                  VISUAL IMPACT
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginBottom: 6 }}>
                      投資額
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      style={{
                        height: 6,
                        background: 'var(--accent)',
                        borderRadius: 3,
                        width: '2%',
                        transformOrigin: 'left',
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginBottom: 6 }}>
                      年間リターン
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.0 }}
                      style={{
                        height: 6,
                        background: 'linear-gradient(90deg, #22c55e, var(--gold))',
                        borderRadius: 3,
                        width: '100%',
                        transformOrigin: 'left',
                      }}
                    />
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'right' }}>
                  31x return
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
