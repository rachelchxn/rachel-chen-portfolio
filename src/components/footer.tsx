"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleAbout = () => {
    router.push("/about");
  };

  return (
    <>
      <div>
        <Image
          src={"/pfp.png"}
          alt="About"
          width={50}
          height={50}
          className={styles.pfp}
          onClick={handleAbout}
        />
      </div>
      <div className={styles.iconList}>
        <Link
          href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
          target="_blank"
          className={styles.icon}
        >
          <Image
            src="linkedin-icon.svg"
            alt="Linkedin"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href={"https://devpost.com/rachelc0715"}
          target="_blank"
          className={styles.icon}
        >
          <Image src="devpost-icon.svg" alt="Devpost" width={24} height={24} />
        </Link>
        <Link
          href={"https://github.com/rachelchxn"}
          target="_blank"
          className={styles.icon}
        >
          <Image src="github-icon.svg" alt="Github" width={24} height={24} />
        </Link>
        <Link
          href={"mailto:rachelc0715@gmail.com"}
          target="_blank"
          className={styles.icon}
        >
          <Image src="email-icon.svg" alt="Email" width={24} height={24} />
        </Link>
      </div>
    </>
  );
}
