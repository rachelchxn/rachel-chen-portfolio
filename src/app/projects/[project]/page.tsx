"use client";

import Link from "next/link";
import {
  getNextProjects,
  getProjectBySlug,
} from "../../../../sanity/sanity-utils";
import styles from "../project.module.scss";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { useEffect, useState } from "react";
import { Project } from "@/types";
import { createClient } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

const client = createClient({
  projectId: "q7a7buiu",
  dataset: "production",
  useCdn: true,
});

type Props = {
  params: { project: string };
};

type SanityImageProps = {
  asset: {
    _ref: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const slug = params.project;
  const [project, setProject] = useState<Project | null>(null);
  const [nextProjects, setNextProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectBySlug(slug);
      const nextProjects = await Promise.all([getNextProjects(slug)]);
      setProject(data);
      setNextProjects(nextProjects[0]);
    };

    fetchData();

    const handleScroll = () => {
      const button = document.getElementById("backToTopButton");
      if (!button) return;
      if (window.scrollY > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const SanityImage = ({ asset }: SanityImageProps) => {
    const imageProps = useNextSanityImage(client, asset);

    if (!imageProps) return null;

    return (
      <Image
        {...imageProps}
        layout="responsive"
        alt="alt"
        sizes="(max-width: 800px) 100vw, 800px"
      />
    );
  };

  const myPortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }: { value: SanityImageProps }) => {
        // const isGif = value.asset._ref.endsWith("gif");
        return (
          <div className={styles.regularImage}>
            <SanityImage {...value} />
          </div>
        );
      },
    },
    marks: {
      link: ({ value, children }) => {
        const url = value.href;
        const isYouTube =
          url.includes("youtube.com") || url.includes("youtu.be");
        if (isYouTube) {
          const videoId = url.split("v=")[1] || url.split("/").pop();
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          return (
            <div
              className={styles.youtubeEmbed}
              style={{
                width: "100%",
                position: "relative",
                paddingBottom: "56.25%",
                height: "0",
              }}
            >
              <iframe
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          );
        }
        return <a href={url}>{children}</a>;
      },
    },
    block: {
      blockquote: ({ children }) => (
        <blockquote
          style={{
            backgroundColor: project.secondarycolour,
            color: project.primarycolour,
            padding: "1em",
            margin: "1em 0",
            borderLeft: `4px solid ${project.primarycolour}`,
          }}
        >
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.projectpage}>
          <div className={styles.white}>
            <div className={styles.header}>
              <Link href={"/"} className={styles.backButton}>
                <Image src={"/back.svg"} width={16} height={16} alt={""} />
                Back
              </Link>
              <div>
                <div className={styles.head}>
                  <h4 style={{ color: "var(--mid-dark-grey)" }}>
                    {project.name}
                  </h4>

                  <h1>{project.headline}</h1>

                  <div className={styles.tagList}>
                    {project.tags.map((tag: string) => (
                      <p
                        className={styles.tag}
                        style={{
                          backgroundColor: project.secondarycolour,
                          color: project.primarycolour,
                        }}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>

                  {/* <div className={styles.buttonList}>
                  {project.links &&
                    project.links.map((link: { text: string; url: string }) => (
                      <Link href={link.url} target="_blank">
                        <button
                          className={styles.btnPrimary}
                          style={{ backgroundColor: project.primarycolour }}
                        >
                          {link.text}
                          <img
                            src="/arrow.svg"
                            width={20}
                            height={20}
                            style={{ marginBottom: "-1px" }}
                          />
                        </button>
                      </Link>
                    ))}
                </div> */}
                </div>
              </div>
              <p>{project.overview}</p>
              <div
                className={styles.cover}
                style={{
                  backgroundColor: project.secondarycolour,
                  backgroundImage: `linear-gradient(135deg, ${project.secondarycolour} 0%, ${project.gradientcolour} 100%)`,
                }}
              >
                <img src={project.image} alt={project.name} />
              </div>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <h4>Timeline</h4>
                  <p>{project.timeline}</p>
                </div>
                <div className={styles.detail}>
                  <h4>Scope</h4>
                  {project.roles.map((role: string) => (
                    <p>{role}</p>
                  ))}
                </div>
                <div className={styles.detail}>
                  <h4>Team</h4>
                  {project.team &&
                    project.team.map((teammate: string) => <p>{teammate}</p>)}
                </div>
              </div>
            </div>
          </div>
          {project.intro && (
            <section className={styles.highlight}>
              <div className={styles.intro}>
                <PortableText
                  value={project.intro}
                  components={myPortableTextComponents}
                />
              </div>
            </section>
          )}
          <section className={styles.white}>
            <div className={styles.content}>
              <PortableText
                value={project.content}
                components={myPortableTextComponents}
              />
            </div>
          </section>
          {project.final && (
            <section className={styles.highlight}>
              <div className={styles.final}>
                <h5>Final Designs</h5>
                {project.final.map((final: any) => (
                  <div className={styles.finalDesign}>
                    <PortableText
                      value={final.image}
                      components={myPortableTextComponents}
                    />
                    <div>
                      <h2>{final.title}</h2>
                      <p>{final.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {project.reflection && (
            <section className={styles.white}>
              <div className={styles.reflection}>
                <PortableText
                  value={project.reflection}
                  components={myPortableTextComponents}
                />
              </div>
            </section>
          )}
          <section className={styles.white}>
            <div className={styles.projectFooter}>
              <div className={styles.divider} />
              <h3>Continue your journey...</h3>
              <div className={styles.nextProjects}>
                {nextProjects.length > 0 &&
                  nextProjects.map((project) => (
                    <Link
                      href={"/projects/" + project.slug}
                      className={styles.nextProject}
                    >
                      <div
                        className={styles.nextCover}
                        style={{
                          backgroundColor: project.secondarycolour,
                          backgroundImage: `linear-gradient(135deg, ${project.secondarycolour} 0%, ${project.gradientcolour} 100%)`,
                        }}
                      >
                        <img src={project.image} />
                      </div>
                      <h4>{project.name}</h4>
                      <p>{project.headline}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
