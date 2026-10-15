'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import styles from './hero-wolf.module.css';

export default function HeroWolf() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 65, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 65, damping: 24 });
  const rotateX = useTransform(y, [-7, 7], [1.5, -1.5]);
  const rotateY = useTransform(x, [-10, 10], [-2, 2]);

  useEffect(() => {
    const hero = root.current?.closest('section');
    const desktop = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)');
    if (!hero) return;
    const reset = () => { pointerX.set(0); pointerY.set(0); };
    const move = (event: PointerEvent) => {
      if (reduced || !desktop.matches || event.pointerType !== 'mouse') return;
      const bounds = hero.getBoundingClientRect();
      pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 20);
      pointerY.set(((event.clientY - bounds.top) / bounds.height - .5) * 14);
    };
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', reset);
    desktop.addEventListener('change', reset);
    reset();
    return () => {
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
      desktop.removeEventListener('change', reset);
    };
  }, [reduced, pointerX, pointerY]);

  return <div ref={root} className={`metal-art ${styles.heroWolf}`} aria-hidden="true">
    <svg className={styles.technical} viewBox="0 0 620 650" fill="none">
      <path d="M310 18V615M25 330H595" stroke="#626267" strokeWidth=".7" strokeDasharray="3 9" opacity=".35"/>
      <g fill="#a8a9ad" fontFamily="monospace" fontSize="9" letterSpacing="2">
        <text x="16" y="615">N / DIGITAL MATTER</text><text x="490" y="42">FORM.01</text>
      </g>
      <path d="M552 540H572M562 530V550" stroke="#e5e5e5" strokeWidth=".7"/>
    </svg>
    <svg className={styles.orbits} viewBox="0 0 620 650" fill="none">
      <defs><radialGradient id="wolf-satellite"><stop stopColor="#e5e5e5"/><stop offset=".4" stopColor="#77777d"/><stop offset=".75" stopColor="#1c1c1e"/><stop offset="1" stopColor="#a8a9ad"/></radialGradient></defs>
      <g className={styles.orbitOne}><ellipse cx="310" cy="325" rx="275" ry="148" transform="rotate(37 310 325)" stroke="#c4c4ca" strokeWidth=".8" opacity=".55"/><circle cx="532" cy="493" r="8" fill="url(#wolf-satellite)"/></g>
      <g className={styles.orbitTwo}><ellipse cx="310" cy="325" rx="278" ry="160" transform="rotate(-42 310 325)" stroke="#73737a" strokeWidth=".65" opacity=".55"/><circle cx="95" cy="499" r="5" fill="url(#wolf-satellite)"/></g>
    </svg>
    <motion.div className={styles.parallax} style={{ x, y, rotateX, rotateY }}>
      <div className={styles.sculpture}>
        <Image src="/images/hero-wolf.webp" alt="" width={1000} height={1032} sizes="(max-width: 520px) 85vw, (max-width: 900px) 440px, 43vw" preload className={styles.wolf}/>
        <div className={styles.sheen}/>
      </div>
    </motion.div>
    <span className={`art-caption ${styles.caption}`}>IDEIAS EM MOVIMENTO. SOLUÇÕES EM FORMA.</span>
  </div>;
}
