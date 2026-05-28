'use client'

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { useRef } from 'react'

export function InteractivePortrait() {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const tiltSpring = { damping: 26, stiffness: 380, mass: 0.35 }
  const xSpring = useSpring(mouseX, tiltSpring)
  const ySpring = useSpring(mouseY, tiltSpring)

  const rotateX = useTransform(ySpring, [-200, 200], [16, -16])
  const rotateY = useTransform(xSpring, [-200, 200], [-22, 22])

  const glowX = useTransform(xSpring, [-200, 200], [-40, 40])
  const glowY = useTransform(ySpring, [-200, 200], [-40, 40])

  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  const dragXVel = useVelocity(dragX)
  const dragYVel = useVelocity(dragY)

  const spinFromX = useTransform(dragXVel, [-2000, 2000], [-30, 30])
  const spinFromY = useTransform(dragYVel, [-2000, 2000], [10, -10])

  const rotateZ = useSpring(spinFromX, {
    damping: 22,
    stiffness: 140,
    mass: 0.5,
  })
  const tiltFromThrowX = useSpring(spinFromY, {
    damping: 22,
    stiffness: 140,
    mass: 0.5,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={ref}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: 1400 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          willChange: 'transform',
        }}
        className="absolute size-72 md:size-96 rounded-full bg-[#6488ea]/25 blur-3xl pointer-events-none"
      />

      <motion.div
        drag
        dragElastic={0.22}
        dragMomentum={true}
        dragTransition={{
          bounceStiffness: 220,
          bounceDamping: 18,
          power: 0.35,
          timeConstant: 200,
        }}
        dragConstraints={{ top: -130, bottom: 130, left: -150, right: 150 }}
        whileTap={{ scale: 0.97 }}
        style={{
          x: dragX,
          y: dragY,
          rotateX: useTransform([rotateX, tiltFromThrowX], ([a, b]: number[]) => a + b),
          rotateY,
          rotateZ,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
        className="relative cursor-grab active:cursor-grabbing touch-none select-none"
      >
        <div
          className="relative size-56 md:size-72 rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_60px_-15px_rgba(100,136,234,0.4)] bg-black/40"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ishan-headshot.png"
            alt="ishan barot"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
        </div>

        <div
          className="absolute -bottom-3 -right-3 z-10 flex items-center gap-2 rounded-full bg-black border border-white/30 px-3 py-1.5 font-mono text-[12px] tracking-tight text-white lowercase pointer-events-none shadow-lg shadow-black/50"
          style={{
            transform: 'translateZ(30px)',
            backfaceVisibility: 'visible',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'geometricPrecision',
          }}
        >
          <span className="size-2 rounded-full bg-[#6488ea] shadow-[0_0_8px_rgba(100,136,234,0.7)] animate-pulse" />
          that&apos;s me
        </div>
      </motion.div>
    </div>
  )
}
