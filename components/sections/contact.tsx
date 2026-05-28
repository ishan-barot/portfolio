'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'

const links = [
  {
    label: 'email',
    value: 'brt.ishan@gmail.com',
    href: 'mailto:brt.ishan@gmail.com',
    icon: Mail,
  },
  {
    label: 'github',
    value: 'github.com/ishan-barot',
    href: 'https://github.com/ishan-barot',
    icon: GithubIcon,
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/ishan-b-6a7418284',
    href: 'https://www.linkedin.com/in/ishan-b-6a7418284/',
    icon: LinkedinIcon,
  },
]

export function Contact() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="contact"
          index="05"
          title="contact"
          subtitle="if it's interesting, send it."
        />

        <Card className="relative overflow-hidden bg-black/[0.96] border-border/60 p-8 md:p-12">
          <Spotlight
            className="-top-32 right-0 md:right-20 md:-top-12"
            fill="hsl(224 76% 72%)"
          />
          <div className="relative z-10 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                want to build something?
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                co-op offers, side projects, weird ideas at 2am, i&apos;m down to talk. fastest
                way is email but linkedin works too.
              </p>
              <div className="mt-6 font-mono text-xs text-muted-foreground">
                <span className="text-accent">›</span> response time: usually within a day.
              </div>
            </div>

            <ul className="space-y-3">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-lg border border-border/80 bg-card/60 px-4 py-3.5 hover:border-accent/40 hover:bg-card transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <l.icon className="size-4 text-accent shrink-0" />
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {l.label}
                        </div>
                        <div className="text-sm text-foreground truncate">{l.value}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </Card>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 font-mono text-[11px] text-muted-foreground">
          <div>
            <span className="text-accent">›</span> ishan barot · toronto · {new Date().getFullYear()}
          </div>
          <div>built with next, tailwind, motion, spline.</div>
        </footer>
      </div>
    </section>
  )
}
