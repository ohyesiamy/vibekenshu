import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

type Props = {
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  style?: React.CSSProperties;
};

export default function CountUp({ to, duration = 1.5, delay = 0, prefix = '', suffix = '', decimals = 0, style }: Props) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) =>
    `${prefix}${v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${suffix}`
  );

  useEffect(() => {
    if (started) spring.set(to);
  }, [started, to, spring]);

  return <motion.span style={style}>{display}</motion.span>;
}
