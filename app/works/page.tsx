'use client';

import Sidebar from '@/components/Sidebar';
import TopToggle from '@/components/TopToggle';
import ProjectMedia from '@/components/ProjectMedia';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { useState, useEffect, useRef } from 'react';
import styles from './works.module.css';

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const lastTriggerRef = useRef(0);
  const deltaAccumulatorRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      deltaAccumulatorRef.current += e.deltaY * 0.85;

      const now = performance.now();
      const triggerThreshold = 140;
      const triggerGap = 280;

      if (Math.abs(deltaAccumulatorRef.current) < triggerThreshold || now - lastTriggerRef.current < triggerGap) {
        return;
      }

      if (deltaAccumulatorRef.current > 0 && currentIndex < projects.length - 1) {
        setDirection(1);
        setCurrentIndex((index) => index + 1);
      } else if (deltaAccumulatorRef.current < 0 && currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex((index) => index - 1);
      }

      deltaAccumulatorRef.current = 0;
      lastTriggerRef.current = now;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  const current = projects[currentIndex];
  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      x: direction < 0 ? 1000 : -1000,
    }),
  };

  const titleVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className={styles.page}>
      <Sidebar />
      <TopToggle />

      <div id="works" className={styles.container}>
        {/* Left side - Image */}
        <div className={styles.imageSection}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className={styles.imageWrapper}
            >
              <ProjectMedia type={current.mediaType} src={current.mediaSrc} alt={current.title} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - Info Panel */}
        <motion.div className={styles.infoPanel} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className={styles.header}>
            <h2 className="uppercase-label">Works</h2>
            <div style={{ textAlign: 'right', fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
              /nishchayk
            </div>
          </div>
          <hr style={{ marginBottom: '32px' }} />

          <motion.div key={`counter-${currentIndex}`} variants={titleVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <div className={styles.counter}>
              [{String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}]
            </div>
          </motion.div>

          <motion.div key={`title-${currentIndex}`} variants={titleVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4 }}>
            <h1 className={styles.projectTitle}>{current.title}</h1>
          </motion.div>

          <motion.p key={`category-${currentIndex}`} variants={titleVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, delay: 0.05 }} className={styles.category}>
            {current.category}
          </motion.p>

          <motion.p key={`desc-${currentIndex}`} variants={titleVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, delay: 0.1 }} className={styles.description}>
            {current.description}
          </motion.p>

          <div className={styles.navigation}>
            <button className={styles.navButton} onClick={() => currentIndex > 0 && (setDirection(-1), setCurrentIndex(currentIndex - 1))} disabled={currentIndex === 0}>
              ← Previous
            </button>
            <button className={styles.navButton} onClick={() => currentIndex < projects.length - 1 && (setDirection(1), setCurrentIndex(currentIndex + 1))} disabled={currentIndex === projects.length - 1}>
              Next →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
