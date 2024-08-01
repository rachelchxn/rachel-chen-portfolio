import styles from "../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.vFlex}>
      <div className={styles.heroTitle}>
        <h2>👋 Hi, I'm Rachel.</h2>
        <p>
          I’m a product designer & developer with a burning passion for building
          meaningful human-tech experiences from the ground up.
        </p>
      </div>

      <div className={styles.currently}>
        <h5 style={{ marginBottom: "8px" }}>Currently...</h5>
        <div className={styles.list}>
          <p>
            <span>💰</span> developing AI-powered enterprise solutions at RBC
          </p>

          <p>
            <span>🤝</span> building a{" "}
            <span className={styles.url}>
              <Link href={"https://startchattin.vercel.app"} target="_blank">
                platform to connect cool people
                <img src="/arrow-dark.svg" width={20} height={20} />
              </Link>
            </span>
          </p>

          <p>
            <span>🕺</span> dancing on weeknights and hacking on weekends
          </p>
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
