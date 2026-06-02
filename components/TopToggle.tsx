'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import styles from './toggle.module.css';

const TopToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme !== 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <motion.div
      className={styles.toggle}
      onClick={handleToggle}
      whileHover={{ cursor: 'pointer' }}
      role="button"
      aria-label="Toggle theme"
      aria-pressed={!isDark}
    >
      <motion.div
        className={styles.knob}
        animate={{ x: mounted && !isDark ? 32 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};

export default TopToggle;
