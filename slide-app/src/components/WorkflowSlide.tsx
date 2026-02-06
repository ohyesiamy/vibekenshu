import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const traditionalSteps = [
  { label: '要件定義', duration: '2週間', width: 18 },
  { label: '基本設計', duration: '1週間', width: 12 },
  { label: '詳細設計', duration: '1週間', width: 12 },
  { label: 'コーディング', duration: '3週間', width: 28 },
  { label: 'テスト', duration: '2週間', width: 18 },
  { label: 'デプロイ', duration: '1週間', width: 12 },
];

const vibeSteps = [
  { label: '意図を伝える', duration: '30分', width: 12, color: 'var(--gold)' },
  { label: 'AI生成 + レビュー', duration: '2時間', width: 28, color: 'var(--cyan)' },
  { label: '修正指示', duration: '1時間', width: 18, color: 'var(--accent)' },
  { label: 'テスト + 改善', duration: '2時間', width: 28, color: 'var(--violet)' },
  { label: '完成', duration: '30分', width: 14, color: 'var(--emerald)' },
];

export default function WorkflowSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{
      background: 'radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.05) 0%, transparent 50%), var(--bg-primary)',
    }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Development Workflow
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 28 : 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1 }}>
            開発フローの<span style={{ color: 'var(--accent)' }}>革命</span>
          </h2>
        </FadeUp>

        {/* Traditional */}
        <FadeUp delay={0.2}>
          <div style={{
            marginTop: m ? 16 : 28, background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: m ? '16px 14px' : '24px 28px', opacity: 0.65,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: m ? 10 : 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 11, color: 'var(--text-muted)', letterSpacing: 2 }}>TRADITIONAL</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 12, color: 'var(--text-muted)' }}>
                合計: <span style={{ color: 'var(--accent)', fontWeight: 700 }}>10週間</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: m ? 2 : 3, height: m ? 32 : 40, borderRadius: 6, overflow: 'hidden' }}>
              {traditionalSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    width: `${step.width}%`, background: `rgba(255,255,255,${0.04 + i * 0.015})`,
                    borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', transformOrigin: 'left', border: '1px solid var(--border)',
                  }}
                >
                  <div style={{ fontSize: m ? 7 : 10, fontWeight: 600, color: 'var(--text-secondary)' }}>{m ? step.label.slice(0, 3) : step.label}</div>
                  {!m && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)' }}>{step.duration}</div>}
                </motion.div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 10, color: 'var(--text-muted)', gap: 4 }}>
              <span>ウォーターフォール: 順次実行 →→→</span>
            </div>
          </div>
        </FadeUp>

        {/* VS Divider */}
        <FadeUp delay={0.6}>
          <div style={{ display: 'flex', alignItems: 'center', gap: m ? 10 : 16, margin: m ? '12px 0' : '20px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <motion.div
              animate={{ boxShadow: ['0 0 10px rgba(230,50,50,0.2)', '0 0 20px rgba(230,50,50,0.5)', '0 0 10px rgba(230,50,50,0.2)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontFamily: 'var(--font-display)', fontSize: m ? 12 : 14, fontWeight: 800, color: 'var(--accent)',
                padding: m ? '4px 14px' : '6px 20px', border: '1px solid var(--border-accent)',
                borderRadius: 20, background: 'var(--accent-soft)',
              }}
            >
              5x FASTER
            </motion.div>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </FadeUp>

        {/* Vibe Coding */}
        <FadeUp delay={0.7}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(230,50,50,0.06), rgba(6,182,212,0.04))',
            border: '1px solid var(--border-accent)', borderRadius: 12, padding: m ? '16px 14px' : '24px 28px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: m ? 10 : 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 11, color: 'var(--accent)', letterSpacing: 2 }}>VIBE CODING</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 10 : 12, color: 'var(--text-secondary)' }}>
                合計: <span style={{ color: 'var(--emerald)', fontWeight: 700 }}>1日</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: m ? 2 : 3, height: m ? 32 : 40, borderRadius: 6, overflow: 'hidden' }}>
              {vibeSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  style={{
                    width: `${step.width}%`, background: `${step.color}22`, borderRadius: 4,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    transformOrigin: 'left', border: `1px solid ${step.color}33`,
                  }}
                >
                  <div style={{ fontSize: m ? 7 : 10, fontWeight: 600, color: step.color }}>{m ? step.label.slice(0, 4) : step.label}</div>
                  {!m && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)' }}>{step.duration}</div>}
                </motion.div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: m ? 8 : 10, gap: 8 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ fontSize: m ? 12 : 14 }}>🔄</motion.div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: m ? 9 : 10, color: 'var(--accent)' }}>
                {m ? '指示→生成→確認→修正を高速回転' : '反復的: 指示 → 生成 → 確認 → 修正 のサイクルを高速回転'}
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Key insight cards */}
        <FadeUp delay={1.0}>
          <div style={{ marginTop: m ? 12 : 20, display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 8 : 12 }}>
            {[
              { icon: '🧠', title: '人間は「何を作るか」に集中', desc: 'ロジックと意思決定に注力', color: 'var(--gold)' },
              { icon: '🤖', title: 'AIが「どう作るか」を担当', desc: 'コーディング・テスト・デバッグ', color: 'var(--cyan)' },
              { icon: '🔄', title: '5つのLLMが品質保証', desc: '3つ以上の承認で次工程へ', color: 'var(--violet)' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 10,
                padding: m ? '12px 14px' : '16px', textAlign: m ? 'left' : 'center',
                display: m ? 'flex' : 'block', alignItems: 'center', gap: m ? 12 : 0,
              }}>
                <div style={{ fontSize: m ? 20 : 28, marginBottom: m ? 0 : 8 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: m ? 12 : 13, fontWeight: 700, color: item.color, marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: m ? 10 : 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
