import React from "react";
import styles from "../app/page.module.scss";
import DevCard from "@/components/devCard";
import { Project } from "@/types";

type ProjectListProps = {
  projects: any[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={styles.projectList}>
      {projects.map((project: Project) => (
        <DevCard
          key={project.slug}
          title={project.name}
          description={project.headline}
          tags={project.tags}
          company={project.company}
          projecttype={project.projecttype}
          imageURL={project.image}
          colour={"#fff"}
          disabled={project.name === "heyHR" ? true : false}
          url={project.slug}
        />
      ))}
    </div>
  );
};

export default ProjectList;
