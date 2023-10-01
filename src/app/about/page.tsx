import Image from "next/image";
import styles from "./about.module.scss";
import Link from "next/link";

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headshot}>
          <Image src="/pfp.svg" alt={"My Headshot"} width={250} height={250} />
        </div>
        <div className={styles.vFlex}>
          <h3>Hey, I'm Rachel.</h3>
          <h5>Developer + designer + dancer</h5>
          <p>
            From tackling sustainability issues, addressing mental illness
            struggles, and taking on real business problems, I code for the
            potential technology has to enrich our lives. Also, it’s fun.
          </p>
          <div className={styles.btnContainer}>
            <Link
              href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
              target="_blank"
            >
              <button>
                Let's Connect!
                <Image
                  src="./arrow.svg"
                  alt={"->"}
                  width={18}
                  height={18}
                ></Image>
              </button>
            </Link>
            <button className="btnSecondary">See Resume</button>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
