"use client";
import projectsData from "../public/data/projects.json";
import React from "react";
import Link from "next/link";
import { ProjectsData } from "@/types/project";
import ProjectThumbnail from "./components/ProjectThumbnail";
import { motion } from "framer-motion";

const projects = projectsData as ProjectsData;

export default function Home() {
  return (
    <div className="flex flex-col p-6 w-full items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full max-w-[1600px] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 py-12"
        >
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
              <span className="italic whitespace-nowrap">+ </span>
              <span className="whitespace-nowrap italic">code</span>
            </span>
            .
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="flex flex-col gap-2">
              <h4>Currently</h4>
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.projects.map((project) => {
            if (
              project.slug !== "rbc" &&
              project.slug !== "chattin" &&
              project.slug !== "biogenesis"
            ) {
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block transition-all duration-300 ease-in-out !opacity-100"
                  data-cursor="case-study"
                >
                  <div className="flex flex-col gap-2">
                    <div className="relative w-full aspect-[16/9] border-1 border-foreground/10 overflow-hidden box-border transition-all duration-300 ease-in-out group-hover:border-primary">
                      <ProjectThumbnail project={project} />
                      <div className="absolute inset-0 bg-background/0 transition-colors duration-300 ease-in-out group-hover:bg-background/20" />
                    </div>
                    <div className="flex flex-col gap-0.5 mt-1 transition-colors duration-300 ease-in-out">
                      <h3 className="transition-colors duration-300 ease-in-out group-hover:text-primary">
                        {project.heading}
                      </h3>
                      <h4 className="transition-colors duration-300 ease-in-out group-hover:!text-primary/70">
                        {project.title} • {project.tag}
                      </h4>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col gap-6 py-12"
        >
          <div className="flex items-center gap-6">
            <h3 className="whitespace-nowrap">More Work</h3>
            <div className="flex w-full h-[1px] bg-foreground/10" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.projects.map((project) => {
              if (
                project.slug == "rbc" ||
                project.slug == "chattin" ||
                project.slug == "biogenesis"
              ) {
                return (
                  <Link
                    key={project.slug}
                    href={project.url ? project.url : "/work"}
                    className="group block transition-all duration-300 ease-in-out !opacity-100"
                    data-cursor={project.data ? project.data : "case-study"}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full aspect-[16/9] border-1 border-foreground/10 overflow-hidden box-border transition-all duration-300 ease-in-out group-hover:border-primary">
                        <ProjectThumbnail project={project} />
                        <div className="absolute inset-0 bg-background/0 transition-colors duration-300 ease-in-out group-hover:bg-background/20" />
                      </div>
                      <div className="flex flex-col gap-0.5 mt-1 transition-colors duration-300 ease-in-out">
                        <h3 className="transition-colors duration-300 ease-in-out group-hover:text-primary">
                          {project.heading}
                        </h3>
                        <h4 className="transition-colors duration-300 ease-in-out group-hover:!text-primary/70">
                          {project.title} • {project.tag}
                        </h4>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
