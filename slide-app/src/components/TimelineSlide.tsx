import { motion } from 'motion/react';
import SlideWrapper from './SlideWrapper';
import FadeUp from './FadeUp';
import useIsMobile from '../hooks/useIsMobile';

const steps = [
  {
    step: '01',
    title: '無料体験セッション',
    desc: '経営層・技術リード向け2時間デモ。コナミIPを題材にしたライブコーディング。',
    tag: '無料',
    tagColor: '#22c55e',
  },
  {
    step: '02',
    title: 'パッケージA で実証',
    desc: '20名のエンジニアで2日間の集中研修。定量的な効果測定。',
    tag: '¥370万',
    tagColor: 'var(--text-secondary)',
  },
  {
    step: '03',
    title: 'パッケージB で拡大',
    desc: '60名規模での組織変革プログラム。3ヶ月のフォローアップで定着化。',
    tag: '¥1,810万',
    tagColor: 'var(--accent)',
  },
  {
    step: '04',
    title: 'パッケージC で全社展開',
    desc: '年間200名のアカデミー運営。eスポーツ学院連携で次世代人材育成。',
    tag: '¥6,240万',
    tagColor: 'var(--gold)',
  },
];

export default function TimelineSlide() {
  const m = useIsMobile();
  return (
    <SlideWrapper style={{ alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 1200 }}>
        <FadeUp>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>
            Implementation Roadmap
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, letterSpacing: -1 }}>
            導入ステップ
          </h2>
        </FadeUp>

        <div style={{ position: 'relative', marginTop: m ? 20 : 40 }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              left: m ? 15 : 19,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--accent), var(--gold))',
              transformOrigin: 'top',
              opacity: 0.3,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: m ? 12 : 24 }}>
            {steps.map((s, i) => (
              <FadeUp key={i} delay={0.3 + i * 0.15}>
                <div style={{ display: 'flex', gap: m ? 12 : 24, alignItems: 'flex-start' }}>
                  {/* Circle */}
                  <div style={{
                    width: m ? 32 : 40,
                    height: m ? 32 : 40,
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: m ? 10 : 12,
                    fontWeight: 600,
                    color: 'var(--accent)',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {s.step}
                  </div>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: m ? '12px 14px' : '20px 24px',
                    display: 'flex',
                    flexDirection: m ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: m ? 'flex-start' : 'center',
                    gap: m ? 8 : 0,
                  }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 14 : 18, fontWeight: 700, marginBottom: 4 }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: m ? 11 : 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {s.desc}
                      </p>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: m ? 11 : 13,
                      fontWeight: 600,
                      color: s.tagColor,
                      padding: m ? '4px 10px' : '6px 14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${s.tagColor}33`,
                      borderRadius: 6,
                      whiteSpace: 'nowrap',
                      marginLeft: m ? 0 : 20,
                    }}>
                      {s.tag}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
