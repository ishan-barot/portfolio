'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'about' },
  { href: '#work', label: 'work' },
  { href: '#projects', label: 'projects' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'backdrop-blur-md bg-background/60 border-b border-border/60' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-foreground/90 hover:text-foreground transition-colors">
          <span className="text-accent">~/</span>ishan
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-0.5 text-accent"
          >
            _
          </motion.span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors font-mono"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:brt.ishan@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-mono text-foreground/90 hover:bg-muted hover:border-accent/40 transition-all"
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          available for co-op &apos;27
        </a>
      </nav>
    </motion.header>
  )
}
