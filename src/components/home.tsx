import styles from "../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.vFlex}>
      <div>
        <div className={styles.heroTitle}>
          <h2>Rachel Chen</h2>
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
              <Image
                src="devpost-icon.svg"
                alt="Devpost"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={"https://github.com/rachelchxn"}
              target="_blank"
              className={styles.icon}
            >
              <Image
                src="github-icon.svg"
                alt="Github"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={"mailto:rachelc0715@gmail.com"}
              target="_blank"
              className={styles.icon}
            >
              <Image src="email-icon.svg" alt="Email" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <p>
        I’m a product designer & developer with a burning passion for building
        meaningful human-tech experiences from the ground up.
      </p>
      <div></div>
      <div>
        <h5>Currently...</h5>
        <ul className={styles.list}>
          <li>
            <p>developing AI-powered enterprise solutions at RBC</p>
          </li>
          <li>
            <p>
              building a{" "}
              <span>
                <Link
                  className="link"
                  href={"https://startchattin.vercel.app"}
                  target="_blank"
                >
                  platform to connect cool people
                </Link>
              </span>
            </p>
          </li>
          <li>
            <p>dancing on weeknights and hacking on weekends</p>
          </li>
        </ul>
      </div>
      <div></div>
      <div className={styles.btnContainer}>
        <Link
          href={"https://www.linkedin.com/in/rachel-jiayi-chen/"}
          target="_blank"
        >
          <button>
            Let's Connect
            <Image src="./arrow.svg" alt={"->"} width={18} height={18}></Image>
          </button>
        </Link>
        <Link href={"/RachelChen_Resume.pdf"} target="_blank">
          <button className="btnSecondary">See My Resume</button>
        </Link>
      </div>
    </div>
  );
}
