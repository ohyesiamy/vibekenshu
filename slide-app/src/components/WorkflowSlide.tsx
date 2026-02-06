import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';

const traditionalSteps = [
  { label: '要件定義', duration: '2週間', width: 18 },
  { label: '基本設計', duration: '1週間', width: 12 },
  { label: '詳細設計', duration: '1週間', width: 12 },
  { label: 'コーディング', duration: '3週間', width: 28 },
  { label: 'テスト', duration: '2週間', width: 18 },
  { label: 'デプロイ', duration: '1週間', width: 12 },
];

const vibeSteps = [
  { label: '意図を伝える', duration: '30分', width: 8, color: 'var(--gold)' },
  { label: 'AI生成 + レビュー', duration: '2時間', width: 22, color: 'var(--cyan)' },
  { label: '修正指示', duration: '1時間', width: 14, color: 'var(--accent)' },
  { label: 'テスト + 改善', duration: '2時間', width: 22, color: '#8b5cf6' },
  { label: '完成', duration: '30分', width: 8, color: '#22c55e' },
];

export default function WorkflowSlide() {
  return (
    <SlideWrapper style={{ alignItems: 'flex-start', padding: '50px 70px' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Development Workflow
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            開発フローの<span style={{ color: 'var(--accent)' }}>革命</span>
          </h2>
        </FadeUp>

        {/* Traditional Workflow - Gantt-like */}
        <FadeUp delay={0.2}>
          <div style={{
            marginTop: 28,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: '24px 28px',
            opacity: 0.7,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2 }}>
                TRADITIONAL DEVELOPMENT
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
                合計: <span style={{ color: 'var(--accent)', fontWeight: 700 }}>10週間</span>
              </div>
            </div>

            {/* Gantt bars */}
            <div style={{ display: 'flex', gap: 3, height: 36, borderRadius: 6, overflow: 'hidden' }}>
              {traditionalSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    width: `${step.width}%`,
                    background: `rgba(255,255,255,${0.04 + i * 0.02})`,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transformOrigin: 'left',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)' }}>{step.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)' }}>{step.duration}</div>
                </motion.div>
              ))}
            </div>

            {/* Waterfall arrow */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-muted)',
              gap: 4,
            }}>
              <span>ウォーターフォール: 順次実行 →→→</span>
            </div>
          </div>
        </FadeUp>

        {/* VS Divider */}
        <FadeUp delay={0.6}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            margin: '20px 0',
          }}>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 800,
              color: 'var(--accent)',
              padding: '6px 20px',
              border: '1px solid var(--border-accent)',
              borderRadius: 20,
              background: 'var(--accent-soft)',
            }}>
              5x FASTER
            </div>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </FadeUp>

        {/* Vibe Coding Workflow - Iterative */}
        <FadeUp delay={0.7}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(230,50,50,0.06), rgba(0,212,255,0.04))',
            border: '1px solid var(--border-accent)',
            borderRadius: 12,
            padding: '24px 28px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 2 }}>
                VIBE CODING
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>
                合計: <span style={{ color: '#22c55e', fontWeight: 700 }}>1日</span>
              </div>
            </div>

            {/* Circular iterative flow */}
            <div style={{ display: 'flex', gap: 3, height: 36, borderRadius: 6, overflow: 'hidden' }}>
              {vibeSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  style={{
                    width: `${step.width}%`,
                    background: `${step.color}22`,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transformOrigin: 'left',
                    border: `1px solid ${step.color}33`,
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 600, color: step.color }}>{step.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)' }}>{step.duration}</div>
                </motion.div>
              ))}
            </div>

            {/* Iteration indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              gap: 8,
            }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ fontSize: 14 }}
              >
                🔄
              </motion.div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)' }}>
                反復的: 指示 → 生成 → 確認 → 修正 のサイクルを高速回転
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Key insight */}
        <FadeUp delay={1.0}>
          <div style={{
            marginTop: 20,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
          }}>
            {[
              { icon: '🧠', title: '人間は「何を作るか」に集中', desc: 'ロジックと意思決定に注力' },
              { icon: '🤖', title: 'AIが「どう作るか」を担当', desc: 'コーディング・テスト・デバッグ' },
              { icon: '🔄', title: '5つのLLMが品質保証', desc: '3つ以上の承認で次工程へ\nトランスコスモス方式' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '16px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </SlideWrapper>
  );
}
