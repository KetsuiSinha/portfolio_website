"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Switch from './ui/switch'
import styles from './toggle.module.css'

const TopToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'
  const handleChange = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <div className={styles.toggle} role="presentation">
      <Switch checked={isDark} onCheckedChange={handleChange} aria-label="Toggle theme" />
    </div>
  )
}

export default TopToggle
