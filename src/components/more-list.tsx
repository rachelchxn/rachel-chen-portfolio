import React from "react";
import styles from "../app/page.module.scss";
import DevCard from "@/components/devCard";
import MoreCard from "./moreCard";

type ProjectListProps = {
  projects: any[];
  loading: boolean;
};

const MoreList: React.FC<ProjectListProps> = ({ projects, loading }) => {
  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
  return (
    <div className={styles.moreList}>
      {projects.map((project) => (
        <MoreCard
          key={project.slug}
          title={project.name}
          description={project.headline}
          tags={project.tags}
          imageURL={project.image}
          links={project.links}
          badge={project.badge}
          disabled={false}
          url={project.slug}
        />
      ))}
    </div>
  );
};

export default MoreList;
