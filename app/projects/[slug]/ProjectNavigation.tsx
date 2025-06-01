"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tab from "../../components/Tab";
import { Section } from "../../components/projectContent/types";

export default function ProjectNavigation({
  sections,
}: {
  sections: Section[];
}) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10px 0px -90% 0px", // Triggers when section is in middle of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="md:sticky md:top-0 md:h-fit px-0 pt-12 pb-0 md:py-12 min-w-40">
      <Tab href={"/"}>
        <div className="flex items-center gap-2 hover:!opacity-100 group">
          <Image
            src={"/arrow-left.svg"}
            alt="Back"
            width={18}
            height={18}
            className="opacity-50 group-hover:!opacity-100"
          />
          Back
        </div>
      </Tab>

      <nav className="hidden md:block mt-8">
        <div className="flex flex-col items-start gap-2">
          {sections.map((section) => (
            <button key={section.id} className="flex items-start">
              <p
                className={`transition-colors cursor-pointer text-left ${
                  activeSection === section.id
                    ? "!text-foreground"
                    : "hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    const offset = 40; // Adjust this value based on your padding/header height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {section.title}
              </p>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
