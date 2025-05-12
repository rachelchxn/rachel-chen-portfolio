"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tab from "../../components/Tab";
import { Section } from "../../components/projectContent/types";
import { useRouter } from "next/navigation";

export default function ProjectNavigation({
  sections,
}: {
  sections: Section[];
}) {
  const router = useRouter();
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
    <aside className="md:sticky md:top-0 md:h-fit px-6 py-12">
      <Tab href={"/"}>
        <div className="flex items-center gap-2">
          <Image src={"/arrow-left.svg"} alt="Back" width={18} height={18} />
          Back
        </div>
      </Tab>

      <nav className="mt-8">
        <ul className="flex flex-col gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <p
                className={`transition-colors cursor-pointer ${
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
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
