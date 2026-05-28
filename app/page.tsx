import { Nav } from '@/components/sections/nav'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { ExperienceOrbital } from '@/components/sections/experience-orbital'
import { ProjectsOrbital } from '@/components/sections/projects-orbital'
import { Stack } from '@/components/sections/stack'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <ExperienceOrbital />
      <ProjectsOrbital />
      <Stack />
      <Contact />
    </main>
  )
}
