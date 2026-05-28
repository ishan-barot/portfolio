import { Nav } from '@/components/sections/nav'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Stack } from '@/components/sections/stack'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </main>
  )
}
