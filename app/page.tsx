import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WaveDivider } from "@/components/wave-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <HeroSection />
      <WaveDivider type="wave-1" className="text-background fill-muted/30" inverted={false} />
      <AboutSection />
      <WaveDivider type="wave-2" className="text-muted/30 fill-background" inverted={true} />
      <SkillsSection />
      <WaveDivider type="wave-3" className="text-background fill-muted/30" inverted={false} />
      <ProjectsSection />
      <WaveDivider type="wave-1" className="text-muted/30 fill-background" inverted={true} />
      <TimelineSection />
      <WaveDivider type="wave-2" className="text-background fill-muted/30" inverted={false} />
      <ContactSection />
      <Footer />
    </main>
  )
}
