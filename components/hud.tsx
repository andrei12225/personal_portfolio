import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function CrtOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, oklch(0 0 0 / 0.34) 0px, oklch(0 0 0 / 0.34) 1px, transparent 1px, transparent 3px)',
        }}
      />
      <div className="sweep absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/6 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 45%, oklch(0 0 0 / 0.55) 100%)',
        }}
      />
    </div>
  )
}

export function Panel({
  children,
  className,
  ticks = true,
}: {
  children: ReactNode
  className?: string
  ticks?: boolean
}) {
  return (
    <div className={cn('relative', className)}>
      <div className="clip-hud absolute inset-0 bg-border" />
      <div className="clip-hud brushed absolute inset-px" />
      {ticks && (
        <>
          <span
            aria-hidden="true"
            className="absolute left-0 top-3.5 h-4 w-px bg-primary/70"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-3.5 right-0 h-4 w-px bg-primary/70"
          />
        </>
      )}
      <div className="relative">{children}</div>
    </div>
  )
}

export function SectionLabel({
  index,
  title,
  status,
}: {
  index: string
  title: string
  status?: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="font-mono text-xs tracking-[0.28em] text-primary">
        {index}
      </span>
      <h2 className="text-2xl font-semibold uppercase tracking-[0.16em] text-foreground sm:text-3xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block"
      />
      {status && (
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {status}
        </span>
      )}
    </div>
  )
}
