"use client";

import Image from "next/image";
import styles from "./project-block.module.scss";
import { useRouter } from "next/navigation";

type ProjectBlockProps = {
  title: string;
  description: string;
  tags: string[];
  imageURL: string;
  order: boolean;
  colour: string;
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  title,
  description,
  tags,
  imageURL,
  order,
  colour,
}) => {
  const router = useRouter();

  const handleClick = () => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    router.push(`/design/${formattedTitle}`);
  };

  return (
    <div className={styles.hFlex} onClick={handleClick}>
      {!order && (
        <div className={order ? styles.imageBlock : styles.imageBlockAlt}>
          <img className={styles.image} src={`${imageURL}`} />
        </div>
      )}
      <div
        className={order ? styles.block : styles.blockAlt}
        style={{ backgroundColor: colour }}
      >
        <div className={styles.blockInfo}>
          <h5>{title}</h5>
          <h3>{description}</h3>
        </div>
        <div className={styles.tagList}>
          {tags.map((tag, index) => (
            <p key={index} className={styles.tag}>
              {tag}
            </p>
          ))}
        </div>
        <div className={styles.arrow}>
          <Image src="arrow.svg" alt="->" width={32} height={32} />
        </div>
      </div>
      {order && (
        <div className={styles.imageBlock}>
          <img className={styles.image} src={`${imageURL}`} />
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;
