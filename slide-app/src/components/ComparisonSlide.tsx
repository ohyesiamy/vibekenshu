import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const rows = [
  { item: 'プロトタイプ開発', before: '2〜4週間', after: '2〜3日', beforeDays: 21, afterDays: 2.5, improvement: '5x', color: 'var(--accent)' },
  { item: '社内ツール構築', before: '1〜2ヶ月', after: '1〜2週間', beforeDays: 45, afterDays: 10, improvement: '4x', color: 'var(--gold)' },
  { item: 'A/Bテスト実装', before: '3〜5日', after: '数時間', beforeDays: 4, afterDays: 0.3, improvement: '8x', color: 'var(--cyan)' },
  { item: 'ダッシュボード作成', before: '2〜3週間', after: '1〜2日', beforeDays: 17, afterDays: 1.5, improvement: '10x', color: 'var(--emerald)' },
  { item: 'API連携開発', before: '1〜2週間', after: '1〜3日', beforeDays: 10, afterDays: 2, improvement: '5x', color: 'var(--violet)' },
  { item: 'バグ調査・修正', before: '半日〜2日', after: '1〜3時間', beforeDays: 1.5, afterDays: 0.15, improvement: '4x', color: 'var(--gold)' },
];

const maxDays = 45;

export default function ComparisonSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 40% 60%, rgba(16,185,129,0.05) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--emerald)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Before / After
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            KONAMIの開発が<span style={{ color: 'var(--emerald)' }}>こう変わる</span>
          </h2>
        </FadeUp>

        {/* Table */}
        <div style={{
          marginTop: m ? 16 : 28, background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 14, padding: m ? '12px' : '24px 28px', overflow: 'hidden',
        }}>
          {/* Header - desktop only */}
          {!m && (
            <div style={{
              display: 'grid', gridTemplateColumns: '160px 1fr 60px',
              padding: '0 0 12px', marginBottom: 12, borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2,
            }}>
              <div>TASK</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>BEFORE</div>
                <div>AFTER (VIBE CODING)</div>
              </div>
              <div style={{ textAlign: 'right' }}>SPEED</div>
            </div>
          )}

          {rows.map((row, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.08}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: m ? '1fr 40px' : '160px 1fr 60px',
                alignItems: 'center', gap: m ? 8 : 16,
                padding: m ? '10px 4px' : '12px 0',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div>
                  <div style={{ fontSize: m ? 12 : 13, fontWeight: 600, marginBottom: m ? 6 : 0 }}>{row.item}</div>
                  {m && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <motion.div
                          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                          transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                          style={{ height: 12, width: `${(row.beforeDays / maxDays) * 100}%`, background: 'rgba(255,255,255,0.06)', borderRadius: 3, transformOrigin: 'left', minWidth: 12 }}
                        />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{row.before}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <motion.div
                          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          style={{ height: 12, width: `${Math.max((row.afterDays / maxDays) * 100, 2)}%`, background: `linear-gradient(90deg, ${row.color}, ${row.color}aa)`, borderRadius: 3, transformOrigin: 'left', minWidth: 6, boxShadow: `0 0 8px ${row.color}44` }}
                        />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: row.color, whiteSpace: 'nowrap', fontWeight: 600 }}>{row.after}</span>
                      </div>
                    </div>
                  )}
                </div>

                {!m && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <motion.div
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                        style={{ height: 16, width: `${(row.beforeDays / maxDays) * 100}%`, background: 'rgba(255,255,255,0.06)', borderRadius: 4, transformOrigin: 'left', minWidth: 20 }}
                      />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{row.before}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <motion.div
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        style={{ height: 16, width: `${Math.max((row.afterDays / maxDays) * 100, 2)}%`, background: `linear-gradient(90deg, ${row.color}, ${row.color}aa)`, borderRadius: 4, transformOrigin: 'left', minWidth: 8, boxShadow: `0 0 8px ${row.color}44` }}
                      />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: row.color, whiteSpace: 'nowrap', fontWeight: 600 }}>{row.after}</span>
                    </div>
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: m ? 18 : 22, fontWeight: 900,
                    color: row.color, textAlign: 'right',
                  }}
                >
                  {row.improvement}
                </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Legend + Source */}
        <FadeUp delay={0.9}>
          <div style={{
            marginTop: m ? 12 : 20, display: 'flex', gap: m ? 10 : 20,
            alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', gap: m ? 12 : 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 20, height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 10, color: 'var(--text-muted)' }}>Before</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 20, height: 8, borderRadius: 2, background: 'linear-gradient(90deg, var(--emerald), var(--cyan))' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 10, color: 'var(--emerald)' }}>After</span>
              </div>
            </div>
            {!m && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', opacity: 0.6 }}>
                ※ トランスコスモス社等の公開事例に基づく保守的見積
              </span>
            )}
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
