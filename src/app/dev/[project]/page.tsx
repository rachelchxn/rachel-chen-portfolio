"use client";
import { useEffect, useState } from "react";
import { projects } from "../projects"; // Adjust path as per your project structure
import styles from "./project.module.scss";
import Link from "next/link";
import { UrlObject } from "url";
import Image from "next/image";

export default function Project({ params }: { params: { project: string } }) {
  const [project, setProject] = useState<{
    title: string;
    description: string;
    paragraph: string;
    tags: string[];
    links: {
      site: string;
      url: string;
    }[];
    imageURL: string;
    colour: string;
    disabled: boolean;
  } | null>(null);

  useEffect(() => {
    // Decode the project title from the URL
    const projectTitle = decodeURIComponent(params.project);

    // Find the corresponding project from the projects array
    const foundProject = projects.find((p) => p.title === projectTitle);
    setProject(foundProject || null);
  }, [params]);

  if (!project) return <p></p>;

  return (
    <div className={styles.main}>
      <div className={styles.navWrap}></div>
      <div className={styles.header}>
        <Link href={"/dev"} className={styles.backlink}>
          <p className={styles.backarrow}>{"<- "}</p>
          <p>Back to Projects</p>
        </Link>

        <div className={styles.flex}>
          <div>
            <img
              src={project.imageURL}
              alt={project.title}
              className={styles.projectImg}
            />
            <div className={styles.projectLinks}>
              {project.links.map((link) => (
                <Link
                  href={link.url}
                  target="_blank"
                  className={styles.projectLink}
                >
                  {link.site}
                  <Image
                    src="/arrow.svg"
                    alt="->"
                    width={28}
                    height={28}
                    className={styles.projectArrow}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.title}>
            <h5>{project.title}</h5>
            <h2>{project.description}</h2>
            <div className={styles.details}>
              <div className={styles.tagList}>
                {project.tags.map((tag) => (
                  <p className={styles.tag}>{tag}</p>
                ))}
              </div>
            </div>
            <p style={{ whiteSpace: "pre-line" }}>{project.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
