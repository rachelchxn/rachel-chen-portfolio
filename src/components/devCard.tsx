"use client";

import Image from "next/image";
import styles from "./dev-card.module.scss";
import { useRouter } from "next/navigation";

type DevCardProps = {
  title: string;
  description: string;
  tags: string[];
  company: string;
  projecttype: string;
  imageURL: string;
  url: string;
  colour: string;
  disabled: boolean;
};

const DevCard: React.FC<DevCardProps> = ({
  title,
  description,
  tags,
  company,
  projecttype,
  imageURL,
  url,
  disabled,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${url}`);
  };

  const colourPrimary =
    title == "Earth"
      ? "#1351C9"
      : title == "PokerGPT"
        ? "#5E3FB6"
        : title == "LinkedIn"
          ? "#2D64BC"
          : "#000";

  const colourSecondary =
    title == "Earth"
      ? "#E4EBF7"
      : title == "PokerGPT"
        ? "#F4F1FA"
        : title == "LinkedIn"
          ? "#EAF4F8"
          : "#e6e6e6";

  return (
    <div
      className={!disabled ? styles.card : styles.cardDisabled}
      onClick={disabled ? undefined : handleClick}
    >
      <div className={styles.imageBlock}>
        <img
          className={!disabled ? styles.image : styles.imageDisabled}
          src={`${imageURL}`}
        />
        {disabled && (
          <div className={styles.comingSoon}>
            <img src="/comingsoon.svg" />
          </div>
        )}
      </div>
      <div
        className={styles.info}
        style={{ backgroundColor: "var(--primary-white)" }}
      >
        <div className={styles.infoMain}>
          <h5>{title}</h5>
          <h3>{description}</h3>
        </div>
        <div>
          <div className={styles.tagList}>
            <p
              className={styles.tagPrimary}
              style={{ backgroundColor: colourPrimary }}
            >
              {company}
            </p>
            <p
              className={styles.tag}
              style={{ backgroundColor: colourSecondary, color: colourPrimary }}
            >
              {projecttype}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
