'use client'

import { motion } from 'motion/react'
import { Panel, SectionLabel } from '@/components/hud'

const SEGMENTS = 14

const stack = [
  { name: 'React', level: 12, note: 'Next.js · TypeScript' },
  { name: 'Python', level: 11, note: 'Django · Numpy' },
  { name: 'C++', level: 10, note: 'Algorithms · OOP' },
  { name: 'SQL', level: 11, note: 'PostgreSQL · Oracle' },
  { name: 'Docker', level: 9, note: 'Compose' },
  { name: 'Java', level: 10, note: 'OOP' },
]

function SegmentBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: SEGMENTS }).map((_, i) => {
        const filled = i < level
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.035 }}
            className={
              filled
                ? 'h-6 flex-1 bg-gradient-to-t from-primary/55 to-primary/90 shadow-[inset_0_0_0_1px_var(--primary),0_0_10px_-3px_var(--primary)]'
                : 'h-6 flex-1 bg-steel/40 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.05)]'
            }
          />
        )
      })}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section
      id="tech-specs"
      className="relative border-t border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="02" title="Tech Specs" status="" />

        <Panel className="mt-10">
          <div className="flex items-center justify-between border-b border-border/70 px-5 py-3 sm:px-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              System module readout
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              5 units
            </span>
          </div>

          <ul className="divide-y divide-border/60">
            {stack.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="grid gap-3 px-5 py-5 sm:grid-cols-[13rem_1fr_3.5rem] sm:items-center sm:gap-6 sm:px-7"
              >
                <div>
                  <p className="text-lg font-semibold uppercase tracking-[0.14em] text-foreground">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.note}
                  </p>
                </div>

                <SegmentBar level={item.level} />

                <p className="text-right font-mono text-xs tracking-[0.16em] text-primary">
                  {Math.round((item.level / SEGMENTS) * 100)}%
                  <span className="sr-only"> proficiency in {item.name}</span>
                </p>
              </motion.li>
            ))}
          </ul>
        </Panel>
      </div>
    </section>
  )
}
