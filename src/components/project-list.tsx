import React from "react";
import styles from "../app/page.module.scss";
import DevCard from "@/components/devCard";

type ProjectListProps = {
  projects: any[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <DevCard
          key={project.slug}
          title={project.name}
          description={project.headline}
          tags={project.tags}
          imageURL={project.image}
          colour={"#fff"}
          disabled={false}
          url={project.slug}
        />
      ))}
    </div>
  );
};

export default ProjectList;
