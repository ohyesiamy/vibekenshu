export type SlideData = {
  id: number;
  type: 'cover' | 'stats' | 'problem' | 'solution' | 'packages' | 'roi' | 'comparison' | 'timeline' | 'cta';
  title: string;
  subtitle?: string;
};

export const slides: SlideData[] = [
  {
    id: 0,
    type: 'cover',
    title: 'Vibe Coding\nfor KONAMI',
    subtitle: 'AI駆動の次世代開発研修パッケージ',
  },
  {
    id: 1,
    type: 'stats',
    title: '過去最高業績の裏側',
    subtitle: '2026年3月期 Q3 連結業績',
  },
  {
    id: 2,
    type: 'problem',
    title: '成長の壁',
    subtitle: '開発リソースが成長速度に追いつかない',
  },
  {
    id: 3,
    type: 'solution',
    title: 'Vibe Coding',
    subtitle: 'AIと対話するだけで、コードが生まれる',
  },
  {
    id: 4,
    type: 'packages',
    title: '3つのパッケージ',
    subtitle: '検証から全社展開まで段階的に',
  },
  {
    id: 5,
    type: 'roi',
    title: 'ROI 3,100%',
    subtitle: '投資回収まで約2週間',
  },
  {
    id: 6,
    type: 'comparison',
    title: 'Before / After',
    subtitle: 'バイブコーディング導入による変化',
  },
  {
    id: 7,
    type: 'timeline',
    title: '導入ステップ',
    subtitle: '無料体験から全社展開まで',
  },
  {
    id: 8,
    type: 'cta',
    title: 'まず、体験を。',
    subtitle: '無料デモセッションのご案内',
  },
];
