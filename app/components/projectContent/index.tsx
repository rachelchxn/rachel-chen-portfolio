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
          <h4 className="!opacity-100 mb-1">{section.title}</h4>

          {section.content.map((element, index) => {
            switch (element.type) {
              case "h2":
                return (
                  <h2 key={index} className="pb-1">
                    {element.content}
                  </h2>
                );
              case "h4":
                return (
                  <h4 key={index} className="!opacity-100 mt-8">
                    {element.content}
                  </h4>
                );
              case "p":
                return <p key={index}>{element.content}</p>;
              case "bullet-list":
                return (
                  <div
                    key={index}
                    className="flex w-full flex-col md:flex-row gap-6 mt-4"
                  >
                    {(element.content as string[]).map((item, index) => {
                      if (index % 2 === 0) {
                        return (
                          <div
                            key={index}
                            className="flex flex-col gap-1 w-full"
                          >
                            <h3>{item}</h3>
                            <p>{(element.content as string[])[index + 1]}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                );
              case "image":
                return (
                  <div key={index} className="w-full">
                    <div className="relative w-full bg-foreground-light/10 animate-pulse">
                      <Image
                        src={element.content as string}
                        alt={element.caption || ""}
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-contain my-4 opacity-0 transition-opacity duration-300"
                        onLoadingComplete={(img) => {
                          img.classList.remove("opacity-0");
                          img.parentElement?.classList.remove(
                            "animate-pulse",
                            "bg-foreground-light/10"
                          );
                        }}
                      />
                    </div>
                    {element.caption && (
                      <p className="mt-2 text-sm">{element.caption}</p>
                    )}
                  </div>
                );
              case "divider":
                return (
                  <div
                    key={index}
                    className="h-[1px] w-full bg-foreground/10 mt-16 mb-8"
                  />
                );
              case "video":
                return (
                  <div key={index} className="w-full relative">
                    <video
                      src={element.content as string}
                      autoPlay
                      muted
                      loop
                      className="w-full h-auto object-contain border-[1px] border-foreground/10 my-4"
                    />
                  </div>
                );
              case "quote":
                return (
                  <div key={index} className="w-full">
                    <h3 className="italic py-0 my-6 pl-4 border-l-2 border-foreground-light">
                      {element.content}
                    </h3>
                  </div>
                );
              case "demo":
                return (
                  <div key={index} className="w-full flex gap-6 items-center">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
                      {element.caption && (
                        <h3 className="md:hidden mt-2 text-sm">
                          {element.caption}
                        </h3>
                      )}
                      <video
                        src={element.content as string}
                        autoPlay
                        muted
                        loop
                        className="w-full md:w-3/5 h-auto object-contain border-[1px] border-foreground/10 my-4"
                      />
                      {element.caption && (
                        <h3 className="hidden md:block mt-2 text-sm">
                          {element.caption}
                        </h3>
                      )}
                    </div>
                  </div>
                );
            }
          })}
        </section>
      ))}
    </div>
  );
}
