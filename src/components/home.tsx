import styles from "../app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeBody}>
        <div className={styles.heroTitle}>
          <h2 style={{ fontSize: "24px", maxWidth: "540px" }}>
            <span
              style={{
                marginRight: "4px",
                marginTop: "4px",
              }}
            >
              <img
                src="/wave.png"
                width={32}
                height={32}
                style={{ marginBottom: "-4px" }}
              />
            </span>{" "}
            Hey, I'm Rachel!{" "}
            {/* <span style={{ color: "var(--dark-grey)", fontWeight: "400" }}>
            I'm a 0 -{">"} 1 product builder who ships simple + delightful user
            experiences that solve problems.
          </span> */}
          </h2>
          <h2
            style={{
              fontSize: "24px",
              color: "var(--dark-grey)",
              fontWeight: "400",
              maxWidth: "460px",
            }}
          >
            I'm a 0 -{">"} 1 product builder who ships simple + delightful user
            experiences that bring value to the world.
          </h2>
        </div>

        <div className={styles.currently} style={{ maxWidth: "560px" }}>
          <h5>Currently...</h5>
          <div className={styles.list}>
            <div className={styles.bullet}>
              <img
                src="/shake.png"
                width={20}
                height={20}
                style={{ marginBottom: "-2px" }}
              />{" "}
              <p>
                {" "}
                making professional connections casual with{" "}
                <span className={styles.url}>
                  <Link
                    href={"https://startchattin.vercel.app"}
                    target="_blank"
                  >
                    chattin
                    <img src="/arrow-dark.svg" width={20} height={20} />
                  </Link>
                </span>
              </p>
            </div>

            {/* <div className={styles.bullet}>
            <img
              src="/brain.png"
              width={20}
              height={20}
              style={{ marginTop: "-2px" }}
            />{" "}
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
          </div> */}

            <div className={styles.bullet}>
              <img
                src="/bio.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
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
              <img
                src="/plane.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
              <p>
                designing delightful experiences at
                <span className={styles.url}>
                  <Link href={"https://hackwestern.com/"} target="_blank">
                    {" "}
                    Hack Western
                    <img src="/arrow-dark.svg" width={20} height={20} />
                  </Link>
                </span>
              </p>
            </div>
            <div className={styles.bullet}>
              <img
                src="/dance.png"
                width={20}
                height={20}
                style={{ marginTop: "-2px" }}
              />{" "}
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
          {/* <p>
            Designed and built with <span>♥</span> by Rachel
          </p> */}
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
              <Image
                src="github-icon.svg"
                alt="Github"
                width={20}
                height={20}
              />
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
    </div>
  );
}
