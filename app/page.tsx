import { ContactSection } from '@/components/contact-section'
import { CrtOverlay } from '@/components/hud'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <>
      <CrtOverlay />
      <main className="relative">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span>Andrei · Power Overwhelming</span>
          <span className="ml-auto text-primary">End of line</span>
        </div>
      </footer>
    </>
  )
}
