'use client';

import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import styles from './home.module.css';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />

      {/* Hero Section */}
      <motion.section id="home" className={styles.hero} variants={containerVariants} initial="hidden" animate="visible">
        <div className={styles.leftColumn}>
          <motion.div variants={itemVariants} className={styles.heroName}>
            <div className="display-font" style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}>
              NISHCHAY
            </div>
            <div className="display-font" style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}>
              SINHA
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            Full-Stack Developer / System Designer
          </motion.p>

          <motion.div variants={itemVariants} className={styles.contactInfo}>
            <p>For business inquiries, reach out at</p>
            <p style={{ color: 'var(--text-secondary)' }}>nishchaykksinha@gmail.com</p>
          </motion.div>
        </div>

        <div className={styles.rightColumn}>
          <motion.div variants={itemVariants}>
            <h2 className="uppercase-label">About Me</h2>
            <hr style={{ marginBottom: '32px' }} />
          </motion.div>

          <motion.div variants={itemVariants} className={styles.bioText}>
            <p>
              I am a business-focused Full-Stack Developer with experience translating user requirements into scalable
              technical solutions. Skilled in requirement gathering, stakeholder communication, system design, and product
              feature planning. I enjoy turning ambiguous problems into clear technical plans and shipping reliable
              solutions that move the product forward.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.bioText}>
            <p>
              My main focus is full-stack development, and I have worked on several projects including AI-powered
              applications, ERP systems, and real-time community platforms. I enjoy exploring new technologies and
              experimenting with creative ideas.
              I also mentor others and document learnings to help build more predictable delivery processes.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.bioText}>
            <p>
              Outside of programming, I engage in technical coordination, analytics, and continuous learning through
              competitive problem-solving and data science initiatives.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Motivation Section */}
      <motion.section className={styles.section} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className={styles.leftColumn}>
          <motion.div variants={itemVariants}>
            <h2 className="uppercase-label">Motivation</h2>
            <hr style={{ marginBottom: '32px' }} />
          </motion.div>

          <motion.div variants={itemVariants} className={styles.bioText}>
            <p>
              I'm a full-stack developer with a growing focus on building scalable systems and solving complex technical
              challenges.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.bioText}>
            <p>
              While exploring where my career will evolve, I've discovered that designing robust backend systems and
              optimizing performance excites me the most.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.bioText}>
            <p>
              That's why I'm currently dedicating my energy to improving both my technical execution and analytical
              thinking on complex system design problems.
            </p>
          </motion.div>
        </div>

        <div className={`${styles.rightColumn} ${styles.motivationVisualColumn}`}>
          <motion.div variants={itemVariants} className={styles.motivationImage}>
            <img src="/motivation_alongside.png" alt="Motivation visual" className={styles.profileImage} />
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className={styles.skillsSection} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={itemVariants}>
          <h2 className="uppercase-label">Skills</h2>
          <hr style={{ marginBottom: '32px' }} />
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillsData.map((category, idx) => (
            <motion.div key={category.name} variants={itemVariants} className={styles.skillColumn}>
              <h3 className="uppercase-label" style={{ marginBottom: '16px', fontSize: '12px' }}>
                {category.name}
              </h3>
              <div className={styles.skillPills}>
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
