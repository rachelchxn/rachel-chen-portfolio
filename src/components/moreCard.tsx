"use client";

import Image from "next/image";
import styles from "./more-card.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

type moreCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageURL: string;
  url: string;
  links: any[];
  disabled: boolean;
};

const MoreCard: React.FC<moreCardProps> = ({
  title,
  description,
  tags,
  imageURL,
  links,
  disabled,
}) => {
  const router = useRouter();

  return (
    <div className={!disabled ? styles.card : styles.cardDisabled}>
      <div className={styles.imageBlock}>
        <img
          className={!disabled ? styles.image : styles.imageDisabled}
          src={`${imageURL}`}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.info}>
          <div className={styles.infoMain}>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
          <div>
            <div className={styles.tagList}>
              {tags.map((tag, index) => (
                <p key={index} className={styles.tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.links}>
            {links.map((link: { text: string; url: string }) => (
              <Link href={link.url} target="_blank" className={styles.link}>
                {link.text}
                <img src="/arrow.svg" width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
