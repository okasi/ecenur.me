import HeroSection from "@/components/molecules/HeroSection";
import AboutMeSection from "@/components/molecules/AboutMeSection";
import ExperienceSection from "@/components/molecules/ExperienceSection";
import ProjectsSection from "@/components/molecules/ProjectsSection";
import SkillsSection from "@/components/molecules/SkillsSection";
import TestimonialsSection from "@/components/molecules/TestimonialsSection";

export default function Home() {
  return (
    <>
      <main className="bg-brand-secondary relative z-10 flex min-h-screen flex-col items-center px-4">
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
      </main>

      <svg
        className="relative z-10 w-full h-12 text-brand-secondary"
        viewBox="0 0 1024 64"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_807_1925)">
          <path
            d="M0 56C66.6278 56 157.989 33.3333 257.463 33.3333C356.937 33.3333 403.749 49.3333 512 49.3333C620.251 49.3333 642.194 33.3333 768 33.3333C893.806 33.3333 949.394 64 1024 64V0H0V56Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_807_1925">
            <rect width="1024" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <footer className="bg-white w-full sticky bottom-0 z-0 flex flex-col items-center">


<h2 className="mt-12">Don't follow your dreams, follow my LinkedIn instead 😎</h2>

        <a
          href="https://www.linkedin.com/in/ecenursi/"
          target="#blank"
          className="mt-6 mb-6 flex mx-auto font-sans items-center space-x-2 font-medium justify-center w-fit hover:underline text-sm md:text-lg"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4H6C4.895 4 4 4.895 4 6V24C4 25.105 4.895 26 6 26H24C25.105 26 26 25.105 26 24V6C26 4.895 25.105 4 24 4ZM10.954 22H8.004V12.508H10.954V22ZM9.449 11.151C8.498 11.151 7.729 10.38 7.729 9.431C7.729 8.482 8.499 7.712 9.449 7.712C10.397 7.712 11.168 8.483 11.168 9.431C11.168 10.38 10.397 11.151 9.449 11.151ZM22.004 22H19.056V17.384C19.056 16.283 19.036 14.867 17.523 14.867C15.988 14.867 15.752 16.066 15.752 17.304V22H12.804V12.508H15.634V13.805H15.674C16.068 13.059 17.03 12.272 18.465 12.272C21.452 12.272 22.004 14.238 22.004 16.794V22Z"
              fill="black"
            />
          </svg>
          <span>https://www.linkedin.com/in/ecenursi/</span>
        </a>

        <p className="text-sm text-neutral-black py-12 opacity-50">
          © {new Date().getFullYear()} Made with 💞 in Stockholm
        </p>
      </footer>
    </>
  );
}
