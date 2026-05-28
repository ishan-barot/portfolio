'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { Code2, Cpu, Sparkles } from 'lucide-react'

const facts = [
  {
    icon: Code2,
    label: 'currently',
    value: 'real-time systems + shipping ml that actually works',
  },
  {
    icon: Cpu,
    label: 'studying',
    value: '3rd year computer eng @ tmu, class of \'28',
  },
  {
    icon: Sparkles,
    label: 'into',
    value: 'low-level perf, dev tools, weird side projects',
  },
]

export function About() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="about"
          index="01"
          title="about"
          subtitle="i like building things that don't suck."
        />

        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              hey, i&apos;m ishan. i write a lot of typescript, a bit of c#, and i&apos;m slowly
              getting fluent in rust. most of my time goes into <span className="text-foreground">real-time
              data pipelines</span>, dev tooling, and figuring out how to make ml models behave when
              there&apos;s actual traffic hitting them.
            </p>
            <p>
              outside of class, i&apos;m a co-op student at <span className="text-foreground">ontario power
              generation</span> working on the cybersecurity & applied math side, and i still pick up
              telemetry work for tmav on the side. when i&apos;m not coding i&apos;m probably reading
              papers or losing at chess.
            </p>
            <p className="font-mono text-sm text-muted-foreground/80">
              <span className="text-accent">$</span> whoami → builder, breaker, learner.
            </p>
          </motion.div>

          <div className="md:col-span-2 space-y-3">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-start gap-3 rounded-lg border border-border bg-card/40 px-4 py-3.5 hover:border-accent/40 hover:bg-card/70 transition-all"
              >
                <f.icon className="size-4 mt-0.5 text-accent shrink-0" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </div>
                  <div className="text-sm text-foreground mt-0.5">{f.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
