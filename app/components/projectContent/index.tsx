"use client";
import Image from "next/image";
import type { Section, ContentElement } from "./types";
import { projectContent } from "./content";

export type { Section, ContentElement };
export { projectContent };

export default function ProjectContent({ project }: { project: string }) {
  const sections = projectContent[project] || [];

  return (
    <div className="flex flex-col gap-12">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex flex-col gap-4"
        >
          <h4>{section.title}</h4>

          {section.content.map((element, index) => {
            switch (element.type) {
              case "h2":
                return <h2 key={index}>{element.content}</h2>;
              case "p":
                return <p key={index}>{element.content}</p>;
              case "image":
                return (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={element.content}
                      alt={element.caption || ""}
                      fill
                      className="object-cover"
                    />
                    {element.caption && (
                      <p className="mt-2 text-sm">{element.caption}</p>
                    )}
                  </div>
                );
            }
          })}
        </section>
      ))}
    </div>
  );
}
