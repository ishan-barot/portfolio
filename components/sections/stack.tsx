'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'

const groups = [
  {
    level: 'daily',
    note: 'this is what shows up in my recent commits',
    items: ['typescript', 'react', 'next.js', 'node.js', 'postgres', 'git'],
  },
  {
    level: 'comfortable',
    note: 'will pick up without complaining',
    items: ['c#', '.net', 'python', 'docker', 'websockets', 'prisma'],
  },
  {
    level: 'intermediate',
    note: 'i can ship things but i\'ll google more',
    items: ['go', 'redis', 'openshift', 'mongodb', 'tensorflow.js'],
  },
  {
    level: 'currently learning',
    note: 'this quarter\'s rabbit hole',
    items: ['rust', 'graphql', 'aws'],
  },
]

export function Stack() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="stack"
          index="04"
          title="stack"
          subtitle="tools, sorted by how comfortable i am with them."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.level}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card/40 hover:bg-card/60 hover:border-accent/30 transition-all p-5 md:p-6"
            >
              <div className="flex items-baseline justify-between gap-3 mb-4">
                <h3 className="font-mono text-sm tracking-tight text-foreground">
                  <span className="text-accent">›</span> {g.level}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {g.items.length}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{g.note}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 + idx * 0.03 }}
                    className="rounded-md border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-foreground/90 hover:border-accent/40 hover:text-foreground transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
