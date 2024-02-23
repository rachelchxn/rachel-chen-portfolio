"use client";

import Image from "next/image";
import styles from "./project-block.module.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ProjectBlockProps = {
  title: string;
  description: string;
  tags: string[];
  imageURL: string;
  order: boolean;
  colour: string;
  disabled: boolean;
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  title,
  description,
  tags,
  imageURL,
  order,
  colour,
  disabled,
}) => {
  const router = useRouter();

  const handleClick = () => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    router.push(`/design/${formattedTitle}`);
  };

  const [screenWidth, setScreenWidth] = useState(0); // Initialize with a default value

  useEffect(() => {
    // Ensure window object is available
    if (typeof window !== "undefined") {
      // Now we are in the client, window object is available.
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures this runs once on mount

  return (
    <div className={styles.hFlex} onClick={handleClick}>
      {(!order || screenWidth < 600) && (
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
        {!disabled && (
          <div className={styles.arrow}>
            <Image src="arrow.svg" alt="->" width={32} height={32} />
          </div>
        )}
      </div>
      {order && screenWidth > 600 && (
        <div className={styles.imageBlock}>
          <img className={styles.image} src={`${imageURL}`} />
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;
