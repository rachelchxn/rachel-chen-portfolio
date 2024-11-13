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
  disabled: boolean;
  primarycolour: string;
  secondarycolour: string;
};

const DevCard: React.FC<DevCardProps> = ({
  title,
  description,
  primarycolour,
  secondarycolour,
  company,
  projecttype,
  imageURL,
  url,
  tags,
  disabled,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${url}`);
  };

  const cssVariables = {
    "--border-colour": `${primarycolour}98`,
  } as React.CSSProperties;

  return (
    <div
      className={!disabled ? styles.card : styles.cardDisabled}
      onClick={disabled ? undefined : handleClick}
      style={{
        backgroundColor: secondarycolour,
        ...cssVariables,
      }}
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
      <div className={styles.info}>
        <div className={styles.infoMain}>
          <h5>{title}</h5>
          <h3>{description}</h3>
          <div className={styles.tagList}>
            {tags.map((tag, index) => (
              <p
                key={index}
                className={styles.tag}
                style={{
                  color: primarycolour,
                }}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.link}>
          <p style={{ color: primarycolour }}>View Project</p>

          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrow forward" clip-path="url(#clip0_1225_719)">
              <path
                id="Vector"
                d="M8.45753 8.45753V11.1162L18.9887 11.1257L7.51472 22.5997L9.40034 24.4853L20.8743 13.0113L20.8838 23.5425H23.5425V8.45753H8.45753Z"
                fill={primarycolour}
              />
            </g>
            <defs>
              <clipPath id="clip0_1225_719">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
