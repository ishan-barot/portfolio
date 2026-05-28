'use client'

import { motion } from 'framer-motion'
import { InteractivePortrait } from '@/components/ui/interactive-portrait'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { ArrowDownRight, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <BackgroundPaths />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Card className="relative w-full min-h-[560px] md:min-h-[640px] bg-black/[0.96] border-border/60 overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(224 76% 72%)"
          />

          <div className="flex h-full flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <motion.div
                custom={0}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-5"
              >
                <MapPin className="size-3.5 text-accent" />
                <span>toronto, on</span>
                <span className="text-border">/</span>
                <span>computer engineering @ tmu</span>
              </motion.div>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="text-5xl md:text-7xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-[0.95]"
              >
                ishan barot
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-6 text-base md:text-lg text-neutral-300 max-w-lg leading-relaxed"
              >
                i build software for the web. currently focused on real-time systems
                and making ml actually useful in production.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-all"
                >
                  see projects
                  <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-mono text-foreground hover:bg-muted transition-all"
                >
                  say hi
                </a>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-10 font-mono text-xs text-muted-foreground"
              >
                <span className="text-accent">›</span> building software, breaking code, learning from both.
              </motion.div>
            </div>

            <div className="flex-1 relative min-h-[360px] md:min-h-0 py-8 md:py-0">
              <InteractivePortrait />
              <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/70 tracking-wider">
                drag me, hover me
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
