import styles from "../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.vFlex}>
      <div className={styles.heroTitle}>
        <h2>
          <span
            style={{
              marginRight: "4px",
              marginTop: "4px",
            }}
          >
            <img
              src="/wave.png"
              width={40}
              height={40}
              style={{ marginBottom: "-4px" }}
            />
          </span>{" "}
          Hi, I'm Rachel.
        </h2>
        <p className={styles.lgP} style={{ maxWidth: "560px" }}>
          I'm a 0 to 1 product builder who designs, codes, and ships fast --
          using data to prioritize user experiences.
        </p>
      </div>
      <div className={styles.currently} style={{ maxWidth: "560px" }}>
        <h5>Currently...</h5>
        <div className={styles.list}>
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
              launching{" "}
              <span className={styles.url}>
                <Link href={"https://startchattin.vercel.app"} target="_blank">
                  an app
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>
              </span>
              for casual professional connections
            </p>
          </div>

          <div className={styles.bullet}>
            <span>
              <img
                src="/brain.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
            </span>
            <p>
              making{" "}
              <span className={styles.url}>
                <Link href={"https://numeracyscreener.com/"} target="_blank">
                  {" "}
                  educational screening accessible
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>{" "}
              </span>
            </p>
          </div>
          <div className={styles.bullet}>
            <span>
              <img
                src="/bio.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
            </span>
            <p>
              building the face of
              <span className={styles.url}>
                <Link href={"https://www.mybiogenesis.com/"} target="_blank">
                  {" "}
                  a novel biotech startup
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>
              </span>
            </p>
          </div>

          <div className={styles.bullet}>
            <span>
              <img
                src="/plane.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
            </span>
            <p>
              designing a
              <span className={styles.url}>
                <Link href={"https://hackwestern.com/"} target="_blank">
                  {" "}
                  delightful hacker experience
                  <img src="/arrow-dark.svg" width={20} height={20} />
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.bullet}
        style={{ fontStyle: "italic", marginTop: "-8px" }}
      >
        <p>
          P.S.{" "}
          {/* <span>
            <img
              src="/dance.png"
              width={20}
              height={20}
              style={{ marginBottom: "-2px" }}
            />{" "}
          </span>{" "} */}
          You can find me dancing on weeknights and hacking on weekends
        </p>
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
