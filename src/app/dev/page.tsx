import Image from "next/image";
import styles from "./dev.module.scss";
import DevCard from "@/components/devCard";
import Link from "next/link";
import { projects } from "./projects";

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h2>I develop things that matter.</h2>
          <p>
            From tackling mental illness, solving sustainability issues, and
            taking on real business problems, I code for the potential
            technology has to aid and enrich our lives. Also, it’s fun.
          </p>
        </div>
        <div className={styles.devGrid}>
          {projects.map((project) =>
            project.disabled ? (
              <DevCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageURL={project.imageURL}
                colour={project.colour}
                disabled={project.disabled}
              />
            ) : (
              <Link
                href={`/dev/${encodeURIComponent(project.title)}`}
                key={project.title}
                passHref
              >
                <DevCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageURL={project.imageURL}
                  colour={project.colour}
                  disabled={project.disabled}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
