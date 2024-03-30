"use client";
import { useState, useEffect } from "react";

export default function RoadmapNavbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "hero-section",
      "about-me-section",
      "experience-section",
      "projects-section",
      "skills-section",
      "testimonials-section",
      // 'contact-section',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 24;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky inset-x-0 bottom-4 z-20 mx-auto hidden max-w-3xl items-center justify-around rounded-full bg-[linear-gradient(#B6CDD6,#FEFBFB)] p-4 shadow-md lg:flex">
      <button
        onClick={() => scrollToSection("hero-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "hero-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Hi!
      </button>
      <button
        onClick={() => scrollToSection("about-me-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "about-me-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        About Me
      </button>
      <button
        onClick={() => scrollToSection("experience-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "experience-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "projects-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("skills-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "skills-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("testimonials-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "testimonials-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Testimonials
      </button>
      <button
        onClick={() => scrollToSection("contact-section")}
        className={`rounded-full px-4 py-2 hover:underline ${
          activeSection === "contact-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Contact
      </button>
    </div>
  );
}
