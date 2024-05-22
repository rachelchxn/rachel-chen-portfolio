"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { getMore, getProjects } from "../../sanity/sanity-utils";
import HomePage from "@/components/home";
import ProjectList from "@/components/project-list";
import MoreList from "@/components/more-list";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [more, setMore] = useState([]);
  const [isFeaturedTab, setIsFeaturedTab] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    const fetchMore = async () => {
      const data = await getMore();
      setMore(data);
    };

    fetchProjects();
    fetchMore();
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

        <div className={styles.projectContainer}>
          {isFeaturedTab ? (
            <ProjectList projects={projects} />
          ) : (
            <MoreList projects={more} />
          )}
        </div>
      </div>
    </main>
  );
}
