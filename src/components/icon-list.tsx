import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.scss";

const IconList = () => {
  return (
    <div className={styles.iconList}>
      <Link
        href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
        target="_blank"
        className={styles.icon}
      >
        <Image src="linkedin-icon.svg" alt="Linkedin" width={20} height={20} />
      </Link>
      <Link
        href={"https://devpost.com/rachelc0715"}
        target="_blank"
        className={styles.icon}
      >
        <Image src="devpost-icon.svg" alt="Devpost" width={20} height={20} />
      </Link>
      <Link
        href={"https://github.com/rachelchxn"}
        target="_blank"
        className={styles.icon}
      >
        <Image src="github-icon.svg" alt="Github" width={20} height={20} />
      </Link>
      <Link
        href={"mailto:rachelc0715@gmail.com"}
        target="_blank"
        className={styles.icon}
      >
        <Image src="email-icon.svg" alt="Email" width={20} height={20} />
      </Link>
    </div>
  );
};

export default IconList;
