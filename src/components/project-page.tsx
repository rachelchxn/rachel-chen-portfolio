import React from "react";
import styles from "./project.module.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

export default function ProjectPageComponent({
  project,
}: {
  project: Project;
}) {
  console.log("hi!");
  return (
    <div>
      <div className={styles.navWrap}></div>
      <div className={styles.main}>
        <div className={styles.header}>
          {/* <Link href={"/"} className={styles.backlink}>
            <p className={styles.backarrow}>{"<- "}</p>
            <p>Back to Projects</p>
          </Link> */}

          <img
            className={styles.cover}
            src={project.image}
            alt={project.name}
          />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>{project._createdAt}</p>
              </div>
              <div className={styles.detail}>
                <h5>Role</h5>
                <p>{project.name}</p>
              </div>
              <div className={styles.detail}>
                <h5>Scope</h5>
                <p>{project.name}</p>
              </div>
              <div className={styles.detail}>
                <h5>Team</h5>
                <p>{project.name}</p>
              </div>
            </div>
            <div className={styles.title}>
              <h2>{project.name}</h2>
              <p>{project.content}</p>
              <Link href={project.url} target="_blank">
                <button>
                  Visit Site{" "}
                  <Image
                    src="/arrow.svg"
                    alt={"->"}
                    width={18}
                    height={18}
                  ></Image>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
