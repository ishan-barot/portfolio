'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { Briefcase } from 'lucide-react'

type Job = {
  company: string
  role: string
  start: string
  end: string
  current?: boolean
  location: string
  stack: string[]
  bullets: string[]
}

const jobs: Job[] = [
  {
    company: 'ontario power generation',
    role: 'computer science, cybersecurity & applied math intern',
    start: 'may 2026',
    end: 'present',
    current: true,
    location: 'on-site · co-op',
    stack: ['python', 'cybersecurity', 'applied math', 'siem'],
    bullets: [
      'cybersecurity & applied-math work across opg\'s nuclear / power grid infra.',
      'building tooling for threat detection + risk modeling.',
    ],
  },
  {
    company: 'tmav',
    role: 'software developer',
    start: 'sep 2023',
    end: 'present',
    current: true,
    location: 'remote',
    stack: ['node.js', 'websockets', 'openshift', 'dynatrace'],
    bullets: [
      'built telemetry systems and real-time data pipelines on node + websockets.',
      'shipped to openshift, instrumented with dynatrace.',
    ],
  },
  {
    company: 'menkes developments',
    role: 'it intern',
    start: 'may 2024',
    end: 'may 2026',
    location: 'on-site',
    stack: ['c#', '.net', 'powershell', 'active directory'],
    bullets: [
      'ad provisioning, vulnerability scans, firewall configs.',
      'wrote a c# helpdesk automation tool that ate a chunk of the ticket backlog.',
    ],
  },
  {
    company: 'dicaro & associates',
    role: 'office assistant',
    start: 'jun 2023',
    end: 'aug 2023',
    location: 'on-site',
    stack: ['excel', 'filing'],
    bullets: ['data entry and file management. learned what a slow workflow really costs.'],
  },
]

export function Experience() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="work"
          index="02"
          title="work"
          subtitle="where i've been writing the code."
        />

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" />

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-16 group"
              >
                <div
                  className={`absolute left-[7px] md:left-[10px] top-3 size-3 rounded-full ring-4 ring-background transition-all ${
                    job.current
                      ? 'bg-accent shadow-[0_0_18px_3px_hsl(var(--accent)/0.55)]'
                      : 'bg-border group-hover:bg-foreground/40'
                  }`}
                />

                <div className="rounded-xl border border-border bg-card/40 hover:bg-card/70 hover:border-accent/30 transition-all p-5 md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="size-3.5 text-accent" />
                        <span className="text-sm font-mono text-foreground/80">{job.company}</span>
                        {job.current && (
                          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent">
                            <span className="size-1 rounded-full bg-accent animate-pulse" />
                            now
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-xs text-muted-foreground">
                        {job.start} → {job.end}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 mt-0.5">
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-accent/80 mt-2 size-1 rounded-full bg-accent/60 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
