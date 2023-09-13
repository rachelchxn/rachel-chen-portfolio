"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./navigation.module.scss";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.nav}>
        <Link href={"/"}>
          <div className={pathname === "/" ? styles.logoCurrent : styles.logo}>
            <p>Rachel</p>
            <Image
              src="main-arrow.svg"
              alt={"Rachel Chen"}
              width={26}
              height={25}
            />
            <p>Chen</p>
          </div>
        </Link>
        <div className={styles.navLinks}>
          <Link href={"/dev"}>
            <p
              className={
                pathname.startsWith("/dev")
                  ? styles.buttonTextCurrent
                  : styles.buttonText
              }
            >
              Dev Work
            </p>
          </Link>
          <Link href={"/design"}>
            <p
              className={
                pathname.startsWith("/design")
                  ? styles.buttonTextCurrent
                  : styles.buttonText
              }
            >
              Design Work
            </p>
          </Link>
          <button className="sm-btn">My Resume</button>
        </div>
      </div>
    </>
  );
}
