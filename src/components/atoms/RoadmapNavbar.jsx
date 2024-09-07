"use client";
import { useEffect, useState } from "react";

export default function RoadmapNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const [pastTestimonials, setPastTestimonials] = useState(false);

  useEffect(() => {
    const sections = [
      "hi!-section",
      "about-me-section",
      "experience-section",
      "projects-section",
      "skills-section",
      "testimonials-section",
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

    const handleScroll = () => {
      const testimonials = document.getElementById("testimonials-section");
      if (testimonials) {
        const rect = testimonials.getBoundingClientRect();
        if (window.innerHeight - rect.bottom > 0) {
          setPastTestimonials(true);
        } else {
          setPastTestimonials(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Removed activeSection from dependency array

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      let y = section.getBoundingClientRect().top + window.pageYOffset - 24;

      // Special handling for 'testimonials-section' to align it to the bottom of the viewport
      if (id === "testimonials-section") {
        y += section.offsetHeight - window.innerHeight;
      }

      // Special handling for 'contact-section' to scroll to the bottom of the page
      if (id === "contact-section") {
        y = document.body.scrollHeight - window.innerHeight;
      }

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const sectionNames = [
    "hi!",
    "about-me",
    "experience",
    "projects",
    "skills",
    "testimonials",
    "contact",
  ];

  // Function to find the index of the active section
  const activeSectionIndex = sectionNames.indexOf(
    activeSection.replace("-section", ""),
  );

  return (
    <div className="sticky inset-x-0 bottom-4 z-20 mx-auto hidden max-w-3xl justify-around rounded-2xl border border-brand-secondary-dark bg-neutral-grey-light px-4 py-2 shadow lg:flex">
      {sectionNames.map((section, index) => (
        <div
          className="group relative flex cursor-pointer flex-col items-center space-y-1"
          key={section}
          onClick={() => scrollToSection(`${section}-section`)}
        >
          <div className="relative w-full">
            {index !== sectionNames.length - 1 && (
              <div
                className={`absolute right-0 top-1/2 z-10 h-0.5 w-1/2 -translate-y-1/2 ${
                  index <= activeSectionIndex - 1 ||
                  (pastTestimonials && sectionNames[index + 1] == "contact")
                    ? "bg-brand-secondary-light"
                    : index <= activeSectionIndex
                      ? "bg-gradient-to-r from-brand-secondary-light to-neutral-grey"
                      : "bg-neutral-grey"
                } `}
              />
            )}

            {index !== 0 && (
              <div
                className={`absolute left-0 top-1/2 z-10 h-0.5 w-1/2 -translate-y-1/2 ${
                  index <= activeSectionIndex ||
                  (pastTestimonials && section === "contact")
                    ? "bg-brand-secondary-light"
                    : "bg-neutral-grey"
                } `}
              />
            )}

            {/* Dot */}
            <span
              className={`relative z-10 mx-auto block size-3 rounded-full ${
                (!pastTestimonials && activeSection === `${section}-section`) ||
                (pastTestimonials && section === "contact") ||
                index <= activeSectionIndex
                  ? "bg-brand-secondary-light" // Active and previous dots color
                  : "bg-neutral-grey" // Inactive dots color
              }`}
            />
          </div>
          <span
            className={`mx-4 select-none text-sm font-semibold capitalize group-hover:underline lg:text-base ${
              (!pastTestimonials && activeSection === `${section}-section`) ||
              (pastTestimonials && section === "contact") ||
              index <= activeSectionIndex
                ? "text-brand-secondary-light"
                : "text-neutral-grey"
            }`}
          >
            {section.charAt(0).toUpperCase() +
              section.slice(1).replace(/-/g, " ")}
          </span>
        </div>
      ))}
    </div>
  );
}
