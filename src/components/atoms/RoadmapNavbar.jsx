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
          console.log("entry.target.id", entry.target.id);
          if (entry.target.id === "testimonials-section") {
            // Handle visibility for testimonials-section specifically
            if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
              setActiveSection("contact-section");
            } else if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.5 &&
              entry.intersectionRatio < 0.95
            ) {
              setActiveSection("testimonials-section");
            }
          } else if (entry.isIntersecting) {
            // For all other sections, set them as active when they intersect
            setActiveSection(entry.target.id);
          }
        });
      },
      // Adjust threshold to accommodate the lowest threshold requirement
      { threshold: [0.5, 0.99] }
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
    <div className="hidden lg:flex sticky max-w-3xl mx-auto rounded-full shadow-md bottom-4 left-0 right-0 bg-[linear-gradient(#B6CDD6,#FEFBFB)] p-4 justify-around items-center z-20">
      <button
        onClick={() => scrollToSection("hero-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
          activeSection === "hero-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Hi!
      </button>
      <button
        onClick={() => scrollToSection("about-me-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
          activeSection === "about-me-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        About Me
      </button>
      <button
        onClick={() => scrollToSection("experience-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
          activeSection === "experience-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
          activeSection === "projects-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("skills-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
          activeSection === "skills-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("testimonials-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
          activeSection === "testimonials-section"
            ? "bg-accent-green text-white"
            : "bg-transparent"
        }`}
      >
        Testimonials
      </button>
      <button
        onClick={() => scrollToSection("contact-section")}
        className={`px-4 py-2 hover:underline rounded-full ${
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
