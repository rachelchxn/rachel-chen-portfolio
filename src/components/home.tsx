import styles from "../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.vFlex}>
      <div className={styles.heroTitle}>
        <h2>
          <span style={{ marginBottom: "-8px", paddingTop: "8px" }}>
            <img src="/wave.png" width={48} height={48} />
          </span>{" "}
          Hi, I'm Rachel.
        </h2>
        <p>
          I’m a builder who loves to{" "}
          <span style={{ color: "#3974BA" }}>
            <img
              src="/data.png"
              width={20}
              height={20}
              style={{ marginBottom: "-2px" }}
            />{" "}
            play around with data{" "}
          </span>{" "}
          and{" "}
          <span style={{ color: "#D56F4A" }}>
            <img
              src="/blush.png"
              width={20}
              height={20}
              style={{ marginBottom: "-2px" }}
            />{" "}
            craft experiences for humans
          </span>
          .
        </p>
      </div>
      <div className={styles.currently}>
        <h5 style={{ marginBottom: "8px" }}>Currently...</h5>
        <div className={styles.list}>
          <div className={styles.bullet}>
            <span>
              <img
                src="/bio.png"
                width={20}
                height={20}
                style={{ marginBottom: "-2px" }}
              />{" "}
            </span>
            <p>
              building the face of
              <span className={styles.url}>
                <Link href={"https://www.mybiogenesis.com/"} target="_blank">
                  {" "}
                  Biogenesis
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>
              </span>
            </p>
          </div>

          <div className={styles.bullet}>
            <span>
              <img
                src="/shake.png"
                width={20}
                height={20}
                style={{ marginBottom: "-2px" }}
              />{" "}
            </span>
            <p>
              {" "}
              launching a{" "}
              <span className={styles.url}>
                <Link href={"https://startchattin.vercel.app"} target="_blank">
                  platform to connect cool people
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>
              </span>
            </p>
          </div>

          <div className={styles.bullet}>
            <span>
              <img
                src="/dance.png"
                width={20}
                height={20}
                style={{ marginBottom: "-2px" }}
              />{" "}
            </span>{" "}
            <p>dancing on weeknights and hacking on weekends</p>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link
          href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
          target="_blank"
        >
          <button>
            Let's Connect
            <Image
              src="./arrow.svg"
              alt={"->"}
              width={20}
              height={20}
              style={{ marginBottom: "-1px" }}
            />
          </button>
        </Link>
        <Link href={"/RachelChen_Resume.pdf"} target="_blank">
          <button className="btnSecondary">See My Resume</button>
        </Link>
      </div>
      <div className={styles.footer}>
        <p>
          Designed and built with <span>♥</span> by Rachel
        </p>
        <div className={styles.iconList}>
          <Link
            href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
            target="_blank"
            className={styles.icon}
          >
            <Image
              src="linkedin-icon.svg"
              alt="Linkedin"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href={"https://devpost.com/rachelc0715"}
            target="_blank"
            className={styles.icon}
          >
            <Image
              src="devpost-icon.svg"
              alt="Devpost"
              width={20}
              height={20}
            />
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
      </div>
    </div>
  );
}
