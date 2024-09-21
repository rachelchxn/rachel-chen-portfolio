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

                <img src="/arrow-dark.svg" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoreCard;
