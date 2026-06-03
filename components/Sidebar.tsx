'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'HOME', href: '/home' },
    { name: 'WORKS', href: '/works' },
    { name: 'HOBBIES & INTERESTS', href: '/hobbies' },
  ];

  const socialIcons = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/nishchay-sinha', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/KetsuiSinha', icon: 'github' },
    { name: 'Email', href: 'mailto:nishchaykksinha@gmail.com', icon: 'email' },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Navigation Links */}
      <nav className={styles.nav}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <motion.div
              key={link.href}
              className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              whileHover={{ cursor: 'pointer' }}
            >
              <Link href={link.href}>
                <span className={styles.linkText}>{link.name}</span>
              </Link>
              {isActive && <motion.div className={styles.underline} layoutId="underline" />}
            </motion.div>
          );
        })}
      </nav>

      {/* Social Icons */}
      <div className={styles.socials}>
        {socialIcons.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <SocialIconSVG type={social.icon} />
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.copyright}>© Nishchay Sinha</span>
      </div>
    </aside>
  );
};

const SocialIconSVG = ({ type }: { type: string }) => {
  switch (type) {
    case 'linkedin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'github':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case 'email':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    default:
      return null;
  }
};

export default Sidebar;
