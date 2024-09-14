"use client";

import Image from "next/image";
import styles from "./more-card.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

type moreCardProps = {
  title: string;
  description: string;
  badge: string;
  tags: string[];
  imageURL: string;
  url: string;
  links: any[];
  disabled: boolean;
};

const MoreCard: React.FC<moreCardProps> = ({
  title,
  badge,
  tags,
  imageURL,
  links,
  disabled,
}) => {
  const router = useRouter();

  return (
    <Link
      className={!disabled ? styles.card : styles.cardDisabled}
      onClick={() => useRouter}
      href={links[0].url}
      target="_blank"
    >
      <div className={styles.imageBlock}>
        <img
          className={!disabled ? styles.image : styles.imageDisabled}
          src={`${imageURL}`}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.info}>
          <div className={styles.infoMain}>
            <h4>{title}</h4>
            {badge?.length > 0 && <div className={styles.badge}>{badge}</div>}
            <div className={styles.tagList}>
              {tags.map((tag, index) => (
                <p key={index} className={styles.tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div></div>
          <div className={styles.links}>
            {links.map((link: { text: string; url: string }) => (
              <div className={styles.link}>
                <p>{link.text}</p>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Arrow forward" clip-path="url(#clip0_1225_719)">
                    <path
                      id="Vector"
                      d="M8.45753 8.45753V11.1162L18.9887 11.1257L7.51472 22.5997L9.40034 24.4853L20.8743 13.0113L20.8838 23.5425H23.5425V8.45753H8.45753Z"
                      fill="#9A9A9A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1225_719">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoreCard;
