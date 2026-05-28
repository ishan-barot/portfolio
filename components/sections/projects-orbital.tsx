'use client'

import { Bot, Sparkles, Terminal } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { SectionHeading } from './section-heading'

const projectsData = [
  {
    id: 1,
    title: 'apexion',
    date: 'live at apexion.app',
    content:
      'productivity app, task management, pomodoro, llm prioritization. built on next, postgres, prisma. real users, no dummy data.',
    category: 'featured',
    icon: Sparkles,
    relatedIds: [2],
    status: 'in-progress' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'code review bot',
    date: 'active',
    content:
      'connects to a github repo, runs llm analysis on diffs, streams comments back over sse. yells at your prs, politely.',
    category: 'tool',
    icon: Bot,
    relatedIds: [1, 3],
    status: 'in-progress' as const,
    energy: 75,
  },
  {
    id: 3,
    title: 'stratuslite',
    date: 'shipped',
    content:
      'small c# / .net 8 cli wrapping the build commands i was tired of retyping. github actions release pipeline included.',
    category: 'cli',
    icon: Terminal,
    relatedIds: [2],
    status: 'completed' as const,
    energy: 60,
  },
]

export function ProjectsOrbital() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="projects"
          index="03"
          title="projects"
          subtitle="things i actually finished, mostly."
        />
      </div>

      <div className="relative w-full">
        <RadialOrbitalTimeline
          timelineData={projectsData}
          className="h-[640px] md:h-[720px] rounded-2xl"
        />
      </div>
    </section>
  )
}
