'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { ArrowUpRight, Globe } from 'lucide-react'
import { GithubIcon } from '@/components/ui/brand-icons'
import { cn } from '@/lib/utils'

type Project = {
  name: string
  blurb: string
  description: string
  stack: string[]
  links: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[]
  className: string
  highlight?: boolean
  visual: 'apex' | 'bot' | 'cli'
}

const projects: Project[] = [
  {
    name: 'apexion',
    blurb: 'productivity app that actually keeps up.',
    description:
      'task management, pomodoro, and an llm that prioritizes your day. shipped with next, postgres, prisma. real users, no dummy data.',
    stack: ['next.js', 'typescript', 'postgres', 'prisma'],
    links: [
      { label: 'live', href: 'https://apexion.app', icon: Globe },
      { label: 'code', href: 'https://github.com/ishan-barot', icon: GithubIcon },
    ],
    className: 'md:col-span-2 md:row-span-2',
    highlight: true,
    visual: 'apex',
  },
  {
    name: 'code review bot',
    blurb: 'an llm that yells at your prs (politely).',
    description:
      'connects to a github repo, runs llm analysis on diffs, streams comments over sse.',
    stack: ['next.js', 'postgres', 'github api', 'sse'],
    links: [{ label: 'code', href: 'https://github.com/ishan-barot/Code-Review-Bot', icon: GithubIcon }],
    className: 'md:col-span-2',
    visual: 'bot',
  },
  {
    name: 'stratuslite',
    blurb: 'cli that wraps .net build commands.',
    description:
      'a small c# / .net 8 cli with github actions release pipeline. built because i kept retyping the same dotnet invocations.',
    stack: ['c#', '.net 8', 'github actions'],
    links: [{ label: 'code', href: 'https://github.com/ishan-barot/StratusLite', icon: GithubIcon }],
    className: 'md:col-span-2',
    visual: 'cli',
  },
]

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  if (kind === 'apex') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-x-6 top-6 space-y-2">
          {['design landing page', 'ship llm prioritizer', 'review weekly review'].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="flex items-center gap-2 rounded-md border border-border bg-card/80 backdrop-blur px-3 py-2 text-xs"
            >
              <span className={`size-3 rounded-sm border ${i === 0 ? 'bg-accent border-accent' : 'border-border'}`} />
              <span className={`font-mono ${i === 0 ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                {t}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-md bg-card/80 backdrop-blur border border-border px-3 py-2 font-mono text-xs">
          <span className="text-muted-foreground">pomodoro</span>
          <span className="text-accent">24:51</span>
        </div>
      </div>
    )
  }
  if (kind === 'bot') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-card/40 p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-muted-foreground">$ review pr #482</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground mt-1"
        >
          analyzing 14 files...
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-accent mt-1"
        >
          → nit: useState lives in a server component
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-yellow-400/90 mt-1"
        >
          ! n+1 query in src/api/list.ts:42
        </motion.div>
      </div>
    )
  }
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-card/40 p-4 font-mono text-[11px] leading-relaxed">
      <div className="text-muted-foreground">$ stratus build --release</div>
      <div className="text-foreground mt-1">▸ restoring nuget packages</div>
      <div className="text-foreground">▸ msbuild → bin/Release/net8.0</div>
      <div className="text-accent mt-1">✓ done in 4.21s</div>
    </div>
  )
}

export function Projects() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="projects"
          index="03"
          title="projects"
          subtitle="things i actually finished (mostly)."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[260px] gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className={cn(
                'group relative overflow-hidden rounded-xl border border-border bg-card/40 p-5 md:p-6 transition-colors hover:border-accent/40',
                p.className
              )}
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),hsl(var(--accent)/0.12),transparent_60%)]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                        {p.name}
                      </h3>
                      {p.highlight && (
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent">
                          featured
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-foreground/80">{p.blurb}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                  {p.description}
                </p>

                {p.highlight && (
                  <div className="mt-5 flex-1 min-h-[160px]">
                    <ProjectVisual kind={p.visual} />
                  </div>
                )}
                {!p.highlight && (
                  <div className="mt-4 flex-1">
                    <ProjectVisual kind={p.visual} />
                  </div>
                )}

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.links.map((l) => (
                      <span
                        key={l.label}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <l.icon className="size-3.5" />
                        {l.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
