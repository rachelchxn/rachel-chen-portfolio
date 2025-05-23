import { notFound } from "next/navigation";
import projectsData from "../../../public/data/projects.json";
import React from "react";
import { ProjectsData } from "../../../types/project";
import { projectContent } from "../../components/projectContent/content";
import { Section } from "../../components/projectContent/types";
import ProjectNavigation from "./ProjectNavigation";
import AnimatedProjectContent from "./AnimatedProjectContent";

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
      <main className="grid max-w-[1600px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8">
        <ProjectNavigation sections={sections} />
        <AnimatedProjectContent project={project} />
        <div className="p-6 py-12" />
      </main>
    </div>
  );
}
