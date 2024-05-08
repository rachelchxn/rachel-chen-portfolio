import Link from "next/link";
import { getProjectBySlug } from "../../../../sanity/sanity-utils";
import styles from "../project.module.scss";
import ProjectPageComponent from "@/components/project-page";
import { UrlObject } from "url";
import { PortableText } from "next-sanity";

type Props = {
  params: { project: string };
};

export default async function ProjectPage({ params }: Props) {
  const slug = params.project;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className={styles.navWrap}></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <img
            className={styles.cover}
            src={project.image}
            alt={project.name}
          />
          <div className={styles.overview}>
            <div className={styles.details}>
              <div className={styles.detail}>
                <h5>Timeline</h5>
                <p>{project.timeline}</p>
              </div>
              <div className={styles.detail}>
                <h5>Roles</h5>
                {project.roles.map((role: string) => (
                  <p>{role}</p>
                ))}
              </div>
            </div>
            <div>
              <h5>{project.name}</h5>

              <h3>{project.headline}</h3>
              {/* <div className={styles.tags}>
                {project.tags.map((tag: string) => {
                  <p className={styles.tag}>{tag}</p>;
                })}
              </div> */}
              <div>
                {project.links.map(
                  (link: { url: string | UrlObject; text: string }) => {
                    <Link href={link.url}>
                      <button>{link.text}</button>
                    </Link>;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  );
}
