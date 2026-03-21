import HeroTitle from "@/app/components/sections/HeroTitle";
import ProjectsSection from "@/app/components/sections/projects/ProjectsSection";
import ExperienceSection from "@/app/components/sections/experience/ExperienceSection";
import AboutMeSection from "@/app/components/sections/about-me/AboutMeSection";

export default function Home() {
  return (
    <div className="font-sans flex-1">
      <main className="flex w-full max-w-5xl flex-col gap-[200px] items-center py-8 px-16 sm:items-start mx-auto">
        <section id="home" className="scroll-mt-30">
          <HeroTitle />
        </section>

        <section id="experiences" className="w-full scroll-mt-30">
          <ExperienceSection />
        </section>

        <section id="projects" className="w-full scroll-mt-30">
          <ProjectsSection />
        </section>

        <section id="about-me" className="w-full scroll-mt-30">
          <AboutMeSection />
        </section>
      </main>
    </div>
  );
}
