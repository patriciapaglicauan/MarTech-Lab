'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

interface AnimateSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'p' | 'h2' | 'h3' | 'li'
}

export default function AnimateSection({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: AnimateSectionProps) {
  const Tag = motion[as] as typeof motion.div

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  )
}
