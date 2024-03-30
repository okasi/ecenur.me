import HeroSection from "@/components/organisms/HeroSection";
import AboutMeSection from "@/components/organisms/AboutMeSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import RoadmapNavbar from "@/components/atoms/RoadmapNavbar";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <>
      <main className="relative z-10 flex min-h-screen flex-col items-center bg-brand-secondary px-4">
        <HeroSection />

        <hr className="py-8" />

        <AboutMeSection />

        <hr className="py-8" />

        <ExperienceSection />

        <hr className="py-8" />

        <ProjectsSection />

        <hr className="py-8" />

        <SkillsSection />

        <hr className="py-8" />

        <TestimonialsSection />

        <hr className="py-8" />
        <RoadmapNavbar />
      </main>

      <ContactSection />
    </>
  );
}
