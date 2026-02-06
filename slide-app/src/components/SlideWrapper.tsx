import { type ReactNode, type CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function SlideWrapper({ children, style }: Props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 'var(--slide-py) var(--slide-px)',
        paddingBottom: 'calc(var(--slide-py) + 56px)',
        ...style,
      }}
    >
      {/* Noise overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
}
