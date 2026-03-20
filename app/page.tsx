import HeroTitle from "@/app/components/sections/HeroTitle";
import ContactSection from "@/app/components/sections/ContactSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ExperienceSection from "@/app/components/sections/experience/ExperienceSection";


export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="flex w-full max-w-5xl flex-col gap-[200px] items-center py-8 px-16 sm:items-start mx-auto">
        <section id="home" className="scroll-mt-30">
          <HeroTitle />
        </section>

        <section id="body" className="w-full min-h-screen scroll-mt-30 bg-green-50">
          <div>
            <span>
              This text goes long
            </span>
          </div>
        </section>

        <section id="experiences" className="scroll-mt-30">
          <ExperienceSection />
        </section>

        <section id="projects" className="scroll-mt-30">
          <ProjectsSection />
        </section>

        <section id="contact" className="scroll-mt-30">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
