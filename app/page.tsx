"use client";
import projectsData from "../public/data/projects.json";
import React from "react";
import Link from "next/link";
import { ProjectsData } from "@/types/project";
import ProjectThumbnail from "./components/ProjectThumbnail";

const projects = projectsData as ProjectsData;

export default function Home() {
  return (
    <div className="flex flex-col p-6 w-full items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full  max-w-[1600px] gap-12">
        <div className="flex flex-col gap-12 py-12">
          <h1 className="max-w-4xl">
            I&apos;m Rachel, a product builder who loves bringing ideas to life
            with
            {` `}
            <span className="whitespace-nowrap">
              <span
                className={
                  " italic relative after:absolute after:bottom-[0.05em] after:left-[1px] after:right-[7px] after:h-[3px] after:bg-[var(--primary)]"
                }
              >
                desi
              </span>
              <span className={"italic "}>g</span>
              <span
                className={
                  "italic relative after:absolute after:bottom-[0.05em] after:left-0 after:w-full after:h-[3px] after:bg-[var(--primary)]"
                }
              >
                n {``}
              </span>
            </span>
            <span className="whitespace-nowrap italic relative after:absolute after:bottom-[0.05em] after:left-0 after:w-full after:h-[3px] after:bg-[var(--primary)]">
              <span className="!font-serif italic whitespace-nowrap  ">+ </span>
              <span className="whitespace-nowrap italic">code</span>
            </span>
            .
          </h1>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-2">
              <h4>Soon</h4>
              <p className="">
                Engineering{" "}
                <span>
                  <a
                    href="https://bloomberg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Bloomberg
                  </a>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Previously</h4>
              <p className="">
                Designed & engineered{" "}
                <span>
                  <a
                    href="https://1password.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @1Password
                  </a>
                </span>
                ,{" "}
                <span>
                  <a
                    href="https://rbc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @RBC
                  </a>
                </span>
                , and{" "}
                <span>
                  <a
                    href="https://onova.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Onova
                  </a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block transition-all duration-300 ease-in-out !opacity-100"
            >
              <div className="flex flex-col gap-2">
                <div className="relative w-full aspect-[16/9] border-1 border-foreground/10 overflow-hidden box-border transition-all duration-300 ease-in-out group-hover:border-primary">
                  <ProjectThumbnail project={project} />
                </div>
                <div className="flex flex-col gap-1 transition-colors duration-300 ease-in-out">
                  <h3 className="transition-colors duration-300 ease-in-out group-hover:text-primary">
                    {project.heading}
                  </h3>
                  <h4 className="transition-colors duration-300 ease-in-out group-hover:text-primary">
                    {project.title} • {project.tag}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
