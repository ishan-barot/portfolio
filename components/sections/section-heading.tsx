'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  id?: string
  index: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ id, index, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div id={id} className={cn('mb-12 scroll-mt-24', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-accent mb-3 tracking-widest uppercase"
      >
        <span className="text-muted-foreground">{index}.</span> {title}
      </motion.div>
      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl"
        >
          {subtitle}
        </motion.h2>
      )}
    </div>
  )
}
