"use client";

import Image from "next/image";
import styles from "./dev-card.module.scss";
import { useRouter } from "next/navigation";

type DevCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageURL: string;
  url: string;
  colour: string;
  disabled: boolean;
};

const DevCard: React.FC<DevCardProps> = ({
  title,
  description,
  tags,
  imageURL,
  url,
  colour,
  disabled,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${url}`);
  };

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
      </div>
      <div className={styles.info} style={{ backgroundColor: colour }}>
        <div className={styles.infoMain}>
          <h5>{title}</h5>
          <h3>{description}</h3>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default DevCard;
