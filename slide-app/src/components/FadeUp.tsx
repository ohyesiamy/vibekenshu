import { type ReactNode, type CSSProperties } from 'react';
import { motion } from 'motion/react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
};

export default function FadeUp({ children, delay = 0, y = 30, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
