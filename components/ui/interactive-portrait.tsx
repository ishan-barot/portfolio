'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export function InteractivePortrait() {
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 18, stiffness: 180, mass: 0.6 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  const rotateX = useTransform(ySpring, [-160, 160], [14, -14])
  const rotateY = useTransform(xSpring, [-160, 160], [-18, 18])

  const glowX = useTransform(xSpring, [-160, 160], [-30, 30])
  const glowY = useTransform(ySpring, [-160, 160], [-30, 30])

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
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute size-72 md:size-96 rounded-full bg-[#6488ea]/25 blur-3xl pointer-events-none"
      />

      <motion.div
        drag
        dragElastic={0.18}
        dragTransition={{ bounceStiffness: 160, bounceDamping: 16 }}
        dragConstraints={{ top: -70, bottom: 70, left: -90, right: 90 }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative cursor-grab active:cursor-grabbing touch-none"
      >
        <div
          className="relative size-56 md:size-72 rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_60px_-15px_rgba(100,136,234,0.35)] bg-black/40"
          style={{ transform: 'translateZ(40px)' }}
        >
          <Image
            src="/ishan-headshot.png"
            alt="ishan barot"
            fill
            sizes="(max-width: 768px) 224px, 288px"
            className="object-cover select-none"
            priority
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
        </div>

        <div
          className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full bg-black/80 border border-white/20 px-2.5 py-1 backdrop-blur-md font-mono text-[10px] text-white/80 lowercase"
          style={{ transform: 'translateZ(80px)' }}
        >
          <span className="size-1.5 rounded-full bg-[#6488ea] animate-pulse" />
          that&apos;s me
        </div>
      </motion.div>
    </div>
  )
}
