'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { Panel, SectionLabel } from '@/components/hud'

const fieldClass =
  'w-full border border-input bg-background/70 px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 transition-shadow duration-200 focus:border-primary focus:shadow-[0_0_0_1px_var(--primary),0_0_22px_-6px_var(--primary)] focus:outline-none'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="transmission"
      className="relative border-t border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel index="04" title="Transmission" status="Channel open" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Panel className="mt-10">
            <form
              className="flex flex-col gap-6 p-6 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="callsign"
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary"
                >
                  &gt; Callsign
                </label>
                <input
                  id="callsign"
                  name="callsign"
                  required
                  autoComplete="name"
                  placeholder="enter name_"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="frequency"
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary"
                >
                  &gt; Frequency
                </label>
                <input
                  id="frequency"
                  name="frequency"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="enter email_"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary"
                >
                  &gt; Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="compose transmission_"
                  className={`${fieldClass} resize-y leading-relaxed`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="group relative inline-flex items-center focus-visible:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className="clip-hud-sm absolute -inset-px bg-primary/60 transition-colors group-hover:bg-primary group-focus-visible:bg-primary"
                  />
                  <span
                    aria-hidden="true"
                    className="clip-hud-sm absolute inset-0 bg-background shadow-[0_0_24px_-6px_var(--primary)]"
                  />
                  <span
                    aria-hidden="true"
                    className="clip-hud-sm absolute inset-0 bg-primary/14 transition-colors group-hover:bg-primary/26"
                  />
                  <span className="relative flex items-center gap-3 px-7 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                    <Send className="size-4" aria-hidden="true" />
                    Send Transmission
                  </span>
                </button>

                <p
                  aria-live="polite"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {sent
                    ? 'Transmission received. Standing by.'
                    : 'Encryption active · latency 12ms'}
                </p>
              </div>
            </form>
          </Panel>
        </motion.div>
      </div>
    </section>
  )
}
