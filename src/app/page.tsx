"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { getProjects } from "../../sanity/sanity-utils";
import HomePage from "@/components/home";
import ProjectList from "@/components/project-list";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isFeaturedTab, setIsFeaturedTab] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchData();
  }, []);

  const toggleTab = () => {
    setIsFeaturedTab(!isFeaturedTab);
  };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <HomePage />
      </div>
      <div className={styles.gallery}>
        <div className={styles.tabs}>
          <h5
            className={isFeaturedTab ? styles.tabCurrent : styles.tab}
            onClick={toggleTab}
          >
            Featured
          </h5>
          <h5
            className={!isFeaturedTab ? styles.tabCurrent : styles.tab}
            onClick={toggleTab}
          >
            More
          </h5>
        </div>
        <ProjectList
          projects={projects}
          currTab={isFeaturedTab ? "featured" : "more"}
        />
      </div>
    </main>
  );
}
