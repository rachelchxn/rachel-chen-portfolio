"use client";
import Link from "next/link";
import { getProjectBySlug } from "../../../../sanity/sanity-utils";
import styles from "../project.module.scss";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import { Project } from "@/types";
import { createClient } from "@sanity/client";
import { UrlObject } from "url";
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

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageProps }) => {
      return <SanityImage {...value} />;
    },
  },
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

export default function ProjectPage({ params }: Props) {
  const slug = params.project;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectBySlug(slug);
      setProject(data);
    };

    fetchData();
  }, []);

  if (!project) {
    return (
      <div className={styles.main}>
        <div className={styles.header}>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.header}>
          <Link href={"/"} className={styles.backButton}>
            <Image src={"/back.svg"} width={16} height={16} alt={""} />
            Back
          </Link>
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
                <h5>Scope</h5>
                {project.tags.map((tag: string) => (
                  <p>{tag}</p>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.detail}>
                <h5>{project.name}</h5>

                <h2>{project.headline}</h2>

                <div className={styles.tagList}>
                  <p className={styles.tagPrimary}>{project.company}</p>
                  <p className={styles.tag}>{project.projecttype}</p>
                </div>

                <p>{project.overview}</p>

                <div className={styles.buttonList}>
                  {project.links.map((link: { text: string; url: string }) => (
                    <Link href={link.url} target="_blank">
                      <button className={styles.btnPrimary}>
                        {link.text}
                        <img src="/arrow.svg" width={18} height={18} />
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <PortableText
            value={project.content}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
