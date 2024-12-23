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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const [projects, more] = await Promise.all([getProjects(), getMore()]);
      setProjects(projects);
      setMore(more);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <HomePage />

        <div className={styles.gallery}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              <h5
                className={isFeaturedTab ? styles.tabCurrent : styles.tab}
                onClick={() => setIsFeaturedTab(true)}
              >
                Featured Projects
              </h5>
              <h5
                className={!isFeaturedTab ? styles.tabCurrent : styles.tab}
                onClick={() => setIsFeaturedTab(false)}
              >
                Case Studies + More
              </h5>
            </div>
          </div>

          <div className={styles.projectContainer}>
            {isFeaturedTab ? (
              <ProjectList loading={isLoading} projects={projects} />
            ) : (
              <MoreList loading={isLoading} projects={more} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
