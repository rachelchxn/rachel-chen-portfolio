import React from "react";
import styles from "../app/page.module.scss";
import DevCard from "@/components/devCard";

type ProjectListProps = {
  projects: any[];
  currTab: string;
};

const ProjectList: React.FC<ProjectListProps> = ({ projects, currTab }) => {
  return (
    <div className={styles.projectList}>
      {projects
        .filter((project) => (currTab === "featured" ? project.featured : true))
        .map((project) => (
          <DevCard
            key={project.slug}
            title={project.name}
            description={project.name}
            tags={["ux design", "front-end"]}
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
