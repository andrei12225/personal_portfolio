'use client'

import { motion } from 'motion/react'
import { ChevronsRight, Cpu, Download, Radio, Terminal } from 'lucide-react'

const readouts = [
  { label: 'Location', value: 'Bucharest, RO' },
  { label: 'Status', value: 'Operational' },
  { label: 'Focus', value: 'Full-Stack' },
]

export function HeroSection() {
  return (
    <section
      id="command-center"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-24 sm:px-8"
    >
      {/* Backdrop plate */}
      <div aria-hidden="true" className="grid-plate absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* Top status strip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="flex items-center gap-2 text-primary">
            <Radio className="size-3" aria-hidden="true" />
            Link established
          </span>
          <span>User · Badoi Andrei-Claudiu</span>
          <span className="ml-auto hidden sm:inline">Uplink 100%</span>
        </motion.div>

        {/* Callsign line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex items-center gap-3 font-mono text-xs tracking-[0.28em] text-primary"
        >
          <Terminal className="size-4" aria-hidden="true" />
          <span className="flicker">COMMAND CENTER ONLINE</span>
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{' '}
          <span className="text-primary text-glow">Andrei.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Computer Science student at the University of Bucharest
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="/andrei-resume.pdf"
            download
            className="group relative inline-flex items-center gap-3 focus-visible:outline-none"
          >
            <span
              aria-hidden="true"
              className="clip-hud-sm absolute -inset-px bg-primary/60 transition-all duration-200 group-hover:bg-primary group-focus-visible:bg-primary"
            />
            <span
              aria-hidden="true"
              className="clip-hud-sm absolute inset-0 bg-background shadow-[0_0_28px_-4px_var(--primary)] transition-all duration-200 group-hover:shadow-[0_0_44px_-2px_var(--primary)]"
            />
            <span
              aria-hidden="true"
              className="clip-hud-sm absolute inset-0 bg-primary/14 transition-all duration-200 group-hover:bg-primary/26"
            />
            <span className="relative flex items-center gap-3 px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.24em] text-primary transition-transform duration-200 group-active:translate-y-px">
              <Download className="size-4" aria-hidden="true" />
              Download Resume
              <ChevronsRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </a>
        </motion.div>

        {/* Readout row */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-6"
        >
          {readouts.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <Cpu className="size-3.5 text-primary/70" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-0.5 text-sm uppercase tracking-[0.12em] text-foreground">
                  {item.value}
                </dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
