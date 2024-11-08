import React from "react";
import styles from "../app/page.module.scss";
import DevCard from "@/components/devCard";
import { Project } from "@/types";

type ProjectListProps = {
  projects: any[];
  loading: boolean;
};

const ProjectList: React.FC<ProjectListProps> = ({ projects, loading }) => {
  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
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
          primarycolour={project.primarycolour}
          secondarycolour={project.secondarycolour}
          disabled={false}
          url={project.slug}
        />
      ))}
    </div>
  );
};

export default ProjectList;
