import React from "react";
import styles from "../app/page.module.scss";
import DevCard from "@/components/devCard";
import MoreCard from "./moreCard";

type ProjectListProps = {
  projects: any[];
};

const MoreList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <MoreCard
          key={project.slug}
          title={project.name}
          description={project.headline}
          tags={project.tags}
          imageURL={project.image}
          links={project.links}
          disabled={false}
          url={project.slug}
        />
      ))}
    </div>
  );
};

export default MoreList;
