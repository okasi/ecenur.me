"use client";
import { useEffect, useState } from "react";

export default function RoadmapNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const [pastTestimonials, setPastTestimonials] = useState(false);

  useEffect(() => {
    const sections = [
      "hero-section",
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
      { threshold: 0.5 }
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
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
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
  


const sectionNames= ["hero", "about-me", "experience", "projects", "skills", "testimonials", "contact"]

 // Function to find the index of the active section
 const activeSectionIndex = sectionNames.indexOf(activeSection.replace("-section", ""));

 return (
   <div className="sticky inset-x-0 bottom-4 z-20 mx-auto hidden max-w-3xl justify-around rounded-2xl bg-neutral-grey-light border border-brand-secondary-dark px-4 py-2 shadow lg:flex">
     {sectionNames.map((section, index) => (
       <div className="flex flex-col space-y-1 items-center group relative" key={section}>
         <div className="relative w-full">
          {index !== sectionNames.length - 1 && (
            <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 w-1/2 right-0 ${
              (index  <= activeSectionIndex - 1 || pastTestimonials && sectionNames[index + 1] == "contact") ? "bg-brand-secondary-light" : index <= activeSectionIndex ? "bg-gradient-to-r from-brand-secondary-light to-neutral-grey" : "bg-neutral-grey"
            } `}></div>
          )}

          {index !== 0 && (
            <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 w-1/2 left-0 ${
              (index <= activeSectionIndex || pastTestimonials && section === "contact") ? "bg-brand-secondary-light" : "bg-neutral-grey"
            } `}></div>
          )}
         
          {/* Dot */}
          <span
            className={`block relative mx-auto z-10 w-3 h-3 rounded-full ${
              !pastTestimonials && activeSection === `${section}-section` || (pastTestimonials && section === "contact") || index <= activeSectionIndex
                ? "bg-brand-secondary-light" // Active and previous dots color
                : "bg-neutral-grey" // Inactive dots color
            }`}
          />
       
         </div>
         <button
           onClick={() => scrollToSection(`${section}-section`)}
           className={`text-sm lg:text-base font-semibold group-hover:underline mx-4 ${
             !pastTestimonials && activeSection === `${section}-section` || (pastTestimonials && section === "contact") || index <= activeSectionIndex
               ? "text-brand-secondary-light"
               : "text-neutral-grey"
           }`}
         >
           {section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}
         </button>
       </div>
     ))}
   </div>
 );
  
  
  
}
