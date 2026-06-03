'use client';

import Sidebar from '@/components/Sidebar';
import TopToggle from '@/components/TopToggle';
import { motion } from 'framer-motion';
import { interests } from '@/data/interests';
import styles from './hobbies.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function HobbiesPage() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <TopToggle />

      <motion.div id="hobbies" className={styles.container} variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className={styles.header}>
          <h1 className={styles.title}>Hobbies & Interests</h1>
          <div className={styles.handle}>@nishchay_dev</div>
        </motion.div>
        <motion.hr variants={itemVariants} style={{ marginBottom: '60px' }} />

        <motion.p variants={itemVariants} className={styles.intro}>
          A long-form timeline of personal interests, tools, and media that continue shaping how I think and build.
        </motion.p>

        <div className={styles.timeline}>
          <div className={styles.centerLine} />
          {interests.map((item, index) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.leftLead : styles.rightLead}`}
            >
              <div className={styles.side}>
                <div className={`${styles.mediaCard} cursor-hover-target`}>
                  <img src={item.image} alt={item.imageAlt} className={styles.mediaImage} />
                </div>
              </div>

              <div className={styles.centerMarker}>
                <span className={styles.dot} />
              </div>

              <div className={styles.side}>
                <div className={styles.content}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <ul className={styles.milestones}>
                    {item.milestones.map((milestone) => (
                      <li key={milestone} className={styles.milestoneItem}>
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
