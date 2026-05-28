'use client'

import { Activity, Briefcase, Lock, Shield } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { SectionHeading } from './section-heading'

const experienceData = [
  {
    id: 1,
    title: 'opg',
    date: 'may 2026 to present',
    content:
      'computer science, cybersecurity & applied math intern. co-op, on-site. cybersecurity and applied-math work across opg infra, building tooling for threat detection and risk modeling.',
    category: 'now',
    icon: Shield,
    relatedIds: [2],
    status: 'in-progress' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'tmav',
    date: 'sep 2023 to present',
    content:
      'software developer. built telemetry systems and real-time data pipelines on node + websockets. shipped to openshift, instrumented with dynatrace.',
    category: 'now',
    icon: Activity,
    relatedIds: [1, 3],
    status: 'in-progress' as const,
    energy: 85,
  },
  {
    id: 3,
    title: 'menkes',
    date: 'may 2024 to may 2026',
    content:
      'it intern. ad provisioning, vulnerability scans, firewall configs. wrote a c# helpdesk automation tool that ate a chunk of the ticket backlog.',
    category: 'past',
    icon: Lock,
    relatedIds: [2, 4],
    status: 'completed' as const,
    energy: 65,
  },
  {
    id: 4,
    title: 'dicaro',
    date: 'jun 2023 to aug 2023',
    content:
      'office assistant. data entry and file management. learned what a slow workflow really costs.',
    category: 'past',
    icon: Briefcase,
    relatedIds: [3],
    status: 'completed' as const,
    energy: 35,
  },
]

export function ExperienceOrbital() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="work"
          index="02"
          title="work"
          subtitle="where i've been writing the code. tap a node."
        />
      </div>

      <div className="relative w-full">
        <RadialOrbitalTimeline
          timelineData={experienceData}
          className="h-[640px] md:h-[720px] rounded-2xl"
        />
      </div>
    </section>
  )
}
