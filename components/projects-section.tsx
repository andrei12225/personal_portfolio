'use client'

import { motion } from 'motion/react'
import { ExternalLink, GitBranch } from 'lucide-react'
import { Panel, SectionLabel } from '@/components/hud'

const projects = [
  {
    code: 'LOG-001',
    title: 'Discord TUI',
    description:
      "A Discord terminal client implemented as a Terminal User Interface (TUI). Its purpose is to allow users to browse servers, channels, members, and messages directly from the command line, without requiring the graphical Discord application.",
    stack: ['Ink', 'Discord.JS'],
    deploy: '#',
    source: 'https://github.com/andrei12225/discord-tui',
  },
  {
    code: 'LOG-002',
    title: 'StudyStash',
    description:
      'A website that allows users to store notes (for example, for university) and files of various types. It can also be used to convert images into PDF documents',
    stack: ['Next.JS', 'Supabase'],
    deploy: '#',
    source: 'https://github.com/andrei12225/study_stash',
  },
  {
    code: 'LOG-003',
    title: 'MelodyShare',
    description:
      'A desktop application that allows users to authenticate with Spotify and view statistics and insights about their listening habits. It also includes a real-time chat feature powered by WebSockets.',
    stack: ['Tauri', 'Supabase', 'Next.JS'],
    deploy: '#',
    source: 'https://github.com/andrei12225/melodyshare-desktop',
  },
  {
    code: 'LOG-004',
    title: 'Logical Expressions Calculator',
    description:
      'A website that calculates the truth table for any correctly written logical expression using Polish notation.',
    stack: ['Next.JS'],
    deploy: '#',
    source: 'https://github.com/andrei12225/logicalexpressions',
  },
]

export function ProjectsSection() {
  return (
    <section
      id="mission-logs"
      className="relative border-t border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel
          index="03"
          title="Mission Logs"
          status="3 files declassified"
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.li
              key={project.code}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group"
            >
              <Panel className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between border-b border-border/70 pb-3">
                    <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-primary">
                      {project.code}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="size-1.5 bg-primary shadow-[0_0_8px_var(--primary)]"
                      />
                      Complete
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold uppercase tracking-[0.1em] text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-pretty text-md leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="clip-hud-sm border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-2">
                    {/* <a
                      href={project.deploy}
                      className="clip-hud-sm flex flex-1 items-center justify-center gap-2 border border-primary/50 bg-primary/12 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/25 focus-visible:bg-primary/25 focus-visible:outline-none"
                    >
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                      Deploy
                      <span className="sr-only">{project.title} live site</span>
                    </a> */}
                    <a
                      href={project.source}
                      className="clip-hud-sm flex flex-1 items-center justify-center gap-2 border border-border bg-secondary/50 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                    >
                      <GitBranch className="size-3.5" aria-hidden="true" />
                      Source
                      <span className="sr-only">
                        {project.title} source code on GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </Panel>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
