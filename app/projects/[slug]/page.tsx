import { notFound } from "next/navigation";
import projectsData from "../../../public/data/projects.json";
import React from "react";
import { ProjectsData } from "../../../types/project";
import ProjectContent from "../../components/projectContent";
import { projectContent } from "../../components/projectContent/content";
import { Section } from "../../components/projectContent/types";
import ProjectNavigation from "./ProjectNavigation";
import ProjectThumbnail from "@/app/components/ProjectThumbnail";

const projects = projectsData as ProjectsData;

function getSections(slug: string): Section[] {
  return projectContent[slug] || [];
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const sections = getSections(project.slug);

  return (
    <div className="min-h-screen px-6">
      <main className="grid max-w-[1600px] mx-auto  grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8">
        <ProjectNavigation sections={sections} />
        <div className="w-fill md:w-4xl py-12 flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4>
                {project.title} • {project.tag}
              </h4>
              <h1>{project.heading}</h1>
            </div>
            <div className="w-full aspect-[16/9] border-1 border-foreground/10">
              <ProjectThumbnail project={project} />
            </div>
            <div className="flex gap-12">
              <div className="flex w-full flex-col gap-2">
                <h4 className="!text-primary !opacity-100">Role</h4>
                <p>{project.role}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="!text-primary !opacity-100">Timeline</h4>
                <p>{project.timeline}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="!text-primary !opacity-100">Team</h4>
                <div className="flex flex-col gap-0">
                  {project.team.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="!text-primary !opacity-100">Skills</h4>
                <div className="flex flex-col gap-0">
                  {project.skills.map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ProjectContent project={project.slug} />
        </div>
        <div className="p-6 py-12" />
      </main>
    </div>
  );
}
