import { notFound } from "next/navigation";
import projectsData from "../../../public/data/projects.json";
import React from "react";
import { ProjectsData } from "../../../types/project";
import ProjectContent from "../../components/projectContent";
import { projectContent } from "../../components/projectContent/content";
import { Section } from "../../components/projectContent/types";
import ProjectNavigation from "./ProjectNavigation";

const projects = projectsData as ProjectsData;

function getSections(slug: string): Section[] {
  return projectContent[slug] || [];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const project = projects.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const sections = getSections(project.slug);

  return (
    <div className="min-h-screen">
      <main className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8">
        <ProjectNavigation sections={sections} />
        <div className="w-fill md:w-4xl p-6 py-12 flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4>
                {project.title} • {project.tag}
              </h4>
              <h1>{project.heading}</h1>
            </div>

            <div
              className="w-full aspect-[16/9] bg-no-repeat"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "100% 100%",
              }}
            />

            <div className="flex gap-12">
              <div className="flex w-full flex-col gap-1">
                <h4>Role</h4>
                <p>{project.role}</p>
              </div>
              <div className="flex w-full flex-col gap-1">
                <h4>Timeline</h4>
                <p>{project.timeline}</p>
              </div>
              <div className="flex w-full flex-col gap-1">
                <h4>Team</h4>
                <div className="flex flex-col gap-0">
                  {project.team.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col gap-1">
                <h4>Skills</h4>
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
