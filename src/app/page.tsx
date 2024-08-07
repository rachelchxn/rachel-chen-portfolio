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
    const getData = async () => {
      const [projects, more] = await Promise.all([getProjects(), getMore()]);
      setProjects(projects);
      setMore(more);
    };

    getData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <HomePage />
      </div>
      <div className={styles.gallery}>
        <div className={styles.tabs}>
          <h5
            className={isFeaturedTab ? styles.tabCurrent : styles.tab}
            onClick={() => setIsFeaturedTab(true)}
          >
            Featured
          </h5>
          <h5
            className={!isFeaturedTab ? styles.tabCurrent : styles.tab}
            onClick={() => setIsFeaturedTab(false)}
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
